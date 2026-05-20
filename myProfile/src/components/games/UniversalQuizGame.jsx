import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Button,
  Container,
  Stack,
  Divider,
  Chip,
} from '@mui/material';

import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

import CodeIcon from '@mui/icons-material/Code';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import * as allData from '../quizData';

function UniversalQuizGame() {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [currentTask, setCurrentTask] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState(0);

  const subjectRegistry = {
    html: {
      name: 'HTML5',
      color: '#ff6b35',
      dataArray: allData.htmlTasks,
    },

    css: {
      name: 'CSS3',
      color: '#264de4',
      dataArray: allData.cssTasks,
    },

    js: {
      name: 'JavaScript',
      color: '#f7df1e',
      textColor: '#000',
      dataArray: allData.jsTasks,
    },

    c: {
      name: 'C Language',
      color: '#00c2ff',
      dataArray: allData.cTasks,
    },

    cpp: {
      name: 'C++',
      color: '#00599c',
      dataArray: allData.cppTasks,
    },
    java: {
      name: 'java',
      color: '#009c2a',
      dataArray: allData.javaTasks,
    },
  };

  const currentConfig = subjectRegistry[selectedSubject];

  const tasks =
    currentConfig && currentConfig.dataArray
      ? currentConfig.dataArray
      : [];

  const task = tasks[currentTask];

  const currentTheme = currentConfig
    ? {
        color: currentConfig.color,
        name: currentConfig.name,
        textColor: currentConfig.textColor || '#fff',
      }
    : {
        color: '#ff6b35',
        name: '',
        textColor: '#fff',
      };

  const availableSubjects = Object.keys(subjectRegistry).filter(
    (key) => subjectRegistry[key].dataArray !== undefined
  );

  const handleFirework = () => {
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 },
      colors: [currentTheme.color, '#ffffff', '#00ffea'],
    });
  };

  const handleOptionClick = (option) => {
    if (result === 'success') return;

    setSelectedOption(option);

    if (option === task.answer) {
      setResult('success');
      setScore((prev) => prev + 10);
      handleFirework();
    } else {
      setResult('fail');
      setScore((prev) => Math.max(0, prev - 5));
    }
  };

  const nextQuestion = () => {
    if (currentTask < tasks.length - 1) {
      setCurrentTask(currentTask + 1);
      setSelectedOption(null);
      setResult(null);
    }
  };

  const resetGame = () => {
    setSelectedSubject(null);
    setCurrentTask(0);
    setSelectedOption(null);
    setResult(null);
    setScore(0);
  };

  // SUBJECT SCREEN

  if (!selectedSubject) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          bgcolor: '#050505',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: 2,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: 400,
            height: 400,
            background: '#ff6b3520',
            borderRadius: '50%',
            filter: 'blur(100px)',
            top: -100,
            left: -100,
          }}
        />

        <Container maxWidth="sm">
          <Paper
            sx={{
              p: 4,
              borderRadius: '28px',
              bgcolor: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(18px)',
              border: '1px solid rgba(255,255,255,0.06)',
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 900,
                mb: 1,
                color: '#fff',
              }}
            >
              Quiz
              <span style={{ color: '#ff6b35' }}>
                {' '}
                Master
              </span>
            </Typography>

            <Typography
              sx={{
                color: '#aaa',
                mb: 4,
              }}
            >
              Choose Your Favourite Subject 🚀
            </Typography>

            <Stack spacing={2}>
              {availableSubjects.map((subjectKey) => {
                const config = subjectRegistry[subjectKey];

                return (
                  <motion.div
                    whileHover={{
                      scale: 1.03,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    key={subjectKey}
                  >
                    <Button
                      fullWidth
                      variant="contained"
                      onClick={() =>
                        setSelectedSubject(subjectKey)
                      }
                      sx={{
                        py: 1.8,
                        borderRadius: '16px',
                        fontWeight: 800,
                        fontSize: '1rem',
                        textTransform: 'none',
                        bgcolor: config.color,
                        color:
                          config.textColor || '#fff',

                        '&:hover': {
                          bgcolor: config.color,
                          filter: 'brightness(0.9)',
                        },
                      }}
                    >
                      {config.name} Quiz (
                      {config.dataArray.length} Questions)
                    </Button>
                  </motion.div>
                );
              })}
            </Stack>
          </Paper>
        </Container>
      </Box>
    );
  }

  // QUIZ SCREEN

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#050505',
        py: 5,
        px: 2,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: 500,
          height: 500,
          background: `${currentTheme.color}15`,
          borderRadius: '50%',
          filter: 'blur(120px)',
          top: -200,
          right: -100,
        }}
      />

      <Container maxWidth="md">
        <Typography
          variant="h4"
          sx={{
            fontWeight: 900,
            textAlign: 'center',
            color: '#fff',
            mb: 1,
            fontSize: {
              xs: '2rem',
              md: '3rem',
            },
          }}
        >
          {currentTheme.name}
          <span style={{ color: currentTheme.color }}>
            {' '}
            Quiz
          </span>
        </Typography>

        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Button
            onClick={resetGame}
            sx={{
              color: '#aaa',
              textTransform: 'none',
            }}
          >
            ⬅ Back
          </Button>
        </Box>

        <Paper
          sx={{
            p: {
              xs: 3,
              md: 5,
            },

            borderRadius: '30px',

            bgcolor: 'rgba(255,255,255,0.04)',

            backdropFilter: 'blur(18px)',

            border: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: 4 }}
          >
            <Chip
              label={`QUESTION ${currentTask + 1} / ${
                tasks.length
              }`}
              sx={{
                bgcolor: '#111',
                color: currentTheme.color,
                fontWeight: 700,
              }}
            />

            <Typography
              sx={{
                color: currentTheme.color,
                fontWeight: 800,
                fontSize: '1.1rem',
              }}
            >
              Score : {score}
            </Typography>
          </Stack>

          {/* QUESTION */}

          <Typography
            sx={{
              color: '#fff',
              fontWeight: 700,
              lineHeight: 1.7,
              fontSize: {
                xs: '1.1rem',
                md: '1.4rem',
              },
            }}
          >
            {task?.question}
          </Typography>

          <Divider
            sx={{
              borderColor: 'rgba(255,255,255,0.05)',
              my: 4,
            }}
          />

          {/* OPTIONS */}

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2,
              mb: 4,
            }}
          >
            {task?.options.map((option, idx) => {
              const isSelected =
                selectedOption === option;

              const isCorrect =
                option === task.answer;

              let borderColor = '#222';
              let bgColor = '#0f0f0f';

              if (result && isCorrect) {
                borderColor = '#00ff88';
                bgColor = 'rgba(0,255,136,0.08)';
              }

              if (
                result === 'fail' &&
                isSelected
              ) {
                borderColor = '#ff5252';
                bgColor = 'rgba(255,82,82,0.08)';
              }

              return (
                <motion.div
                  key={idx}
                  whileHover={{
                    scale: 1.03,
                  }}
                  animate={
                    result === 'fail' &&
                    isSelected
                      ? {
                          x: [
                            0,
                            -8,
                            8,
                            -6,
                            6,
                            0,
                          ],
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.4,
                  }}
                  style={{
                    flex:
                      '1 1 calc(50% - 10px)',

                    minWidth: '260px',
                  }}
                >
                  <Box
                    onClick={() =>
                      handleOptionClick(option)
                    }
                    sx={{
                      p: 2.5,

                      minHeight: '90px',

                      borderRadius: '18px',

                      border: `2px solid ${borderColor}`,

                      bgcolor: bgColor,

                      display: 'flex',

                      alignItems: 'center',

                      gap: 2,

                      cursor:
                        result === 'success'
                          ? 'not-allowed'
                          : 'pointer',

                      transition: '0.25s',

                      backdropFilter:
                        'blur(10px)',

                      boxShadow: isSelected
                        ? `0 0 20px ${borderColor}55`
                        : 'none',

                      '&:hover': {
                        borderColor:
                          result
                            ? borderColor
                            : currentTheme.color,

                        transform:
                          'translateY(-2px)',

                        background:
                          'rgba(255,255,255,0.03)',
                      },
                    }}
                  >
                    <CodeIcon
                      sx={{
                        color: isSelected
                          ? currentTheme.color
                          : '#666',
                      }}
                    />

                    <Typography
                      sx={{
                        color: '#fff',
                        fontWeight: 700,
                        fontFamily:
                          'monospace',

                        wordBreak:
                          'break-word',
                      }}
                    >
                      {option}
                    </Typography>
                  </Box>
                </motion.div>
              );
            })}
          </Box>

          {/* RESULT */}

          <AnimatePresence>
            {result === 'success' && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
              >
                <Box
                  sx={{
                    p: 3,
                    borderRadius: '18px',
                    bgcolor:
                      'rgba(0,255,136,0.06)',
                    border:
                      '1px solid rgba(0,255,136,0.2)',
                    mb: 3,
                  }}
                >
                  <Typography
                    sx={{
                      color: '#00ff88',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      mb: 1,
                    }}
                  >
                    <CheckCircleOutlineIcon />
                    Correct Answer 🎉
                  </Typography>

                  <Typography
                    sx={{
                      color: '#ccc',
                      lineHeight: 1.7,
                    }}
                  >
                    {task.explain}
                  </Typography>
                </Box>

                {currentTask <
                  tasks.length - 1 && (
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={nextQuestion}
                    sx={{
                      py: 1.6,
                      borderRadius: '16px',
                      fontWeight: 800,
                      fontSize: '1rem',
                      textTransform: 'none',
                      bgcolor: currentTheme.color,
                      color:
                        currentTheme.textColor,

                      '&:hover': {
                        bgcolor:
                          currentTheme.color,
                        filter:
                          'brightness(0.9)',
                      },
                    }}
                  >
                    Next Question ➜
                  </Button>
                )}
              </motion.div>
            )}

            {result === 'fail' && (
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
                    p: 3,
                    borderRadius: '18px',
                    bgcolor:
                      'rgba(255,82,82,0.06)',
                    border:
                      '1px solid rgba(255,82,82,0.2)',
                    textAlign: 'center',
                  }}
                >
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '2rem',
                      }}
                    >
                      😢
                    </Typography>
                  </motion.div>

                  <Typography
                    sx={{
                      color: '#ff5252',
                      fontWeight: 800,
                      mt: 1,
                    }}
                  >
                    Wrong Answer Bro!
                  </Typography>

                  <Typography
                    sx={{
                      color: '#bbb',
                      mt: 1,
                      lineHeight: 1.6,
                    }}
                  >
                    5 points poiduchu 😭
                    <br />
                    Vera option try pannunga!
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

export default UniversalQuizGame;