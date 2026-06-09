
import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  CircularProgress,
  Container,
  InputAdornment
} from '@mui/material';

import { motion } from 'framer-motion';

import {
  Person,
  Lock
} from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';

const THEME_COLOR = '#09ee24ff';

const Login = ({ setAuth }) => {

  const navigate = useNavigate();

  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {

    // =========================
    // EMPTY CHECK
    // =========================

    if (!user || !pass) {

      setError('Please fill all fields!');

      return;
    }

    setLoading(true);

    setError('');

    // =========================
    // ADMIN LOGIN
    // =========================

    if (
      user === 'Murali@gmail.com' &&
      pass === 'Murali@riya'
    ) {

      // LOGIN STATE
      setAuth({
        loggedIn: true,
        role: 'admin'
      });

      // REDIRECT
      navigate('/admin-schedule-form');

      setLoading(false);

      return;
    }

    // =========================
    // NORMAL STUDENT LOGIN
    // =========================

    const scriptURL =
      'https://script.google.com/macros/s/AKfycbzT4WDkMATR3e05JFrEc2v58cpWMWF7uc2cIrBK1tNnXkiSLPK24un7X2n-cJ6IZI_cUQ/exec';

    try {

      const response = await fetch(
        `${scriptURL}?username=${encodeURIComponent(user)}&password=${encodeURIComponent(pass)}`
      );

      const data = await response.json();

      if (data.status === 'success') {

        setAuth({
          loggedIn: true,
          course: data.course || 'React'
        });

      } else {

        setError('Invalid Username or Password!');
      }

    } catch (err) {

      setError('Connection error. Check your internet.');

    } finally {

      setLoading(false);
    }
  };

  // =========================
  // ANIMATION
  // =========================

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },

    visible: {
      opacity: 1,
      y: 0,
      scale: 1,

      transition: {
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -20
    },

    visible: {
      opacity: 1,
      x: 0
    }
  };

  return (

    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        background:
          'radial-gradient(circle at center, rgba(9,238,36,0.06) 0%, transparent 70%)'
      }}
    >

      <Container maxWidth="xs">

        <motion.div
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >

          <Paper
            elevation={0}
            sx={{
              p: 4,
              textAlign: 'center',

              bgcolor: 'rgba(255,255,255,0.03)',

              backdropFilter: 'blur(15px)',

              color: '#fff',

              borderRadius: '24px',

              border:
                '1px solid rgba(255,255,255,0.08)',

              boxShadow:
                '0 20px 40px rgba(0,0,0,0.4)'
            }}
          >

            {/* LOGO */}

            <motion.div variants={itemVariants}>

              <Box
                sx={{
                  width: 70,
                  height: 70,

                  bgcolor: `${THEME_COLOR}22`,

                  borderRadius: '18px',

                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',

                  mx: 'auto',
                  mb: 2,

                  border:
                    `1px solid ${THEME_COLOR}55`,

                  boxShadow:
                    `0 0 25px ${THEME_COLOR}33`
                }}
              >

                <Lock
                  sx={{
                    color: THEME_COLOR,
                    fontSize: 34
                  }}
                />

              </Box>

              <Typography
                variant="h4"
                sx={{
                  fontWeight: 900,
                  mb: 1
                }}
              >
                Student
                <span
                  style={{
                    color: THEME_COLOR
                  }}
                >
                  {' '}Portal
                </span>
              </Typography>

              <Typography
                sx={{
                  color: '#888',
                  mb: 4,
                  fontSize: '0.92rem'
                }}
              >
                Secure access for Programpark Students
              </Typography>

            </motion.div>

            {/* ERROR */}

            {error && (

              <motion.div
                initial={{
                  opacity: 0,
                  height: 0
                }}

                animate={{
                  opacity: 1,
                  height: 'auto'
                }}
              >

                <Typography
                  sx={{
                    color: '#ff5252',

                    mb: 2,

                    fontSize: '0.85rem',

                    bgcolor:
                      'rgba(255,82,82,0.1)',

                    p: 1.5,

                    borderRadius: '12px',

                    border:
                      '1px solid rgba(255,82,82,0.2)'
                  }}
                >
                  {error}
                </Typography>

              </motion.div>
            )}

            {/* FORM */}

            <Box
              component="form"
              noValidate
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2.5
              }}
            >

              {/* USERNAME */}

              <motion.div variants={itemVariants}>

                <TextField
                  fullWidth
                  placeholder="Username"

                  onChange={(e) =>
                    setUser(e.target.value)
                  }

                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person
                          sx={{
                            color: '#555'
                          }}
                        />
                      </InputAdornment>
                    ),
                  }}

                  sx={inputStyle}
                />

              </motion.div>

              {/* PASSWORD */}

              <motion.div variants={itemVariants}>

                <TextField
                  fullWidth

                  type="password"

                  placeholder="Password"

                  onChange={(e) =>
                    setPass(e.target.value)
                  }

                  onKeyDown={(e) =>
                    e.key === 'Enter' &&
                    handleLogin()
                  }

                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock
                          sx={{
                            color: '#555'
                          }}
                        />
                      </InputAdornment>
                    ),
                  }}

                  sx={inputStyle}
                />

              </motion.div>

              {/* BUTTON */}

              <motion.div
                variants={itemVariants}

                whileHover={{
                  scale: 1.02
                }}

                whileTap={{
                  scale: 0.98
                }}
              >

                <Button
                  fullWidth

                  variant="contained"

                  onClick={handleLogin}

                  disabled={loading}

                  sx={{
                    bgcolor: THEME_COLOR,

                    color: '#000',

                    '&:hover': {
                      bgcolor: '#07c91f'
                    },

                    '&.Mui-disabled': {
                      bgcolor:
                        'rgba(9,238,36,0.3)',

                      color: '#000'
                    },

                    py: 1.8,

                    borderRadius: '14px',

                    fontWeight: 800,

                    fontSize: '1rem',

                    textTransform: 'none',

                    boxShadow:
                      `0 10px 20px ${THEME_COLOR}33`
                  }}
                >

                  {loading ? (

                    <CircularProgress
                      size={24}
                      sx={{
                        color: '#000'
                      }}
                    />

                  ) : (

                    'Sign In'
                  )}

                </Button>

              </motion.div>

            </Box>

          </Paper>

        </motion.div>

      </Container>

    </Box>
  );
};

const inputStyle = {

  '& .MuiOutlinedInput-root': {

    color: '#fff',

    borderRadius: '14px',

    bgcolor: 'rgba(255,255,255,0.02)',

    transition: '0.3s',

    '& fieldset': {
      borderColor:
        'rgba(255,255,255,0.1)'
    },

    '&:hover fieldset': {
      borderColor:
        'rgba(255,255,255,0.2)'
    },

    '&.Mui-focused fieldset': {
      borderColor: THEME_COLOR
    },
  },

  '& .MuiInputBase-input::placeholder': {
    color: '#666',
    opacity: 1
  }
};

export default Login;

