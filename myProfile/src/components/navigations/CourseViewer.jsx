import React, { useState, useEffect, useMemo } from 'react';
import {
  Box,
  Typography,
  GlobalStyles,
  Button,
  Autocomplete,
  TextField,
  CircularProgress,
  Paper,
  Chip,
  Divider,
  IconButton,
  ThemeProvider,
  createTheme,
  CssBaseline,
  ButtonGroup,
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import CampaignIcon from '@mui/icons-material/Campaign';
import { useNavigate } from 'react-router-dom';
import Slider from './Slider';

let courseData = {};
try {
  const importedData = require('../course');
  courseData = importedData.courseData || importedData.default || {};
} catch (e) {
  courseData = {};
}

const cleanDocFetchUrl = (url) => {
  if (!url) return '';
  let baseUrl = url.trim();
  if (baseUrl.includes('/edit')) baseUrl = baseUrl.split('/edit')[0];
  if (baseUrl.includes('/view')) baseUrl = baseUrl.split('/view')[0];
  if (baseUrl.includes('/preview')) baseUrl = baseUrl.split('/preview')[0];
  if (baseUrl.includes('/pub')) baseUrl = baseUrl.split('/pub')[0];

  if (baseUrl.includes('docs.google.com/document/d/')) {
    return `${baseUrl}/pub?embedded=true`;
  }
  return baseUrl;
};

const processDocHtml = (rawHtml) => {
  if (!rawHtml || typeof window === 'undefined') return rawHtml || '';

  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(rawHtml, 'text/html');

    const allElements = doc.querySelectorAll('*');
    allElements.forEach((el) => {
      if (el.style) {
        el.style.maxWidth = '100%';
        if (el.style.width && !el.matches('svg, img')) {
          el.style.width = 'auto';
        }
      }
    });

    const tables = doc.querySelectorAll('table');
    tables.forEach((table) => {
      const rows = table.querySelectorAll('tr');
      if (rows.length === 1) {
        const cells = rows[0].querySelectorAll('th, td');
        if (cells.length === 1) {
          const codeText = cells[0].textContent.replace(/\u00A0/g, ' ').trim();
          if (codeText !== '') {
            const container = doc.createElement('div');
            container.className = 'vs-code-container';
            container.innerHTML = `
              <div class="vs-code-header">
                <div class="vs-dots">
                  <span class="dot red"></span>
                  <span class="dot yellow"></span>
                  <span class="dot green"></span>
                </div>
                <div class="vs-code-title"><span>Python / Coding Program</span></div>
                <div class="vs-code-badge">Active</div>
              </div>
              <div class="code-scroll-area">
                <pre class="vs-code-editor"><code>${escapeCodeHTML(codeText)}</code></pre>
              </div>
            `;
            table.parentNode.insertBefore(container, table);
            table.remove();
            return;
          }
        }
      }
    });

    const remainingTables = doc.querySelectorAll('table');
    remainingTables.forEach((table) => {
      if (!table.parentElement.classList.contains('responsive-table-wrapper')) {
        const wrapper = doc.createElement('div');
        wrapper.className = 'responsive-table-wrapper';
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
      }
    });

    return doc.body.innerHTML;
  } catch (err) {
    console.error("Doc Parsing Error:", err);
    return rawHtml;
  }
};

function escapeCodeHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

const CourseViewer = ({ auth, setAuth }) => {
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('themeMode') === 'dark';
  });

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('themeMode', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
          primary: {
            main: '#059669',
          },
          background: {
            default: darkMode ? '#0f172a' : '#f1f5f9',
            paper: darkMode ? '#1e293b' : '#ffffff',
          },
          text: {
            primary: darkMode ? '#f8fafc' : '#0f172a',
            secondary: darkMode ? '#94a3b8' : '#64748b',
          },
        },
      }),
    [darkMode]
  );

  const standardCourse = auth?.course || localStorage.getItem('userCourse') || 'React';

  const currentCourseList = useMemo(() => {
    let list = [];
    if (auth?.topics && Array.isArray(auth.topics) && auth.topics.length > 0) {
      list = auth.topics;
    } else {
      try {
        const stored = localStorage.getItem('userTopics');
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed) && parsed.length > 0) list = parsed;
        }
      } catch (err) {
        console.error("LocalStorage JSON Parse Error:", err);
      }
    }

    if (list.length === 0 && courseData) {
      list = courseData[standardCourse] || courseData['React'] || [];
    }

    return Array.isArray(list) ? list : [];
  }, [auth, standardCourse]);

  const [selectedDoc, setSelectedDoc] = useState(null);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [mobileTab, setMobileTab] = useState('read');

  useEffect(() => {
    if (currentCourseList.length > 0) {
      setSelectedDoc(currentCourseList[0]);
    } else {
      setSelectedDoc(null);
    }
  }, [currentCourseList]);

  useEffect(() => {
    if (!selectedDoc || !selectedDoc.url) {
      setContent('');
      return;
    }

    const fetchUrl = cleanDocFetchUrl(selectedDoc.url);
    setLoading(true);
    setError(null);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000);

    fetch(fetchUrl, { 
      redirect: 'follow',
      signal: controller.signal 
    })
      .then((res) => {
        clearTimeout(timeoutId);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.text();
      })
      .then((data) => {
        setContent(processDocHtml(data));
        setLoading(false);
      })
      .catch((err) => {
        clearTimeout(timeoutId);
        console.error('Fetch Error:', err);
        
        if (err.name === 'AbortError') {
          setError('இணைய வேகம் குறைவாக உள்ளது. தயவுசெய்து சிறிது நேரம் கழித்து மீண்டும் முயற்சிக்கவும்.');
        } else {
          setError('Google Server இணைப்பு துண்டிக்கப்பட்டது அல்லது தாமதமானது.');
        }
        setLoading(false);
      });

    return () => clearTimeout(timeoutId);
  }, [selectedDoc]);

  const getEmbedUrl = (rawUrl) => {
    if (!rawUrl || typeof rawUrl !== 'string') return '';
    const cleanUrl = rawUrl.trim();
    let videoId = '';

    if (cleanUrl.includes('embed/')) {
      videoId = cleanUrl.split('embed/')[1]?.split('?')[0];
    } else if (cleanUrl.includes('watch?v=')) {
      videoId = cleanUrl.split('watch?v=')[1]?.split('&')[0];
    } else if (cleanUrl.includes('youtu.be/')) {
      videoId = cleanUrl.split('youtu.be/')[1]?.split('?')[0];
    }

    if (videoId) {
      return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&enablejsapi=1`;
    }
    return cleanUrl;
  };

  const handleLogout = () => {
    localStorage.removeItem('userCourse');
    localStorage.removeItem('userTopics');
    if (setAuth) {
      setAuth({ loggedIn: false, course: '', topics: [] });
    }
    navigate('/');
  };

  const currentIndex = currentCourseList.findIndex(
    (item) => (item.name && item.name === selectedDoc?.name) || (item.url && item.url === selectedDoc?.url)
  );

  const handlePrevTopic = () => {
    if (currentIndex > 0) {
      setSelectedDoc(currentCourseList[currentIndex - 1]);
    }
  };

  const handleNextTopic = () => {
    if (currentIndex < currentCourseList.length - 1) {
      setSelectedDoc(currentCourseList[currentIndex + 1]);
    }
  };

  const rawVideoUrl = selectedDoc?.videoUrl || selectedDoc?.video || selectedDoc?.video_url || selectedDoc?.youtubeUrl || '';
  const hasVideo = Boolean(rawVideoUrl);
  const videoSrc = getEmbedUrl(rawVideoUrl);
  const topicTitle = selectedDoc?.name || selectedDoc?.topic || selectedDoc?.topic_name || selectedDoc?.title || 'Topic';

  const tickerText = `🔥 கல்லூரி மாணவர்களே கவனத்திற்கு! உங்க Coding & Career Skills-ஐ Next Level-க்கு மாற்றுங்கள்! |   💻 C, C++, Java, Python |   🤖 AI & AI Tools |   📊 Data Analytics |   📈 Digital Marketing |   🌐 Full Stack Web Development |   👨‍💻 Real-time Working Developers-இடமிருந்து நேரடி Practical Training! |   🎯 Learn • Build • Get Placed! | 📲 இன்றே உங்களது Course-ஐத் தொடங்குங்கள்! Join Now! Call : 99626 77822`;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          bgcolor: 'background.default',
          color: 'text.primary',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          boxSizing: 'border-box',
          pb: '36px',
        }}
        onContextMenu={(e) => e.preventDefault()}
      >
        <GlobalStyles styles={getCustomCSS(darkMode)} />
        <GlobalStyles styles={{ '@media print': { body: { display: 'none !important' } } }} />

        {/* Top Navbar */}
        <Paper
          elevation={0}
          sx={{
            py: 1.2,
            px: { xs: 1.5, sm: 3, md: 4 },
            bgcolor: 'background.paper',
            borderBottom: darkMode ? '1px solid #334155' : '1px solid #e2e8f0',
            flexShrink: 0,
            zIndex: 100,
            display: {
              xs: mobileTab === 'read' ? 'none' : 'flex',
              lg: 'flex',
            },
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 1.5,
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box
              sx={{
                width: { xs: 34, sm: 40 },
                height: { xs: 34, sm: 40 },
                borderRadius: '10px',
                bgcolor: '#059669',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                flexShrink: 0,
              }}
            >
              <MenuBookIcon fontSize="small" />
            </Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 800, lineHeight: 1.2, fontSize: { xs: '0.95rem', sm: '1.2rem' } }}>
                E-Learning Portal
              </Typography>
              <Chip
                label={standardCourse}
                size="small"
                sx={{
                  height: 18,
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  bgcolor: darkMode ? '#064e3b' : '#ecfdf5',
                  color: darkMode ? '#34d399' : '#059669',
                  mt: 0.2,
                }}
              />
            </Box>
          </Box>

          <Box sx={{ order: { xs: 3, sm: 2 }, width: { xs: '100%', sm: 'auto' }, flex: { sm: 1 }, maxWidth: { sm: 450 }, mx: { sm: 2 } }}>
            <Autocomplete
              disablePortal
              size="small"
              options={currentCourseList}
              getOptionLabel={(option) => {
                if (typeof option === 'string') return option;
                return option?.name || option?.topic || option?.topic_name || option?.title || '';
              }}
              value={selectedDoc}
              isOptionEqualToValue={(option, value) => {
                if (!option || !value) return false;
                return (option.name && option.name === value.name) || (option.url && option.url === value.url);
              }}
              onChange={(_, newValue) => setSelectedDoc(newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="பாடம் / தலைப்பைத் தேர்ந்தெடுக்கவும்..."
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '10px',
                      bgcolor: darkMode ? '#0f172a' : '#f8fafc',
                      fontSize: '0.88rem',
                      '& fieldset': { borderColor: darkMode ? '#475569' : '#cbd5e1' },
                      '&:hover fieldset': { borderColor: '#059669' },
                      '&.Mui-focused fieldset': { borderColor: '#059669' },
                    },
                  }}
                />
              )}
            />
          </Box>

          <Box sx={{ order: { xs: 2, sm: 3 }, display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton onClick={toggleDarkMode} color="inherit" sx={{ bgcolor: darkMode ? '#334155' : '#f1f5f9', p: 1 }}>
              {darkMode ? <Brightness7Icon sx={{ color: '#f59e0b' }} /> : <Brightness4Icon sx={{ color: '#475569' }} />}
            </IconButton>

            <Button
              variant="outlined"
              color="error"
              size="small"
              startIcon={<LogoutIcon />}
              onClick={handleLogout}
              sx={{
                fontWeight: 600,
                textTransform: 'none',
                borderRadius: '8px',
                px: { xs: 1.5, sm: 2 },
                fontSize: { xs: '0.8rem', sm: '0.875rem' },
              }}
            >
              Logout
            </Button>
          </Box>
        </Paper>

        {/* Mobile View Toggle Buttons */}
        {hasVideo && (
          <Box
            sx={{
              display: { xs: 'flex', lg: 'none' },
              justifyContent: 'center',
              p: 1,
              bgcolor: darkMode ? '#1e293b' : '#ffffff',
              borderBottom: darkMode ? '1px solid #334155' : '1px solid #e2e8f0',
              flexShrink: 0,
            }}
          >
            <ButtonGroup variant="contained" size="small" sx={{ width: '100%', maxWidth: '400px' }}>
              <Button
                onClick={() => setMobileTab('read')}
                sx={{
                  flex: 1,
                  bgcolor: mobileTab === 'read' ? '#059669' : (darkMode ? '#334155' : '#e2e8f0'),
                  color: mobileTab === 'read' ? '#ffffff' : (darkMode ? '#f8fafc' : '#0f172a'),
                  fontWeight: 700,
                  '&:hover': { bgcolor: mobileTab === 'read' ? '#047857' : (darkMode ? '#475569' : '#cbd5e1') },
                }}
                startIcon={<MenuBookIcon />}
              >
                படிக்க (Read)
              </Button>
              <Button
                onClick={() => setMobileTab('video')}
                sx={{
                  flex: 1,
                  bgcolor: mobileTab === 'video' ? '#059669' : (darkMode ? '#334155' : '#e2e8f0'),
                  color: mobileTab === 'video' ? '#ffffff' : (darkMode ? '#f8fafc' : '#0f172a'),
                  fontWeight: 700,
                  '&:hover': { bgcolor: mobileTab === 'video' ? '#047857' : (darkMode ? '#475569' : '#cbd5e1') },
                }}
                startIcon={<SmartDisplayIcon />}
              >
                வீடியோ (Video)
              </Button>
            </ButtonGroup>
          </Box>
        )}

        {/* Main Content Layout */}
        <Box
          sx={{
            flex: 1,
            width: '100%',
            maxWidth: '1440px',
            mx: 'auto',
            p: { xs: 1, sm: 2.5, md: 3.5 },
            display: 'grid',
            gridTemplateColumns: { xs: '100%', lg: hasVideo ? '360px minmax(0, 1fr)' : '100%' },
            gap: { xs: 1, md: 3.5 },
            alignItems: 'start',
            boxSizing: 'border-box',
            height: {
              xs: hasVideo 
                ? (mobileTab === 'read' ? 'calc(100vh - 105px)' : 'calc(100vh - 156px)') 
                : 'calc(100vh - 56px)',
              lg: 'calc(100vh - 111px)',
            },
            overflow: 'hidden',
          }}
        >
          {/* Left Side: Video & Slider */}
          {hasVideo && (
            <Box
              sx={{
                display: {
                  xs: mobileTab === 'video' ? 'flex' : 'none',
                  lg: 'flex',
                },
                flexDirection: 'column',
                gap: 2,
                width: '100%',
                minWidth: 0,
                height: '100%',
                overflowY: 'auto',
                boxSizing: 'border-box',
                '&::-webkit-scrollbar': { width: '4px' },
                '&::-webkit-scrollbar-thumb': { backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: '4px' },
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 1.5, sm: 2 },
                  borderRadius: '14px',
                  bgcolor: 'background.paper',
                  border: darkMode ? '1px solid #334155' : '1px solid #e2e8f0',
                  boxShadow: '0 4px 15px -3px rgba(0, 0, 0, 0.05)',
                  boxSizing: 'border-box',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                  <SmartDisplayIcon sx={{ color: '#059669' }} />
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    பாட விளக்கம் (Video Tutorial)
                  </Typography>
                </Box>

                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    paddingTop: '56.25%',
                    borderRadius: '10px',
                    bgcolor: '#0f172a',
                    overflow: 'hidden',
                  }}
                >
                  <iframe
                    key={videoSrc}
                    src={videoSrc}
                    title={topicTitle}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      border: 0,
                    }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </Box>
              </Paper>

              <Slider
                images={[
                  "/images/GALOGO.png",
                  "/images/PPLOGO2.png",
                  "/images/GALOGO.png",
                ]}
                darkMode={darkMode}
              />
            </Box>
          )}

          {/* Right Side: Reader Sheet */}
          <Paper
            elevation={0}
            sx={{
              display: {
                xs: mobileTab === 'read' ? 'flex' : 'none',
                lg: 'flex',
              },
              borderRadius: { xs: '12px', md: '16px' },
              bgcolor: 'background.paper',
              border: darkMode ? '1px solid #334155' : '1px solid #e2e8f0',
              boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
              flexDirection: 'column',
              width: '100%',
              minWidth: 0,
              minHeight: 0,
              height: '100%',
              overflowY: 'auto',
              boxSizing: 'border-box',
              pb: 6,
              '&::-webkit-scrollbar': { width: '8px' },
              '&::-webkit-scrollbar-thumb': { backgroundColor: darkMode ? '#334155' : '#cbd5e1', borderRadius: '4px' },
            }}
          >
            {/* Header */}
            <Box
              sx={{
                p: { xs: 1.5, sm: 2.5, md: 3 },
                borderBottom: darkMode ? '1px solid #334155' : '1px solid #e2e8f0',
                bgcolor: darkMode ? '#0f172a' : '#f8fafc',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 1.5,
                width: '100%',
                boxSizing: 'border-box',
              }}
            >
              <Box sx={{ maxWidth: { xs: '100%', sm: '70%' }, minWidth: 0 }}>
                <Typography variant="caption" sx={{ color: '#059669', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 0.8 }}>
                  CHAPTER {currentIndex >= 0 ? currentIndex + 1 : 1} OF {currentCourseList.length}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    mt: 0.2,
                    fontSize: { xs: '1.05rem', sm: '1.45rem' },
                    wordBreak: 'break-word',
                  }}
                >
                  {topicTitle}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<NavigateBeforeIcon />}
                  onClick={handlePrevTopic}
                  disabled={currentIndex <= 0}
                  sx={{ textTransform: 'none', fontWeight: 600, borderRadius: '8px' }}
                >
                  Prev
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  endIcon={<NavigateNextIcon />}
                  onClick={handleNextTopic}
                  disabled={currentIndex === -1 || currentIndex >= currentCourseList.length - 1}
                  sx={{
                    bgcolor: '#059669',
                    '&:hover': { bgcolor: '#047857' },
                    textTransform: 'none',
                    fontWeight: 600,
                    borderRadius: '8px',
                  }}
                >
                  Next
                </Button>
              </Box>
            </Box>

            {/* Reader Content */}
            <Box
              sx={{
                p: { xs: 1.5, sm: 3, md: 4 },
                width: '100%',
                maxWidth: '100%',
                boxSizing: 'border-box',
                overflowX: 'hidden',
                flex: 1,
              }}
            >
              {loading && (
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', py: 10 }}>
                  <CircularProgress color="success" size={38} thickness={4} />
                  <Typography sx={{ mt: 2, color: 'text.secondary', fontWeight: 500, fontSize: '0.92rem' }}>
                    பாடக் குறிப்புகள் ஏற்றப்படுகின்றன...
                  </Typography>
                </Box>
              )}

              {error && !loading && (
                <Box sx={{ textAlign: 'center', py: 8, px: 2 }}>
                  <Typography variant="h6" sx={{ color: '#dc2626', fontWeight: 600, mb: 2 }}>
                    {error}
                  </Typography>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => setSelectedDoc({ ...selectedDoc })}
                    sx={{ fontWeight: 700, borderRadius: '8px', textTransform: 'none' }}
                  >
                    மீண்டும் முயல்க (Retry)
                  </Button>
                </Box>
              )}

              {!loading && !error && content && (
                <div
                  className="custom-doc-content"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              )}

              {!loading && !error && content && (
                <>
                  <Divider sx={{ my: 4 }} />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 1.5, pb: 4 }}>
                    <Button
                      variant="text"
                      startIcon={<NavigateBeforeIcon />}
                      onClick={handlePrevTopic}
                      disabled={currentIndex <= 0}
                      sx={{ fontWeight: 600, textTransform: 'none', color: 'text.secondary' }}
                    >
                      முந்தைய பாடம்
                    </Button>
                    <Button
                      variant="contained"
                      endIcon={<NavigateNextIcon />}
                      onClick={handleNextTopic}
                      disabled={currentIndex === -1 || currentIndex >= currentCourseList.length - 1}
                      sx={{
                        bgcolor: '#059669',
                        '&:hover': { bgcolor: '#047857' },
                        fontWeight: 600,
                        textTransform: 'none',
                        borderRadius: '8px',
                        px: 3,
                      }}
                    >
                      அடுத்த பாடம்
                    </Button>
                  </Box>
                </>
              )}
            </Box>
          </Paper>
        </Box>

        {/* Bottom News Ticker Component */}
        <Box
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100vw',
            height: '36px',
            bgcolor: darkMode ? '#064e3b' : '#059669',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            zIndex: 1000,
            boxShadow: '0 -2px 10px rgba(0,0,0,0.15)',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: 0.5,
              px: 1.5,
              height: '100%',
              bgcolor: darkMode ? '#022c22' : '#047857',
              fontWeight: 800,
              fontSize: '0.78rem',
              letterSpacing: 0.5,
              zIndex: 2,
              boxShadow: '3px 0 6px rgba(0,0,0,0.2)',
              flexShrink: 0,
            }}
          >
            <CampaignIcon sx={{ fontSize: '1.2rem', color: '#f59e0b' }} />
            NEWS & UPDATES
          </Box>

          <Box
            sx={{
              flex: 1,
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div className="ticker-track">
              <span className="ticker-content">{tickerText}</span>
              <span className="ticker-content">{tickerText}</span>
            </div>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

const getCustomCSS = (isDark) => `
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body, #root {
    margin: 0 !important;
    padding: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    overflow: hidden !important;
  }

  @keyframes ticker-slide {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .ticker-track {
    display: inline-flex;
    white-space: nowrap;
    will-change: transform;
    animation: ticker-slide 35s linear infinite;
  }

  .ticker-track:hover {
    animation-play-state: paused;
  }

  .ticker-content {
    font-size: 0.85rem;
    font-weight: 600;
    padding-right: 50px;
    letter-spacing: 0.3px;
    color: #ffffff;
  }

  .custom-doc-content {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    font-size: 16.5px;
    line-height: 1.8;
    color: ${isDark ? '#e2e8f0' : '#1e293b'};
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box !important;
    overflow-wrap: break-word !important;
    word-wrap: break-word !important;
    word-break: break-word !important;
  }

  .custom-doc-content * {
    max-width: 100% !important;
    box-sizing: border-box !important;
  }

  @media (max-width: 600px) {
    .custom-doc-content {
      font-size: 15px;
      line-height: 1.65;
    }
  }

  .custom-doc-content h1 {
    color: ${isDark ? '#f8fafc' : '#0f172a'};
    font-size: 1.6rem;
    font-weight: 800;
    margin-top: 26px;
    margin-bottom: 12px;
    padding-bottom: 8px;
    border-bottom: 2px solid ${isDark ? '#334155' : '#f1f5f9'};
  }
  .custom-doc-content h2 {
    color: ${isDark ? '#f8fafc' : '#0f172a'};
    font-size: 1.3rem;
    font-weight: 750;
    margin-top: 22px;
    margin-bottom: 10px;
  }
  .custom-doc-content h3 {
    color: ${isDark ? '#cbd5e1' : '#1e293b'};
    font-size: 1.1rem;
    font-weight: 700;
    margin-top: 18px;
    margin-bottom: 8px;
  }

  .custom-doc-content .question-box, 
  .custom-doc-content .doc-question-title {
    background: ${isDark ? '#064e3b' : 'linear-gradient(135deg, #ecfdf5 0%, #f0fdf4 100%)'};
    border-left: 5px solid #059669;
    padding: 12px 16px;
    margin: 20px 0 14px 0;
    border-radius: 0 10px 10px 0;
    color: ${isDark ? '#a7f3d0' : '#065f46'};
    font-weight: 700;
    font-size: 1.05rem;
  }

  .custom-doc-content p {
    margin-bottom: 14px;
    color: ${isDark ? '#cbd5e1' : '#334155'};
  }
  .custom-doc-content strong, 
  .custom-doc-content b {
    color: ${isDark ? '#f8fafc' : '#0f172a'};
    font-weight: 700;
  }

  .custom-doc-content ul, 
  .custom-doc-content ol {
    margin: 14px 0 20px 0;
    padding-left: 0;
    list-style: none;
  }

  .custom-doc-content ol {
    counter-reset: custom-counter;
  }
  .custom-doc-content ol > li {
    counter-increment: custom-counter;
    position: relative;
    padding-left: 36px;
    margin-bottom: 10px;
    color: ${isDark ? '#cbd5e1' : '#334155'};
    font-weight: 500;
  }
  .custom-doc-content ol > li::before {
    content: counter(custom-counter);
    position: absolute;
    left: 0;
    top: 2px;
    width: 24px;
    height: 24px;
    background-color: ${isDark ? '#064e3b' : '#ecfdf5'};
    color: ${isDark ? '#34d399' : '#059669'};
    font-weight: 800;
    font-size: 0.8rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1.5px solid #059669;
  }

  .custom-doc-content ul > li {
    position: relative;
    padding-left: 22px;
    margin-bottom: 10px;
    color: ${isDark ? '#cbd5e1' : '#334155'};
    font-weight: 500;
  }
  .custom-doc-content ul > li::before {
    content: "▪";
    position: absolute;
    left: 4px;
    top: -2px;
    color: #059669;
    font-size: 1.3rem;
  }

  .custom-doc-content .vs-code-container {
    background-color: #0f172a !important;
    border-radius: 12px !important;
    margin: 24px 0 !important;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3) !important;
    border: 1px solid #334155 !important;
    overflow: hidden !important;
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box !important;
    display: block !important;
  }

  .custom-doc-content .vs-code-header {
    background-color: #1e293b;
    height: 40px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #334155;
    width: 100%;
    box-sizing: border-box;
  }

  .custom-doc-content .vs-dots {
    display: flex;
    align-items: center;
    gap: 6px;
    width: 45px;
    flex-shrink: 0;
  }

  .custom-doc-content .vs-dots .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
  }
  .custom-doc-content .vs-dots .dot.red { background-color: #ff5f56; }
  .custom-doc-content .vs-dots .dot.yellow { background-color: #ffbd2e; }
  .custom-doc-content .vs-dots .dot.green { background-color: #27c93f; }

  .custom-doc-content .vs-code-title {
    display: flex;
    align-items: center;
    gap: 7px;
    color: #38bdf8;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.5px;
  }

  .custom-doc-content .vs-code-badge {
    background-color: #064e3b;
    color: #34d399;
    font-size: 0.65rem;
    font-weight: 700;
    padding: 2px 8px;
    border-radius: 4px;
    border: 1px solid #059669;
  }

  .custom-doc-content .code-scroll-area {
    width: 100% !important;
    max-width: 100% !important;
    overflow-x: auto !important;
    -webkit-overflow-scrolling: touch;
    background-color: #0f172a;
    box-sizing: border-box;
  }

  .custom-doc-content .vs-code-editor {
    background-color: #0f172a !important;
    padding: 16px 20px !important;
    margin: 0 !important;
    font-family: 'Courier New', Courier, monospace !important;
    font-size: 15px !important;
    line-height: 1.7 !important;
    color: #38bdf8 !important;
    white-space: pre-wrap !important;
    word-break: break-all !important;
    tab-size: 4;
    width: 100% !important;
    min-width: 100%;
    box-sizing: border-box !important;
    border: none !important;
    font-weight: 600 !important;
  }

  .custom-doc-content .responsive-table-wrapper {
    width: 100% !important;
    max-width: 100% !important;
    overflow-x: auto !important;
    margin: 20px 0;
    border-radius: 10px;
  }

  .custom-doc-content table {
    width: 100%;
    min-width: 450px;
    border-collapse: separate;
    border-spacing: 0;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid ${isDark ? '#334155' : '#cbd5e1'};
  }

  .custom-doc-content th {
    background: #047857 !important;
    color: #ffffff !important;
    padding: 12px 14px;
    text-align: left;
    font-weight: 800 !important;
  }

  .custom-doc-content td {
    padding: 11px 14px;
    border-bottom: 1px solid ${isDark ? '#334155' : '#e2e8f0'};
    color: ${isDark ? '#cbd5e1' : '#334155'};
    background-color: ${isDark ? '#1e293b' : '#ffffff'};
  }

  .custom-doc-content tr:nth-of-type(even) td {
    background-color: ${isDark ? '#0f172a' : '#f8fafc'};
  }
`;

export default CourseViewer;