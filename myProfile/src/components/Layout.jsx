import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { Box, Typography, Stack, IconButton } from '@mui/material';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Layout() {
  return (
    <>
      <Box sx={{ minHeight: '100vh', bgcolor: '#181818', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', textAlign: 'center', p: 2 }}>
        
        {/* Top Navigation Row */}
        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center'}}>
          
          {/* Logo */}
          <Typography variant="h4" sx={{ fontWeight: 800 }}>
            Murali Official Site
          </Typography>

          {/* Navigation */}
          <Stack direction="row" spacing={4}>
            <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>Home</Typography>
            </Link>
            <Link to="/about" style={{ textDecoration: 'none', color: '#fff' }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>About</Typography>
            </Link>
            <Link to="/skills" style={{ textDecoration: 'none', color: '#fff' }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>Skills</Typography>
            </Link>
             <Link to="/resume" style={{ textDecoration: 'none', color: '#fff' }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>Qualifications</Typography>
            </Link>
          </Stack>

          {/* Social Media Icons */}
          <Stack direction="row" spacing={2}>
            <IconButton component="a" href="https://github.com/muralibalan" target="_blank" sx={{ color: "#fff" }}>
              <FaGithub />
            </IconButton>
            <IconButton component="a" href="https://www.linkedin.com/in/muraliriya/" target="_blank" sx={{ color: "#fff" }}>
              <FaLinkedin />
            </IconButton>
            <IconButton component="a" href="https://instagram.com/" target="_blank" sx={{ color: "#fff" }}>
              <FaInstagram />
            </IconButton>
            <IconButton component="a" href="https://twitter.com/" target="_blank" sx={{ color: "#fff" }}>
              <FaXTwitter />
            </IconButton>
          </Stack>
        </Box>

        {/* Child Page Content */}
        <Box sx={{ mt: 4, padding: 2, }}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
}

export default Layout;
