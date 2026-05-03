import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

// Workshop details
const workshops = [
  { 
    title: 'Data Visualization Workshop', 
    college: 'AVC Engineering College', 
    photo: 'workshops/visualization.png',
    date: 'April 2026'
  },
  { 
    title: 'Eye Open Session', 
    college: 'AVC Engineering College', 
    photo: 'workshops/skillvsdeg.png',
    date: 'November 2025'
  }
];

function MyWorkshops() {
  return (
    <Box sx={{ px: { xs: 2, sm: 4, md: 8 }, py: 6, overflowX: 'auto' }}>
      {/* Strong Main Title */}
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          fontWeight: 800,
          mb: 1,
          color: 'white',
          fontSize: { xs: 24, sm: 32, md: 36 },
        }}
      >
        College Workshops & Training
      </Typography>

      {/* Strong Description Text */}
      <Typography
        variant="body1"
        sx={{ 
          textAlign: 'center', 
          mb: 5, 
          color: "white",
          fontWeight: 500,
          maxWidth: '800px',
          mx: 'auto'
        }}
      >
        Empowering the next generation of tech professionals through hands-on sessions.
      </Typography>

      <Grid
        container
        spacing={{ xs: 2, sm: 3, md: 4 }}
        sx={{
          justifyContent: { xs: 'flex-start', sm: 'center' },
          minWidth: { xs: 320, sm: 'auto' }, 
        }}
      >
        {workshops.map((workshop, idx) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={idx}
            sx={{
              minWidth: { xs: 320, sm: 'auto' },
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Paper
              sx={{
                border: '1px solid #eee',
                borderRadius: '16px',
                p: { xs: 1, sm: 2 },
                textAlign: 'center',
                bgcolor: '#676464', 
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                width: { xs: 310, sm: 310, md: 310, lg: 310 }, 
                transition: '0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                },
              }}
            >
              <Box
                sx={{
                  width: 290,
                  height: 290,
                  bgcolor: '#444', // Background for the image container
                  borderRadius: '12px',
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}
              >
                <Box
                  component="img"
                  src={workshop.photo}
                  alt={workshop.title}
                  sx={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain', // Inga thaan unga full picture cut aagama varum
                  }}
                />
              </Box>

              <Box sx={{ px: 1, pb: 1 }}>
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: 'white',
                    fontSize: { xs: 16, sm: 18 },
                    lineHeight: 1.2,
                    mb: 1
                  }}
                >
                  {workshop.title}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 600,
                    color: '#FFD700', // Gold color for college name to make it "Strong"
                    fontSize: { xs: 13, sm: 14 },
                    mb: 0.5
                  }}
                >
                  {workshop.college}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    color: '#bbb',
                    fontSize: { xs: 12, sm: 13 },
                  }}
                >
                  {workshop.date}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default MyWorkshops;