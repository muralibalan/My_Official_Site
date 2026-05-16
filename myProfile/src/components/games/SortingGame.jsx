import React, { useState } from 'react';

import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Container,
  Stack,
  Divider,
  Chip,
  Grid,
} from '@mui/material';

import {
  motion,
  AnimatePresence,
} from 'framer-motion';

import confetti from 'canvas-confetti';

import CodeIcon from '@mui/icons-material/Code';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const THEME_COLOR = '#09ee24ff';

// ---------------- TASKS ----------------

const sortingTasks = [
  {
    id: 1,
    type: 'numeric',
    data: [40, 10, 100, 5],
    question:
      'Sort the numbers in Ascending order',
    answer:
      'data.sort((a, b) => a - b)',
  },

  {
    id: 2,
    type: 'string',
    data: ['Banana', 'Apple', 'Mango'],
    question:
      'Sort the fruits in Alphabetical order',
    answer: 'data.sort()',
  },

  {
    id: 3,
    type: 'numeric',
    data: [15, 2, 28, 10],
    question:
      'Sort the numbers in Descending order',
    answer:
      'data.sort((a, b) => b - a)',
  },

  {
    id: 4,
    type: 'string',
    data: ['Zebra', 'Ant', 'Cat'],
    question:
      'Sort the animals in Reverse Alphabetical order',
    answer:
      'data.sort().reverse()',
  },

  {
    id: 5,
    type: 'numeric',
    data: [1, 11, 2, 22],
    question:
      'Ascending order: [1, 11, 2, 22]',
    answer:
      'data.sort((a, b) => a - b)',
  },

  {
    id: 6,
    type: 'string',
    data: ['React', 'Angular', 'Vue'],
    question:
      'Sort the JS Frameworks',
    answer: 'data.sort()',
  },

  {
    id: 7,
    type: 'numeric',
    data: [500, 100, 800, 200],
    question:
      'Descending: [500, 100, 800, 200]',
    answer:
      'data.sort((a, b) => b - a)',
  },

  {
    id: 8,
    type: 'string',
    data: ['Node', 'Java', 'Python'],
    question:
      'Reverse Sort the Languages',
    answer:
      'data.sort().reverse()',
  },

  {
    id: 9,
    type: 'numeric',
    data: [7, 3, 9, 1],
    question:
      'Ascending: [7, 3, 9, 1]',
    answer:
      'data.sort((a, b) => a - b)',
  },

  {
    id: 10,
    type: 'string',
    data: [
      'Chennai',
      'Madurai',
      'Salem',
    ],
    question:
      'Alphabetical: Tamil Nadu Cities',
    answer: 'data.sort()',
  },
];

// ---------------- COMPONENT ----------------

function SortingGame() {
  const [currentTask, setCurrentTask] =
    useState(0);

  const [userInput, setUserInput] =
    useState('');

  const [result, setResult] =
    useState(null);

  const [showAnswer, setShowAnswer] =
    useState(false);

  const [score, setScore] =
    useState(0);

  const task =
    sortingTasks[currentTask];

  // ---------------- FIREWORK ----------------

  const handleFirework = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },

      colors: [
        THEME_COLOR,
        '#ffffff',
        '#ffeb3b',
      ],
    });
  };

  // ---------------- CHECK ----------------

  const checkCode = () => {
    const cleanInput =
      userInput.replace(/\s+/g, '');

    const cleanAnswer =
      task.answer.replace(/\s+/g, '');

    if (
      cleanInput === cleanAnswer
    ) {
      setResult('success');

      setScore(score + 10);

      handleFirework();

      setShowAnswer(false);
    } else {
      setResult('fail');

      setShowAnswer(true);
    }
  };

  // ---------------- NEXT ----------------

  const nextQuestion = () => {
    if (
      currentTask <
      sortingTasks.length - 1
    ) {
      setCurrentTask(
        currentTask + 1
      );

      setUserInput('');

      setResult(null);

      setShowAnswer(false);
    }
  };

  return (
    <Box
      sx={{
        bgcolor: '#050505',

        minHeight: '100vh',

        py: 8,

        color: '#fff',
      }}
    >
      <Container maxWidth="lg">

        {/* HEADER */}

        <Typography
          variant="h3"
          sx={{
            fontWeight: 900,

            textAlign: 'center',

            mb: 1,

            color: '#fff',

            textShadow:
              '0 0 20px rgba(255,255,255,0.15)',

            fontSize: {
              xs: '2rem',
              md: '3.5rem',
            },
          }}
        >
          Sorting{' '}
          <span
            style={{
              color: THEME_COLOR,

              textShadow: `0 0 25px ${THEME_COLOR}`,
            }}
          >
            Pro
          </span>{' '}
          ⚡
        </Typography>

        <Typography
          sx={{
            textAlign: 'center',

            color: '#d0d0d0',

            mb: 6,

            fontSize: '1rem',
          }}
        >
          Type the JavaScript sort
          logic to complete the task
        </Typography>

        {/* MAIN CARD */}

        <Paper
          sx={{
            p: {
              xs: 3,
              md: 5,
            },

            bgcolor:
              'rgba(255,255,255,0.03)',

            borderRadius: '28px',

            border:
              '1px solid rgba(255,255,255,0.08)',

            backdropFilter:
              'blur(12px)',

            boxShadow:
              '0 0 30px rgba(0,0,0,0.4)',
          }}
        >

          {/* TOP BAR */}

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: 5 }}
          >
            <Chip
              label={`Task ${task.id} / 10`}
              sx={{
                bgcolor: '#181818',

                color: '#fff',

                border:
                  '1px solid rgba(255,255,255,0.08)',

                fontWeight: 700,
              }}
            />

            <Typography
              sx={{
                color: THEME_COLOR,

                fontWeight: 800,

                fontSize: '1rem',
              }}
            >
              Score: {score}
            </Typography>
          </Stack>

          {/* QUESTION */}

          <Box
            sx={{
              textAlign: 'center',

              mb: 5,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                mb: 3,

                fontWeight: 700,

                color: '#fff',

                lineHeight: 1.7,

                textShadow:
                  '0 0 12px rgba(255,255,255,0.12)',

                fontSize: {
                  xs: '1.2rem',
                  md: '1.5rem',
                },
              }}
            >
              {task.question}
            </Typography>

            {/* DATA BOXES */}

            <Grid
              container
              spacing={2}
              justifyContent="center"
            >
              {task.data.map(
                (item, i) => (
                  <Grid
                    item
                    key={i}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.08,
                      }}
                    >
                      <Paper
                        sx={{
                          px: 3,

                          py: 1.5,

                          bgcolor:
                            '#111',

                          border:
                            `1px solid ${THEME_COLOR}33`,

                          color:
                            '#fff',

                          fontWeight:
                            'bold',

                          fontSize:
                            '1.2rem',

                          borderRadius:
                            '14px',

                          minWidth:
                            80,

                          textAlign:
                            'center',

                          transition:
                            '0.3s ease',

                          boxShadow:
                            '0 0 10px rgba(255,255,255,0.05)',

                          '&:hover':
                            {
                              borderColor:
                                THEME_COLOR,

                              boxShadow:
                                `0 0 20px ${THEME_COLOR}44`,
                            },
                        }}
                      >
                        {item}
                      </Paper>
                    </motion.div>
                  </Grid>
                )
              )}
            </Grid>
          </Box>

          <Divider
            sx={{
              borderColor:
                'rgba(255,255,255,0.08)',

              mb: 5,
            }}
          />

          {/* CODE SECTION */}

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="subtitle2"
              sx={{
                color: '#fff',

                mb: 1.5,

                display: 'flex',

                alignItems:
                  'center',

                gap: 1,

                fontWeight: 700,

                letterSpacing: 1,
              }}
            >
              <CodeIcon fontSize="small" />
              JAVASCRIPT CODE
            </Typography>

            <TextField
              fullWidth

              multiline

              rows={3}

              placeholder="e.g. data.sort((a, b) => a - b)"

              value={userInput}

              onChange={(e) =>
                setUserInput(
                  e.target.value
                )
              }

              sx={inputStyle}
            />
          </Box>

          {/* BUTTONS */}

          <Stack
            direction={{
              xs: 'column',
              sm: 'row',
            }}
            spacing={2}
          >
            <Button
              fullWidth

              variant="contained"

              onClick={checkCode}

              sx={btnStyle}

              disabled={
                result === 'success'
              }
            >
              Validate Logic
            </Button>

            {result && (
              <Button
                fullWidth

                variant="outlined"

                onClick={
                  nextQuestion
                }

                sx={{
                  borderRadius:
                    '12px',

                  color: '#fff',

                  borderColor:
                    '#444',

                  '&:hover': {
                    borderColor:
                      THEME_COLOR,

                    bgcolor:
                      `${THEME_COLOR}11`,
                  },
                }}
              >
                Next Task
              </Button>
            )}
          </Stack>

          {/* SUCCESS */}

          <AnimatePresence>
            {result ===
              'success' && (
              <motion.div
                initial={{
                  scale: 0.8,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
              >
                <Box
                  sx={{
                    mt: 4,

                    p: 2,

                    bgcolor:
                      'rgba(9, 238, 36, 0.1)',

                    borderRadius:
                      '14px',

                    border:
                      '1px solid #09ee2444',

                    textAlign:
                      'center',
                  }}
                >
                  <Typography
                    sx={{
                      color:
                        THEME_COLOR,

                      fontWeight:
                        'bold',

                      display:
                        'flex',

                      alignItems:
                        'center',

                      justifyContent:
                        'center',

                      gap: 1,
                    }}
                  >
                    <CheckCircleOutlineIcon />
                    Excellent!
                    Sorting Master!
                  </Typography>
                </Box>
              </motion.div>
            )}

            {/* FAIL */}

            {showAnswer && (
              <motion.div
                initial={{
                  y: 10,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
              >
                <Box
                  sx={{
                    mt: 4,

                    p: 2.5,

                    bgcolor:
                      'rgba(255, 82, 82, 0.1)',

                    borderRadius:
                      '14px',

                    border:
                      '1px solid #ff525244',
                  }}
                >
                  <Typography
                    sx={{
                      color:
                        '#ff5252',

                      fontWeight:
                        'bold',

                      mb: 1,

                      display:
                        'flex',

                      alignItems:
                        'center',

                      gap: 1,
                    }}
                  >
                    <ErrorOutlineIcon />
                    Incorrect
                    Logic
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color:
                        '#ddd',

                      mb: 1,
                    }}
                  >
                    Correct
                    Answer:
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily:
                        'monospace',

                      color:
                        '#fff',

                      bgcolor:
                        '#111',

                      p: 2,

                      borderRadius:
                        '10px',

                      border:
                        '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    {
                      task.answer
                    }
                  </Typography>
                </Box>
              </motion.div>
            )}
          </AnimatePresence>
        </Paper>
      </Container>
    </Box>
  );
}

// ---------------- INPUT STYLE ----------------

const inputStyle = {
  '& .MuiOutlinedInput-root': {
    color: '#fff',

    fontFamily:
      'monospace',

    bgcolor: '#000',

    borderRadius: '14px',

    '& fieldset': {
      borderColor: '#333',
    },

    '&:hover fieldset': {
      borderColor: '#666',
    },

    '&.Mui-focused fieldset': {
      borderColor:
        THEME_COLOR,
    },
  },

  '& textarea::placeholder': {
    color: '#888',
    opacity: 1,
  },
};

// ---------------- BUTTON STYLE ----------------

const btnStyle = {
  bgcolor: THEME_COLOR,

  color: '#000',

  fontWeight: 800,

  borderRadius: '12px',

  py: 1.5,

  fontSize: '1rem',

  textTransform: 'none',

  '&:hover': {
    bgcolor: '#07c91f',

    boxShadow: `0 0 20px ${THEME_COLOR}44`,
  },

  '&.Mui-disabled': {
    bgcolor: '#114411',

    color: '#777',
  },
};

export default SortingGame;