import React from 'react';
import { Box, Typography, Paper, GlobalStyles } from '@mui/material';

const CourseViewer = () => {
  // Ungaloda Google Doc Embed Link
  const docUrl =
    "https://docs.google.com/document/d/e/2PACX-1vRPv6W9HrZ_wPr4G0eW_QfvZm2rQkzO51XP0KSxKuuexkvVWVFw9IziW5ePRHWFvZI8Qsix4G5kOtaY/pub?embedded=true";

  return (
    <Box
      sx={{
        width: '100vw',
        minHeight: '100vh',
        bgcolor: '#f5f5f5',
        margin: 0,
        padding: 0,
        overflowX: 'hidden', // Side scroll varaama irukka
        // Basic selection restriction
        userSelect: 'none',
        WebkitUserSelect: 'none',
        msUserSelect: 'none',
        MozUserSelect: 'none',
      }}
    >
      {/* CSS moolama print edupathai thadukka */}
      <GlobalStyles
        styles={{
          '@media print': {
            body: { display: 'none !important' },
          },
          'body': { margin: 0, padding: 0 }
        }}
      />

      <Paper
        elevation={0}
        sx={{
          width: '100%',
          minHeight: '100vh',
          borderRadius: 0,
          p: { xs: 1, md: 3 }, // Mobile-la kammi padding, desktop-la athigam
          boxSizing: 'border-box'
        }}
      >
        <Typography
          variant="h4"
          align="center"
          color="primary"
          sx={{
            fontWeight: 'bold',
            mb: 2,
            fontSize: { xs: '1.5rem', md: '2.125rem' } // Responsive font
          }}
        >
          Course Content
        </Typography>

        {/* Iframe Container with Overlay */}
        <Box
          sx={{
            position: 'relative', // Overlay-kaga relative-ah vaikkurom
            width: '100%',
            height: '85vh',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
          onContextMenu={(e) => e.preventDefault()} // Right click block
        >
          {/* INVISIBLE OVERLAY: 
            Ithu iframe mela oru kannadikku mela irukira layer maari.
            Ithu irunthaal text-ai click-o select-o panna mudiyaathu.
          */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 10,
              background: 'rgba(255,255,255,0)', // Fully transparent
              cursor: 'default',
            }}
          />

          <iframe
            src={docUrl}
            width="100%"
            height="100%"
            title="HTML Course Document"
            style={{
              border: 'none',
              pointerEvents: 'auto', // Ithu scroll-ai allow pannum
            }}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default CourseViewer;