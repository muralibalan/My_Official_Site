import React from 'react'
import { Box, Typography, Button, Stack, Avatar } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';


// Mui Icons: Behance, Dribbble icons can be imported similarly if needed.

function Home() {
  return <>
    <Box sx={{ bgcolor: '#181818', color:"white", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 15 }}>

{/* Left Side: Info */}
        <Box sx={{ maxWidth: 570, display: 'flex',flexDirection:'column',justifyContent:'center' }}>
          
          <Typography variant="h3" component="h1" sx={{ fontWeight: 800 }}>
            MURALI BALAN
          </Typography>
          
          <Typography variant="h5" sx={{ mt: 2 }}> I Am a{" "}
            <TypeAnimation
                sequence={[
                "Web Developer",
                3000,
                "Technical Trainer",
                3000,
                "Freelancer",
                3000,
                ]}
                speed={50}
                repeat={Infinity}
                style={{ fontWeight: 'bold', display: 'inline-block', color: '#09ee24ff' }}
            />
            </Typography>
          
            <Typography variant="body1" sx={{ mt: 3, color: '#bbb' }}>
            I am a Tech Trainer and currently working as the Center Head at SoftTechAshram Institute. So far, I have trained over 120 students in various technologies. Teaching is something I’m truly passionate about because I love sharing what I learn with others. <br/><br/>
            Web development and teaching are not just my profession—they are my passion.
            </Typography>
       
          <Stack direction="row" justifyContent={'center'} spacing={2} sx={{ mt: 4 }}>
                <Button variant="contained" sx={{ bgcolor: '#fff', color: '#181818', fontWeight: 700, borderRadius: '30px', boxShadow: 1 }}>
                View My Work
                </Button>

                <Button variant="outlined" sx={{ color: '#fff', borderColor: '#fff', fontWeight: 700, borderRadius: '30px' }}>
                Get In Touch
                </Button>
          </Stack>

         
        </Box>

{/* Right Side: Avatar */}
        <Box sx={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          bgcolor: '#222', borderRadius: 4, p: 3,
          width: 550,
          height:500,
          borderRadius:'20%'
        }}>
          <Avatar
            src='/images/Murali.jpg' // My profile Photo
            alt="Murali Balan"
            sx={{ width: 480, height: 450, borderRadius: 10 }}
          />

        </Box>
      </Box>
    </Box>
  </>
}

export default Home