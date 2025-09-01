import React from 'react';
import { Box, Typography, Button, Avatar, Card, Stack, TextField } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const About = () => {
  //profile card text styles
  const profileText = {
                        display: 'flex', 
                        alignItems: 'center', 
                        bgcolor: '#e2d1d1ff', 
                        borderRadius: 2, 
                        px: 2, 
                        py: 1
  }
  return (
    <Box sx={{ minHeight: '78vh', 
              bgcolor: '#181818', 
              color: '#fff', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              px: 3 }}>

      <Stack direction={{ xs: "column", md: "row" }} 
              spacing={5} 
              sx={{ width: '100%', maxWidth: 1100 }}>

        {/* My Profile Card */}
        <Card sx={{ bgcolor: '#232323', 
                    p: 4, 
                    borderRadius: 4, 
                    minWidth: 320, 
                    boxShadow: 6, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center' }}>
          <Avatar
            src="/images/Murali3.jpg" 
            alt="Murali"
            sx={{ width: 220, height: 220,  }}
          />

          <Typography variant="h6" sx={{ fontWeight: 700, color:'white' }}>
            Murali
          </Typography>

          <Typography variant="subtitle1" sx={{ color: '#cfcfcf', fontWeight: 500, mb: 3 }}>
            Senior Skill Engineer & Developer
          </Typography>

          <Stack spacing={2} sx={{ width: '100%', mt: 1 }}>

            <Box sx={profileText}>
              <MailOutlineIcon sx={{ mr: 1, fontSize: 22 }} />
              <Typography sx={{ fontSize: 15 }}>muralibalan66@gmail.com</Typography>
            </Box>

            <Box sx={profileText}>
              <PhoneOutlinedIcon sx={{ mr: 1, fontSize: 22 }} />
              <Typography sx={{ fontSize: 15 }}>+91 7010777680</Typography>
            </Box>

            <Box sx={profileText}>
              <LocationOnOutlinedIcon sx={{ mr: 1, fontSize: 22 }} />
              <Typography sx={{ fontSize: 15 }}>Saidapet-West, Chennai-15</Typography>
            </Box>
            
          </Stack>
        </Card>

        {/* About Details */}
        <Box sx={{ flex: 1 }}>
         
          <Typography variant="h4" sx={{ fontWeight: 800 }}>
            Passion for Teaching and Technology
          </Typography> <br />

          <Typography variant="body1" sx={{ mt: 3, color: '#ccc' }}>
            I am deeply passionate about being an inspiring teacher and a steadfast mentor for my students . I always strive to be positive, encouraging, and nurturing, placing the highest importance on guiding learners to realize their full potential . My entire approach focuses on empowering every student with meaningful skills and fostering talent above everything else .<br/><br/>
           For me, teaching is a calling—a vital part of my life . I continually research important topics and emerging trends that shape the future, bringing fresh and relevant insights into every lesson . My commitment is to ensure that every day, students receive not only guidance, but also the knowledge and inspiration they need to succeed.
          </Typography>
          <br />

{/* Stats */}

          <Stack direction="row" spacing={6} sx={{ mt: 5, pl:10 }}>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h4" sx={{ fontWeight: 800 }}>120+</Typography>
              <Typography sx={{ color: "#ccc" }}>Students have learned<br />from me.</Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h4" sx={{ fontWeight: 800 }}>2+</Typography>
              <Typography sx={{ color: "#ccc" }}>Years Experience</Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h4" sx={{ fontWeight: 800 }}>98%</Typography>
              <Typography sx={{ color: "#ccc" }}>Students Satisfaction</Typography>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default About;
