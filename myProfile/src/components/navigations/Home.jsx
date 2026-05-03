import React from 'react'
import { Box, Typography, Button, Stack, Avatar } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          bgcolor: '#181818',
          color: "white",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '70vh',
          px: { xs: 2, md: 6 } // padding responsive
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column-reverse', md: 'row' },
            gap: { xs: 6, md: 15 },
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: { xs: 'center', md: 'left' } // mobile la center text
          }}
        >
          {/* Left Side: Info */}
          <Box
            sx={{
              maxWidth: { xs: '100%', md: 570 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <Typography
              variant="h3"
              component="h1"
              sx={{ fontWeight: 800, fontSize: { xs: '2rem', md: '3rem' } }}
            >
              MURALI BALAN
            </Typography>

            <Typography
              variant="h5"
              sx={{ mt: 2, fontSize: { xs: '1.2rem', md: '1.5rem' } }}
            >
              I Am a{" "}
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  3000,
                  "Technical Mentor",
                  3000,
                  "Freelancer",
                  3000,
                  "Workshop Facilitator",
                  3000
                ]}
                speed={50}
                repeat={Infinity}
                style={{ fontWeight: 'bold', display: 'inline-block', color: '#09ee24ff' }}
              />
            </Typography>

            <Typography
              variant="body1"
              sx={{ mt: 3, color: '#bbb', fontSize: { xs: '0.9rem', md: '1rem' } }}
            >
              I am a passionate Tech Trainer and Senior Developer currently working at ProgramPark Software Company.
              Previously, I served as the Center Head at SoftTechAshram Institute and now continue my leadership journey as the Center Head at<b> Green Apple Computer Education, Kumbakonam.</b>

              So far, I have successfully trained 1200+ students in various technologies, and many of them are currently building their careers in the IT field.
              <b>Teaching has always been my passion because I truly enjoy sharing knowledge and helping others grow in their technical journey.</b>
              <br /><br />
              Web development and teaching are not just my profession — they are my passion and purpose.
            </Typography>

            <Stack
              direction="row"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              spacing={2}
              sx={{ mt: 4 }}
            >
              <Button
                variant="contained"
                onClick={() => navigate("/projects")}
                sx={{
                  bgcolor: '#fff',
                  color: '#181818',
                  fontWeight: 700,
                  borderRadius: '30px',
                  boxShadow: 1
                }}
              >
                View My Projects
              </Button>

              <Button
                variant="outlined"
                onClick={() => navigate("/workshop")}
                sx={{
                  color: '#fff',
                  borderColor: '#fff',
                  fontWeight: 700,
                  borderRadius: '30px'
                }}
              >
                Tech Talks
              </Button>
            </Stack>
          </Box>

          {/* Right Side: Avatar */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: '#222',
              p: { xs: 2, md: 3 },
              width: { xs: 280, sm: 350, md: 550 },
              height: { xs: 280, sm: 350, md: 500 },
              borderRadius: '20%'
            }}
          >
            <Avatar
              src='/images/Murali.png'
              alt="Murali Balan"
              sx={{
                width: { xs: 250, sm: 320, md: 480 },
                height: { xs: 240, sm: 300, md: 450 },
                borderRadius: 4
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Home
