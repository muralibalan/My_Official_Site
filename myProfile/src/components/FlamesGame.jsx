import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper, Container, Stack, Zoom } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PeopleIcon from '@mui/icons-material/People';
import MoodIcon from '@mui/icons-material/Mood';
import ChurchIcon from '@mui/icons-material/Church';
import GavelIcon from '@mui/icons-material/Gavel';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import confetti from 'canvas-confetti';

const FLAMES_DATA = {
  'Friends': { icon: <PeopleIcon sx={{ fontSize: 60 }} />, color: '#2196f3', emoji: '🤝' },
  'Lovers': { icon: <FavoriteIcon sx={{ fontSize: 60 }} />, color: '#f44336', emoji: '❤️' },
  'Affection': { icon: <MoodIcon sx={{ fontSize: 60 }} />, color: '#ffeb3b', emoji: '😊' },
  'Marriage': { icon: <ChurchIcon sx={{ fontSize: 60 }} />, color: '#9c27b0', emoji: '💍' },
  'Enemies': { icon: <GavelIcon sx={{ fontSize: 60 }} />, color: '#4caf50', emoji: '😡' },
  'Siblings': { icon: <EscalatorWarningIcon sx={{ fontSize: 60 }} />, color: '#ff9800', emoji: '👫' },
};

const FlamesGame = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState(null);

  const calculateFlames = () => {
    if (!name1 || !name2) return;

    let str1 = name1.toLowerCase().replace(/\s/g, '').split('');
    let str2 = name2.toLowerCase().replace(/\s/g, '').split('');

    // Cross out common letters
    for (let i = 0; i < str1.length; i++) {
      for (let j = 0; j < str2.length; j++) {
        if (str1[i] === str2[j]) {
          str1[i] = '';
          str2[j] = '';
          break;
        }
      }
    }

    let count = str1.join('').length + str2.join('').length;
    let flames = ['Friends', 'Lovers', 'Affection', 'Marriage', 'Enemies', 'Siblings'];
    let index = 0;

    while (flames.length > 1) {
      index = (index + count - 1) % flames.length;
      if (index < 0) index = flames.length - 1;
      flames.splice(index, 1);
    }

    const finalResult = flames[0];
    setResult(finalResult);

    // Animation Effect Based on Result
    fireVedi(finalResult);
  };

  const fireVedi = (res) => {
    const scalar = 2;
    const heart = confetti.shapeFromPath({ path: 'M167 72c19,-38 37,-56 75,-56 60,0 100,51 100,123 0,111 -128,259 -167,300 -38,-41 -167,-189 -167,-300 0,-72 40,-123 100,-123 38,0 56,18 75,56z' });

    if (res === 'Lovers') {
      // Heart Explosion for Lovers
      confetti({
        shapes: [heart],
        particleCount: 50,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#ff0000', '#fe3e3e']
      });
    } else {
      // General colorful explosion for others
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={10} sx={{ p: 4, borderRadius: '30px', bgcolor: '#1a1a1a', color: 'white', textAlign: 'center' }}>
        <Typography variant="h4" sx={{ fontWeight: 900, mb: 3, color: '#09ee24ff' }}>
          FLAMES CALCULATOR
        </Typography>

        <Stack spacing={3}>
          <TextField
            fullWidth
            label="Your Name"
            variant="outlined"
            value={name1}
            onChange={(e) => setName1(e.target.value)}
            sx={inputStyle}
          />
          <TextField
            fullWidth
            label="Partner Name"
            variant="outlined"
            value={name2}
            onChange={(e) => setName2(e.target.value)}
            sx={inputStyle}
          />

          <Button
            variant="contained"
            onClick={calculateFlames}
            sx={{
              bgcolor: '#09ee24ff',
              color: 'black',
              fontWeight: 800,
              py: 1.5,
              borderRadius: '12px',
              '&:hover': { bgcolor: '#07c91f' }
            }}
          >
            Find Relationship
          </Button>

          <AnimatePresence mode="wait">
            {result && (
              <motion.div
                key={result}
                initial={{ scale: 0, opacity: 0, rotate: -180 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              >
                <Box sx={{ mt: 4, p: 3, borderRadius: '20px', border: `2px dashed ${FLAMES_DATA[result].color}` }}>
                  <Box sx={{ color: FLAMES_DATA[result].color, mb: 1 }}>
                    {FLAMES_DATA[result].icon}
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: FLAMES_DATA[result].color }}>
                    {result.toUpperCase()}
                  </Typography>
                  <Typography variant="h6" sx={{ mt: 1 }}>
                    {FLAMES_DATA[result].emoji} {FLAMES_DATA[result].emoji} {FLAMES_DATA[result].emoji}
                  </Typography>
                </Box>
              </motion.div>
            )}
          </AnimatePresence>
        </Stack>
      </Paper>
    </Container>
  );
};

const inputStyle = {
  '& .MuiOutlinedInput-root': {
    color: 'white',
    '& fieldset': { borderColor: '#333' },
    '&:hover fieldset': { borderColor: '#09ee24ff' },
    '&.Mui-focused fieldset': { borderColor: '#09ee24ff' },
  },
  '& .MuiInputLabel-root': { color: '#888' },
  '& .MuiInputLabel-root.Mui-focused': { color: '#09ee24ff' },
};

export default FlamesGame;