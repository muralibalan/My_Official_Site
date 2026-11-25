import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" }
};

function Home() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundImage: {
          xs: `url('/images/Home2.png')`,
          md: `url('/images/Home1.png')`
        },
        // Mobile-ல் இடது பக்கம் உள்ள உங்கள் போட்டோ கட் ஆகாமல் முழுமையாகத் தெரிய left bottom அமைக்கப்பட்டுள்ளது
        backgroundSize: { xs: '100% 100%', sm: 'cover', md: 'cover' },
        backgroundPosition: { xs: 'left bottom', md: 'center center' },
        backgroundRepeat: 'no-repeat',
        bgcolor: '#031d15',
        color: "white",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: { xs: 'flex-start', md: 'center' },
        minHeight: '100vh',
        pt: { xs: 8, sm: 10, md: 0 },
        pb: { xs: 42, sm: 48, md: 0 }, // Mobile-ல் கீழே உள்ள போட்டோவை Content தொடாமல் இருக்க
        px: { xs: 2.5, md: 6 },
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* --- GENTLE SHAKE / FLOATING ANIMATION WRAPPER --- */}
      <Box
        component={motion.div}
        animate={{
          y: [0, -6, 0, 6, 0],
          x: [0, 3, 0, -3, 0],
          rotate: [0, 0.3, 0, -0.3, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          zIndex: 2
        }}
      >
        {/* --- CENTERED CONTENT CONTAINER --- */}
        <Box
          component={motion.div}
          initial="initial"
          animate="animate"
          variants={{ animate: { transition: { staggerChildren: 0.2 } } }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: { xs: '100%', sm: '540px', md: '560px', lg: '650px' }
          }}
        >
          {/* NAME - BG-ல் உள்ள Emerald Green & Golden Yellow Glow-க்கு மேட்ச் ஆகும் Gradient */}
          <motion.div variants={fadeInUp}>
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontWeight: 900,
                fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.4rem' },
                background: 'linear-gradient(90deg, #ffffff 15%, #22ff7a 60%, #fde047 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0px 4px 12px rgba(34, 255, 122, 0.25))',
                letterSpacing: '1.2px'
              }}
            >
              MURALI BALAN
            </Typography>
          </motion.div>

          {/* TYPING ANIMATION */}
          <motion.div variants={fadeInUp}>
            <Typography
              variant="h5"
              sx={{
                mt: 1,
                fontSize: { xs: '1.15rem', sm: '1.35rem', md: '1.55rem' },
                fontWeight: 600,
                color: '#ecfdf5'
              }}
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
                style={{
                  fontWeight: 'bold',
                  display: 'inline-block',
                  color: '#22ff7a',
                  textShadow: '0 0 12px rgba(34, 255, 122, 0.45)'
                }}
              />
            </Typography>
          </motion.div>

          {/* BIO DESCRIPTION */}
          <motion.div variants={fadeInUp}>
            <Typography
              variant="body1"
              sx={{
                mt: 2.5,
                color: '#d1fae5', // Dark green BG-க்கு இதமான Soft Mint-White நிறம்
                lineHeight: 1.75,
                fontSize: { xs: '0.92rem', sm: '1rem', md: '1.05rem' },
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)'
              }}
            >
              I am a passionate Tech Trainer and Senior Developer currently working at
              <b style={{ color: '#ffffff' }}> ProgramPark Software Company</b>.
              Previously, I served as the Center Head at <b style={{ color: '#ffffff' }}>SoftTechAshram Institute</b>.
              <br /><br />
              Now, I continue my leadership journey as the Center Head at
              <b style={{ color: '#fde047' }}> Green Apple Computer Education, Kumbakonam</b>.
              I have successfully trained <b style={{ color: '#22ff7a' }}>1200+ students</b>, helping them build solid careers in the IT field.
            </Typography>
          </motion.div>

          {/* ACTION BUTTONS */}
          <Stack
            component={motion.div}
            variants={fadeInUp}
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{ mt: { xs: 3, md: 4.5 }, width: '100%' }}
          >
            <Button
              variant="contained"
              onClick={() => navigate("/projects")}
              sx={{
                background: 'linear-gradient(90deg, #22ff7a, #10b981)',
                color: '#022c22',
                fontWeight: 800,
                borderRadius: '8px',
                px: { xs: 2.5, md: 4 },
                py: 1.2,
                fontSize: { xs: '0.85rem', md: '0.95rem' },
                boxShadow: '0 4px 20px rgba(34, 255, 122, 0.35)',
                '&:hover': {
                  background: 'linear-gradient(90deg, #fde047, #facc15)',
                  color: '#000',
                  boxShadow: '0 4px 20px rgba(250, 204, 21, 0.45)'
                }
              }}
            >
              View My Projects
            </Button>

            <Button
              variant="outlined"
              onClick={() => navigate("/workshop")}
              sx={{
                color: '#fde047',
                borderColor: 'rgba(253, 224, 71, 0.6)',
                bgcolor: 'rgba(3, 29, 21, 0.55)',
                backdropFilter: 'blur(6px)',
                fontWeight: 700,
                borderRadius: '8px',
                px: { xs: 2.5, md: 4 },
                py: 1.2,
                fontSize: { xs: '0.85rem', md: '0.95rem' },
                '&:hover': {
                  borderColor: '#22ff7a',
                  color: '#22ff7a',
                  bgcolor: 'rgba(34, 255, 122, 0.1)'
                }
              }}
            >
              Tech Talks
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;