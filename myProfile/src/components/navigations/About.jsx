import React from 'react';
import { Box, Typography, Button, Avatar, Card, Stack, TextField } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const About = () => {
  return (
    <Box sx={{ minHeight: '78vh', bgcolor: '#181818', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', px: 3 }}>
      <Stack direction={{ xs: "column", md: "row" }} spacing={5} sx={{ width: '100%', maxWidth: 1100 }}>
{/* Profile Card */}

        <Card sx={{ bgcolor: '#232323', p: 4, borderRadius: 4, minWidth: 320, boxShadow: 6, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar
            src="/images/Murali3.jpg" // Place your image in public/images/profile.jpg or correct asset path
            alt="Murali"
            sx={{ width: 220, height: 220,  }}
          />

          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Murali
          </Typography>

          <Typography variant="subtitle1" sx={{ color: '#cfcfcf', fontWeight: 500, mb: 3 }}>
            Senior Skill Engineer & Developer
          </Typography>

          <Stack spacing={2} sx={{ width: '100%', mt: 1 }}>

            <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#e2d1d1ff', borderRadius: 2, px: 2, py: 1 }}>
              <MailOutlineIcon sx={{ mr: 1, fontSize: 22 }} />
              <Typography sx={{ fontSize: 15 }}>muralibalan66@gmail.com</Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#c3b0b0ff', borderRadius: 2, px: 2, py: 1 }}>
              <PhoneOutlinedIcon sx={{ mr: 1, fontSize: 22 }} />
              <Typography sx={{ fontSize: 15 }}>+91 7010777680</Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#e5d3d3ff', borderRadius: 2, px: 2, py: 1 }}>
              <LocationOnOutlinedIcon sx={{ mr: 1, fontSize: 22 }} />
              <Typography sx={{ fontSize: 15 }}>Saidapet-West, Chennai-15</Typography>
            </Box>
            
          </Stack>
        </Card>

        {/* About Details */}
        <Box sx={{ flex: 1 }}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#fff", color: "#181818", fontWeight: 700,
              borderRadius: "30px", mb: 3, px: 3, py: 1, textTransform: "none"
            }}
          >
            Get to Know Me
          </Button>
          <Typography variant="h4" sx={{ fontWeight: 800 }}>
            Passion for Teaching and Technology
          </Typography>
          <br />
          <Typography variant="body1" sx={{ mt: 3, color: '#ccc' }}>
            I am a Tech Trainer and currently working as the Center Head at SoftTechAshram Institute. So far, I have trained over 120 students in various technologies. Teaching is something I’m truly passionate about because I love sharing what I learn with others.
          </Typography>
          <br />
          <Typography variant="body1" sx={{ mt: 2, color: '#ccc' }}>
            Web development and teaching are not just my profession—they are my passion.
          </Typography><br /><br />

{/* Stats */}

          <Stack direction="row" spacing={6} sx={{ mt: 5 }}>
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
