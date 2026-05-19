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
  Grid,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import LoopIcon from '@mui/icons-material/Loop';
import SpeedIcon from '@mui/icons-material/Speed';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const THEME_COLOR = '#ff9100'; // Neon Orange for Event Loop Traffic

// ---------------- EVENT LOOP TASKS DATA (THANGLISH) ----------------
const eventLoopTasks = [
  {
    id: 1,
    title: "Synchronous Task Execution",
    question: "Intha code run aagum bohuthu, synchronous `console.log('Hi')` direct-aa enga pogum?",
    code: "console.log('Hi');",
    options: ["Call Stack", "Web APIs", "Callback Queue", "Microtask Queue"],
    answer: "Call Stack",
    explain: "JavaScript synchronous code-ah straight-aa 'Call Stack'-ku anupichi udane execute panni mudichidum!"
  },
  {
    id: 2,
    title: "Asynchronous Web APIs Trigger",
    question: "`setTimeout(() => {}, 1000)` execute aagum bohuthu, intha 1 second waiting background process-ah yaaru paathupa?",
    code: "setTimeout(() => console.log('Timeout'), 1000);",
    options: ["Call Stack", "Web APIs", "Callback Queue", "Microtask Queue"],
    answer: "Web APIs",
    explain: "Timer, Fetch request maari asynchronous vishyangalai JS browser-oda 'Web APIs' kitta oppadaichidum."
  },
  {
    id: 3,
    title: "Callback Queue Priority",
    question: "setTimeout-oda 1 second mudinjathuku apram, athula irukra callback arrow function muthala enga poi kaathitrukkum?",
    code: "() => console.log('Timeout')",
    options: ["Call Stack", "Web APIs", "Callback Queue", "Microtask Queue"],
    answer: "Callback Queue",
    explain: "Timer background-la mudinja udane, athoda callback function direct-aa 'Callback Queue' (MacroTask Queue)-ku vanthu line-la nirkkum."
  },
  {
    id: 4,
    title: "The Ultimate Gatekeeper",
    question: "Call Stack poorthiyaa EMPTY-aa irukura numba callback-ah stack-kulla thikki vida back-end-la continuous-aa velai seira controller yaaru?",
    code: "while(stack.isEmpty()) { push(queue.shift()) }",
    options: ["Web APIs", "Event Loop", "V8 Engine Core", "Memory Heap"],
    answer: "Event Loop",
    explain: "Intha 'Event Loop' thaan continuously Call Stack-aiyum Callback Queue-aiyum watch panni, stack empty-aa irukum bohuthu line-la irukravangala mela anupum."
  },
  {
    id: 5,
    title: "Microtask Queue vs Macrotask Queue",
    question: "Orae nerathula line-la 'Promise.then()' and 'setTimeout' rendu callback-um nirkuthu. Event Loop yaruku muthal priority (VIP entry) thariuum?",
    code: "Promise.resolve().then(() => log('Promise')); \nsetTimeout(() => log('Timeout'), 0);",
    options: ["Callback Queue (Macrotask)", "Microtask Queue (Promises)", "Rendukum ore priority", "V8 Engine choice"],
    answer: "Microtask Queue (Promises)",
    explain: "Promises matrum MutationObservers 'Microtask Queue'-la nirkum. Event Loop eppavume Microtask Queue-ah poorthiyaa empty pannituthaan normal Callback Queue pakkame pogum!"
  }
];

function EventLoopGame() {
  const [currentTask, setCurrentTask] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState(0);
  const [animationStage, setAnimationStage] = useState('IDLE');

  const task = eventLoopTasks[currentTask];

  const handleFirework = () => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: [THEME_COLOR, '#00e5ff', '#ffffff'],
    });
  };

  const handleOptionClick = (option) => {
    if (result === 'success') return; // block multiple clicks on correct answer
    setSelectedOption(option);

    if (option === task.answer) {
      setResult('success');
      setScore(score + 10);
      handleFirework();
      
      // Dynamic engine visualization simulator state changes
      if (task.answer === "Call Stack") setAnimationStage('STACK_INJECT');
      else if (task.answer === "Web APIs") setAnimationStage('WEB_API_WAIT');
      else if (task.answer === "Callback Queue") setAnimationStage('QUEUE_LINE');
      else if (task.answer === "Event Loop") setAnimationStage('LOOP_SPINNING');
      else if (task.answer.includes("Microtask")) setAnimationStage('MICRO_VIP');

    } else {
      setResult('fail');
      setAnimationStage('CRASHED');
    }
  };

  const nextQuestion = () => {
    if (currentTask < eventLoopTasks.length - 1) {
      setCurrentTask(currentTask + 1);
      setSelectedOption(null);
      setResult(null);
      setAnimationStage('IDLE');
    }
  };

  return (
    <Box sx={{ bgcolor: '#0c0702', minHeight: '100vh', py: 6, color: '#fff', fontFamily: 'sans-serif' }}>
      <Container maxWidth="lg">
        
        {/* TITLE */}
        <Typography variant="h3" sx={{ fontWeight: 900, textAlign: 'center', mb: 1, textShadow: '0 0 25px rgba(255,145,0,0.2)', fontSize: { xs: '2rem', md: '3.5rem' } }}>
          JS Event Loop <span style={{ color: THEME_COLOR, textShadow: `0 0 25px ${THEME_COLOR}` }}>Concurrency Radar</span> 🔄
        </Typography>
        <Typography sx={{ textAlign: 'center', color: '#b3a090', mb: 5 }}>
          Understand how JavaScript handles asynchronous non-blocking executions seamlessly!
        </Typography>

        {/* WORKSPACE MATRIX */}
       <Box
  sx={{
    display: "flex",

    gap: 3,

    overflowX: "auto",

    alignItems: "stretch",

    width: "100%",

    pb: 2,

    scrollBehavior: "smooth",

    "&::-webkit-scrollbar": {
      height: "8px",
    },

    "&::-webkit-scrollbar-track": {
      background: "#140d06",
    },

    "&::-webkit-scrollbar-thumb": {
      background: "#33200d",
      borderRadius: "20px",
    },
  }}
>
  {/* LEFT PANEL */}

  <Paper
    sx={{
      width: "420px",

      minWidth: "420px",

      flexShrink: 0,

      p: 3,

      bgcolor: "#140d06",

      borderRadius: "24px",

      border: "1px solid #33200d",

      display: "flex",

      flexDirection: "column",

      gap: 2,

      boxShadow:
        "inset 0 0 40px rgba(0,0,0,0.8)",
    }}
  >
    <Typography
      variant="subtitle2"
      sx={{
        color: "#b3a090",

        fontWeight: 700,

        textAlign: "center",
      }}
    >
      LIVE RUNTIME ARCHITECTURE
      SIMULATOR
    </Typography>

    {/* CALL STACK */}

    <Box
      sx={{
        p: 2,

        bgcolor: "#060402",

        borderRadius: "14px",

        border: `1px solid ${
          animationStage ===
          "STACK_INJECT"
            ? "#09ee24"
            : "#26170a"
        }`,
      }}
    >
      <Typography
        variant="caption"
        sx={{
          color: "#ff9100",

          fontWeight: "bold",
        }}
      >
        CALL STACK (LIFO)
      </Typography>

      <Box
        sx={{
          mt: 1,

          p: 1.5,

          bgcolor: "#1a1007",

          borderRadius: "8px",

          minHeight: "60px",

          display: "flex",

          alignItems: "center",

          justifyContent: "center",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontFamily:
              "monospace",

            textAlign: "center",

            color:
              animationStage ===
              "STACK_INJECT"
                ? "#09ee24"
                : "#fff",
          }}
        >
          {animationStage ===
          "STACK_INJECT"
            ? `🚀 Executing: ${task.code}`
            : "[ Empty Stack ]"}
        </Typography>
      </Box>
    </Box>

    {/* WEB APIs */}

    <Box
      sx={{
        p: 2,

        bgcolor: "#060402",

        borderRadius: "14px",

        border: `1px solid ${
          animationStage ===
          "WEB_API_WAIT"
            ? "#00e5ff"
            : "#26170a"
        }`,
      }}
    >
      <Typography
        variant="caption"
        sx={{
          color: "#00e5ff",

          fontWeight: "bold",
        }}
      >
        WEB APIs
      </Typography>

      <Box
        sx={{
          mt: 1,

          p: 1.5,

          bgcolor: "#101a1f",

          borderRadius: "8px",

          minHeight: "60px",

          display: "flex",

          alignItems: "center",

          justifyContent: "center",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontFamily:
              "monospace",

            textAlign: "center",

            color:
              animationStage ===
              "WEB_API_WAIT"
                ? "#00e5ff"
                : "#fff",
          }}
        >
          {animationStage ===
          "WEB_API_WAIT"
            ? "⏳ Timer Countdown..."
            : "[ No Active Async Ops ]"}
        </Typography>
      </Box>
    </Box>

    {/* LOOP */}

    <Box
      sx={{
        display: "flex",

        justifyContent: "center",

        py: 1,
      }}
    >
      <motion.div
        animate={
          animationStage ===
            "LOOP_SPINNING" ||
          result === "success"
            ? { rotate: 360 }
            : { rotate: 0 }
        }
        transition={{
          repeat: Infinity,

          duration: 2,

          ease: "linear",
        }}
      >
        <LoopIcon
          sx={{
            fontSize: 45,

            color: THEME_COLOR,
          }}
        />
      </motion.div>
    </Box>

    {/* QUEUES */}

    <Stack spacing={1.5}>
      <Box
        sx={{
          p: 1.5,

          bgcolor: "#040602",

          borderRadius: "12px",

          border: `1px solid ${
            animationStage ===
            "MICRO_VIP"
              ? "#bd00ff"
              : "#141c0d"
          }`,

          display: "flex",

          justifyContent:
            "space-between",

          alignItems: "center",
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: "#bd00ff",

            fontWeight: "bold",
          }}
        >
          Microtask Queue
        </Typography>

        <Chip
          size="small"
          label={
            animationStage ===
            "MICRO_VIP"
              ? "VIP"
              : "Empty"
          }
          sx={{
            bgcolor: "#1a0524",

            color: "#bd00ff",
          }}
        />
      </Box>

      <Box
        sx={{
          p: 1.5,

          bgcolor: "#020506",

          borderRadius: "12px",

          border: `1px solid ${
            animationStage ===
            "QUEUE_LINE"
              ? "#09ee24"
              : "#0e171a"
          }`,

          display: "flex",

          justifyContent:
            "space-between",

          alignItems: "center",
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: "#738a9c",

            fontWeight: "bold",
          }}
        >
          Callback Queue
        </Typography>

        <Chip
          size="small"
          label={
            animationStage ===
            "QUEUE_LINE"
              ? "Ready"
              : "Empty"
          }
          sx={{
            bgcolor: "#0a1417",

            color: "#738a9c",
          }}
        />
      </Box>
    </Stack>
  </Paper>

  {/* RIGHT PANEL */}

  <Paper
    sx={{
      width: {
        xs: "650px",
        md: "100%",
      },

      minWidth: {
        xs: "650px",
        md: "0",
      },

      flex: 1,

      p: {
        xs: 3,
        md: 4,
      },

      bgcolor:
        "rgba(26,17,9,0.5)",

      borderRadius: "24px",

      border:
        "1px solid rgba(255,145,0,0.04)",

      backdropFilter:
        "blur(20px)",

      display: "flex",

      flexDirection: "column",

      justifyContent:
        "space-between",
    }}
  >
    <Box>
      {/* TOP */}

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          mb: 3,

          flexWrap: "wrap",

          gap: 1,
        }}
      >
        <Chip
          label={`STAGE ${task.id} : ${task.title}`}
          sx={{
            bgcolor: "#000",

            color: THEME_COLOR,

            border:
              "1px solid #33200d",

            fontWeight: 700,
          }}
        />

        <Typography
          sx={{
            color: "#ff9100",

            fontWeight: 800,
          }}
        >
          Radar Score: {score}
        </Typography>
      </Stack>

      {/* CODE */}

      <Box
        sx={{
          bgcolor: "#060402",

          p: 2,

          borderRadius: "12px",

          mb: 3,

          border: "1px solid #26170a",
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            color: "#ff9100",

            fontSize: "11px",

            mb: 1,
          }}
        >
          RUNTIME CONSOLE TARGET:
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontFamily:
              "monospace",

            color: "#fff",

            whiteSpace:
              "pre-line",
          }}
        >
          {task.code}
        </Typography>
      </Box>

      {/* QUESTION */}

      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,

          color: "#fff",

          mb: 3,

          lineHeight: 1.5,
        }}
      >
        {task.question}
      </Typography>

      <Divider
        sx={{
          borderColor:
            "rgba(255,145,0,0.05)",

          mb: 3,
        }}
      />

      {/* OPTIONS */}

      <Stack spacing={2}>
        {task.options.map(
          (option, idx) => {
            const isSelected =
              selectedOption ===
              option;

            const isCorrect =
              option ===
              task.answer;

            let borderColor =
              "#26170a";

            let bgColor =
              "#0f0a05";

            if (
              result &&
              isCorrect
            ) {
              borderColor =
                "#09ee24";

              bgColor =
                "rgba(9,238,36,0.04)";
            }

            if (
              result ===
                "fail" &&
              isSelected
            ) {
              borderColor =
                "#ff5252";

              bgColor =
                "rgba(255,82,82,0.04)";
            }

            return (
              <Box
                key={idx}
                onClick={() =>
                  handleOptionClick(
                    option
                  )
                }
                sx={{
                  p: 2,

                  borderRadius:
                    "12px",

                  border: `1px solid ${borderColor}`,

                  bgcolor: bgColor,

                  cursor:
                    result ===
                    "success"
                      ? "not-allowed"
                      : "pointer",

                  transition:
                    "0.2s",

                  "&:hover": {
                    borderColor:
                      result
                        ? borderColor
                        : THEME_COLOR,
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 600,

                    color: "#fff",
                  }}
                >
                  {option}
                </Typography>
              </Box>
            );
          }
        )}
      </Stack>
    </Box>

    {/* RESULT + NEXT BUTTON */}

    <Box sx={{ mt: 4 }}>
      <AnimatePresence>
        {result === "success" && (
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
                p: 2.5,

                bgcolor:
                  "rgba(9, 238, 36, 0.04)",

                borderRadius:
                  "12px",

                border:
                  "1px solid #09ee2422",

                mb: 3,
              }}
            >
              <Typography
                sx={{
                  color: "#09ee24",

                  fontWeight: "bold",

                  display: "flex",

                  alignItems: "center",

                  gap: 1,

                  mb: 1,
                }}
              >
                <CheckCircleOutlineIcon />
                Signal Routing Confirmed!
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "#b3a090",
                }}
              >
                {task.explain}
              </Typography>
            </Box>

            {currentTask <
              eventLoopTasks.length -
                1 && (
              <Button
                fullWidth
                variant="contained"
                onClick={
                  nextQuestion
                }
                sx={btnStyle}
              >
                Next Event Loop Stage

                <FlightTakeoffIcon
                  sx={{
                    ml: 1,

                    fontSize: 18,
                  }}
                />
              </Button>
            )}
          </motion.div>
        )}

        {result === "fail" && (
          <motion.div
            initial={{
              scale: 0.98,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
          >
            <Box
              sx={{
                p: 2.5,

                bgcolor:
                  "rgba(255, 82, 82, 0.04)",

                borderRadius:
                  "12px",

                border:
                  "1px solid #ff525222",
              }}
            >
              <Typography
                sx={{
                  color: "#ff5252",

                  fontWeight: "bold",

                  display: "flex",

                  alignItems: "center",

                  gap: 1,
                }}
              >
                <ErrorOutlineIcon />
                Concurrency Collision
                Block!
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "#b3a090",

                  mt: 1,
                }}
              >
                Wrong router terminal
                path selection!
              </Typography>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  </Paper>
</Box>
      </Container>
    </Box>
  );
}

// Custom visual styles for controls
const btnStyle = {
  bgcolor: THEME_COLOR, color: '#000', fontWeight: 800, borderRadius: '12px', py: 1.5, textTransform: 'none', fontSize: '0.95rem',
  '&:hover': { bgcolor: '#e68200', boxShadow: `0 0 20px ${THEME_COLOR}55` }
};

export default EventLoopGame;