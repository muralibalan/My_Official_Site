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
import SecurityIcon from '@mui/icons-material/Security';

const THEME_COLOR = '#00e5ff';

const conditionTasks = {
  simpleIf: [
    {
      id: 1,
      question:
        "Oruvelai 'score' 50-ah vida athigama irundha, 'pass()' function-ah run pannunga",
      answer: 'if(score > 50) pass()',
    },

    {
      id: 2,
      question:
        "Oruvelai 'isPressed' true-aa irundha, 'launch()' function-ah trigger pannunga",
      answer: 'if(isPressed) launch()',
    },

    {
      id: 3,
      question:
        "Oruvelai 'attempts' 3-ku equal-aa irundha, 'lockAccount()' function-ah call pannunga",
      answer: 'if(attempts === 3) lockAccount()',
    },
  ],

  ifElse: [
    {
      id: 1,
      question:
        "Oruvelai 'age' 18 or atharku mela irundha 'grantAccess()' pannunga illana 'denyAccess()' call pannunga",
      answer:
        'if(age >= 18) { grantAccess() } else { denyAccess() }',
    },

    {
      id: 2,
      question:
        "Oruvelai 'fuel' 10-ah vida kammiya irundha 'alert()' pannunga illana 'smooth()' run pannunga",
      answer:
        'if(fuel < 10) { alert() } else { smooth() }',
    },
  ],

  elseIf: [
    {
      id: 1,
      question:
        "Oruvelai 'marks' 90-ku mela irundha gradeA(), illana marks 50-ku mela irundha gradeB(), illana fail() run pannunga",
      answer:
        'if(marks > 90) { gradeA() } else if(marks > 50) { gradeB() } else { fail() }',
    },

    {
      id: 2,
      question:
        "Oruvelai 'speed' 100-ku mela irundha danger(), illana speed 60-ku mela irundha warning(), illana safe() run pannunga",
      answer:
        'if(speed > 100) { danger() } else if(speed > 60) { warning() } else { safe() }',
    },
  ],

  ternary: [
    {
      id: 1,
      question:
        "'isLoggedIn' true-aa irundha Dashboard illana Login return pannunga",
      answer:
        "isLoggedIn ? 'Dashboard' : 'Login'",
    },

    {
      id: 2,
      question:
        "Oruvelai 'speed' 80-ku mela irundha Fine illana No Fine ternary use pannunga",
      answer:
        "speed > 80 ? 'Fine' : 'No Fine'",
    },
  ],
};

function ConditionsGame() {
  const [category, setCategory] = useState('simpleIf');
  const [currentTask, setCurrentTask] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [gateStatus, setGateStatus] =
    useState('LOCKED 🔒');

  const currentTasksList = conditionTasks[category];
  const task = currentTasksList[currentTask];

  const handleFirework = () => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: [
        THEME_COLOR,
        '#09ee24',
        '#ffffff',
      ],
    });
  };

  const triggerSuccess = () => {
    setResult('success');

    setScore((prev) => prev + 10);

    setShowAnswer(false);

    setGateStatus(
      'ACCESS GRANTED ✅'
    );

    handleFirework();
  };

  const checkCode = () => {
    let cleanInput = userInput
      .replace(/\s+/g, '')
      .replace(/;/g, '')
      .toLowerCase();

    let cleanAnswer = task.answer
      .replace(/\s+/g, '')
      .replace(/;/g, '')
      .toLowerCase();

    let stripInput = cleanInput.replace(
      /[{}]/g,
      ''
    );

    let stripAnswer = cleanAnswer.replace(
      /[{}]/g,
      ''
    );

    if (
      cleanInput === cleanAnswer ||
      stripInput === stripAnswer
    ) {
      triggerSuccess();

      return;
    }

    setResult('fail');

    setShowAnswer(true);

    setGateStatus('ACCESS DENIED 🚨');
  };

  const nextQuestion = () => {
    if (
      currentTask <
      currentTasksList.length - 1
    ) {
      setCurrentTask((prev) => prev + 1);

      setUserInput('');

      setResult(null);

      setShowAnswer(false);

      setGateStatus('LOCKED 🔒');
    }
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);

    setCurrentTask(0);

    setUserInput('');

    setResult(null);

    setShowAnswer(false);

    setGateStatus('LOCKED 🔒');
  };

  return (
    <Box
      sx={{
        bgcolor: '#060814',
        minHeight: '100vh',
        py: { xs: 3, md: 6 },
        px: { xs: 1.5, sm: 2 },
        color: '#fff',
        overflowX: 'hidden',
        fontFamily: 'sans-serif',
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          px: {
            xs: 0.5,
            sm: 2,
            md: 3,
          },
        }}
      >
        {/* TITLE */}

        <Typography
          variant="h3"
          sx={{
            fontWeight: 900,
            textAlign: 'center',
            mb: 1,
            lineHeight: 1.2,
            fontSize: {
              xs: '2rem',
              sm: '2.5rem',
              md: '3.5rem',
            },
            textShadow:
              '0 0 25px rgba(0,229,255,0.2)',
          }}
        >
          Cyber{' '}
          <span
            style={{
              color: THEME_COLOR,
              textShadow: `0 0 25px ${THEME_COLOR}`,
            }}
          >
            Condition Gate
          </span>{' '}
          ⚡
        </Typography>

        <Typography
          sx={{
            textAlign: 'center',
            color: '#8a99ad',
            mb: 4,
            px: 1,
            fontSize: {
              xs: '0.9rem',
              md: '1rem',
            },
          }}
        >
          Write correct conditions to control
          the smart laser security gate
          systems!
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
              width: {
                xs: '100%',
                sm: 340,
              },

              maxWidth: 420,

              bgcolor: '#0f1123',

              borderRadius: '14px',

              border:
                '1px solid #1f2445',
            }}
          >
            <InputLabel
              sx={{
                color: '#657795',
              }}
            >
              Select Condition Block
            </InputLabel>

            <Select
              value={category}
              label="Select Condition Block"
              onChange={
                handleCategoryChange
              }
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
              <MenuItem value="simpleIf">
                🔹 Simple If
              </MenuItem>

              <MenuItem value="ifElse">
                🌓 If / Else
              </MenuItem>

              <MenuItem value="elseIf">
                🚦 Else If Ladder
              </MenuItem>

              <MenuItem value="ternary">
                🏹 Ternary Operator
              </MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* GRID */}

        <Grid
  container
  spacing={2}
  sx={{
    flexWrap: 'nowrap',
    overflowX: 'auto',
    alignItems: 'stretch',

    /* smooth horizontal scroll */
    pb: 1,

    '&::-webkit-scrollbar': {
      height: '8px',
    },

    '&::-webkit-scrollbar-track': {
      background: '#0b1020',
      borderRadius: '20px',
    },

    '&::-webkit-scrollbar-thumb': {
      background: '#1f2445',
      borderRadius: '20px',
    },

    '&::-webkit-scrollbar-thumb:hover': {
      background: '#2f3b75',
    },
  }}
>
  {/* LEFT PANEL */}

  <Grid
    item
    sx={{
      width: {
        xs: '320px',
        sm: '340px',
        md: '35%',
      },

      minWidth: {
        xs: '320px',
        sm: '340px',
        md: '320px',
      },

      flexShrink: 0,

      display: 'flex',
    }}
  >
    <Paper
      sx={{
        p: {
          xs: 2.5,
          md: 4,
        },

        bgcolor: '#0b0e22',

        borderRadius: '24px',

        border: '1px solid #1b2145',

        textAlign: 'center',

        width: '100%',

        minHeight: {
          xs: '300px',
          md: '500px',
        },

        display: 'flex',

        flexDirection: 'column',

        justifyContent: 'center',

        alignItems: 'center',

        boxShadow:
          'inset 0 0 30px rgba(0,0,0,0.8)',
      }}
    >
      <SecurityIcon
        sx={{
          fontSize: {
            xs: 50,
            md: 70,
          },

          color:
            gateStatus.includes('GRANTED')
              ? '#09ee24'
              : gateStatus.includes(
                  'DENIED'
                )
              ? '#ff5252'
              : THEME_COLOR,

          mb: 2,

          transition: '0.3s',
        }}
      />

      <Typography
        variant="h6"
        sx={{
          color: '#657795',

          fontWeight: 600,

          mb: 2,

          fontSize: {
            xs: '1rem',
            md: '1.2rem',
          },
        }}
      >
        GATE CONTROLLER
      </Typography>

      {/* GATE STATUS BOX */}

      <Box
        sx={{
          width: '100%',

          height: {
            xs: '100px',
            md: '120px',
          },

          borderRadius: '16px',

          display: 'flex',

          alignItems: 'center',

          justifyContent: 'center',

          mb: 3,

          px: 2,

          bgcolor: '#030511',

          border: `2px dashed ${
            gateStatus.includes('GRANTED')
              ? '#09ee24'
              : gateStatus.includes(
                  'DENIED'
                )
              ? '#ff5252'
              : THEME_COLOR
          }`,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: 'monospace',

            fontWeight: 'bold',

            textAlign: 'center',

            wordBreak: 'break-word',

            fontSize: {
              xs: '1rem',
              sm: '1.3rem',
              md: '1.6rem',
            },

            color:
              gateStatus.includes(
                'GRANTED'
              )
                ? '#09ee24'
                : gateStatus.includes(
                    'DENIED'
                  )
                ? '#ff5252'
                : '#fff',
          }}
        >
          {gateStatus}
        </Typography>
      </Box>

      <Typography
        variant="caption"
        sx={{
          color: '#4c5a75',
          textAlign: 'center',
        }}
      >
        Status changes dynamically on
        execution feedback
      </Typography>
    </Paper>
  </Grid>

  {/* RIGHT PANEL */}

  <Grid
    item
    sx={{
      minWidth: {
        xs: '650px',
        md: '0',
      },

      flex: 1,

      display: 'flex',
    }}
  >
    <Paper
      sx={{
        p: {
          xs: 2,
          sm: 3,
          md: 4,
        },

        bgcolor:
          'rgba(15,18,38,0.7)',

        borderRadius: '24px',

        border:
          '1px solid rgba(255,255,255,0.05)',

        backdropFilter:
          'blur(20px)',

        width: '100%',

        minHeight: {
          xs: '300px',
          md: '500px',
        },

        display: 'flex',

        flexDirection: 'column',
      }}
    >
      {/* TOP BAR */}

      <Stack
        direction={{
          xs: 'row',
          sm: 'row',
        }}
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
        sx={{
          mb: 3,
          flexWrap: 'wrap',
          gap: 1,
        }}
      >
        <Chip
          label={`${category.toUpperCase()} - Mission ${
            task.id
          } / ${
            currentTasksList.length
          }`}
          sx={{
            bgcolor: '#000',

            color: THEME_COLOR,

            border:
              '1px solid #1f2445',

            fontWeight: 700,
          }}
        />

        <Typography
          sx={{
            color: '#09ee24',

            fontWeight: 800,

            fontSize: {
              xs: '1rem',
              md: '1.2rem',
            },
          }}
        >
          Gate Score: {score}
        </Typography>
      </Stack>

      {/* QUESTION */}

      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,

            color: '#fff',

            mb: 2,

            lineHeight: 1.6,

            wordBreak: 'break-word',

            fontSize: {
              xs: '1rem',
              md: '1.2rem',
            },
          }}
        >
          {task.question}
        </Typography>
      </Box>

      <Divider
        sx={{
          borderColor:
            'rgba(255,255,255,0.05)',

          mb: 3,
        }}
      />

      {/* INPUT */}

      <Box sx={{ mb: 3 }}>
        <Typography
          variant="subtitle2"
          sx={{
            color: '#8a99ad',

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
          CONDITION COMPILER
        </Typography>

        <TextField
          fullWidth
          multiline
          rows={3}
          placeholder="Write the condition structure here..."
          value={userInput}
          onChange={(e) =>
            setUserInput(e.target.value)
          }
          sx={inputStyle}
        />
      </Box>

      {/* BUTTONS */}

      <Stack
        direction="row"
        spacing={2}
        sx={{
          width: '100%',
          flexWrap: 'wrap',
        }}
      >
        <Button
          fullWidth
          variant="contained"
          onClick={checkCode}
          sx={btnStyle}
          disabled={result === 'success'}
        >
          Compile & Inject Logic 🔌
        </Button>

        {result &&
          currentTask <
            currentTasksList.length -
              1 && (
            <Button
              fullWidth
              variant="outlined"
              onClick={nextQuestion}
              sx={nextBtnStyle}
            >
              Next Security Terminal ➡️
            </Button>
          )}
      </Stack>

      {/* RESULTS */}

      <AnimatePresence>
        {result === 'success' && (
          <motion.div
            initial={{
              scale: 0.95,
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
                  'rgba(9,238,36,0.06)',

                borderRadius:
                  '12px',

                border:
                  '1px solid #09ee2422',
              }}
            >
              <Typography
                sx={{
                  color: '#09ee24',

                  fontWeight: 'bold',

                  display: 'flex',

                  alignItems: 'center',

                  gap: 1,

                  justifyContent:
                    'center',

                  textAlign: 'center',
                }}
              >
                <CheckCircleOutlineIcon />
                Logic Authorized! 🎉
              </Typography>
            </Box>
          </motion.div>
        )}

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
                mt: 3,

                p: 2.5,

                bgcolor:
                  'rgba(255,82,82,0.06)',

                borderRadius:
                  '12px',

                border:
                  '1px solid #ff525222',
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
                Syntax / Logic Breakdown!
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: '#8a99ad',
                  mb: 1,
                }}
              >
                Expected Layout:
              </Typography>

              <Typography
                sx={{
                  fontFamily:
                    'monospace',

                  color: '#fff',

                  bgcolor: '#02040a',

                  p: 1.5,

                  borderRadius: '8px',

                  border:
                    '1px solid #1f2445',

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

    bgcolor: '#02040a',

    borderRadius: '12px',

    fontSize: {
      xs: '14px',
      md: '16px',
    },

    '& fieldset': {
      borderColor: '#1f2445',
    },

    '&:hover fieldset': {
      borderColor: '#333b6e',
    },

    '&.Mui-focused fieldset': {
      borderColor: THEME_COLOR,
    },
  },

  '& textarea::placeholder': {
    color: '#3d4766',
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
    bgcolor: '#00bacc',

    boxShadow: `0 0 20px ${THEME_COLOR}55`,
  },

  '&.Mui-disabled': {
    bgcolor: '#091c24',
    color: '#224452',
  },
};

const nextBtnStyle = {
  borderRadius: '12px',

  color: '#fff',

  borderColor: '#1f2445',

  textTransform: 'none',

  fontSize: '0.95rem',

  '&:hover': {
    borderColor: THEME_COLOR,

    bgcolor: `${THEME_COLOR}11`,
  },
};

export default ConditionsGame;