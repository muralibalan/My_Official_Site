import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

// --- Global Theme Color ---
const THEME_COLOR = '#09ee24ff';

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
  { name: 'STA Final Batch', photo: 'students/staFinel.jpeg' },
];

function MyStudents() {
  return (
    <Box sx={{ bgcolor: '#121212', py: 10, px: { xs: 2, md: 8 } }}>
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 900,
            color: 'white',
            mb: 2,
            fontSize: { xs: '2rem', md: '3.5rem' },
          }}
        >
          MY <span style={{ color: THEME_COLOR }}>STUDENTS</span>
        </Typography>
        <Box sx={{ width: 80, height: 4, bgcolor: THEME_COLOR, mx: 'auto', borderRadius: 2 }} />
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {students.map((student, idx) => (
          <Grid item key={idx} xs={12} sm={6} md={4} lg={3} display="flex" justifyContent="center">
            <Paper
              component={motion.div}
              whileHover={{ y: -10 }}
              sx={{
                bgcolor: '#1c1c1c',
                borderRadius: '20px',
                p: 2,
                textAlign: 'center',
                width: '100%',
                maxWidth: 300,
                border: '1px solid rgba(255,255,255,0.05)',
                transition: '0.3s',
                '&:hover': {
                  borderColor: THEME_COLOR,
                  boxShadow: `0 10px 30px ${THEME_COLOR}22`,
                },
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  aspectRatio: '1/1', // Ensures perfect square
                  overflow: 'hidden',
                  borderRadius: '15px',
                  mb: 2,
                }}
              >
                <Box
                  component="img"
                  src={student.photo}
                  alt={student.name}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  // Fallback for missing images
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/300?text=Student'; }}
                />
              </Box>
              
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: 'white',
                  fontSize: '1.1rem',
                  letterSpacing: 0.5
                }}
              >
                {student.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: THEME_COLOR, fontWeight: 500, mt: 0.5, fontSize: '0.8rem' }}
              >
                Aspiring Developer
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default MyStudents;