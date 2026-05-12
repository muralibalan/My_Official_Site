import React, { useEffect, useRef } from 'react';
import { Box, Typography, Avatar, Stack, Divider, useMediaQuery, useTheme } from '@mui/material';
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

  const contactItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 1.5,
    py: 0.8,
    transition: '0.3s',
    '&:hover': { color: '#09ee24ff' }
  };

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
        py: { xs: 6, md: 0 },
        overflow: 'hidden'
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={{ xs: 5, md: 10 }}
        sx={{ width: '100%', maxWidth: 1200, alignItems: 'center' }}
      >
        {/* --- LEFT: Profile --- */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          sx={{ flex: 1, textAlign: 'center' }}
        >
          <Box sx={{ position: 'relative', display: 'inline-block', mb: 2 }}>
            <Avatar
              src="/images/Murali3.png"
              alt="Murali"
              sx={{ 
                width: { xs: 180, md: 240 }, 
                height: { xs: 180, md: 240 }, 
                border: '4px solid #181818',
                boxShadow: '0 0 30px rgba(9, 238, 36, 0.2)' 
              }}
            />
          </Box>

          <Typography variant="h4" sx={{ fontWeight: 900, mb: 0.5 }}>MURALI BALAN</Typography>
          <Typography variant="body1" sx={{ color: '#09ee24ff', fontWeight: 700, mb: 3, letterSpacing: 1 }}>
            SENIOR SKILL ENGINEER
          </Typography>

          <Stack sx={{ width: 'fit-content', mx: 'auto', textAlign: 'left' }}>
            <Box sx={contactItemStyle}>
              <MailOutlineIcon sx={{ fontSize: 18, opacity: 0.6 }} />
              <Typography variant="body2">muralibalan66@gmail.com</Typography>
            </Box>
            <Box sx={contactItemStyle}>
              <PhoneOutlinedIcon sx={{ fontSize: 18, opacity: 0.6 }} />
              <Typography variant="body2">+91 7010777680</Typography>
            </Box>
            <Box sx={contactItemStyle}>
              <LocationOnOutlinedIcon sx={{ fontSize: 18, opacity: 0.6 }} />
              <Typography variant="body2">Chennai, Tamil Nadu</Typography>
            </Box>
          </Stack>
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
            
            <Divider orientation="vertical" flexItem sx={{ bgcolor: '#333' }} />

            <Box sx={{ textAlign: 'center', flex: 1 }}>
              <Typography variant="h4" sx={{ fontWeight: 900, color: '#fff' }}>
                <Counter value={4} suffix="+" />
              </Typography>
              <Typography variant="caption" sx={{ color: '#888', fontWeight: 700 }}>YEARS EXP</Typography>
            </Box>

            <Divider orientation="vertical" flexItem sx={{ bgcolor: '#333' }} />

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