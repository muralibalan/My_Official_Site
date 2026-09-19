/* =========================
   IMPORTS
========================= */
import React, { useState } from 'react';
import {
  Outlet,
  Link,
  useLocation
} from 'react-router-dom';

import {
  Box,
  Typography,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
  Divider,
  Tooltip
} from '@mui/material';

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaWhatsapp
} from 'react-icons/fa';

import {
  MdLiveTv
} from 'react-icons/md';

import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';

/* =========================
   MAIN COMPONENT
========================= */
function Layout() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  /* =========================
     NAV LINKS
  ========================= */
  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About' },
    { to: '/education', text: 'Experience' },
    { to: '/students', text: 'Students' },
  ];

  /* =========================
     NAV STYLE
  ========================= */
  const navTextStyle = {
    position: 'relative',
    fontWeight: 700,
    letterSpacing: 0.5,
    transition: '0.4s ease',
    cursor: 'pointer',
    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      bottom: -5,
      width: 0,
      height: '2px',
      background: 'linear-gradient(to right,#00ff88,#00e5ff)',
      transition: '0.4s ease',
      borderRadius: '10px',
    },
    '&:hover::after': {
      width: '100%',
    },
    '&:hover': {
      color: '#00ffcc',
      textShadow: '0 0 20px #00ffcc',
      transform: 'translateY(-2px)',
    },
  };

  /* =========================
     ICON STYLE
  ========================= */
  const socialStyle = {
    width: 42,
    height: 42,
    color: '#fff',
    border: '1px solid rgba(255,255,255,0.08)',
    background: 'rgba(255,255,255,0.04)',
    backdropFilter: 'blur(10px)',
    transition: '0.4s ease',
    '&:hover': {
      transform: 'translateY(-4px) scale(1.06)',
      background: 'linear-gradient(135deg,#00ff88,#00e5ff)',
      color: '#111',
      boxShadow: '0 0 25px rgba(0,255,200,0.5)',
    },
  };

  /* =========================
     RETURN
  ========================= */
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom right,#050505,#101010,#161616)',
        color: '#fff',
        overflowX: 'hidden',
        position: 'relative',
      }}
    >
      {/* =========================
         BACKGROUND BLUR
      ========================= */}
      <Box
        sx={{
          position: 'absolute',
          width: 300,
          height: 300,
          background: '#00ff8840',
          filter: 'blur(130px)',
          top: -100,
          left: -100,
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          width: 250,
          height: 250,
          background: '#00e5ff30',
          filter: 'blur(120px)',
          bottom: 0,
          right: 0,
          zIndex: 0,
        }}
      />

      {/* =========================
         NAVBAR
      ========================= */}
      <Box
        component={motion.div}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 999,
          backdropFilter: 'blur(18px)',
          background: 'rgba(0,0,0,0.45)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <Box
          sx={{
            maxWidth: '1450px',
            mx: 'auto',
            px: { xs: 2, md: 5 },
            py: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* LEFT */}
          <Stack direction="row" spacing={4} alignItems="center">
            {/* MOBILE MENU */}
            {isMobile && (
              <IconButton onClick={() => setDrawerOpen(true)} sx={socialStyle}>
                <MenuIcon />
              </IconButton>
            )}

            {/* DESKTOP NAV */}
            {!isMobile && (
              <Stack direction="row" spacing={5}>
                {navLinks.map((link, index) => {
                  const active = location.pathname === link.to;
                  return (
                    <Link
                      key={index}
                      to={link.to}
                      style={{
                        textDecoration: 'none',
                        color: active ? '#00ffcc' : '#fff',
                      }}
                    >
                      <Typography
                        sx={{
                          ...navTextStyle,
                          color: active ? '#00ffcc' : '#fff',
                          textShadow: active ? '0 0 20px #00ffcc' : 'none',
                        }}
                      >
                        {link.text}
                      </Typography>
                    </Link>
                  );
                })}
              </Stack>
            )}
          </Stack>

          {/* RIGHT */}
          <Stack direction="row" spacing={1} alignItems="center">
            {/* BOOK ICON */}
            <motion.div whileHover={{ scale: 1.08 }}>
              <IconButton
                component={Link}
                to="/study"
                sx={{
                  width: 42,
                  height: 42,
                  background: 'linear-gradient(135deg,#00ff88,#00e5ff)',
                  color: '#111',
                  '&:hover': {
                    background: 'linear-gradient(135deg,#00e5ff,#00ff88)',
                  },
                }}
              >
                <AutoStoriesIcon />
              </IconButton>
            </motion.div>

            {/* DESKTOP SOCIAL ICONS */}
            {!isMobile && (
              <>
                <IconButton component="a" href="https://github.com/muralibalan" target="_blank" sx={socialStyle}>
                  <FaGithub />
                </IconButton>
                <IconButton component="a" href="https://www.linkedin.com/in/muraliriya" target="_blank" sx={socialStyle}>
                  <FaLinkedin />
                </IconButton>
                <IconButton component="a" href="https://www.instagram.com/muraliashram/" target="_blank" sx={socialStyle}>
                  <FaInstagram />
                </IconButton>
                <IconButton component="a" href="https://www.youtube.com/@muraliashram" target="_blank" sx={socialStyle}>
                  <FaYoutube />
                </IconButton>
                <IconButton component="a" href="https://www.facebook.com/murali.balan.180/" target="_blank" sx={socialStyle}>
                  <FaFacebookF />
                </IconButton>
              </>
            )}
          </Stack>
        </Box>
      </Box>

      {/* =========================
         MOBILE DRAWER
      ========================= */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            background: 'linear-gradient(to bottom,#111,#050505)',
            color: '#fff',
            borderRight: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            flexDirection: 'column',
          },
        }}
      >
        {/* HEADER */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 900,
              background: 'linear-gradient(to right,#00ff88,#00e5ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Navigation
          </Typography>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: '#fff' }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)' }} />

        {/* LINKS */}
        <List sx={{ mt: 2, flexGrow: 1 }}>
          {navLinks.map((link, index) => {
            const active = location.pathname === link.to;
            return (
              <ListItemButton
                key={index}
                component={Link}
                to={link.to}
                onClick={() => setDrawerOpen(false)}
                sx={{
                  mx: 2,
                  mb: 1,
                  borderRadius: '14px',
                  transition: '0.4s ease',
                  background: active ? 'linear-gradient(135deg,#00ff88,#00e5ff)' : 'transparent',
                  color: active ? '#111' : '#fff',
                  '&:hover': {
                    background: 'linear-gradient(135deg,#00ff88,#00e5ff)',
                    color: '#111',
                    transform: 'translateX(8px)',
                  },
                }}
              >
                <ListItemText primary={link.text} primaryTypographyProps={{ fontWeight: 700 }} />
              </ListItemButton>
            );
          })}
        </List>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)' }} />

        {/* MOBILE DRAWER SOCIAL ICONS */}
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'center', gap: 1.5, flexWrap: 'wrap' }}>
          <IconButton component="a" href="https://github.com/muralibalan" target="_blank" sx={socialStyle}>
            <FaGithub />
          </IconButton>
          <IconButton component="a" href="https://www.linkedin.com/in/muraliriya" target="_blank" sx={socialStyle}>
            <FaLinkedin />
          </IconButton>
          <IconButton component="a" href="https://www.instagram.com/murali_webtrainer/" target="_blank" sx={socialStyle}>
            <FaInstagram />
          </IconButton>
          <IconButton component="a" href="https://www.youtube.com/@muraliashram" target="_blank" sx={socialStyle}>
            <FaYoutube />
          </IconButton>
          <IconButton component="a" href="https://www.facebook.com" target="_blank" sx={socialStyle}>
            <FaFacebookF />
          </IconButton>
        </Box>
      </Drawer>

      {/* =========================
         PAGE CONTENT
      ========================= */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        sx={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '1450px',
          mx: 'auto',
          px: { xs: 1, md: 3 },
          py: 4,
        }}
      >
        <Outlet />
      </Box>

      {/* ====================================
         FIXED ONLINE CLASS BUTTON WITH LABEL
      ==================================== */}
      <Box
        component={motion.div}
        animate={{
          y: [0, -10, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        sx={{
          position: 'fixed',
          right: '25px',
          bottom: '105px',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        {/* Label on the left of the icon */}
        <Box
          sx={{
            background: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(8px)',
            color: '#fff',
            px: '12px',
            py: '6px',
            borderRadius: '20px',
            fontSize: '13px',
            fontWeight: 700,
            border: '1px solid rgba(255, 145, 0, 0.3)',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
          }}
        >
          Online Class
        </Box>

        <Tooltip title="Online Class">
          <IconButton
            component={Link}
            to="/schedule"
            sx={{
              width: 60,
              height: 60,
              background: 'linear-gradient(135deg,#ff1744,#ff9100)',
              color: '#fff',
              border: '3px solid rgba(255,255,255,0.15)',
              boxShadow: '0 0 30px rgba(255,80,80,0.55)',
              backdropFilter: 'blur(12px)',
              '&:hover': {
                transform: 'scale(1.08)',
                background: 'linear-gradient(135deg,#ff9100,#ff1744)',
                boxShadow: '0 0 40px rgba(255,80,80,0.9)',
              },
            }}
          >
            <MdLiveTv size={30} />
          </IconButton>
        </Tooltip>
      </Box>

      {/* ====================================
         FIXED "CHAT WITH MURALI" BUTTON WITH LABEL
      ==================================== */}
      <Box
        component={motion.div}
        animate={{
          y: [0, -8, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        sx={{
          position: 'fixed',
          right: '25px',
          bottom: '25px',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        {/* Label on the left of the icon */}
        <Box
          sx={{
            background: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(8px)',
            color: '#fff',
            px: '12px',
            py: '6px',
            borderRadius: '20px',
            fontSize: '13px',
            fontWeight: 700,
            border: '1px solid rgba(37, 211, 102, 0.3)',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
          }}
        >
          Chat with Murali
        </Box>

        <Tooltip title="Chat with Murali">
          <IconButton
            component="a"
            href="https://wa.me/917010777680?text=Hello%20Murali,%20I%20want%20to%20connect%20with%20you!"
            target="_blank"
            sx={{
              width: 65,
              height: 65,
              background: 'linear-gradient(135deg,#25D366,#128C7E)',
              color: '#fff',
              border: '3px solid rgba(255,255,255,0.15)',
              boxShadow: '0 0 30px rgba(37,211,102,0.6)',
              backdropFilter: 'blur(12px)',
              '&:hover': {
                transform: 'scale(1.08)',
                background: 'linear-gradient(135deg,#128C7E,#25D366)',
                boxShadow: '0 0 40px rgba(37,211,102,0.9)',
              },
            }}
          >
            <FaWhatsapp size={34} />
          </IconButton>
        </Tooltip>
      </Box>

    </Box>
  );
}

export default Layout;