import React from 'react';
import { Box, Typography, Grid, Paper, Container } from '@mui/material';
import { motion } from 'framer-motion';

const THEME_COLOR = '#09ee24ff';

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
  },
  // Innum extra workshops iruntha inga add pannikalam
];

// Animation Settings
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

function MyWorkshops() {
  return (
    <Box sx={{
      bgcolor: '#0a0a0a',
      py: { xs: 8, md: 12 },
      position: 'relative',
      overflow: 'hidden'
    }}>
      <Container maxWidth="lg">

        {/* HEADER SECTION */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 900,
                mb: 2,
                color: 'white',
                fontSize: { xs: '1.8rem', md: '3rem' },
                textTransform: 'uppercase'
              }}
            >
              COLLEGE <span style={{ color: THEME_COLOR, textShadow: `0 0 20px ${THEME_COLOR}55` }}>WORKSHOPS</span>
            </Typography>

            <Box
              sx={{
                width: 60, height: 4, bgcolor: THEME_COLOR, mx: 'auto', mb: 3, borderRadius: 2
              }}
            />

            <Typography
              sx={{
                color: '#aaa',
                fontWeight: 500,
                maxWidth: '700px',
                mx: 'auto',
                lineHeight: 1.7
              }}
            >
              Empowering the next generation of tech professionals through hands-on practical
              training and industry-standard skill development sessions.
            </Typography>
          </motion.div>
        </Box>

        {/* WORKSHOPS GRID */}
        <Grid
          container
          spacing={4}
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          sx={{ justifyContent: 'center' }}
        >
          {workshops.map((workshop, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx} sx={{ display: 'flex', justifyContent: 'center' }}>
              <motion.div variants={cardVariants} whileHover={{ y: -10 }}>
                <Paper
                  elevation={0}
                  sx={{
                    borderRadius: '24px',
                    p: 2,
                    textAlign: 'center',
                    bgcolor: 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    width: { xs: '100%', sm: 320 },
                    transition: '0.4s ease',
                    '&:hover': {
                      borderColor: THEME_COLOR,
                      boxShadow: `0 10px 30px ${THEME_COLOR}15`,
                    },
                  }}
                >
                  {/* IMAGE CONTAINER - Fixed logic for full picture visibility */}
                  <Box
                    sx={{
                      width: '100%',
                      height: 280,
                      bgcolor: '#111', // Dark background for gaps when using 'contain'
                      borderRadius: '18px',
                      mb: 2.5,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                      border: '1px solid rgba(255,255,255,0.05)',
                      position: 'relative',
                      // Intha inner shadow photo-voda edges-ah soft-aa kaatum
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)',
                        pointerEvents: 'none'
                      }
                    }}
                  >
                    <Box
                      component="img"
                      src={workshop.photo}
                      alt={workshop.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        // 'contain' panna full pic-um cut aagama box kula fit aagum
                        objectFit: 'contain',
                        padding: '10px', // Oru chinna gap so edges touch aagathu
                        transition: '0.5s ease',
                        '&:hover': {
                          transform: 'scale(1.05)' // Subtle zoom
                        }
                      }}
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop';
                      }}
                    />
                  </Box>
                  {/* TEXT CONTENT */}
                  <Box sx={{ px: 1, pb: 1 }}>
                    <Typography
                      sx={{
                        fontWeight: 800,
                        color: 'white',
                        fontSize: '1.1rem',
                        lineHeight: 1.3,
                        mb: 1.5,
                        minHeight: '44px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {workshop.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: THEME_COLOR,
                        fontSize: '0.85rem',
                        mb: 0.5,
                        textTransform: 'uppercase',
                        letterSpacing: 0.5
                      }}
                    >
                      {workshop.college}
                    </Typography>

                    <Typography
                      sx={{
                        fontWeight: 500,
                        color: '#666',
                        fontSize: '0.8rem',
                      }}
                    >
                      {workshop.date}
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
}

export default MyWorkshops;