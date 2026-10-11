import React, { useEffect, useRef } from 'react';
import { Box, Typography, Stack, useMediaQuery, useTheme } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

// --- Count Up Component ---
const Counter = ({ value, suffix = "" }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, value, { duration: 2, ease: "easeOut" });
      return animation.stop;
    }
  }, [isInView, value, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        minHeight: { md: '90vh' },
        bgcolor: '#121212',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: { xs: 2, md: 5 },
        py: { xs: 6, md: 4 },
        overflow: 'hidden'
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={{ xs: 5, md: 8 }}
        sx={{ width: '100%', maxWidth: 1200, alignItems: 'center' }}
      >
        {/* --- LEFT: Portrait Video Card with True Centered Overlay Content --- */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          sx={{ flex: 1, textAlign: 'center', width: '100%', maxWidth: 360 }}
        >
          {/* Instagram Portrait Ratio Container (9:16) */}
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              maxWidth: { xs: 260, md: 300 },
              aspectRatio: '9/16',
              mx: 'auto',
              borderRadius: '24px',
              overflow: 'hidden',
              border: '3px solid #1f1f1f',
              boxShadow: '0 0 35px rgba(9, 238, 36, 0.25)',
              bgcolor: '#000'
            }}
          >
            <video
              src="/videos/About.mp4"
              autoPlay
              // muted
              loop
              playsInline
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
            />

            {/* Dark Gradient Overlay for Readability */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '65%',
                background: 'linear-gradient(to top, rgba(0,0,0,0.95) 15%, rgba(0,0,0,0.75) 60%, transparent 100%)',
                zIndex: 1
              }}
            />

            {/* Content Overlaid Inside Video Frame at Bottom - Perfectly Centered */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                p: 2.5,
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                mx: 'auto'
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 900, mb: 0.2, color: '#fff', fontSize: '1.4rem', width: '100%' }}>
                MURALI BALAN
              </Typography>
              <Typography variant="body2" sx={{ color: '#09ee24ff', fontWeight: 700, mb: 1.5, letterSpacing: 0.5, fontSize: '0.75rem', width: '100%' }}>
                SENIOR SKILL ENGINEER
              </Typography>

              {/* Contact Stack with True Center Alignment */}
              <Stack spacing={0.6} sx={{ width: '100%', alignItems: 'center' }}>
                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gap: 1, 
                    color: '#ddd', 
                    transition: '0.3s',
                    width: '100%',
                    '&:hover': { color: '#09ee24ff' } 
                  }}
                >
                  <MailOutlineIcon sx={{ fontSize: 15, opacity: 0.8, flexShrink: 0 }} />
                  <Typography variant="caption" sx={{ fontSize: '0.75rem', textAlign: 'left' }}>muralibalan66@gmail.com</Typography>
                </Box>

                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gap: 1, 
                    color: '#ddd', 
                    transition: '0.3s',
                    width: '100%',
                    '&:hover': { color: '#09ee24ff' } 
                  }}
                >
                  <PhoneOutlinedIcon sx={{ fontSize: 15, opacity: 0.8, flexShrink: 0 }} />
                  <Typography variant="caption" sx={{ fontSize: '0.75rem', textAlign: 'left' }}>+91 7010777680</Typography>
                </Box>

                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gap: 1, 
                    color: '#ddd', 
                    transition: '0.3s',
                    width: '100%',
                    '&:hover': { color: '#09ee24ff' } 
                  }}
                >
                  <LocationOnOutlinedIcon sx={{ fontSize: 15, opacity: 0.8, flexShrink: 0 }} />
                  <Typography variant="caption" sx={{ fontSize: '0.75rem', textAlign: 'left' }}>Chennai, Tamil Nadu</Typography>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Box>

        {/* --- RIGHT: Content --- */}
        <Box sx={{ flex: 1.5 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h3" sx={{ fontWeight: 900, fontSize: { xs: '2rem', md: '2.8rem' }, mb: 2 }}>
              Teaching is my <span style={{ color: '#09ee24ff' }}>Purpose.</span>
            </Typography>
            
            <Typography variant="body1" sx={{ color: '#bbb', lineHeight: 1.7, mb: 3 }}>
              I am a passionate Tech Trainer currently working at <b>ProgramPark Software Company</b>. 
              Formerly the Center Head at <b>SoftTechAshram</b>, I now lead as the Center Head at 
              <span style={{ color: '#fff' }}> Green Apple Computer Education, Kumbakonam.</span>
              <br /><br />
              My mission is to empower students with industry-relevant skills, turning their potential into professional excellence.
            </Typography>
          </motion.div>

          {/* Core Expertise Grid */}
          <Box sx={{ mt: 3 }}>
            <Typography variant="overline" sx={{ color: '#555', fontWeight: 900 }}>EXPERTISE</Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1.5, mt: 1 }}>
              {['React JS', 'Python AI', 'Power BI', 'Node.js', 'MySQL', 'Full Stack'].map((skill) => (
                <Box key={skill} sx={{ 
                  p: 1, border: '1px solid #333', borderRadius: '8px', textAlign: 'center',
                  fontSize: '0.85rem', fontWeight: 600, color: '#eee', bgcolor: 'rgba(255,255,255,0.02)'
                }}>
                  {skill}
                </Box>
              ))}
            </Box>
          </Box>

          {/* --- ANIMATED COUNTERS --- */}
          <Stack 
            direction="row" 
            spacing={{ xs: 2, md: 4 }} 
            sx={{ mt: 5, p: 2, bgcolor: 'rgba(9, 238, 36, 0.05)', borderRadius: '15px' }}
          >
            <Box sx={{ textAlign: 'center', flex: 1 }}>
              <Typography variant="h4" sx={{ fontWeight: 900, color: '#09ee24ff' }}>
                <Counter value={1200} suffix="+" />
              </Typography>
              <Typography variant="caption" sx={{ color: '#888', fontWeight: 700 }}>STUDENTS TRAINED</Typography>
            </Box>
            
            <Box sx={{ width: '1px', bgcolor: '#333' }} />

            <Box sx={{ textAlign: 'center', flex: 1 }}>
              <Typography variant="h4" sx={{ fontWeight: 900, color: '#fff' }}>
                <Counter value={4} suffix="+" />
              </Typography>
              <Typography variant="caption" sx={{ color: '#888', fontWeight: 700 }}>YEARS EXP</Typography>
            </Box>

            <Box sx={{ width: '1px', bgcolor: '#333' }} />

            <Box sx={{ textAlign: 'center', flex: 1 }}>
              <Typography variant="h4" sx={{ fontWeight: 900, color: '#fff' }}>
                <Counter value={98} suffix="%" />
              </Typography>
              <Typography variant="caption" sx={{ color: '#888', fontWeight: 700 }}>SATISFACTION</Typography>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default About;