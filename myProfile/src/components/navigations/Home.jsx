import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Stack, Avatar } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';

// Component-க்கு வெளியே வைப்பதால் re-render ஆகும் போது தேவையின்றி recreate ஆகாது
const MEDIA_ITEMS = [
  { type: 'image', src: '/images/Murali.png', badge: '1200+ STUDENTS' },
  { type: 'video', src: '/videos/GATN68.mp4', badge: 'LIVE WORKSHOP 🎥' },
  { type: 'image', src: '/images/VLogoo.png', badge: 'TECH MENTOR 💻' },
  { type: 'video', src: '/videos/About.mp4', badge: 'CLASSROOM SESSION 🎬' }
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

function Home() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentItem = MEDIA_ITEMS[currentIndex];

  // Dynamic Duration: Video-க்கு 20 வினாடிகள், Image-க்கு 5 வினாடிகள்
  useEffect(() => {
    const duration = currentItem.type === 'video' ? 20000 : 5000;

    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % MEDIA_ITEMS.length);
    }, duration);

    return () => clearTimeout(timer);
  }, [currentIndex, currentItem.type]);

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

        {/* --- RIGHT SIDE: 3D ROTATING MEDIA CONTAINER --- */}
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            perspective: '1000px'
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

          {/* Floating Frame (Slowly moves Up, Down, Left, Right) */}
          <Box
            component={motion.div}
            animate={{
              y: [0, -12, 0, 12, 0],
              x: [0, 8, 0, -8, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            sx={{
              position: 'relative',
              zIndex: 2,
              p: 1.5,
              bgcolor: '#222',
              width: { xs: 250, md: 380 },
              height: { xs: 250, md: 380 },
              borderRadius: '30px',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {/* Animating Inner Content */}
            <AnimatePresence mode="wait">
              <Box
                component={motion.div}
                key={currentIndex}
                initial={{ scale: 0.8, rotate: -20, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                exit={{ scale: 0.8, rotate: 20, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                sx={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {currentItem.type === 'image' ? (
                  <Avatar
                    src={currentItem.src}
                    alt="Murali Balan"
                    variant="rounded"
                    sx={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '20px',
                      objectFit: 'cover',
                      aspectRatio: '1 / 1'
                    }}
                  />
                ) : (
                  <video
                    key={currentItem.src}
                    src={currentItem.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '20px',
                      objectFit: 'contain',
                      backgroundColor: '#000'
                    }}
                  />
                )}

                {/* Badge */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 12,
                    right: 12,
                    bgcolor: currentItem.type === 'image' ? '#09ee24ff' : 'rgba(0, 0, 0, 0.85)',
                    color: currentItem.type === 'image' ? '#000' : '#09ee24ff',
                    px: 2,
                    py: 1,
                    borderRadius: '10px',
                    fontWeight: 800,
                    fontSize: '0.8rem',
                    border: currentItem.type === 'video' ? '1px solid #09ee24ff' : 'none',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
                    pointerEvents: 'none'
                  }}
                >
                  {currentItem.badge}
                </Box>
              </Box>
            </AnimatePresence>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;