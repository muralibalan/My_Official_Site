import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Stack, Avatar } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';

// GATN68.mp4-க்கு மட்டும் full frame-ல் தெரிய isFullCover: true சேர்க்கப்பட்டுள்ளது
const MEDIA_ITEMS = [
  { type: 'image', src: '/images/Murali.png', badge: '1200+ STUDENTS' },
  { type: 'video', src: '/videos/TN68.mp4', badge: 'LIVE WORKSHOP ', isFullCover: true },
  { type: 'image', src: '/images/VLogoo.png', badge: 'TECH MENTOR ' },
  { type: 'video', src: '/videos/About.mp4', badge: 'ABOUT ME ' }
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

          {/* Floating Outer Frame */}
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
              bgcolor: '#1a1a1a',
              width: { xs: 250, md: 380 },
              height: { xs: 250, md: 380 },
              borderRadius: '30px',
              border: '1.5px solid rgba(255,255,255,0.18)',
              boxShadow: currentItem.type === 'video'
                ? '0 0 30px rgba(9, 238, 36, 0.25), 0 0 60px rgba(255, 255, 255, 0.12), 0 25px 50px rgba(0, 0, 0, 0.8)'
                : '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'box-shadow 0.6s ease'
            }}
          >
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
                  borderRadius: '20px',
                  overflow: 'hidden',
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
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: '100%',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      p: currentItem.isFullCover ? 0 : 1.5 // GATN68-க்கு padding 0 ஆக்கப்பட்டு full frame-க்கு மாறும்
                    }}
                  >
                    {/* Background Ambient Video (isFullCover இல்லையென்றால் மட்டும் தேவை) */}
                    {!currentItem.isFullCover && (
                      <video
                        key={`${currentItem.src}-bg`}
                        src={currentItem.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          filter: 'blur(25px) brightness(0.7)',
                          transform: 'scale(1.25)',
                          zIndex: 1
                        }}
                      />
                    )}

                    {/* Foreground Video */}
                    <video
                      key={currentItem.src}
                      src={currentItem.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{
                        position: 'relative',
                        zIndex: 2,
                        width: currentItem.isFullCover ? '100%' : '93%',
                        height: currentItem.isFullCover ? '100%' : '93%',
                        borderRadius: currentItem.isFullCover ? '20px' : '16px',
                        objectFit: currentItem.isFullCover ? 'cover' : 'contain', // GATN68 frame-ஐ முழுமையாக நிரப்பும்
                        boxShadow: currentItem.isFullCover ? 'none' : '0 10px 30px rgba(0, 0, 0, 0.75), 0 0 25px rgba(255, 255, 255, 0.15)'
                      }}
                    />
                  </Box>
                )}

                {/* Badge */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 12,
                    right: 12,
                    zIndex: 3,
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