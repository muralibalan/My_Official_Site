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
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';

const THEME_COLOR = '#bd00ff'; // Neon Purple for Factory / Magic Functions

// ---------------- FUNCTIONS TASKS DATA (THANGLISH) ----------------
const functionTasks = {
  namedFunction: [
    { id: 1, question: "'greet' nu pera ulla oru Named function-ah ezhuthunga. Athu kulla 'hello' nu return panna vainga.", answer: "function greet() { return 'hello' }" },
    { id: 2, question: "'add' nu oru named function ezhuthunga. Athuku 'a' matrum 'b' nu rendu parameters erukanum. Ulla a+b ah return pannungoo.", answer: "function add(a, b) { return a + b }" }
  ],
  anonymousFunction: [
    { id: 1, question: "Oru anonymous function-ah create panni, athai 'startEngine' nu oru variable-la store pannunga. Athu ulla 'started' nu return aaganum.", answer: "const startEngine = function() { return 'started' }" },
    { id: 2, question: "Oru anonymous function-ah 'square' nu variable-la store pannunga. Athu 'num' nu parameter vaangi, num * num ah return pannanum.", answer: "const square = function(num) { return num * num }" }
  ],
  arrowFunction: [
    { id: 1, question: "'getSpeed' nu variable-la oru single-line short arrow function create pannunga (curly braces illaama). Athu direct-aa 100 nu return pannanum.", answer: "const getSpeed = () => 100" },
    { id: 2, question: "'double' nu variable-la single parameter 'x' vaangura arrow function ezhuthunga. Athu x * 2 ah return pannanum (brackets custom-aa single line layout-la ezhuthunga).", answer: "const double = x => x * 2" }
  ],
  iife: [
    { id: 1, question: "Entha oru call-um illama, ready-aa automatic-aa odura maari oru Immediately Invoked Function Expression (IIFE) ezhuthunga. Athu ulla 'active' nu return aaganum.", answer: "(() => { return 'active' })()" },
    { id: 2, question: "Oru normal function syntax-ah use panni automatic-aa run aagura IIFE ezhuthunga (Named functions wrapper maari parens potu mudilungoo). Athu ulla 'live' nu return pannanum.", answer: "(function() { return 'live' })()" }
  ],
  argumentsParameters: [
    { id: 1, question: "'makeRobot' nu variable-la arrow function ezhuthunga. Athuku 'name' matrum 'type' nu rendu parameters venum. Athu ulla 'Robot Ready' nu return pannanum.", answer: "const makeRobot = (name, type) => { return 'Robot Ready' }" },
    { id: 2, question: "'calc' nu variable-la arrow function ezhuthunga. Athuku 'x' parameter venum. Ulla x+10 ah return pannanum.", answer: "const calc = (x) => { return x + 10 }" }
  ]
};

function FunctionsGame() {
  const [category, setCategory] = useState('namedFunction');
  const [currentTask, setCurrentTask] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [factoryStatus, setFactoryStatus] = useState('WAITING FOR CODE 🤖');

  const currentTasksList = functionTasks[category];
  const task = currentTasksList[currentTask];

  const handleFirework = () => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: [THEME_COLOR, '#00e5ff', '#ffffff'],
    });
  };

  const checkCode = () => {
    // Advanced Normalizer for JS Functions
    let cleanInput = userInput.replace(/\s+/g, '').replace(/;/g, '').replace(/['"]/g, "'").toLowerCase();
    let cleanAnswer = task.answer.replace(/\s+/g, '').replace(/;/g, '').replace(/['"]/g, "'").toLowerCase();

    // Flexible checking logic to handle minor brace/bracket syntax styles
    let stripBracesInput = cleanInput.replace(/[{}]/g, '');
    let stripBracesAnswer = cleanAnswer.replace(/[{}]/g, '');

    // Variable handling type (let vs const vs var) normalization
    let normInput = cleanInput.replace(/\b(let|var)\b/g, 'const');
    let normAnswer = cleanAnswer.replace(/\b(let|var)\b/g, 'const');

    // Arrow function single parameter paren wrapper normalization e.g., (x) => vs x =>
    let parenInput = normInput.replace(/\(([^)]+)\)=>/, '$1=>');
    let parenAnswer = normAnswer.replace(/\(([^)]+)\)=>/, '$1=>');

    if (
      cleanInput === cleanAnswer || 
      stripBracesInput === stripBracesAnswer || 
      normInput === normAnswer ||
      parenInput === parenAnswer
    ) {
      triggerSuccess();
    } else {
      setResult('fail');
      setShowAnswer(true);
      setFactoryStatus('ASSEMBLY LINE CRASHED ❌');
    }
  };

  const triggerSuccess = () => {
    setResult('success');
    setScore(score + 10);
    handleFirework();
    setShowAnswer(false);
    setFactoryStatus('ROBOT PART BUILT SUCCESSFULLY! 🚀');
  };

  const nextQuestion = () => {
    if (currentTask < currentTasksList.length - 1) {
      setCurrentTask(currentTask + 1);
      setUserInput('');
      setResult(null);
      setShowAnswer(false);
      setFactoryStatus('WAITING FOR CODE 🤖');
    }
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setCurrentTask(0);
    setUserInput('');
    setResult(null);
    setShowAnswer(false);
    setFactoryStatus('WAITING FOR CODE 🤖');
  };

  return (
    <Box sx={{ bgcolor: '#0b0014', minHeight: '100vh', py: 6, color: '#fff', fontFamily: 'sans-serif' }}>
      <Container maxWidth="lg">
        
        {/* TITLE */}
        <Typography variant="h3" sx={{ fontWeight: 900, textAlign: 'center', mb: 1, textShadow: '0 0 25px rgba(189,0,255,0.2)', fontSize: { xs: '2rem', md: '3.5rem' } }}>
          JS Function <span style={{ color: THEME_COLOR, textShadow: `0 0 25px ${THEME_COLOR}` }}>Factory</span> 🛠️
        </Typography>
        <Typography sx={{ textAlign: 'center', color: '#a69bb0', mb: 4 }}>
          Write proper function patterns to activate and assemble robotic parts!
        </Typography>

        {/* CATEGORY SELECTOR */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <FormControl sx={{ minWidth: 280, bgcolor: '#160d24', borderRadius: '14px', border: '1px solid #311c4d' }}>
            <InputLabel id="function-label" sx={{ color: '#887c96' }}>Choose Function Type</InputLabel>
            <Select
              labelId="function-label"
              value={category}
              label="Choose Function Type"
              onChange={handleCategoryChange}
              sx={{ color: '#fff', '.MuiSvgIcon-root': { color: THEME_COLOR }, '& .MuiOutlinedInput-notchedOutline': { border: 'none' } }}
            >
              <MenuItem value="namedFunction">🏷️ Named Function (Traditional)</MenuItem>
              <MenuItem value="anonymousFunction">🎭 Anonymous Function</MenuItem>
              <MenuItem value="arrowFunction">🏹 Arrow Function (Modern ES6)</MenuItem>
              <MenuItem value="iife">⚡ IIFE (Self Executing)</MenuItem>
              <MenuItem value="argumentsParameters">⚙️ Parameters & Arguments</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* FACTORY CONTAINER GRID */}
       {/* FACTORY CONTAINER GRID */}

<Grid
  container
  spacing={2}
  sx={{
    flexWrap: 'nowrap',
    overflowX: 'auto',
    alignItems: 'stretch',
    pb: 1,

    '&::-webkit-scrollbar': {
      height: '8px',
    },

    '&::-webkit-scrollbar-track': {
      background: '#11061c',
      borderRadius: '20px',
    },

    '&::-webkit-scrollbar-thumb': {
      background: '#311c4d',
      borderRadius: '20px',
    },

    '&::-webkit-scrollbar-thumb:hover': {
      background: '#522f80',
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
        md: '350px',
      },

      minWidth: {
        xs: '320px',
        sm: '340px',
        md: '350px',
      },

      flexShrink: 0,

      display: 'flex',
    }}
  >
    <Paper
      sx={{
        p: 4,

        bgcolor: '#11061c',

        borderRadius: '24px',

        border: '1px solid #2e154a',

        textAlign: 'center',

        width: '100%',

        minHeight: '100%',

        display: 'flex',

        flexDirection: 'column',

        justifyContent: 'center',

        alignItems: 'center',

        boxShadow:
          'inset 0 0 30px rgba(0,0,0,0.9)',
      }}
    >
      <PrecisionManufacturingIcon
        sx={{
          fontSize: 70,

          color:
            factoryStatus.includes(
              'SUCCESSFULLY'
            )
              ? '#09ee24'
              : factoryStatus.includes(
                  'CRASHED'
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
          color: '#887c96',

          fontWeight: 600,

          mb: 2,
        }}
      >
        ASSEMBLY MONITOR
      </Typography>

      {/* DISPLAY MONITOR */}

      <Box
        sx={{
          width: '100%',

          minHeight: '120px',

          borderRadius: '16px',

          display: 'flex',

          alignItems: 'center',

          justifyContent: 'center',

          mb: 3,

          px: 2,

          bgcolor: '#040008',

          border: `2px solid ${
            factoryStatus.includes(
              'SUCCESSFULLY'
            )
              ? '#09ee24'
              : factoryStatus.includes(
                  'CRASHED'
                )
              ? '#ff5252'
              : THEME_COLOR
          }`,

          boxShadow:
            factoryStatus.includes(
              'SUCCESSFULLY'
            )
              ? '0 0 20px rgba(9,238,36,0.15)'
              : 'none',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontFamily: 'monospace',

            fontWeight: 'bold',

            color:
              factoryStatus.includes(
                'SUCCESSFULLY'
              )
                ? '#09ee24'
                : factoryStatus.includes(
                    'CRASHED'
                  )
                ? '#ff5252'
                : '#fff',

            px: 2,

            textAlign: 'center',

            wordBreak: 'break-word',
          }}
        >
          {factoryStatus}
        </Typography>
      </Box>

      <Typography
        variant="caption"
        sx={{
          color: '#5b4f69',

          textAlign: 'center',
        }}
      >
        Functions process computational
        parameters to generate outputs
      </Typography>
    </Paper>
  </Grid>

  {/* RIGHT PANEL */}

  <Grid
    item
    sx={{
      minWidth: {
        xs: '650px',
        md: '700px',
      },

      flex: 1,

      display: 'flex',
    }}
  >
    <Paper
      sx={{
        p: {
          xs: 3,
          md: 4,
        },

        bgcolor:
          'rgba(23,12,36,0.6)',

        borderRadius: '24px',

        border:
          '1px solid rgba(255,255,255,0.04)',

        backdropFilter:
          'blur(20px)',

        width: '100%',

        minHeight: '100%',
      }}
    >
      {/* TOP BAR */}

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          mb: 3,

          flexWrap: 'wrap',

          gap: 1,
        }}
      >
        <Chip
          label={`${category.toUpperCase()} - Component ${
            task.id
          } / ${
            currentTasksList.length
          }`}
          sx={{
            bgcolor: '#000',

            color: THEME_COLOR,

            border:
              '1px solid #311c4d',

            fontWeight: 700,
          }}
        />

        <Typography
          sx={{
            color: '#bd00ff',

            fontWeight: 800,
          }}
        >
          Engine Score: {score}
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

            fontSize: '1.1rem',

            wordBreak: 'break-word',
          }}
        >
          {task.question}
        </Typography>
      </Box>

      <Divider
        sx={{
          borderColor:
            'rgba(255,255,255,0.04)',

          mb: 3,
        }}
      />

      {/* CODE INPUT */}

      <Box sx={{ mb: 3 }}>
        <Typography
          variant="subtitle2"
          sx={{
            color: '#a69bb0',

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

          FUNCTION LOGIC TERMINAL
        </Typography>

        <TextField
          fullWidth
          multiline
          rows={3}
          placeholder="Write function structure here..."
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
        direction="row"
        spacing={2}
        sx={{
          flexWrap: 'wrap',
        }}
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
          Inject & Build Function ⚡
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
              Next Assembly Module ➡️
            </Button>
          )}
      </Stack>

      {/* FEEDBACK */}

      <AnimatePresence>
        {result === 'success' && (
          <motion.div
            initial={{
              scale: 0.96,
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
                  'rgba(9,238,36,0.05)',

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
                Functional parameters
                compiled successfully! 🎉
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
                  'rgba(255,82,82,0.05)',

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
                Syntax Execution Failure!
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: '#a69bb0',
                  mb: 1,
                }}
              >
                Valid Structural
                Blueprint:
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontFamily:
                    'monospace',

                  color: '#fff',

                  bgcolor: '#040008',

                  p: 1.5,

                  borderRadius: '8px',

                  border:
                    '1px solid #311c4d',

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

// Visual layout styles
const inputStyle = {
  '& .MuiOutlinedInput-root': {
    color: '#fff', fontFamily: 'monospace', bgcolor: '#040008', borderRadius: '12px',
    '& fieldset': { borderColor: '#311c4d' },
    '&:hover fieldset': { borderColor: '#522f80' },
    '&.Mui-focused fieldset': { borderColor: THEME_COLOR },
  },
  '& textarea::placeholder': { color: '#4a3b5c', opacity: 1 },
};

const btnStyle = {
  bgcolor: THEME_COLOR, color: '#fff', fontWeight: 800, borderRadius: '12px', py: 1.5, textTransform: 'none', fontSize: '0.95rem',
  '&:hover': { bgcolor: '#a300dc', boxShadow: `0 0 20px ${THEME_COLOR}55` },
  '&.Mui-disabled': { bgcolor: '#1c0529', color: '#563e63' },
};

const nextBtnStyle = {
  borderRadius: '12px', color: '#fff', borderColor: '#311c4d', textTransform: 'none', fontSize: '0.95rem',
  '&:hover': { borderColor: THEME_COLOR, bgcolor: `${THEME_COLOR}11` },
};

export default FunctionsGame;