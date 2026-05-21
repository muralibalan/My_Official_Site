import React, { useState } from "react";

import {
  Box,
  Typography,
  Paper,
  Button,
  Container,
  Stack,
  Divider,
  Chip,
  LinearProgress,
} from "@mui/material";

import { motion, AnimatePresence } from "framer-motion";

import confetti from "canvas-confetti";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// 🔥 IMPORT YOUR DATA FILE
import * as TNBoardSyllabusData from "../TNBoardSyllabusData";

function StateboardMegaQuiz() {
  // =========================
  // STATES
  // =========================

  const [selectedStream, setSelectedStream] =
    useState(null);

  const [selectedChapter, setSelectedChapter] =
    useState(null);

  const [currentTask, setCurrentTask] =
    useState(0);

  const [selectedOption, setSelectedOption] =
    useState(null);

  const [result, setResult] = useState(null);

  const [score, setScore] = useState(0);

  const [quizFinished, setQuizFinished] =
    useState(false);

  // =========================
  // SUBJECTS
  // =========================

  const syllabusRegistry = {
  physics: {
    name: "Physics",
    tamil: "இயற்பியல்",
    color: "#ff4d8d",
    icon: "⚛️",

    chapters: {
      nature_world: {
        name: "Nature of Physical World",
        dataArray:
          TNBoardSyllabusData.physicsCh1 || [],
      },
    },
  },

  chemistry: {
    name: "Chemistry",
    tamil: "வேதியியல்",
    color: "#00d4aa",
    icon: "🧪",

    chapters: {
      basic_concepts: {
        name: "Basic Concepts of Chemistry",
        dataArray:
          TNBoardSyllabusData.chemistryCh1 || [],
      },
    },
  },

  cs: {
    name: "Computer Science",
    tamil: "கணினி அறிவியல்",
    color: "#29b6f6",
    icon: "💻",

    chapters: {
      intro_comp: {
        name: "Introduction to Computers",
        dataArray:
          TNBoardSyllabusData.computerIntroTasks || [],
      },
    },
  },

  maths: {
    name: "Mathematics",
    tamil: "கணிதம்",
    color: "#b967ff",
    icon: "📐",

    chapters: {
      sets_relations: {
        name: "Sets and Relations",
        dataArray:
          TNBoardSyllabusData.mathsCh1 || [],
      },
    },
  },

  tamil: {
    name: "Tamil",
    tamil: "தமிழ்",
    color: "#45d33e",
    icon: "📖",

    chapters: {
      tamil_ch1: {
        name: "தமிழ் இயல் - 1",
        dataArray:
          TNBoardSyllabusData.tamilCh1 || [],
      },
    },
  },

  english: {
    name: "English",
    tamil: "ஆங்கிலம்",
    color: "#ff9800",
    icon: "📝",

    chapters: {
      english_ch1: {
        name: "English Prose & Grammar",
        dataArray:
          TNBoardSyllabusData.englishCh1 || [],
      },
    },
  },
};
  // =========================
  // CURRENT CONFIG
  // =========================

  const currentStreamConfig =
    syllabusRegistry[selectedStream];

  const currentChapterConfig =
    currentStreamConfig?.chapters[
      selectedChapter
    ];

  const tasks =
    currentChapterConfig?.dataArray || [];

  const task = tasks[currentTask];

  const currentTheme = currentStreamConfig
    ? {
        color: currentStreamConfig.color,
        name: currentStreamConfig.name,
        icon: currentStreamConfig.icon,
      }
    : {
        color: "#ff6b35",
      };

  // =========================
  // FIREWORK
  // =========================

  const handleFirework = () => {
    confetti({
      particleCount: 200,
      spread: 90,

      origin: {
        y: 0.6,
      },

      colors: [
        currentTheme.color,
        "#ffffff",
        "#ffd700",
      ],
    });
  };

  // =========================
  // OPTION CLICK
  // =========================

  const handleOptionClick = (option) => {
    // ⚡️ SAFE LOCK: Correct answer click pannuna piragu lock pannuvom
    if (result === "success") return;

    setSelectedOption(option);

    if (option === task.answer) {
      setResult("success");

      setScore((prev) => prev + 10);

      handleFirework();
    } else {
      setResult("fail");

      setScore((prev) =>
        Math.max(0, prev - 5)
      );
    }
  };

  // =========================
  // NEXT QUESTION
  // =========================

  const nextQuestion = () => {
    if (currentTask < tasks.length - 1) {
      setCurrentTask((prev) => prev + 1);

      setSelectedOption(null);

      setResult(null);
    } else {
      setQuizFinished(true);
    }
  };

  // =========================
  // RESET
  // =========================

  const resetGame = () => {
    setSelectedStream(null);

    setSelectedChapter(null);

    setCurrentTask(0);

    setSelectedOption(null);

    setResult(null);

    setScore(0);

    setQuizFinished(false);
  };

  const backToChapters = () => {
    setSelectedChapter(null);

    setCurrentTask(0);

    setSelectedOption(null);

    setResult(null);

    setQuizFinished(false);
  };

  // =========================
  // MAIN MENU
  // =========================

  if (!selectedStream) {
    return (
      <Box
        sx={{
          minHeight: "100vh",

          background:
            "radial-gradient(circle at top,#151515,#020202 75%)",

          display: "flex",

          alignItems: "center",

          justifyContent: "center",

          px: 2,

          py: 5,
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >
            <Paper
              sx={{
                p: {
                  xs: 3,
                  md: 5,
                },

                borderRadius: "35px",

                background:
                  "rgba(255,255,255,0.04)",

                backdropFilter: "blur(12px)",

                border:
                  "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* HERO */}
              <Box
                sx={{
                  textAlign: "center",
                  mb: 5,
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 900,

                    color: "#fff",

                    fontSize: {
                      xs: "2.5rem",
                      md: "4.5rem",
                    },
                  }}
                >
                  Tamil Nadu
                </Typography>

                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 900,

                    color: "#ff6b35",

                    fontSize: {
                      xs: "2rem",
                      md: "4rem",
                    },

                    mb: 2,
                  }}
                >
                  +1 Mega Quiz
                </Typography>

                <Typography
                  sx={{
                    color: "#999",

                    fontSize: {
                      xs: "1rem",
                      md: "1.1rem",
                    },

                    lineHeight: 1.8,
                  }}
                >
                  Learn Faster <br />
                  Practice Smart<br />
                  Score Higher in Public Exams
                </Typography>
              </Box>

              {/* SUBJECTS */}
              <Box
                sx={{
                  display: "grid",

                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "1fr 1fr",
                  },

                  gap: 3,
                }}
              >
                {Object.keys(
                  syllabusRegistry
                ).map((streamKey) => {
                  const stream =
                    syllabusRegistry[
                      streamKey
                    ];

                  return (
                    <motion.div
                      key={streamKey}
                      whileHover={{
                        y: -8,
                        scale: 1.03,
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                    >
                      <Box
                        onClick={() =>
                          setSelectedStream(
                            streamKey
                          )
                        }
                        sx={{
                          p: 4,

                          borderRadius: "28px",

                          background:
                            "linear-gradient(145deg,#111,#0b0b0b)",

                          border:
                            "1px solid rgba(255,255,255,0.08)",

                          cursor: "pointer",

                          transition: "0.3s",

                          "&:hover": {
                            borderColor:
                              stream.color,

                            boxShadow: `0 0 30px ${stream.color}55`,
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "4rem",

                            textAlign: "center",

                            mb: 2,
                          }}
                        >
                          {stream.icon}
                        </Typography>

                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 900,

                            color: "#fff",

                            textAlign: "center",
                          }}
                        >
                          {stream.name}
                        </Typography>

                        <Typography
                          sx={{
                            color: "#777",

                            textAlign: "center",

                            mt: 0.5,
                          }}
                        >
                          {stream.tamil}
                        </Typography>

                        <Box
                          sx={{
                            display: "flex",

                            justifyContent:
                              "center",

                            mt: 2,
                          }}
                        >
                          <Chip
                            label="🔥 Interactive Quiz"

                            sx={{
                              bgcolor: `${stream.color}22`,

                              color:
                                stream.color,

                              fontWeight: 800,
                            }}
                          />
                        </Box>
                      </Box>
                    </motion.div>
                  );
                })}
              </Box>
            </Paper>
          </motion.div>
        </Container>
      </Box>
    );
  }

  // =========================
  // CHAPTER SCREEN
  // =========================

  if (selectedStream && !selectedChapter) {
    return (
      <Box
        sx={{
          minHeight: "100vh",

          background:
            "radial-gradient(circle at top,#121212,#020202 75%)",

          display: "flex",

          alignItems: "center",

          justifyContent: "center",

          px: 2,
          py: 4,
        }}
      >
        <Container maxWidth="md">
          <Paper
            sx={{
              p: {
                xs: 3,
                md: 5,
              },

              borderRadius: "35px",

              background:
                "rgba(255,255,255,0.04)",

              backdropFilter: "blur(10px)",

              border:
                "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <Button
              startIcon={<ArrowBackIcon />}
              onClick={resetGame}
              sx={{
                color: currentTheme.color,

                mb: 3,

                fontWeight: 800,

                textTransform: "none",
              }}
            >
              Back to Subjects
            </Button>

            <Typography
              variant="h3"
              sx={{
                color: "#fff",

                fontWeight: 900,

                mb: 1,
              }}
            >
              {currentTheme.icon}{" "}
              {currentTheme.name}
            </Typography>

            <Typography
              sx={{
                color: "#888",

                mb: 4,
              }}
            >
              Choose Your Chapter 📚
            </Typography>

            <Stack spacing={2}>
              {Object.keys(
                currentStreamConfig.chapters
              ).map((chapKey) => {
                const chapter =
                  currentStreamConfig
                    .chapters[chapKey];

                return (
                  <motion.div
                    key={chapKey}
                    whileHover={{
                      x: 6,
                    }}
                  >
                    <Box
                      onClick={() =>
                        setSelectedChapter(
                          chapKey
                        )
                      }
                      sx={{
                        p: 3,

                        borderRadius: "22px",

                        background:
                          "linear-gradient(145deg,#111,#0c0c0c)",

                        border:
                          "1px solid rgba(255,255,255,0.08)",

                        cursor: "pointer",

                        transition: "0.3s",

                        "&:hover": {
                          borderColor:
                            currentTheme.color,

                          boxShadow: `0 0 20px ${currentTheme.color}33`,
                        },

                        display: "flex",

                        alignItems: "center",

                        justifyContent:
                          "space-between",
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            color: "#fff",

                            fontWeight: 800,
                          }}
                        >
                          {chapter.name}
                        </Typography>

                        <Typography
                          sx={{
                            color: "#666",

                            mt: 0.5,

                            fontSize:
                              "0.85rem",
                          }}
                        >
                          Public Exam
                          Preparation
                        </Typography>
                      </Box>

                      <Chip
                        label={`${chapter.dataArray.length} Questions`}
                        sx={{
                          bgcolor:
                            currentTheme.color,

                          color: "#fff",

                          fontWeight: 800,
                        }}
                      />
                    </Box>
                  </motion.div>
                );
              })}
            </Stack>
          </Paper>
        </Container>
      </Box>
    );
  }

  // =========================
  // FINISH SCREEN
  // =========================

  if (quizFinished) {
    return (
      <Box
        sx={{
          minHeight: "100vh",

          background:
            "radial-gradient(circle at top,#121212,#020202 75%)",

          display: "flex",

          alignItems: "center",

          justifyContent: "center",

          px: 2,
        }}
      >
        <Container maxWidth="sm">
          <Paper
            sx={{
              p: 5,

              borderRadius: "35px",

              background:
                "rgba(255,255,255,0.04)",

              textAlign: "center",

              border:
                "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 900,

                color: "#00ff99",

                mb: 2,
              }}
            >
              🏆 Quiz Completed
            </Typography>

            <Typography
              sx={{
                color: "#aaa",

                mb: 2,
              }}
            >
              Excellent Practice Session
              Completed 🚀
            </Typography>

            <Typography
              variant="h4"
              sx={{
                color: currentTheme.color,

                fontWeight: 900,

                mb: 2,
              }}
            >
              {score} / {tasks.length * 10}
            </Typography>

            <Typography
              sx={{
                color: "#999",

                mb: 4,

                fontWeight: 700,
              }}
            >
              {score >= tasks.length * 8
                ? "🔥 Outstanding Performance"
                : score >= tasks.length * 5
                ? "⚡ Good Progress"
                : "💪 Keep Practicing"}
            </Typography>

            <Stack spacing={2}>
              <Button
                fullWidth
                variant="contained"
                onClick={backToChapters}
                sx={{
                  py: 1.7,

                  borderRadius: "16px",

                  fontWeight: 900,

                  bgcolor:
                    currentTheme.color,

                  textTransform: "none",
                }}
              >
                Try Another Chapter ➜
              </Button>

              <Button
                fullWidth
                onClick={resetGame}
                sx={{
                  color: "#aaa",

                  fontWeight: 800,

                  textTransform: "none",
                }}
              >
                Back to Subjects
              </Button>
            </Stack>
          </Paper>
        </Container>
      </Box>
    );
  }

  // =========================
  // QUIZ SCREEN
  // =========================

  return (
    <Box
      sx={{
        minHeight: "100vh",

        background:
          "radial-gradient(circle at top,#111,#020202 75%)",

        px: 2,

        py: 4,
      }}
    >
      <Container maxWidth="md">
        {/* HEADER */}
        <Box
          sx={{
            textAlign: "center",

            mb: 4,
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "2rem",
                md: "3rem",
              },

              fontWeight: 900,

              color: "#fff",
            }}
          >
            {currentTheme.icon}{" "}
            {currentTheme.name}
          </Typography>

          <Typography
            sx={{
              color: "#888",

              mt: 1,
            }}
          >
            {currentChapterConfig.name}
          </Typography>

          <Typography
            sx={{
              color: currentTheme.color,

              mt: 1,

              fontWeight: 800,
            }}
          >
            🎯 Public Exam Preparation
          </Typography>

          <Button
            startIcon={<ArrowBackIcon />}
            onClick={backToChapters}
            sx={{
              mt: 2,

              color: "#aaa",

              textTransform: "none",

              fontWeight: 700,
            }}
          >
            Back to Chapters
          </Button>
        </Box>

        {/* QUIZ CARD */}
        <Paper
          sx={{
            p: {
              xs: 3,
              md: 4,
            },

            borderRadius: "30px",

            background:
              "rgba(255,255,255,0.04)",

            border:
              "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* TOP */}
          <Box
            sx={{
              display: "flex",

              justifyContent:
                "space-between",

              alignItems: "center",

              mb: 2,
            }}
          >
            <Chip
              label={`Question ${
                currentTask + 1
              } / ${tasks.length}`}
              sx={{
                bgcolor: "#111",

                color: currentTheme.color,

                fontWeight: 800,
              }}
            />

            <Typography
              sx={{
                color: currentTheme.color,

                fontWeight: 900,
              }}
            >
              Score : {score}
            </Typography>
          </Box>

          {/* PROGRESS */}
          <LinearProgress
            variant="determinate"
            value={
              ((currentTask + 1) /
                tasks.length) *
              100
            }
            sx={{
              height: 10,

              borderRadius: 30,

              background: "#111",

              mb: 4,

              "& .MuiLinearProgress-bar":
                {
                  background:
                    currentTheme.color,
                },
            }}
          />

          {/* QUESTION */}
          <Typography
            sx={{
              color: "#fff",

              fontWeight: 800,

              fontSize: {
                xs: "1.1rem",
                md: "1.4rem",
              },

              lineHeight: 1.7,

              mb: 4,
            }}
          >
            {task?.question}
          </Typography>

          <Divider
            sx={{
              borderColor:
                "rgba(255,255,255,0.06)",

              mb: 4,
            }}
          />

          {/* OPTIONS */}
          <Box
            sx={{
              display: "flex",

              flexDirection: "column",

              gap: 2,

              mb: 3,
            }}
          >
            {task?.options.map(
              (option, idx) => {
                const isSelected =
                  selectedOption === option;

                const isCorrect =
                  option === task.answer;

                let borderColor =
                  "rgba(255,255,255,0.08)";

                let bgColor = "#111";

                let glow = "none";

                // Highlight Correct Answer (either when correctly guessed, or dynamically locked)
                if (
                  result === "success" && isCorrect
                ) {
                  borderColor =
                    "#00ff99";

                  bgColor =
                    "rgba(0,255,153,0.12)";

                  glow =
                    "0 0 25px rgba(0,255,153,0.35)";
                }

                // If user clicks a wrong option, immediately highlight it as fail
                if (
                  result === "fail" &&
                  isSelected
                ) {
                  borderColor =
                    "#ff4d6d";

                  bgColor =
                    "rgba(255,77,109,0.12)";
                }

                return (
                  <motion.div
                    key={idx}
                    whileHover={{
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    animate={
                      result ===
                        "fail" &&
                      isSelected
                        ? {
                            x: [
                              0,
                              -10,
                              10,
                              -5,
                              5,
                              0,
                            ],
                          }
                        : {}
                    }
                  >
                    <Box
                      onClick={() =>
                        handleOptionClick(
                          option
                        )
                      }
                      sx={{
                        minHeight:
                          "75px",

                        borderRadius:
                          "22px",

                        border: `2px solid ${borderColor}`,

                        background:
                          bgColor,

                        boxShadow:
                          glow,

                        px: 2.5,

                        py: 2,

                        display:
                          "flex",

                        alignItems:
                          "center",

                        gap: 2,

                        cursor:
                          result === "success"
                            ? "not-allowed"
                            : "pointer",

                        transition:
                          "0.3s",

                        "&:hover": {
                          borderColor:
                            result === "success"
                              ? borderColor
                              : currentTheme.color,
                        },
                      }}
                    >
                      {/* LETTER */}
                      <Box
                        sx={{
                          width: 42,
                          height: 42,

                          borderRadius:
                            "50%",

                          bgcolor:
                            isSelected
                              ? currentTheme.color
                              : "#1b1b1b",

                          display:
                            "flex",

                          alignItems:
                            "center",

                          justifyContent:
                            "center",

                          color:
                            "#fff",

                          fontWeight: 900,
                        }}
                      >
                        {String.fromCharCode(
                          65 + idx
                        )}
                      </Box>

                      {/* TEXT */}
                      <Typography
                        sx={{
                          color:
                            "#fff",

                          fontWeight: 700,

                          flex: 1,
                        }}
                      >
                        {option}
                      </Typography>

                      {/* CORRECT BADGE */}
                      {result === "success" &&
                        isCorrect && (
                          <CheckCircleOutlineIcon
                            sx={{
                              color:
                                "#00ff99",
                            }}
                          />
                        )}

                      {/* WRONG BADGE */}
                      {result === "fail" &&
                        isSelected && (
                          <Typography>
                            😢
                          </Typography>
                        )}
                    </Box>
                  </motion.div>
                );
              }
            )}
          </Box>

          {/* EXPLANATION / FEEDBACK CONTAINER */}
          <AnimatePresence>
            {result === "success" && (
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

                    borderRadius:
                      "20px",

                    background:
                      "rgba(0,255,153,0.08)",

                    border:
                      "1px solid rgba(0,255,153,0.2)",

                    mb: 3,
                  }}
                >
                  <Typography
                    sx={{
                      color:
                        "#00ff99",

                      fontWeight: 900,

                      mb: 1,
                    }}
                  >
                    🔥 Super Answer Boss!
                  </Typography>

                  <Typography
                    sx={{
                      color:
                        "#ddd",

                      lineHeight: 1.7,
                    }}
                  >
                    {task.explain}
                  </Typography>
                </Box>

                <Button
                  fullWidth
                  variant="contained"
                  onClick={nextQuestion}
                  sx={{
                    py: 1.7,

                    borderRadius:
                      "16px",

                    fontWeight: 900,

                    textTransform:
                      "none",

                    bgcolor:
                      currentTheme.color,

                    "&:hover": {
                      bgcolor:
                        currentTheme.color,
                      filter:
                        "brightness(0.95)",
                    },
                  }}
                >
                  Next Question ➜
                </Button>
              </motion.div>
            )}

            {result === "fail" && (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
              >
                <Box
                  sx={{
                    p: 3,

                    borderRadius:
                      "20px",

                    background:
                      "rgba(255,77,109,0.08)",

                    border:
                      "1px solid rgba(255,77,109,0.2)",

                    textAlign:
                      "center",
                  }}
                >
                  <Typography
                    sx={{
                      color:
                        "#ff4d6d",

                      fontWeight: 900,

                      mb: 1,
                    }}
                  >
                    😢 Konjam Gavanam Boss!
                  </Typography>

                  <Typography
                    sx={{
                      color:
                        "#bbb",

                      lineHeight: 1.7,
                    }}
                  >
                    Correct answer-ah
                    identify panna
                    question-ah calm-ah
                    padichu try pannunga
                    💪
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

export default StateboardMegaQuiz;