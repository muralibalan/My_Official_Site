import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { Box, Typography, Stack, IconButton } from '@mui/material';
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

function Layout() {
  //Link kaana Styles
  const styleLink = {
                      textDecoration: 'none', 
                      color: '#fff'
  }
  //Link Text kaana styles
  const styleLinkText = { 
                      fontWeight: 600,
                      fontWeight: 600,
                      transition: 'all 0.3s ease', // Smooth transition for outline
                      '&:hover': {
                                  outline: '1px solid #cd3ecdff', 
                                  padding: '5px',
                                  borderRadius: '10px',      
                      }
  }
  //Icon kana Style               
  const styleIcon = {
                       color: "#fff",
                       '&:hover': {
                                  boxShadow: '0 0 20px #f7f1f2ff',
                      }
  }

  return (
    <>
      <Box sx={{ minHeight: '90vh', 
        bgcolor: '#181818', 
        color: '#fff', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        textAlign: 'center', p: 2 }}>
        
        {/* Top Navigation Row */}
        <Box sx={{display: 'flex', 
          flexDirection: 'row', 
          justifyContent: 'space-between', 
          width: '100%', 
          alignItems: 'center'
          }}>
          
          {/* Logo */}
          {/* <Typography variant="h4" sx={{ fontWeight: 800 }}>
            Murali Official Site
          </Typography> */}

          {/* Navigation */}
          <Stack direction="row" spacing={6}>
            <Link to="/" style={styleLink}>
                <Typography variant="h6" sx={styleLinkText}>Home</Typography>
            </Link>

            <Link to="/about" style={styleLink}>
                <Typography variant="h6" sx={styleLinkText}>About</Typography>
            </Link>

            <Link to="/education" style={styleLink}>
                <Typography variant="h6" sx={styleLinkText}>Education</Typography>
            </Link>
            
            <Link to="/mystudents" style={styleLink}>
                <Typography variant="h6" sx={styleLinkText}>My Students</Typography>
            </Link>
          </Stack>

          {/* Social Media Icons */}
          <Stack direction="row" spacing={2}>
            <IconButton component="a" href="https://github.com/muralibalan" target="_blank" sx={styleIcon}>
              <FaGithub />
            </IconButton>
            <IconButton component="a" href="https://www.linkedin.com/in/muraliriya/" target="_blank" sx={styleIcon}>
              <FaLinkedin />
            </IconButton>
            <IconButton component="a" href="https://instagram.com/" target="_blank" sx={styleIcon}>
              <FaInstagram />
            </IconButton>
            <IconButton component="a" href="https://www.youtube.com/@Unlock-360" target="_blank" sx={styleIcon}>
              <FaYoutube/>
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
