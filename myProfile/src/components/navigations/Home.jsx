import React from 'react'
import { Box, Typography, Button, Stack, Avatar } from '@mui/material';
import { LinkedIn, Instagram } from '@mui/icons-material';
import { TypeAnimation } from 'react-type-animation';


// Mui Icons: Behance, Dribbble icons can be imported similarly if needed.

function Home() {
  return <>
    <Box sx={{ minHeight: '100vh', bgcolor: '#181818', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 20 }}>

{/* Left Side: Info */}
        <Box sx={{ maxWidth: 570 }}>
          
          <Typography variant="h3" component="h1" sx={{ fontWeight: 800 }}>
            MURALI BALAN
          </Typography>
          
          <Typography variant="h5" sx={{ mt: 2 }}> I Am a{" "}
            <TypeAnimation
                sequence={[
                "Web Developer",
                2000,
                "Technical Trainer",
                2000,
                "Freelancer",
                2000,
                ]}
                speed={50}
                repeat={Infinity}
                style={{ fontWeight: 'bold', borderBottom: '2px solid #fff', display: 'inline-block', color: '#d53e3eff' }}
            />
            </Typography>
          
          <Typography variant="body1" sx={{ mt: 3, color: '#bbb' }}>
           I am deeply passionate about being an inspiring teacher and a steadfast mentor for my students . I always strive to be positive, encouraging, and nurturing, placing the highest importance on guiding learners to realize their full potential . My entire approach focuses on empowering every student with meaningful skills and fostering talent above everything else .<br/><br/>
           For me, teaching is a calling—a vital part of my life . I continually research important topics and emerging trends that shape the future, bringing fresh and relevant insights into every lesson . My commitment is to ensure that every day, students receive not only guidance, but also the knowledge and inspiration they need to succeed .
          </Typography>

          <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
            
                <Button variant="contained" sx={{ bgcolor: '#fff', color: '#181818', fontWeight: 700, borderRadius: '30px', boxShadow: 1 }}>
                View My Work
                </Button>

                <Button variant="outlined" sx={{ color: '#fff', borderColor: '#fff', fontWeight: 700, borderRadius: '30px' }}>
                Get In Touch
                </Button>

          </Stack>

          {/* Social Icons */}
          <Stack direction="row" spacing={4} sx={{ mt: 4 }}>
            {/* Example social icons; update href for actual URLs */}
            <Box component="a" href="#" color="inherit"><LinkedIn fontSize="large" /></Box>
            <Box component="a" href="#" color="inherit"><Instagram fontSize="large" /></Box>
            {/* Add Behance, Dribbble Icons if needed */}
          </Stack>
        </Box>

{/* Right Side: Avatar */}
        <Box sx={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          bgcolor: '#222', borderRadius: 4, p: 3,
          boxShadow: 3,
          minWidth: { xs: '100%', md: 300 },
        }}>
          <Avatar
            src='/images/Murali.jpg' // My profile Photo
            alt="Murali Balan"
            sx={{ width: 480, height: 450, borderRadius: 4 }}
          />

        </Box>
      </Box>
    </Box>
  </>
}

export default Home