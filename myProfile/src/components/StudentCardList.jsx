import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Chip
} from '@mui/material';

import { motion } from 'framer-motion';

import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import SchoolIcon from '@mui/icons-material/School';

const initialStudents = [
  {
    id: 1,
    name: "Abinaya",
    college: "Dharmapuram Adhinam Arts College, Annamalai University",
    photo: "/portfolios/abinaya.png",
    siteLink: "https://abinaya-official.vercel.app",
    batch: "ReactJs Developer"
  },
  {
    id: 2,
    name: "Sriraman K",
    college: "Dharmapuram Adhinam Arts College, Annamalai University",
    photo: "/portfolios/sriram.png",
    siteLink: "https://sriram-port.vercel.app",
    batch: "MERN Stack Development"
  },
  {
    id: 3,
    name: "Sanjay Kumar R",
    college: "Govt Arts College, Kumbakonam — Bharathidasan University",
    photo: "/portfolios/sanjaynew.png",
    siteLink: "https://sanjaypersonal.vercel.app",
    batch: "ReactJs Developer"
  },
  {
    id: 4,
    name: "Mohamed Raashith",
    college: "A.V.C College(Autonomous) Mannampandal, Mayiladuthurai",
    photo: "/portfolios/raashith.jpeg",
    siteLink: "https://raashith-official.vercel.app",
    batch: "ReactJs Developer"
  },
  {
    id: 5,
    name: "SWAMINATHAN S",
    college: "AVC College Arts and Science, Mayiladuthurai",
    photo: "/portfolios/swami.png",
    siteLink: "https://swamipersonal.vercel.app",
    batch: "ReactJs Developer"
  },
  {
    id: 6,
    name: "Karthikeyan",
    college: "AVC College of AUTONOMOUS - (2022-2025)",
    photo: "/portfolios/karthikeyan.png",
    siteLink: "https://dev-karthikeyan.vercel.app/",
    batch: "MERN Stack Developer"
  },
  {
    id: 7,
    name: "SANJEEVI.K",
    college: "DOTE / AVCPTC",
    photo: "/portfolios/sanjeevi.png",
    siteLink: "https://sanjeevi-official.vercel.app/",
    batch: "ReactJs Developer"
  },
  {
    id: 8,
    name: "Mathumita",
    college: "Vivekananda Arts and Science College for Women",
    photo: "/portfolios/profile.jpg",
    siteLink: "https://madhu-portfolio-seven.vercel.app/",
    batch: "ReactJs Developer"
  },
  {
    id: 9,
    name: "Shalini",
    college: "ST.Theresa's Arts And Science College",
    photo: "/portfolios/image1.png",
    siteLink: "https://shalini-official.vercel.app/",
    batch: "ReactJs Developer"
  },
];

function StudentCardList() {

  const [students] = useState(initialStudents);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.college.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatUrl = (url) => {
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      return `https://${url}`;
    }
    return url;
  };

  return (
    <Box
      sx={{
        bgcolor: '#060c09',
        minHeight: '100vh',
        py: { xs: 4, md: 8 },
        px: { xs: 1.5, sm: 2 },
        color: '#fff'
      }}
    >
      <Container maxWidth="lg">

        {/* HEADER */}
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 4, md: 6 },
            px: 1
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 900,
              mb: 1,
              letterSpacing: 1,
              lineHeight: 1.3,
              fontSize: {
                xs: '1.7rem',
                sm: '2.1rem',
                md: '2.8rem'
              }
            }}
          >
            Our Student{' '}
            <span
              style={{
                color: '#00ff66',
                textShadow: '0 0 20px rgba(0,255,102,0.3)'
              }}
            >
              Portfolios
            </span>{' '}
            🌐
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: '#8fa399',
              maxWidth: '650px',
              mx: 'auto',
              lineHeight: 1.7,
              fontSize: {
                xs: '0.82rem',
                sm: '0.95rem'
              }
            }}
          >
            Students who learned with me and built their own professional portfolios.
          </Typography>
        </Box>

        {/* SEARCH BAR */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: { xs: 4, md: 6 }
          }}
        >
          <TextField
            placeholder="Search student name or college..."
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={searchStyle}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#00ff66' }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* CARD GRID */}
        {/* CARD SECTION WITHOUT GRID */}

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 3,
            justifyContent: 'center'
          }}
        >
          {filteredStudents.map((student) => (
            <Box
              key={student.id}
              sx={{
                width: {
                  xs: '100%',
                  sm: '47%',
                  md: '31%'
                }
              }}
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                style={{ width: '100%' }}
              >
                <Card
                  sx={{
                    height: {
                      xs: 520,
                      sm: 540,
                      md: 560
                    },

                    borderRadius: '22px',
                    overflow: 'hidden',

                    bgcolor: '#0d1612',

                    border: '1px solid #162a20',

                    display: 'flex',
                    flexDirection: 'column',

                    position: 'relative',

                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                  }}
                >

                  {/* IMAGE SECTION = 75% */}
                  <Box
                    sx={{
                      height: '75%',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >

                    {/* CHIP */}
                    <Chip
                      label={student.batch}
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 14,
                        right: 14,
                        zIndex: 5,

                        bgcolor: '#00ff66',
                        color: '#000',

                        fontWeight: 700,
                        fontSize: '10px'
                      }}
                    />

                    <CardMedia
                      component="img"
                      image={student.photo}
                      alt={student.name}
                      sx={{
                        width: '100%',
                        height: '100%',

                        objectFit: 'cover',

                        objectPosition: 'top',

                        transition: '0.4s ease',

                        '&:hover': {
                          transform: 'scale(1.05)'
                        }
                      }}
                    />
                  </Box>

                  {/* CONTENT = 25% */}
                  <CardContent
                    sx={{
                      height: '25%',

                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',

                      p: 2.5
                    }}
                  >

                    {/* NAME */}
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: '#fff',

                        fontSize: {
                          xs: '1rem',
                          sm: '1.1rem'
                        },

                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {student.name}
                    </Typography>

                    {/* COLLEGE */}
                    <Box
                      sx={{
                        display: 'flex',
                        gap: 1,
                        mt: 1
                      }}
                    >
                      <SchoolIcon
                        sx={{
                          color: '#4d7561',
                          fontSize: 18,
                          mt: 0.3,
                          flexShrink: 0
                        }}
                      />

                      <Typography
                        variant="body2"
                        sx={{
                          color: '#8fa399',

                          fontSize: '0.82rem',

                          lineHeight: 1.4,

                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',

                          overflow: 'hidden'
                        }}
                      >
                        {student.college}
                      </Typography>
                    </Box>

                    {/* BUTTON */}
                    <Button
                      fullWidth
                      variant="outlined"
                      component="a"
                      href={formatUrl(student.siteLink)}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<LanguageIcon />}
                      sx={{
                        mt: 2,

                        borderColor: '#1d3327',

                        color: '#00ff66',

                        textTransform: 'none',

                        borderRadius: '12px',

                        fontWeight: 600,

                        '&:hover': {
                          borderColor: '#00ff66',
                          bgcolor: 'rgba(0,255,102,0.05)'
                        }
                      }}
                    >
                      Visit Website
                    </Button>

                  </CardContent>

                </Card>
              </motion.div>
            </Box>
          ))}
        </Box>
        {/* EMPTY STATE */}
        {filteredStudents.length === 0 && (
          <Typography
            sx={{
              textAlign: 'center',
              color: '#4d7561',
              mt: 6,
              fontStyle: 'italic'
            }}
          >
            No students found matching that criteria.
          </Typography>
        )}

      </Container>
    </Box>
  );
}

/* SEARCH STYLE */
const searchStyle = {
  width: {
    xs: '100%',
    sm: '450px'
  },

  '& .MuiOutlinedInput-root': {
    color: '#fff',
    bgcolor: '#0d1612',

    borderRadius: '30px',

    '& fieldset': {
      borderColor: '#162a20'
    },

    '&:hover fieldset': {
      borderColor: '#224433'
    },

    '&.Mui-focused fieldset': {
      borderColor: '#00ff66'
    }
  }
};

/* BUTTON STYLE */
const btnStyle = {
  borderColor: '#1d3327',

  color: '#00ff66',

  fontWeight: 600,

  textTransform: 'none',

  borderRadius: '14px',

  py: 1.2,

  fontSize: {
    xs: '0.82rem',
    sm: '0.95rem'
  },

  '&:hover': {
    borderColor: '#00ff66',

    bgcolor: 'rgba(0,255,102,0.05)',

    boxShadow:
      '0 0 18px rgba(0,255,102,0.15)'
  }
};

export default StudentCardList;