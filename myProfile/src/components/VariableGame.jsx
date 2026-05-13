import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, Button, Container, Grid, Chip, Stack } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

const THEME_COLOR = '#09ee24ff';

const namingData = [
  { name: "studentName", isValid: true, reason: "Camel case and alphabets are perfect!" },
  { name: "1stPlace", isValid: false, reason: "Variable names cannot start with a digit (0-9)." },
  { name: "_user_id", isValid: true, reason: "Starting with an underscore (_) is allowed." },
  { name: "total-amount", isValid: false, reason: "Hyphens (-) are not allowed. Use camelCase or underscore." },
  { name: "let", isValid: false, reason: "'let' is a reserved keyword in JavaScript." },
  { name: "$price", isValid: true, reason: "Dollar sign ($) is a valid character in names." },
  { name: "user name", isValid: false, reason: "Spaces are strictly not allowed in variables." },
  { name: "var", isValid: false, reason: "'var' is a reserved keyword." },
  { name: "is_Valid_Value", isValid: true, reason: "Underscores and letters are fine!" },
  { name: "data#1", isValid: false, reason: "Special characters like #, @, ! are not allowed." },
  { name: "student_age", isValid: true, reason: "Descriptive and uses valid characters." },
  { name: "class", isValid: false, reason: "'class' is a reserved keyword." },
];

const VariableGame = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [lastResult, setLastResult] = useState(null); // 'correct' or 'wrong'
  const [gameFinished, setGameFinished] = useState(false);

  const currentItem = namingData[currentIndex];

  const handleAnswer = (userAnswer) => {
    if (userAnswer === currentItem.isValid) {
      setScore(score + 10);
      setLastResult('correct');
    } else {
      setLastResult('wrong');
    }
    setShowFeedback(true);
  };

  const nextQuestion = () => {
    setShowFeedback(false);
    if (currentIndex < namingData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setGameFinished(true);
    }
  };

  const resetGame = () => {
    setCurrentIndex(0);
    setScore(0);
    setGameFinished(false);
    setShowFeedback(false);
  };

  return (
    <Box sx={{ bgcolor: '#0a0a0a', minHeight: '85vh', py: 8, color: '#fff', display: 'flex', alignItems: 'center' }}>
      <Container maxWidth="md">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Typography variant="h3" sx={{ fontWeight: 900, textAlign: 'center', mb: 1, textTransform: 'uppercase' }}>
            Variable <span style={{ color: THEME_COLOR }}>Validator</span>
          </Typography>
          <Typography sx={{ textAlign: 'center', color: '#888', mb: 5 }}>
            Identify if the variable name is Valid or Invalid in JavaScript
          </Typography>

          {!gameFinished ? (
            <Paper elevation={0} sx={{ p: { xs: 3, md: 6 }, bgcolor: 'rgba(255,255,255,0.02)', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
              
              <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Chip label={`Question: ${currentIndex + 1}/${namingData.length}`} sx={{ color: '#fff', border: '1px solid #333' }} />
                <Typography sx={{ color: THEME_COLOR, fontWeight: 900 }}>SCORE: {score}</Typography>
              </Box>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                >
                  <Typography variant="h2" sx={{ 
                    fontFamily: 'monospace', 
                    fontWeight: 700, 
                    color: '#fff', 
                    mb: 6,
                    fontSize: { xs: '2.5rem', md: '4rem' },
                    textShadow: '0 0 20px rgba(255,255,255,0.1)'
                  }}>
                    {currentItem.name}
                  </Typography>
                </motion.div>
              </AnimatePresence>

              {!showFeedback ? (
                <Stack direction="row" spacing={3} justifyContent="center">
                  <Button
                    variant="contained"
                    startIcon={<CheckCircleIcon />}
                    onClick={() => handleAnswer(true)}
                    sx={{ ...actionBtnStyle, bgcolor: THEME_COLOR }}
                  >
                    Valid
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={<CancelIcon />}
                    onClick={() => handleAnswer(false)}
                    sx={{ ...actionBtnStyle, bgcolor: '#ff5252' }}
                  >
                    Invalid
                  </Button>
                </Stack>
              ) : (
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                  <Box sx={{ 
                    p: 3, 
                    borderRadius: '20px', 
                    bgcolor: lastResult === 'correct' ? 'rgba(9, 238, 36, 0.1)' : 'rgba(255, 82, 82, 0.1)',
                    border: `1px solid ${lastResult === 'correct' ? THEME_COLOR : '#ff5252'}`,
                    mb: 4
                  }}>
                    <Typography variant="h6" sx={{ color: lastResult === 'correct' ? THEME_COLOR : '#ff5252', fontWeight: 800, mb: 1 }}>
                      {lastResult === 'correct' ? 'CORRECT!' : 'WRONG!'}
                    </Typography>
                    <Typography sx={{ color: '#ccc', mb: 2 }}>{currentItem.reason}</Typography>
                    <Button variant="outlined" onClick={nextQuestion} sx={{ color: '#fff', borderColor: '#555' }}>
                      Next Variable
                    </Button>
                  </Box>
                </motion.div>
              )}
            </Paper>
          ) : (
            <Paper sx={{ p: 6, textAlign: 'center', bgcolor: 'rgba(255,255,255,0.02)', borderRadius: '30px' }}>
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>Game Over!</Typography>
              <Typography variant="h2" sx={{ color: THEME_COLOR, fontWeight: 900, mb: 4 }}>{score} Points</Typography>
              <Button variant="contained" onClick={resetGame} sx={actionBtnStyle}>Play Again</Button>
            </Paper>
          )}

          {/* RULES SECTION FOR STUDENTS */}
          <Grid container spacing={2} sx={{ mt: 6 }}>
            {[
              { rule: "No Digits First", desc: "Cannot start with 0-9" },
              { rule: "Only _ and $", desc: "Special chars only _ or $" },
              { rule: "No Keywords", desc: "No let, var, class, etc." },
              { rule: "Descriptive", desc: "Must be relevant to data" }
            ].map((item, i) => (
              <Grid item xs={6} md={3} key={i}>
                <Box sx={{ p: 2, bgcolor: '#111', borderRadius: '12px', border: '1px solid #222', textAlign: 'center' }}>
                  <Typography sx={{ color: THEME_COLOR, fontSize: '0.8rem', fontWeight: 800 }}>{item.rule}</Typography>
                  <Typography sx={{ color: '#666', fontSize: '0.7rem' }}>{item.desc}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

const actionBtnStyle = {
  px: 6,
  py: 2,
  borderRadius: '15px',
  fontWeight: 800,
  fontSize: '1.1rem',
  textTransform: 'none',
  color: '#000',
  '&:hover': { opacity: 0.9, transform: 'translateY(-3px)' },
  transition: '0.3s'
};

export default VariableGame;