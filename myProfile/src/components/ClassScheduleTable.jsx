import React, { useState, useEffect } from 'react';
import {
  Button,
  Typography,
  CircularProgress,
  Link,
  Box,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Card,
  CardContent,
  Divider
} from '@mui/material';

const API_URL =
  "https://script.google.com/macros/s/AKfycbyghq5mIplCYcfAIBvsK7wPHgfS-Dk0f3RFbzcnMPE6jqT3rYYQW366KIt7yPngljgykA/exec";

export default function ClassScheduleTable() {
  const [classes, setClasses] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [nextClassMessage, setNextClassMessage] = useState('');

  // =========================
  // FORMAT TIME
  // =========================
  const formatTime = (time) => {
    if (!time) return '';
    try {
      const timeString = time.toString();
      const [hour, minute] = timeString.split(':');
      const h = parseInt(hour);
      const ampm = h >= 12 ? 'PM' : 'AM';
      const formattedHour = h % 12 || 12;
      return `${formattedHour}:${minute} ${ampm}`;
    } catch (err) {
      return time;
    }
  };

  // =========================
  // FORMAT DATE
  // =========================
  const formatDate = (date) => {
    if (!date) return '';
    try {
      const d = new Date(date);
      return d.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
    } catch (err) {
      return date;
    }
  };

  // =========================
  // FETCH CLASSES
  // =========================
  const fetchClasses = async () => {
    try {
      const response = await fetch(`${API_URL}?t=${new Date().getTime()}`);
      const data = await response.json();
      if (Array.isArray(data)) {
        setClasses(data);
      }
    } catch (error) {
      console.error('Fetch Error:', error);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  // =========================
  // NEXT CLASS TICKER
  // =========================
  useEffect(() => {
    if (classes.length === 0) {
      setNextClassMessage('📢 Today’s classes haven’t been scheduled yet. Please wait for further updates. 🔥');
      return;
    }

    const now = new Date();
    const today = now.toISOString().split('T')[0];

    const todayClasses = classes.filter((cls) => cls.classDate === today);

    const sortedClasses = todayClasses.sort((a, b) => {
      const aTime = new Date(`${a.classDate}T${a.timeFrom}`);
      const bTime = new Date(`${b.classDate}T${b.timeFrom}`);
      return aTime - bTime;
    });

    const nextClass = sortedClasses.find((cls) => {
      const classTime = new Date(`${cls.classDate}T${cls.timeFrom}`);
      return classTime > now;
    });

    if (nextClass) {
      setNextClassMessage(
        `⚡ The next class for "${nextClass.batchName}" starts at ${formatTime(nextClass.timeFrom)}. Be ready!!!! ⚡`
      );
    } else {
      setNextClassMessage(
        '🎉 All classes for today have finished. Thank you! See you tomorrow! 👍'
      );
    }
  }, [classes]);

  // =========================
  // LOADING
  // =========================
  if (fetching) {
    return (
      <Box
        sx={{
          minHeight: '60vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: 2
        }}
      >
        <CircularProgress size={45} thickness={4} sx={{ color: '#7B1FA2' }} />
        <Typography sx={{ color: '#777' }}>Loading Live Classes...</Typography>
      </Box>
    );
  }

  // =========================
  // MAIN UI
  // =========================
  return (
    <Box
      sx={{
        px: { xs: 2, sm: 3, md: 4 },
        py: 4,
        maxWidth: 1200,
        mx: 'auto'
      }}
    >
      {/* =========================
         LIVE NEWS TICKER
      ========================= */}
      <Box
        sx={{
          width: '100%',
          overflow: 'hidden',
          mb: 4,
          borderRadius: '14px',
          background: 'linear-gradient(90deg, #ff1744, #ff9100)',
          boxShadow: '0 8px 25px rgba(255, 80, 80, 0.25)',
          display: 'flex',
          alignItems: 'center',
          height: '45px',
          position: 'relative'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: 'max-content',
            animation: 'tickerMove 12s linear infinite',
          }}
        >
          <Typography
            sx={{
              color: '#fff',
              fontWeight: '900',
              fontSize: { xs: '14px', sm: '16px' },
              px: 4,
              letterSpacing: '0.5px',
              whiteSpace: 'nowrap'
            }}
          >
            {nextClassMessage}
          </Typography>
          <Typography
            sx={{
              color: '#fff',
              fontWeight: '900',
              fontSize: { xs: '14px', sm: '16px' },
              px: 4,
              letterSpacing: '0.5px',
              whiteSpace: 'nowrap'
            }}
          >
            {nextClassMessage}
          </Typography>
        </Box>

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes tickerMove {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}} />
      </Box>

      {/* HEADER */}
      <Box sx={{ mb: 5, textAlign: 'center' }}>
        <Typography
          variant="h3"
          fontWeight="900"
          sx={{
            fontSize: { xs: '30px', sm: '38px', md: '45px' },
            background: 'linear-gradient(90deg, #7B1FA2 0%, #9C27B0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 1
          }}
        >
          Upcoming Live Classes
        </Typography>

        <Typography sx={{ color: '#777', fontSize: { xs: '14px', sm: '16px' } }}>
          Attend your scheduled sessions instantly
        </Typography>
      </Box>

      {/* EMPTY STATE */}
      {classes.length === 0 ? (
        <Paper
          elevation={0}
          sx={{
            borderRadius: 5,
            textAlign: 'center',
            py: 8,
            border: '1px solid #e0e0e0',
            boxShadow: '0 8px 25px rgba(0,0,0,0.04)'
          }}
        >
          <Typography variant="h5" fontWeight="bold" sx={{ color: '#999', mb: 1 }}>
            No Classes Scheduled
          </Typography>
          <Typography sx={{ color: '#bbb' }}>Please check again later.</Typography>
        </Paper>
      ) : (
        <Box>
          {/* ==========================================
              1. DESKTOP VIEW: நேர்த்தியான டேபிள் வடிவம்
             ========================================== */}
          <TableContainer 
            component={Paper} 
            sx={{ 
              borderRadius: '16px', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
              border: '1px solid #eee',
              overflow: 'hidden',
              display: { xs: 'none', md: 'block' } // மொபைலில் இந்த டேபிள் முற்றிலும் மறையும்
            }}
          >
            <Table sx={{ minWidth: 650 }}>
              <TableHead sx={{ background: 'linear-gradient(90deg, #7B1FA2 0%, #9C27B0 100%)' }}>
                <TableRow>
                  <TableCell sx={{ color: '#fff', fontWeight: 'bold', fontSize: '15px' }}>Batch</TableCell>
                  <TableCell sx={{ color: '#fff', fontWeight: 'bold', fontSize: '15px' }}>Subject & Topics</TableCell>
                  <TableCell sx={{ color: '#fff', fontWeight: 'bold', fontSize: '15px' }}>Date</TableCell>
                  <TableCell sx={{ color: '#fff', fontWeight: 'bold', fontSize: '15px' }}>Timing</TableCell>
                  <TableCell sx={{ color: '#fff', fontWeight: 'bold', fontSize: '15px' }}>Status</TableCell>
                  <TableCell sx={{ color: '#fff', fontWeight: 'bold', fontSize: '15px', textAlign: 'center' }}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {classes.map((cls, index) => (
                  <TableRow
                    key={cls.id || index}
                    sx={{ 
                      '&:last-child td, &:last-child th': { border: 0 },
                      '&:hover': { backgroundColor: '#fcfaff', transition: '0.2s' }
                    }}
                  >
                    <TableCell>
                      <Chip
                        label={cls.batchName}
                        sx={{ backgroundColor: '#ede7f6', color: '#5E35B1', fontWeight: 'bold', fontSize: '13px' }}
                      />
                    </TableCell>
                    <TableCell sx={{ maxWidth: '300px' }}>
                      <Typography variant="subtitle1" fontWeight="700" color="#222">
                        {cls.subject}
                      </Typography>
                      <Typography variant="body2" color="#666" sx={{ mt: 0.5, whiteSpace: 'pre-line' }}>
                        {cls.topics}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ fontWeight: '600', color: '#555' }}>
                      {formatDate(cls.classDate)}
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" fontWeight="700" color="#2E7D32">
                        {formatTime(cls.timeFrom)}
                      </Typography>
                      <Typography variant="caption" color="#666">
                        to {formatTime(cls.timeTo)}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label="LIVE"
                        size="small"
                        sx={{ backgroundColor: '#ffebee', color: '#d32f2f', fontWeight: 'bold', fontSize: '11px' }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        component={Link}
                        href={cls.classLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          borderRadius: '8px',
                          textTransform: 'none',
                          fontWeight: 'bold',
                          px: 3,
                          background: 'linear-gradient(90deg,#43A047 0%,#66BB6A 100%)',
                          boxShadow: '0 4px 12px rgba(67,160,71,0.2)',
                          '&:hover': {
                            background: 'linear-gradient(90deg,#388E3C 0%,#4CAF50 100%)',
                          }
                        }}
                      >
                        Join Class
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* ==========================================
              2. MOBILE VIEW: முழுமையான கார்டு ரோ வடிவம்
             ========================================== */}
          <Box 
            sx={{ 
              display: { xs: 'flex', md: 'none' }, // டெஸ்க்டாப்பில் இது மறையும், மொபைலில் மட்டும் தெரியும்
              flexDirection: 'column',
              gap: 2 
            }}
          >
            {classes.map((cls, index) => (
              <Card 
                key={cls.id || index}
                elevation={0}
                sx={{
                  borderRadius: '16px',
                  border: '1px solid #e8e8e8',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                  overflow: 'hidden'
                }}
              >
                {/* கார்டின் இடது ஓரம் ஒரு சிறிய வண்ணப் பட்டை */}
                <Box sx={{ background: 'linear-gradient(90deg, #7B1FA2, #9C27B0)', height: '4px' }} />
                
                <CardContent sx={{ p: 2.5 }}>
                  {/* பேட்ச் பெயர் மற்றும் லைவ் பேட்ஜ் */}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                    <Chip
                      label={cls.batchName}
                      size="small"
                      sx={{ backgroundColor: '#ede7f6', color: '#5E35B1', fontWeight: 'bold' }}
                    />
                    <Chip
                      label="LIVE"
                      size="small"
                      sx={{ backgroundColor: '#ffebee', color: '#d32f2f', fontWeight: 'bold', fontSize: '10px' }}
                    />
                  </Box>

                  {/* சப்ஜெக்ட் மற்றும் டாபிக்ஸ் */}
                  <Typography variant="h6" fontWeight="800" color="#222" sx={{ mb: 0.5 }}>
                    {cls.subject}
                  </Typography>
                  <Typography variant="body2" color="#666" sx={{ mb: 2, whiteSpace: 'pre-line' }}>
                    {cls.topics}
                  </Typography>

                  <Divider sx={{ my: 1.5, borderColor: '#f0f0f0' }} />

                  {/* தேதி மற்றும் நேரம் */}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2.5 }}>
                    <Box>
                      <Typography variant="caption" color="#999" display="block">📅 DATE</Typography>
                      <Typography variant="body2" fontWeight="700" color="#444">{formatDate(cls.classDate)}</Typography>
                    </Box>
                    <Box sx={{ textAlign: 'right' }}>
                      <Typography variant="caption" color="#999" display="block">🕒 TIMING</Typography>
                      <Typography variant="body2" fontWeight="700" color="#2E7D32">
                        {formatTime(cls.timeFrom)} - {formatTime(cls.timeTo)}
                      </Typography>
                    </Box>
                  </Box>

                  {/* மொபைலுக்கான பிரத்யேக பெரிய ஜாயின் பட்டன் */}
                  <Button
                    fullWidth
                    variant="contained"
                    component={Link}
                    href={cls.classLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      py: 1.3,
                      borderRadius: '10px',
                      textTransform: 'none',
                      fontWeight: 'bold',
                      fontSize: '15px',
                      background: 'linear-gradient(90deg,#43A047 0%,#66BB6A 100%)',
                      boxShadow: '0 4px 12px rgba(67,160,71,0.2)',
                      '&:hover': {
                        background: 'linear-gradient(90deg,#388E3C 0%,#4CAF50 100%)'
                      }
                    }}
                  >
                    Join Live Class
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}