import React, { useState } from "react";

import {
  Box,
  Container,
  Paper,
  Typography,
  Button,
  Stack,
  Collapse,
  LinearProgress,
  Chip,
} from "@mui/material";

import { motion, AnimatePresence } from "framer-motion";

import confetti from "canvas-confetti";

import useSound from "use-sound";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

import { englishQuizData } from '../englishDailyUseQuestions';

// 🔊 SOUND FILES
// public/sounds/win.mp3
// public/sounds/wrong.mp3

const THEME_COLOR = "#09ee24";
const ERROR_COLOR = "#ff2a2a";

// ---------------- QUIZ DATA ----------------

// const englishQuizData = [
//   {
//     id: 1,
//     question:
//       'Tamila: "Nee Saapitiya?" — Ithei English-la eppadi kepenga?',

//     options: [
//       {
//         text: "Did you eat?",
//         isCorrect: true,
//       },

//       {
//         text: "Have you eating?",
//         isCorrect: false,
//       },

//       {
//         text: "You eat what?",
//         isCorrect: false,
//       },
//     ],

//     explanation:
//       "Past tense question kekka 'Did' use pannuvanga.",
//   },

//   {
//     id: 2,

//     question:
//       'Tamila: "Naan appuram pesuraen." — Deeni English form enna?',

//     options: [
//       {
//         text: "I talk you later.",
//         isCorrect: false,
//       },

//       {
//         text: "I will talk to you later.",
//         isCorrect: true,
//       },

//       {
//         text: "I speaking later.",
//         isCorrect: false,
//       },
//     ],

//     explanation:
//       "Future tense-ku 'will' use pannuvanga.",
//   },

//   {
//     id: 3,

//     question:
//       'Tamila: "Enaku puriyala." — Eppadi tharama solluvinga?',

//     options: [
//       {
//         text: "I am not understand.",
//         isCorrect: false,
//       },

//       {
//         text: "I don't understand.",
//         isCorrect: true,
//       },

//       {
//         text: "I not understanding.",
//         isCorrect: false,
//       },
//     ],

//     explanation:
//       "Present tense negative-ku don't use pannuvanga.",
//   },

//   {
//     id: 4,

//     question:
//       'Tamila: "Enna panra?" — Eppadi English-la kekanum?',

//     options: [
//       {
//         text: "What you doing?",
//         isCorrect: false,
//       },

//       {
//         text: "What are you doing?",
//         isCorrect: true,
//       },

//       {
//         text: "What do you doing?",
//         isCorrect: false,
//       },
//     ],

//     explanation:
//       "Continuous tense-ku helping verb 'are' varanum.",
//   },
// ];


function EnglishQuizWidget() {
  // =========================
  // STATES
  // =========================

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [selectedOption, setSelectedOption] =
    useState(null);

  const [isAnswered, setIsAnswered] =
    useState(false);

  const [score, setScore] = useState(0);

  // =========================
  // SOUND EFFECTS
  // =========================

  const [playCorrect] = useSound(
    "/sounds/win.mp3",
    {
      volume: 0.7,
    }
  );

  const [playWrong] = useSound(
    "/sounds/wrong.mp3",
    {
      volume: 0.7,
    }
  );

  // =========================
  // FIREWORKS
  // =========================

  const triggerVediAnimation = () => {
    confetti({
      particleCount: 150,

      spread: 80,

      origin: {
        x: 0.2,
        y: 0.6,
      },

      colors: [
        "#09ee24",
        "#ffeb3b",
        "#00f0ff",
        "#ff2a2a",
      ],
    });

    confetti({
      particleCount: 150,

      spread: 80,

      origin: {
        x: 0.8,
        y: 0.6,
      },

      colors: [
        "#09ee24",
        "#ffeb3b",
        "#00f0ff",
        "#ff2a2a",
      ],
    });
  };

  // =========================
  // HANDLE OPTION
  // =========================

  const handleOptionClick = (
    option
  ) => {
    if (isAnswered) return;

    setSelectedOption(option);

    setIsAnswered(true);

    if (option.isCorrect) {
      triggerVediAnimation();

      playCorrect();

      setScore(
        (prev) => prev + 10
      );
    } else {
      playWrong();

      setScore((prev) =>
        Math.max(0, prev - 5)
      );
    }
  };

  // =========================
  // NEXT QUESTION
  // =========================

  const handleNext = () => {
    setSelectedOption(null);

    setIsAnswered(false);

    if (
      currentQuestion <
      englishQuizData.length - 1
    ) {
      setCurrentQuestion(
        (prev) => prev + 1
      );
    } else {
      setCurrentQuestion(0);
    }
  };

  const activeQuiz =
    englishQuizData[currentQuestion];

  // =========================
  // UI
  // =========================

  return (
    <Box
      sx={{
        bgcolor: "#060c09",

        minHeight: "100vh",

        display: "flex",

        alignItems: "center",

        py: 4,

        overflow: "hidden",

        position: "relative",

        background:
          "radial-gradient(circle at top,#0b1f15,#050805 80%)",
      }}
    >
      {/* AMBIENT LIGHTS */}

      <Box
        sx={{
          position: "absolute",

          width: 300,
          height: 300,

          bgcolor:
            "rgba(9,238,36,0.08)",

          borderRadius: "50%",

          filter: "blur(120px)",

          top: -100,

          left: -100,
        }}
      />

      <Box
        sx={{
          position: "absolute",

          width: 250,
          height: 250,

          bgcolor:
            "rgba(0,240,255,0.08)",

          borderRadius: "50%",

          filter: "blur(120px)",

          bottom: -100,

          right: -100,
        }}
      />

      <Container maxWidth="sm">
        {/* TOP BAR */}

        <Box
          sx={{
            display: "flex",

            justifyContent:
              "space-between",

            alignItems: "center",

            mb: 2,

            px: 1,
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              color: "#4d7561",

              fontWeight: 700,
            }}
          >
            SPEAK ENGLISH EASILY 🗣️
          </Typography>

          <Typography
            sx={{
              color: "#fff",

              fontWeight: 800,
            }}
          >
            Score : {score}
          </Typography>
        </Box>

        {/* MAIN CARD */}

        <Paper
          component={motion.div}
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 4,

            repeat: Infinity,
          }}
          elevation={10}
          sx={{
            bgcolor:
              "rgba(13,22,18,0.72)",

            backdropFilter:
              "blur(16px)",

            borderRadius: "28px",

            p: {
              xs: 3,
              md: 4,
            },

            border:
              "1px solid #162a20",

            boxShadow:
              "0 20px 40px rgba(0,0,0,0.6)",
          }}
        >
          {/* HEADER */}

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
              icon={
                <EmojiEventsIcon />
              }
              label={`Kelvi ${
                currentQuestion + 1
              } / ${
                englishQuizData.length
              }`}
              sx={{
                bgcolor:
                  "rgba(9,238,36,0.1)",

                color: THEME_COLOR,

                fontWeight: 700,
              }}
            />

            <Typography
              sx={{
                color: THEME_COLOR,

                fontWeight: 800,
              }}
            >
              English Practice
            </Typography>
          </Box>

          {/* PROGRESS */}

          <LinearProgress
            variant="determinate"
            value={
              ((currentQuestion + 1) /
                englishQuizData.length) *
              100
            }
            sx={{
              height: 10,

              borderRadius: 10,

              mb: 4,

              bgcolor: "#101a14",

              "& .MuiLinearProgress-bar":
                {
                  bgcolor:
                    THEME_COLOR,
                },
            }}
          />

          {/* QUESTION */}

          <motion.div
            key={currentQuestion}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "#fff",

                fontWeight: 700,

                mb: 4,

                lineHeight: 1.5,

                minHeight: "80px",
              }}
            >
              {
                activeQuiz.question
              }
            </Typography>
          </motion.div>

          {/* OPTIONS */}

          <Stack
            spacing={2}
            sx={{
              mb: 4,
            }}
          >
            {activeQuiz.options.map(
              (
                option,
                index
              ) => {
                let btnBg =
                  "#122019";

                let btnBorder =
                  "#1c3528";

                let btnColor =
                  "#fff";

                let animation =
                  "none";

                if (isAnswered) {
                  if (
                    option.isCorrect
                  ) {
                    btnBg =
                      "rgba(9,238,36,0.1)";

                    btnBorder =
                      THEME_COLOR;

                    btnColor =
                      THEME_COLOR;

                    animation =
                      "pulseGlow 1.2s infinite";
                  } else if (
                    selectedOption?.text ===
                      option.text &&
                    !option.isCorrect
                  ) {
                    btnBg =
                      "rgba(255,42,42,0.1)";

                    btnBorder =
                      ERROR_COLOR;

                    btnColor =
                      ERROR_COLOR;
                  } else {
                    btnBg =
                      "#0a0f0d";

                    btnBorder =
                      "#0d1612";

                    btnColor =
                      "rgba(255,255,255,0.2)";
                  }
                }

                return (
                  <Button
                    key={index}
                    fullWidth
                    component={
                      motion.button
                    }
                    whileHover={
                      !isAnswered
                        ? {
                            scale: 1.02,
                          }
                        : {}
                    }
                    whileTap={
                      !isAnswered
                        ? {
                            scale: 0.98,
                          }
                        : {}
                    }
                    animate={
                      isAnswered &&
                      selectedOption?.text ===
                        option.text &&
                      !option.isCorrect
                        ? {
                            x: [
                              0,
                              -15,
                              15,
                              -10,
                              10,
                              0,
                            ],

                            rotate: [
                              0,
                              -2,
                              2,
                              -2,
                              2,
                              0,
                            ],
                          }
                        : {}
                    }
                    onClick={() =>
                      handleOptionClick(
                        option
                      )
                    }
                    disabled={
                      isAnswered
                    }
                    sx={{
                      justifyContent:
                        "flex-start",

                      textAlign:
                        "left",

                      bgcolor:
                        btnBg,

                      border: `1px solid ${btnBorder}`,

                      color:
                        btnColor,

                      borderRadius:
                        "16px",

                      p: 2,

                      textTransform:
                        "none",

                      fontWeight: 600,

                      fontSize:
                        "1rem",

                      animation,

                      transition:
                        "0.3s",

                      "&.Mui-disabled":
                        {
                          color:
                            btnColor,
                        },

                      "&:hover": {
                        bgcolor:
                          !isAnswered
                            ? "#162a20"
                            : btnBg,
                      },

                      "@keyframes pulseGlow":
                        {
                          "0%": {
                            boxShadow:
                              "0 0 0px #09ee24",
                          },

                          "50%": {
                            boxShadow:
                              "0 0 25px #09ee24",
                          },

                          "100%": {
                            boxShadow:
                              "0 0 0px #09ee24",
                          },
                        },
                    }}
                  >
                    <Box
                      sx={{
                        display:
                          "flex",

                        alignItems:
                          "center",

                        width:
                          "100%",

                        gap: 1.5,
                      }}
                    >
                      {/* OPTION LETTER */}

                      <Box
                        sx={{
                          width: 28,

                          height: 28,

                          borderRadius:
                            "50%",

                          border:
                            "2px solid currentColor",

                          display:
                            "flex",

                          alignItems:
                            "center",

                          justifyContent:
                            "center",

                          fontSize:
                            "12px",

                          flexShrink: 0,
                        }}
                      >
                        {String.fromCharCode(
                          65 + index
                        )}
                      </Box>

                      {/* TEXT */}

                      <Box
                        sx={{
                          flexGrow: 1,
                        }}
                      >
                        {option.text}
                      </Box>

                      {/* ICON */}

                      {isAnswered &&
                        option.isCorrect && (
                          <CheckCircleOutlineIcon />
                        )}

                      {isAnswered &&
                        selectedOption?.text ===
                          option.text &&
                        !option.isCorrect && (
                          <HighlightOffIcon />
                        )}
                    </Box>
                  </Button>
                );
              }
            )}
          </Stack>

          {/* RESULT PANEL */}

          <AnimatePresence>
            {isAnswered && (
              <Collapse in>
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
                  {/* STATUS */}

                  {selectedOption?.isCorrect ? (
                    <Box
                      sx={{
                        display:
                          "flex",

                        alignItems:
                          "center",

                        gap: 1,

                        color:
                          THEME_COLOR,

                        mb: 1.5,
                      }}
                    >
                      <CheckCircleOutlineIcon />

                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 700,
                        }}
                      >
                        🔥 Super English
                        Boss!
                      </Typography>
                    </Box>
                  ) : (
                    <Box
                      sx={{
                        display:
                          "flex",

                        alignItems:
                          "center",

                        gap: 1,

                        color:
                          ERROR_COLOR,

                        mb: 1.5,
                      }}
                    >
                      <HighlightOffIcon />

                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 700,
                        }}
                      >
                        😢 Konjam
                        Practice Pannu
                        Boss!
                      </Typography>
                    </Box>
                  )}

                  {/* EXPLANATION */}

                  <Box
                    sx={{
                      bgcolor:
                        "#080f0c",

                      p: 2,

                      borderRadius:
                        "14px",

                      borderLeft: `4px solid ${
                        selectedOption?.isCorrect
                          ? THEME_COLOR
                          : ERROR_COLOR
                      }`,

                      mb: 3,
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color:
                          "#8fa399",

                        lineHeight: 1.7,

                        fontSize:
                          "0.95rem",
                      }}
                    >
                      {
                        activeQuiz.explanation
                      }
                    </Typography>
                  </Box>

                  {/* NEXT BUTTON */}

                  <Button
                    fullWidth
                    variant="contained"
                    onClick={
                      handleNext
                    }
                    component={
                      motion.button
                    }
                    whileHover={{
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    sx={{
                      bgcolor:
                        THEME_COLOR,

                      color: "#000",

                      fontWeight: 700,

                      borderRadius:
                        "14px",

                      py: 1.6,

                      textTransform:
                        "none",

                      fontSize:
                        "1rem",

                      "&:hover":
                        {
                          bgcolor:
                            "#06c21d",
                        },
                    }}
                  >
                    {currentQuestion ===
                    englishQuizData.length -
                      1
                      ? "First la irundhu Arambi 🔄"
                      : "Adutha Kelviki Po 👉"}
                  </Button>
                </motion.div>
              </Collapse>
            )}
          </AnimatePresence>
        </Paper>
      </Container>
    </Box>
  );
}

export default EnglishQuizWidget;