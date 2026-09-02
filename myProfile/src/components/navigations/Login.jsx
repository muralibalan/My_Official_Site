import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  CircularProgress,
  Container,
  InputAdornment,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Person, Lock } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const THEME_COLOR = '#09ee24';

const Login = ({ setAuth }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!user || !pass) {
      setError('Please fill all fields!');
      return;
    }

    setLoading(true);
    setError('');

    // =========================
    // ADMIN LOGIN
    // =========================
    if (user === 'Murali@gmail.com' && pass === 'Murali@riya') {
      setAuth({
        loggedIn: true,
        role: 'admin',
      });
      navigate('/admin-schedule-form');
      setLoading(false);
      return;
    }

    // =========================
    // NORMAL STUDENT LOGIN
    // =========================
    const scriptURL = "https://script.google.com/macros/s/AKfycbyMJz1FM_awhGGd8wjd5_7kpm6j464EKIgCFZ2UWqM-aj2hGKoqBz3ZVhfe_BOu9-Le/exec";

    try {
      const response = await fetch(
        `${scriptURL}?username=${encodeURIComponent(user.trim())}&password=${encodeURIComponent(pass.trim())}`,
        { redirect: 'follow' }
      );

      const data = await response.json();

      if (data.status === 'success') {
        const fetchedCourse = data.course || 'React';
        
        let fetchedTopics = [];
        if (typeof data.topics === 'string') {
          try {
            fetchedTopics = JSON.parse(data.topics);
          } catch (e) {
            console.error("Topics JSON parse error:", e);
          }
        } else if (Array.isArray(data.topics)) {
          fetchedTopics = data.topics;
        }

        // LocalStorage-ல் சேமித்தல்
        localStorage.setItem('userCourse', fetchedCourse);
        localStorage.setItem('userTopics', JSON.stringify(fetchedTopics));

        // Auth state update
        setAuth({
          loggedIn: true,
          course: fetchedCourse,
          topics: fetchedTopics,
        });

        // Course Viewer-க்கு Navigate செய்தல்
        navigate('/course-viewer'); 
      } else {
        setError('Invalid Username or Password!');
      }
    } catch (err) {
      console.error("Login Connection Error:", err);
      setError('Connection error. Check your internet.');
    } finally {
      setLoading(false);
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `
          radial-gradient(
            circle at 50% 40%,
            rgba(9,238,36,0.08) 0%,
            rgba(9,238,36,0.02) 35%,
            transparent 65%
          ),
          #070a08
        `,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'rgba(9,238,36,0.04)',
          filter: 'blur(100px)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="xs" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div initial="hidden" animate="visible" variants={cardVariants}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, sm: 4 },
              textAlign: 'center',
              bgcolor: 'rgba(16, 21, 17, 0.94)',
              backdropFilter: 'blur(20px)',
              color: '#fff',
              borderRadius: '24px',
              border: '1px solid rgba(9,238,36,0.14)',
              boxShadow: '0 25px 70px rgba(0,0,0,0.75)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: '15%',
                width: '70%',
                height: '2px',
                background: `linear-gradient(90deg, transparent, ${THEME_COLOR}, transparent)`,
                opacity: 0.8,
              }}
            />

            <motion.div variants={itemVariants}>
              <Box
                sx={{
                  width: 72,
                  height: 72,
                  bgcolor: 'rgba(9,238,36,0.08)',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 2.5,
                  border: '1px solid rgba(9,238,36,0.22)',
                  boxShadow: '0 0 35px rgba(9,238,36,0.08)',
                }}
              >
                <Lock sx={{ color: THEME_COLOR, fontSize: 34 }} />
              </Box>

              <Typography variant="h4" sx={{ fontWeight: 900, mb: 1, color: '#ffffff', letterSpacing: '-0.5px' }}>
                Student<span style={{ color: THEME_COLOR }}> Portal</span>
              </Typography>

              <Typography sx={{ color: '#777', mb: 4, fontSize: '0.9rem', lineHeight: 1.6 }}>
                Secure access for Programpark Students
              </Typography>
            </motion.div>

            {error && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                <Typography
                  sx={{
                    color: '#ff5c5c',
                    mb: 2,
                    fontSize: '0.85rem',
                    bgcolor: 'rgba(255,82,82,0.08)',
                    p: 1.5,
                    borderRadius: '12px',
                    border: '1px solid rgba(255,82,82,0.18)',
                  }}
                >
                  {error}
                </Typography>
              </motion.div>
            )}

            <Box
              component="form"
              noValidate
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
              }}
              sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}
            >
              <motion.div variants={itemVariants}>
                <TextField
                  fullWidth
                  placeholder="Username"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  autoComplete="username"
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person sx={{ color: '#666' }} />
                        </InputAdornment>
                      ),
                    },
                  }}
                  sx={inputStyle}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <TextField
                  fullWidth
                  type="password"
                  placeholder="Password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  autoComplete="current-password"
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <Lock sx={{ color: '#666' }} />
                        </InputAdornment>
                      ),
                    },
                  }}
                  sx={inputStyle}
                />
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ marginTop: '6px' }}
              >
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  disabled={loading}
                  sx={{
                    bgcolor: THEME_COLOR,
                    color: '#041006',
                    '&:hover': { bgcolor: '#07d91f' },
                    '&.Mui-disabled': {
                      bgcolor: 'rgba(9,238,36,0.25)',
                      color: 'rgba(0,0,0,0.7)',
                    },
                    py: 1.7,
                    borderRadius: '14px',
                    fontWeight: 900,
                    fontSize: '1rem',
                    textTransform: 'none',
                    boxShadow: '0 10px 30px rgba(9,238,36,0.12)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {loading ? (
                    <CircularProgress size={23} sx={{ color: '#041006' }} />
                  ) : (
                    'Sign In'
                  )}
                </Button>
              </motion.div>
            </Box>

            <motion.div variants={itemVariants}>
              <Typography sx={{ mt: 3, fontSize: '0.72rem', color: '#555' }}>
                © Programpark • Student Learning Portal
              </Typography>
            </motion.div>
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
    bgcolor: 'rgba(255,255,255,0.035)',
    transition: 'all 0.3s ease',
    '& fieldset': { borderColor: 'rgba(255,255,255,0.10)' },
    '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.20)' },
    '&.Mui-focused fieldset': { borderColor: THEME_COLOR, borderWidth: '1px' },
    '&.Mui-focused': { bgcolor: 'rgba(9,238,36,0.025)' },
  },
  '& .MuiInputBase-input': { color: '#fff', fontSize: '0.95rem', py: 1.8 },
  '& .MuiInputBase-input::placeholder': { color: '#666', opacity: 1 },
};

export default Login;