import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { Box, Typography, Stack, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Layout() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  //Link styles
  const styleLink = {
    textDecoration: 'none',
    color: '#fff'
  }

  const styleLinkText = {
    fontWeight: 600,
    transition: 'all 0.3s ease',
    '&:hover': {
      outline: '1px solid #cd3ecdff',
      padding: '5px',
      borderRadius: '10px',
    }
  }

  const styleIcon = {
    color: "#fff",
    '&:hover': {
      boxShadow: '0 0 20px #f7f1f2ff',
    }
  }

  // Drawer Links
  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/education", text: "Experience" },
    { to: "/students", text: "Students" },
  ];

  return (
    <>
      <Box sx={{
        minHeight: '90vh',
        bgcolor: '#181818',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        textAlign: 'center',
        p: 2
      }}>

        {/* Top Navigation Row */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center'
        }}>

          {/* Navigation - Desktop ku ethu */}
          {!isMobile && (
            <Stack direction="row" spacing={6}>
              {navLinks.map((link, index) => (
                <Link key={index} to={link.to} style={styleLink}>
                  <Typography variant="h6" sx={styleLinkText}>{link.text}</Typography>
                </Link>
              ))}
            </Stack>
          )}

          {/* Mobile Menu Icon */}
          {isMobile && (
            <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: "#fff" }}>
              <MenuIcon />
            </IconButton>
          )}

          {/* Social Media Icons */}
          <Stack direction="row" spacing={2}>
            <IconButton component="a" href="https://github.com/muralibalan" target="_blank" sx={styleIcon}>
              <FaGithub />
            </IconButton>
            <IconButton component="a" href="https://www.instagram.com/murali_webtrainer/" target="_blank" sx={styleIcon}>
              <FaLinkedin />
            </IconButton>
            <IconButton component="a" href="https://www.instagram.com/murali_webtrainer/" target="_blank" sx={styleIcon}>
              <FaInstagram />
            </IconButton>
            <IconButton component="a" href="https://www.youtube.com/@error2win" target="_blank" sx={styleIcon}>
              <FaYoutube />
            </IconButton>

            <IconButton
              component={Link}
              to="/study"
              sx={styleIcon}
              aria-label="Course Viewer"
            >
              <AutoStoriesIcon />
            </IconButton>
            
          </Stack>
        </Box>

        {/* Drawer for Mobile */}
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          PaperProps={{ sx: { bgcolor: '#181818', color: '#fff', width: 200 } }}
        >
          <List>
            {navLinks.map((link, index) => (
              <ListItem
                sx={{ color: 'white' }}
                button
                key={index}
                component={Link}
                to={link.to}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemText primary={link.text} />
              </ListItem>
            ))}
          </List>
        </Drawer>

        {/* Child Page Content */}
        <Box sx={{ mt: 4, padding: 2 }}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
}

export default Layout;
