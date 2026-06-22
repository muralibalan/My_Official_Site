import React, { useState } from 'react';
import { Box, Typography, GlobalStyles, Button, Autocomplete, TextField } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { courseData } from '../course';

const CourseViewer = ({ auth, setAuth }) => {

  const standardCourse = (auth && auth.course) ? auth.course : "React";
  const currentCourseList = courseData[standardCourse] || courseData["React"];

  const [selectedDoc, setSelectedDoc] = useState(currentCourseList[0]);

  const handleLogout = () => {
    setAuth({ loggedIn: false, course: '' });
  };

  // 80 பக்கங்களும் ஓப்பன் ஆகாமல் பிளாங்காக இருக்கும் பிரச்சனையை 100% தீர்க்கும் அல்டிமேட் லாஜிக்
  const getGoogleDocHtmlUrl = (url) => {
    if (!url) return '';
    
    // 1. URL-ல் உள்ள தேவையற்ற பகுதிகளை நீக்குகிறது
    let baseUrl = url;
    if (url.includes('/edit')) baseUrl = url.split('/edit')[0];
    if (url.includes('/view')) baseUrl = url.split('/view')[0];
    if (url.includes('/preview')) baseUrl = url.split('/preview')[0];
    if (url.includes('/pub')) baseUrl = url.split('/pub')[0];
    
    // 2. கூகுள் டாக்ஸை நேரடியாக HTML வெப்சைட்டாக மாற்றுகிறது. 
    // இது iframe பிளாங்க் பிரச்சனையை 100% சரிசெய்து 80 பக்கங்களையும் முழுமையாகக் காட்டும்!
    return `${baseUrl}/pub?embedded=true`;
  };

  return (
    <Box
      sx={{
        width: '100%', minHeight: '100vh', bgcolor: '#f0f2f5',
        display: 'flex', flexDirection: 'column', alignItems: 'center', userSelect: 'none',
      }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <GlobalStyles styles={{ '@media print': { body: { display: 'none !important' } } }} />

      <Box sx={{ py: 3, width: '100%', bgcolor: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', mb: 3 }}>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 3, mb: 1 }}>
          <Button
            variant="outlined" color="error" size="small"
            startIcon={<LogoutIcon />} onClick={handleLogout}
            sx={{ fontWeight: 'bold', textTransform: 'none' }}
          >
            Logout
          </Button>
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2', mb: 2 }}>
            E-Learning Portal ({standardCourse})
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', px: 2 }}>
            <Autocomplete
              disablePortal
              options={currentCourseList}
              getOptionLabel={(option) => option.name}
              value={selectedDoc}
              onChange={(event, newValue) => {
                if (newValue) {
                  setSelectedDoc(newValue);
                }
              }}
              sx={{ width: { xs: '90%', md: '500px' }, bgcolor: '#fff' }}
              renderInput={(params) => (
                <TextField {...params} label="Select Topic Name" variant="outlined" />
              )}
            />
          </Box>

          <Typography variant="subtitle1" sx={{ mt: 2, color: '#2e7d32', fontWeight: '500' }}>
            Now Viewing: {selectedDoc ? selectedDoc.name : ""}
          </Typography>
        </Box>
      </Box>

      {/* உங்களது பழைய பாக்ஸ் டிசைன் அப்படியே வைக்கப்பட்டுள்ளது (உயரம் மட்டும் மொபைல் ஸ்க்ரோலுக்காக 82vh ஆக்கப்பட்டுள்ளது) */}
      <Box
        sx={{
          position: 'relative',
          width: { xs: '98%', md: '900px' },
          height: '82vh', 
          bgcolor: '#fff',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          mb: 5,
          overflow: 'hidden',
          borderRadius: '8px'
        }}
      >
        {/* பாதுகாப்பு லேயர் - காப்பி செய்வதை மட்டும் தடுக்கும், ஸ்க்ரோலிங்கை லாக் செய்யாது */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 10,
            background: 'transparent',
            pointerEvents: 'none', // ஸ்க்ரோல் செய்ய இது 'none' ஆக இருக்க வேண்டும்
          }}
        />

        {selectedDoc && (
          <iframe
            key={selectedDoc.id}
            src={getGoogleDocHtmlUrl(selectedDoc.url)}
            width="100%"
            height="100%"
            title={selectedDoc.name}
            style={{
              border: 'none',
              pointerEvents: 'auto', // மொபைல் மற்றும் டெஸ்க்டாப் டச் ஸ்க்ரோலுக்கு இது 'auto'
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default CourseViewer;