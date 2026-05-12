import React from 'react';
import { Box, Typography, Button, Stack, Avatar } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';

function Home() {
  const navigate = useNavigate();

  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <Box
      sx={{
        bgcolor: '#181818',
        color: "white",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '85vh',
        px: { xs: 2, md: 8 },
        overflow: 'hidden'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          gap: { xs: 6, md: 12 },
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '1300px',
          width: '100%'
        }}
      >
        {/* --- LEFT SIDE: INFO --- */}
        <Box
          component={motion.div}
          initial="initial"
          animate="animate"
          variants={{ animate: { transition: { staggerChildren: 0.2 } } }}
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            textAlign: { xs: 'center', md: 'left' }
          }}
        >
          <motion.div variants={fadeInUp}>
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontWeight: 900,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                background: 'linear-gradient(90deg, #fff, #09ee24ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              MURALI BALAN
            </Typography>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Typography
              variant="h5"
              sx={{ mt: 1, fontSize: { xs: '1.2rem', md: '1.6rem' }, fontWeight: 500 }}
            >
              I Am a{" "}
              <TypeAnimation
                sequence={[
                  "Web Developer", 3000,
                  "Technical Mentor", 3000,
                  "Freelancer", 3000,
                  "Workshop Facilitator", 3000
                ]}
                speed={50}
                repeat={Infinity}
                style={{ fontWeight: 'bold', display: 'inline-block', color: '#09ee24ff' }}
              />
            </Typography>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Typography
              variant="body1"
              sx={{
                mt: 3,
                color: '#bbb',
                lineHeight: 1.8,
                fontSize: { xs: '0.95rem', md: '1.05rem' },
                maxWidth: '550px'
              }}
            >
              I am a passionate Tech Trainer and Senior Developer currently working at
              <b style={{ color: '#fff' }}> ProgramPark Software Company</b>.
              Previously, I served as the Center Head at <b>SoftTechAshram Institute</b>.
              <br /><br />
              Now, I continue my leadership journey as the Center Head at
              <b style={{ color: '#09ee24ff' }}> Green Apple Computer Education, Kumbakonam</b>.
              I have successfully trained <b>1200+ students</b>, helping them build solid careers in the IT field.
            </Typography>
          </motion.div>

          <Stack
            component={motion.div}
            variants={fadeInUp}
            direction="row"
            justifyContent={{ xs: 'center', md: 'flex-start' }}
            spacing={2}
            sx={{ mt: 5 }}
          >
            <Button
              variant="contained"
              onClick={() => navigate("/projects")}
              sx={{
                bgcolor: '#fff',
                color: '#181818',
                fontWeight: 800,
                borderRadius: '8px',
                px: 4,
                py: 1.2,
                '&:hover': { bgcolor: '#09ee24ff', color: '#000' }
              }}
            >
              View My Projects
            </Button>

            <Button
              variant="outlined"
              onClick={() => navigate("/workshop")}
              sx={{
                color: '#fff',
                borderColor: 'rgba(255,255,255,0.3)',
                fontWeight: 700,
                borderRadius: '8px',
                px: 4,
                '&:hover': { borderColor: '#09ee24ff', color: '#09ee24ff' }
              }}
            >
              Tech Talks
            </Button>
          </Stack>
        </Box>

        {/* --- RIGHT SIDE: PHOTO DESIGN --- */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          sx={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1
          }}
        >
          {/* Animated Background Ring */}
          <Box
            component={motion.div}
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            sx={{
              position: 'absolute',
              width: { xs: 280, md: 460 },
              height: { xs: 280, md: 460 },
              border: '1.5px dashed rgba(9, 238, 36, 0.4)',
              borderRadius: '50%',
            }}
          />

          {/* Clean Rounded Image Container */}
          <Box
            component={motion.div}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            sx={{
              position: 'relative',
              zIndex: 2,
              p: 1.5,
              bgcolor: '#222',
              width: { xs: 250, md: 400 },
              height: { xs: 250, md: 400 },
              borderRadius: '30px', // Modern clean look
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)'
            }}
          >
            <Avatar
              src='/images/Murali.png'
              alt="Murali Balan"
              variant="rounded"
              sx={{
                width: '100%',
                height: '100%',
                borderRadius: '20px',
                objectFit: 'cover'
              }}
            />

            {/* Experience Badge */}
            <Box
              sx={{
                position: 'absolute',
                bottom: -15,
                right: { xs: 10, md: -20 },
                bgcolor: '#09ee24ff',
                color: '#000',
                px: 2,
                py: 1,
                borderRadius: '10px',
                fontWeight: 900,
                fontSize: '0.85rem',
                boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
              }}
            >
              1200+ STUDENTS
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;