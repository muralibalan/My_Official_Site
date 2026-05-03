// src/components/MyStudents.jsx

import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

// Example: public/students/student1.jpg, student2.jpg, ...
const students = [
  { name: 'Adhithya', photo: 'students/Adhithya.jpeg' },
  { name: 'Arunaja', photo: 'students/Arunaja.jpeg' },
  { name: 'Barbeen Reegan', photo: 'students/BarbeenReegan.jpeg' },
  { name: 'Dharshayani', photo: 'students/dhatshayani.jpeg' },
  { name: 'Dinesh', photo: 'students/Dhinesh.jpeg' },
  { name: 'Diwakar', photo: 'students/Diwakar.jpeg' },
  { name: 'Gogulan', photo: 'students/Gogulan.jpeg' },
  { name: 'Harinishree', photo: 'students/Harinishree.jpeg' },
  { name: 'Jeevan', photo: 'students/Jeevan.jpeg' },
  { name: 'Jyotsana', photo: 'students/Jyotsana.jpeg' },
  { name: 'Kalai Selvi', photo: 'students/KalaiSelvi.jpeg' },
  { name: 'Karthika', photo: 'students/Karthika.jpeg' },
  { name: 'Kathiravan', photo: 'students/Kathiravan.jpeg' },
  { name: 'Keerthika', photo: 'students/Keerthika.jpeg' },
  { name: 'Logaraman', photo: 'students/Logaraman.jpeg' },
  { name: 'MadhuPriya', photo: 'students/MadhuPriya.jpeg' },
  { name: 'Mary Ancita', photo: 'students/MaryAncita.jpeg' },
  { name: 'Muhamadu Mushraf', photo: 'students/MuhamaduMushraf.jpeg' },
  { name: 'Naveen', photo: 'students/Naveen.jpeg' },
  { name: 'NaveenKumar', photo: 'students/Naveenkumar.jpeg' },
  { name: 'Prince Anbu Selvan', photo: 'students/princeanbuselvan.jpeg' },
  { name: 'Prusothamman', photo: 'students/Prusothaman.jpeg' },
  { name: 'Rahul', photo: 'students/Rahul.jpeg' },
  { name: 'Sajitha', photo: 'students/Sajitha.jpeg' },
  { name: 'Samual', photo: 'students/Samual.jpeg' },
  { name: 'Sanjay', photo: 'students/Sanjay.jpeg' },
  { name: 'Saqip Nihal', photo: 'students/SaqipNihal.jpeg' },
  { name: 'Saranya', photo: 'students/Saranya.jpeg' },
  { name: 'Saraswathi', photo: 'students/Saraswathi.jpeg' },
  { name: 'SarathKumar', photo: 'students/SarathKumar.jpeg' },
  { name: 'Siddharthan', photo: 'students/Siddharthan.jpeg' },
  { name: 'Sudharshan', photo: 'students/Sudharshan.jpeg' },
  { name: 'Tamizh', photo: 'students/Tamil.jpeg' },
  { name: 'Thulasi', photo: 'students/Thulasi.jpeg' },
  { name: 'Vignesh', photo: 'students/Vignesh.jpeg' },
  { name: 'Vigneshwaran', photo: 'students/Vigneshwaran.jpeg' },
  { name: 'Yamuna', photo: 'students/yamuna.jpeg' },

  { name: 'Angel', photo: 'students/angel.jpeg' },
  { name: 'Rajapriya', photo: 'students/rajapriya.jpeg' },
  { name: 'Ashok', photo: 'students/ashok1.jpeg' },
  { name: 'Yokesh', photo: 'students/yokesh.jpeg' },
  { name: 'Jenifer', photo: 'students/jenifer.jpeg' },
  { name: 'Divager', photo: 'students/divagar1.jpeg' },
  { name: 'Anish', photo: 'students/anish.jpeg' },
  { name: 'Karthikeyan', photo: 'students/karthikeyan1.jpeg' },
  { name: 'Sanjay', photo: 'students/sanjay1.jpeg' },
  { name: 'STA_Finel_Batch', photo: 'students/staFinel.jpeg' },
];

function MyStudents() {
  return (
    <Box sx={{ px: { xs: 2, sm: 4, md: 8 }, py: 4, overflowX: 'auto' }}>
      <Typography
        variant="h5"
        sx={{
          textAlign: 'center',
          fontWeight: 700,
          mb: 3,
          fontSize: { xs: 20, sm: 24, md: 28 },
        }}
      >
        My Students
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, sm: 3, md: 4 }}
        sx={{
          justifyContent: { xs: 'flex-start', sm: 'center' },
          minWidth: { xs: 320, sm: 'auto' }, // Ensure minimum width for mobile scrolling
        }}
      >
        {students.map((student, idx) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={idx}
            sx={{
              minWidth: { xs: 320, sm: 'auto' }, // Minimum width for each card on mobile
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Paper
              sx={{
                border: '1px solid #eee',
                borderRadius: '12px',
                p: { xs: 1, sm: 2 },
                textAlign: 'center',
                bgcolor: '#676464',
                boxShadow: '0 1px 4px #eee',
                width: { xs: 310, sm: 310, md: 310, lg: 310 }, // Fixed width to accommodate 290px image + padding
              }}
            >
              <Box
                component="img"
                src={student.photo}
                alt={student.name}
                sx={{
                  width: 290,
                  height: 290,
                  objectFit: 'cover',
                  borderRadius: '10%',
                  mb: 2,
                }}
              />
              <Typography
                sx={{
                  fontWeight: 600,
                  color: 'white',
                  fontSize: { xs: 14, sm: 16, md: 18 },
                }}
              >
                {student.name}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default MyStudents;