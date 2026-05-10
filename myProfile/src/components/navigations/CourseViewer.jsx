import React, { useState } from 'react';
import { Box, Typography, GlobalStyles, Button, Autocomplete, TextField } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { courseData } from '../course';
const CourseViewer = ({ setAuth }) => {
  
  const [selectedDoc, setSelectedDoc] = useState(courseData[0]);

  const handleLogout = () => {
    setAuth(false);
  };

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        bgcolor: '#f0f2f5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        userSelect: 'none',
      }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <GlobalStyles styles={{ '@media print': { body: { display: 'none !important' } } }} />

      <Box sx={{ py: 3, width: '100%', bgcolor: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', mb: 3 }}>
        
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 3, mb: 1 }}>
          <Button 
            variant="outlined" 
            color="error" 
            size="small"
            startIcon={<LogoutIcon />}
            onClick={handleLogout}
            sx={{ fontWeight: 'bold', textTransform: 'none' }}
          >
            Logout
          </Button>
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2', mb: 2 }}>
            E-Learning Portal
          </Typography>

          {/* Dropdown Search List */}
          <Box sx={{ display: 'flex', justifyContent: 'center', px: 2 }}>
            <Autocomplete
              disablePortal
              options={courseData}
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
            Now Viewing: {selectedDoc.name}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          position: 'relative',
          width: { xs: '98%', md: '900px' },
          height: '12000px', 
          bgcolor: '#fff',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          mb: 5,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 10,
            background: 'transparent',
            pointerEvents: 'all',
          }}
        />

        <iframe
          key={selectedDoc.id}
          src={selectedDoc.url}
          width="100%"
          height="100%"
          title={selectedDoc.name}
          style={{ border: 'none', pointerEvents: 'none' }}
        />
      </Box>
    </Box>
  );
};

export default CourseViewer;