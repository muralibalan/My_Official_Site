import React, { useState, useEffect, useRef } from 'react';
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
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';

import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

import CodeIcon from '@mui/icons-material/Code';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const THEME_COLOR = '#ff9100';

const timerTasks = {
  setTimeout: [
    {
      id: 1,
      question:
        "Exactly 3 seconds (3000ms) kazhichi 'boom' nu pera ulla oru function-ah call pannunga",
      answer: 'setTimeout(boom, 3000)',
    },
    {
      id: 2,
      question:
        "Exactly 1 second kazhichi 'Hi' nu log panra maari oru anonymous arrow function-ah run pannunga",
      answer: "setTimeout(() => console.log('Hi'), 1000)",
    },
    {
      id: 3,
      question:
        "500 milliseconds kazhichi 'alertUser' function-ah execute pannunga",
      answer: 'setTimeout(alertUser, 500)',
    },
    {
      id: 4,
      question:
        '2 seconds kazhichi score() function-ah call panra maari oru arrow function-ah trigger pannunga',
      answer: 'setTimeout(() => score(), 2000)',
    },
    {
      id: 5,
      question:
        "4.5 seconds kazhichi 'initialize' function run aagura maari oru timeout set pannunga",
      answer: 'setTimeout(initialize, 4500)',
    },
  ],

  clearTimeout: [
    {
      id: 1,
      question:
        "'bombTimer' nu solra variable-la store aagi irukura timeout reference-ah stop/cancel pannunga",
      answer: 'clearTimeout(bombTimer)',
    },
    {
      id: 2,
      question:
        "'runCheck' nu solra timer reference execute aagurathuku munnadiye athai cancel pannunga",
      answer: 'clearTimeout(runCheck)',
    },
    {
      id: 3,
      question: "'delayAction' nu pera ulla timeout ID-ah clear pannunga",
      answer: 'clearTimeout(delayAction)',
    },
    {
      id: 4,
      question:
        "'loadingRef' kulla save aagi irukura scheduled timeout-ah stop pannunga",
      answer: 'clearTimeout(loadingRef)',
    },
    {
      id: 5,
      question:
        "'alertId' nu koopidapadura active timeout handler-ah cancel pannunga",
      answer: 'clearTimeout(alertId)',
    },
  ],

  setInterval: [
    {
      id: 1,
      question:
        "'updateClock' function-ah ovvoru 1 second-kum (1000ms) repeatedly run pannunga",
      answer: 'setInterval(updateClock, 1000)',
    },
    {
      id: 2,
      question:
        "Ovvoru 500ms-kum 'Tick' nu log panra arrow function-ah repeatedly execute pannunga",
      answer: "setInterval(() => console.log('Tick'), 500)",
    },
    {
      id: 3,
      question:
        "Ovvoru 2000 milliseconds-kum 'pulse' function-ah repeatedly call pannunga",
      answer: 'setInterval(pulse, 2000)',
    },
    {
      id: 4,
      question:
        'Ovvoru 3 seconds-kum next() function run aagura maari oru arrow function-ah trigger pannunga',
      answer: 'setInterval(() => next(), 3000)',
    },
    {
      id: 5,
      question:
        "Ovvoru 5000ms-kum 'fetchData' function repeat aagura maari set pannunga",
      answer: 'setInterval(fetchData, 5000)',
    },
  ],

  clearInterval: [
    {
      id: 1,
      question:
        "'gameLoop' variable-la store aagi irukura repeating interval loop-ah stop pannunga",
      answer: 'clearInterval(gameLoop)',
    },
    {
      id: 2,
      question:
        "'timerId' variable-la save aagi irukura clock tick interval-ah stop pannunga",
      answer: 'clearInterval(timerId)',
    },
    {
      id: 3,
      question:
        "Thirumba thirumba background-la odra 'pulseInterval' loop-ah cancel pannunga",
      answer: 'clearInterval(pulseInterval)',
    },
    {
      id: 4,
      question:
        "Auto-save use panra 'saveTimer' interval reference-ah stop pannunga",
      answer: 'clearInterval(saveTimer)',
    },
    {
      id: 5,
      question:
        "Active-aa odra 'refreshId' interval loop handler-ah terminate pannunga",
      answer: 'clearInterval(refreshId)',
    },
  ],
};

function TimersGame() {
  const [category, setCategory] = useState('setTimeout');
  const [currentTask, setCurrentTask] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);

  const [liveCounter, setLiveCounter] = useState(0);
  const [bombStatus, setBombStatus] = useState('READY');

  const simulationTimer = useRef(null);

  const currentTasksList = timerTasks[category];
  const task = currentTasksList[currentTask];

  useEffect(() => {
    resetSimulation();

    if (
      category === 'setTimeout' ||
      category === 'clearTimeout'
    ) {
      setBombStatus('TICKING');

      setLiveCounter(60);

      simulationTimer.current = setInterval(() => {
        setLiveCounter((prev) => {
          if (prev <= 1) {
            clearInterval(simulationTimer.current);

            setBombStatus('EXPLODED');

            return 0;
          }

          return prev - 1;
        });
      }, 1000);
    } else {
      setBombStatus('RUNNING LOOP');

      simulationTimer.current = setInterval(() => {
        setLiveCounter((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(simulationTimer.current);
  }, [category, currentTask]);

  const resetSimulation = () => {
    clearInterval(simulationTimer.current);

    setLiveCounter(0);

    setBombStatus('READY');
  };

  const handleFirework = () => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: [THEME_COLOR, '#ffffff', '#00e5ff'],
    });
  };

  const triggerSuccess = () => {
    setResult('success');

    setScore((prev) => prev + 10);

    handleFirework();

    clearInterval(simulationTimer.current);

    if (
      category === 'clearTimeout' ||
      category === 'clearInterval'
    ) {
      setBombStatus('SUCCESSFULLY STOPPED 🛡️');
    } else {
      setBombStatus('EXECUTED SUCCESSFULLY ⚡');
    }
  };

  const checkCode = () => {
    const cleanInput = userInput
      .replace(/\s+/g, '')
      .toLowerCase();

    const cleanAnswer = task.answer
      .replace(/\s+/g, '')
      .toLowerCase();

    if (cleanInput === cleanAnswer) {
      triggerSuccess();

      return;
    }

    setResult('fail');

    setShowAnswer(true);

    clearInterval(simulationTimer.current);

    setBombStatus('EXPLODED');
  };

  const nextQuestion = () => {
    if (currentTask < currentTasksList.length - 1) {
      setCurrentTask((prev) => prev + 1);

      setUserInput('');

      setResult(null);

      setShowAnswer(false);
    }
  };

  const restartLevel = () => {
    setUserInput('');

    setResult(null);

    setShowAnswer(false);

    setCurrentTask((prev) => prev);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);

    setCurrentTask(0);

    setUserInput('');

    setResult(null);

    setShowAnswer(false);
  };

  return (
    <Box
      sx={{
        bgcolor: '#0a0b10',
        minHeight: '100vh',
        py: { xs: 3, md: 6 },
        px: { xs: 1.5, sm: 2 },
        color: '#fff',
        overflowX: 'hidden',
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          px: { xs: 1, sm: 2, md: 3 },
        }}
      >
        {/* TITLE */}

        <Typography
          variant="h3"
          sx={{
            fontWeight: 900,
            textAlign: 'center',
            mb: 1,
            textShadow:
              '0 0 25px rgba(255,145,0,0.2)',
            fontSize: {
              xs: '2rem',
              sm: '2.5rem',
              md: '3.5rem',
            },
          }}
        >
          JS Async{' '}
          <span
            style={{
              color: THEME_COLOR,
              textShadow: `0 0 25px ${THEME_COLOR}`,
            }}
          >
            Timers Pro
          </span>
        </Typography>

        <Typography
          sx={{
            textAlign: 'center',
            color: '#aaa',
            mb: 4,
            fontSize: {
              xs: '0.9rem',
              md: '1rem',
            },
          }}
        >
          Master setTimeout, setInterval and clearing
          scopes with real-time tracking engines!
        </Typography>

        {/* SELECT */}

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: 4,
          }}
        >
          <FormControl
            sx={{
              minWidth: {
                xs: '100%',
                sm: 320,
              },
              maxWidth: 400,
              bgcolor: '#12131a',
              borderRadius: '14px',
              border: '1px solid #222',
            }}
          >
            <InputLabel
              sx={{
                color: '#888',
              }}
            >
              Select Timer Concept
            </InputLabel>

            <Select
              value={category}
              label="Select Timer Concept"
              onChange={handleCategoryChange}
              sx={{
                color: '#fff',

                '.MuiSvgIcon-root': {
                  color: THEME_COLOR,
                },

                '& .MuiOutlinedInput-notchedOutline':
                  {
                    border: 'none',
                  },
              }}
            >
              <MenuItem value="setTimeout">
                setTimeout()
              </MenuItem>

              <MenuItem value="clearTimeout">
                clearTimeout()
              </MenuItem>

              <MenuItem value="setInterval">
                setInterval()
              </MenuItem>

              <MenuItem value="clearInterval">
                clearInterval()
              </MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* GRID */}

        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          alignItems="stretch"
        >
          {/* LEFT */}

          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                p: { xs: 2.5, md: 4 },
                bgcolor: '#111219',
                borderRadius: '24px',
                border: '1px solid #222222',
                textAlign: 'center',
                height: '100%',
                minHeight: {
                  xs: '320px',
                  md: '500px',
                },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow:
                  'inset 0 0 20px rgba(0,0,0,0.6)',
              }}
            >
              <AccessTimeIcon
                sx={{
                  fontSize: {
                    xs: 50,
                    md: 60,
                  },
                  color: THEME_COLOR,
                  mb: 2,
                }}
              />

              <Typography
                variant="h6"
                sx={{
                  color: '#888',
                  fontWeight: 600,
                  letterSpacing: 1,
                  mb: 1,
                  fontSize: {
                    xs: '0.9rem',
                    md: '1rem',
                  },
                }}
              >
                LIVE ENGINE TRACKER
              </Typography>

              {/* CIRCLE */}

              <Box
                sx={{
                  my: 3,
                  p: 3,
                  bgcolor: '#000',
                  borderRadius: '50%',
                  width: {
                    xs: 110,
                    md: 140,
                  },
                  height: {
                    xs: 110,
                    md: 140,
                  },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: `4px solid ${
                    bombStatus === 'EXPLODED'
                      ? '#ff5252'
                      : THEME_COLOR
                  }`,
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: '1.8rem',
                      md: '3rem',
                    },
                    fontFamily: 'monospace',
                    fontWeight: 'bold',
                    color:
                      bombStatus === 'EXPLODED'
                        ? '#ff5252'
                        : '#fff',
                  }}
                >
                  {liveCounter}s
                </Typography>
              </Box>

              <Chip
                label={`STATUS: ${bombStatus}`}
                color={
                  bombStatus === 'EXPLODED'
                    ? 'error'
                    : bombStatus.includes('SUCCESS')
                    ? 'success'
                    : 'warning'
                }
                sx={{
                  fontWeight: 'bold',
                  p: 1,
                  fontSize: '0.8rem',
                  maxWidth: '100%',
                }}
              />
            </Paper>
          </Grid>

          {/* RIGHT */}

          <Grid item xs={12} md={8}>
            <Paper
              sx={{
                p: { xs: 2, sm: 3, md: 4 },
                bgcolor: 'rgba(20,22,30,0.7)',
                borderRadius: '24px',
                border:
                  '1px solid rgba(255,255,255,0.06)',
                backdropFilter: 'blur(16px)',
                height: '100%',
              }}
            >
              <Stack
                direction={{
                  xs: 'column',
                  sm: 'row',
                }}
                spacing={2}
                justifyContent="space-between"
                alignItems={{
                  xs: 'flex-start',
                  sm: 'center',
                }}
                sx={{ mb: 3 }}
              >
                <Chip
                  label={`${category.toUpperCase()} - Task ${
                    task.id
                  } / 5`}
                  sx={{
                    bgcolor: '#000',
                    color: '#fff',
                    border: '1px solid #333',
                    fontWeight: 700,
                  }}
                />

                <Typography
                  sx={{
                    color: THEME_COLOR,
                    fontWeight: 800,
                    fontSize: {
                      xs: '1rem',
                      md: '1.2rem',
                    },
                  }}
                >
                  Score: {score}
                </Typography>
              </Stack>

              {/* QUESTION */}

              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: '#fff',
                    mb: 2,
                    lineHeight: 1.6,
                    fontSize: {
                      xs: '1rem',
                      md: '1.25rem',
                    },
                    wordBreak: 'break-word',
                  }}
                >
                  {task.question}
                </Typography>
              </Box>

              <Divider
                sx={{
                  borderColor:
                    'rgba(255,255,255,0.06)',
                  mb: 3,
                }}
              />

              {/* INPUT */}

              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: '#aaa',
                    mb: 1,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    fontWeight: 600,
                  }}
                >
                  <CodeIcon
                    fontSize="small"
                    sx={{
                      color: THEME_COLOR,
                    }}
                  />
                  JAVASCRIPT ENGINE CONSOLE
                </Typography>

                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  placeholder={`Write your code here... e.g. ${category}(...)`}
                  value={userInput}
                  onChange={(e) =>
                    setUserInput(e.target.value)
                  }
                  sx={inputStyle}
                />
              </Box>

              {/* BUTTONS */}

              <Stack
                direction={{
                  xs: 'column',
                  md: 'row',
                }}
                spacing={2}
                sx={{
                  width: '100%',
                }}
              >
                <Button
                  fullWidth
                  variant="contained"
                  onClick={checkCode}
                  sx={btnStyle}
                  disabled={
                    result === 'success' ||
                    bombStatus === 'EXPLODED'
                  }
                >
                  Inject & Run Code ⚡
                </Button>

                {result &&
                  currentTask <
                    currentTasksList.length - 1 && (
                    <Button
                      fullWidth
                      variant="outlined"
                      onClick={nextQuestion}
                      sx={nextBtnStyle}
                    >
                      Next Level ➡️
                    </Button>
                  )}

                {bombStatus === 'EXPLODED' && (
                  <Button
                    fullWidth
                    variant="contained"
                    color="error"
                    onClick={restartLevel}
                    sx={{
                      borderRadius: '12px',
                      textTransform: 'none',
                      fontWeight: 'bold',
                    }}
                  >
                    Restart 🔄
                  </Button>
                )}
              </Stack>

              {/* RESULT */}

              <AnimatePresence>
                {result === 'success' && (
                  <motion.div
                    initial={{
                      scale: 0.9,
                      opacity: 0,
                    }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                    }}
                  >
                    <Box
                      sx={{
                        mt: 3,
                        p: 2,
                        bgcolor:
                          'rgba(9, 238, 36, 0.08)',
                        borderRadius: '12px',
                        border:
                          '1px solid #09ee2433',
                      }}
                    >
                      <Typography
                        sx={{
                          color: '#09ee24',
                          fontWeight: 'bold',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          justifyContent: 'center',
                          textAlign: 'center',
                        }}
                      >
                        <CheckCircleOutlineIcon />
                        Perfect! Async logic success!
                      </Typography>
                    </Box>
                  </motion.div>
                )}

                {showAnswer && (
                  <motion.div
                    initial={{
                      y: 8,
                      opacity: 0,
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                    }}
                  >
                    <Box
                      sx={{
                        mt: 3,
                        p: 2.5,
                        bgcolor:
                          'rgba(255, 82, 82, 0.08)',
                        borderRadius: '12px',
                        border:
                          '1px solid #ff525233',
                      }}
                    >
                      <Typography
                        sx={{
                          color: '#ff5252',
                          fontWeight: 'bold',
                          mb: 1,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                        }}
                      >
                        <ErrorOutlineIcon />
                        Incorrect Logic
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: '#ccc',
                          mb: 1,
                        }}
                      >
                        Expected Answer:
                      </Typography>

                      <Typography
                        sx={{
                          fontFamily: 'monospace',
                          color: '#fff',
                          bgcolor: '#000',
                          p: 1.5,
                          borderRadius: '8px',
                          border:
                            '1px solid #222',
                          fontSize: '0.9rem',
                          overflowX: 'auto',
                        }}
                      >
                        {task.answer}
                      </Typography>
                    </Box>
                  </motion.div>
                )}
              </AnimatePresence>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

const inputStyle = {
  '& .MuiOutlinedInput-root': {
    color: '#fff',
    fontFamily: 'monospace',
    bgcolor: '#05060a',
    borderRadius: '12px',

    fontSize: {
      xs: '14px',
      md: '16px',
    },

    '& fieldset': {
      borderColor: '#222',
    },

    '&:hover fieldset': {
      borderColor: '#444',
    },

    '&.Mui-focused fieldset': {
      borderColor: THEME_COLOR,
    },
  },

  '& textarea::placeholder': {
    color: '#444',
    opacity: 1,
  },
};

const btnStyle = {
  bgcolor: THEME_COLOR,
  color: '#000',
  fontWeight: 800,
  borderRadius: '12px',
  py: 1.5,
  textTransform: 'none',
  fontSize: '0.95rem',

  '&:hover': {
    bgcolor: '#ffb300',
    boxShadow: `0 0 20px ${THEME_COLOR}55`,
  },

  '&.Mui-disabled': {
    bgcolor: '#22180a',
    color: '#555',
  },
};

const nextBtnStyle = {
  borderRadius: '12px',
  color: '#fff',
  borderColor: '#333',
  textTransform: 'none',
  fontSize: '0.95rem',

  '&:hover': {
    borderColor: THEME_COLOR,
    bgcolor: `${THEME_COLOR}11`,
  },
};

export default TimersGame;