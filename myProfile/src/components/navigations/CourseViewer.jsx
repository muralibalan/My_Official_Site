import React, { useState } from 'react';
import { Box, Typography, GlobalStyles, TextField, InputAdornment, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const CourseViewer = () => {
  // 1. Ungaloda Document list (Inge unga ella links-aiyum correct name-oda add pannunga)
  const courseData = [
    { id: 1, name: "Callback Function", url: "https://docs.google.com/document/d/e/2PACX-1vRPv6W9HrZ_wPr4G0eW_QfvZm2rQkzO51XP0KSxKuuexkvVWVFw9IziW5ePRHWFvZI8Qsix4G5kOtaY/pub?embedded=true" },
    { id: 2, name: "HTML Tags", url: "https://docs.google.com/document/d/e/ANOTHER_LINK_HERE/pub?embedded=true" },
    { id: 3, name: "CSS Basics", url: "https://docs.google.com/document/d/e/CSS_LINK_HERE/pub?embedded=true" },
  ];

  const [searchInput, setSearchInput] = useState(""); // User type pannura text
  const [selectedDoc, setSelectedDoc] = useState(courseData[0]); // Current-ah view aagura doc

  // Search function (Enter-kkum Button-kkum ithu pothuvaanathu)
  const executeSearch = () => {
    const found = courseData.find(doc => 
      doc.name.toLowerCase() === searchInput.toLowerCase() || 
      doc.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    if (found) {
      setSelectedDoc(found);
    } else {
      alert("Sariyaana file name-ai type pannunga! (Eg: HTML Introduction)");
    }
  };

  // Keyboard-la Enter press panna...
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      executeSearch();
    }
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

      {/* Header & Search Section */}
      <Box sx={{ py: 4, textAlign: 'center', width: '100%', bgcolor: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2', mb: 3 }}>
          E-Learning Portal
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, px: 2 }}>
            <TextField
                variant="outlined"
                placeholder="Type File Name (e.g. HTML Introduction)"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={handleKeyPress} // Enter key support
                sx={{ width: { xs: '70%', md: '500px' }, bgcolor: '#fff' }}
                size="small"
                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon color="primary" />
                    </InputAdornment>
                    ),
                }}
            />
            <Button 
                variant="contained" 
                onClick={executeSearch}
                sx={{ textTransform: 'none', fontWeight: 'bold' }}
            >
                Search
            </Button>
        </Box>
        
        <Typography variant="subtitle1" sx={{ mt: 2, color: '#2e7d32', fontWeight: '500' }}>
          Now Viewing: {selectedDoc.name}
        </Typography>
      </Box>

      {/* Document View - Strict Protection matrum Full Height */}
      <Box
        sx={{
          position: 'relative',
          width: { xs: '98%', md: '900px' },
          height: '6000px', // Content length kku yethamaari height adjust pannunga
          bgcolor: '#fff',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          mb: 5,
        }}
      >
        {/* THE SHIELD LAYER (Copy Restriction) */}
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
          key={selectedDoc.id} // Ithu thaan doc-ai reload panna vaikum
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