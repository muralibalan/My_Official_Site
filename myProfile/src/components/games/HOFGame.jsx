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

const THEME_COLOR = '#09ee24ff';

// ---------------- ALL HOF TASKS DATA ----------------
const hofTasks = {
  map: [
    { id: 1, data: [1, 2, 3, 4], question: "Double all the numbers in the array", answer: "data.map(x => x * 2)" },
    { id: 2, data: [10, 20, 30], question: "Convert numbers into strings", answer: "data.map(String)" },
    { id: 3, data: ["apple", "banana"], question: "Convert all strings to UPPERCASE", answer: "data.map(x => x.toUpperCase())" },
    { id: 4, data: [5, 10, 15], question: "Add 5 to each element", answer: "data.map(x => x + 5)" },
    { id: 5, data: [4, 9, 16], question: "Find the square root of each number", answer: "data.map(Math.sqrt)" },
    { id: 6, data: [{name: 'A'}, {name: 'B'}], question: "Extract only the 'name' property from objects", answer: "data.map(x => x.name)" },
    { id: 7, data: [1, 2, 3], question: "Wrap each number inside an object: {val: x}", answer: "data.map(x => ({val: x}))" },
    { id: 8, data: ["5", "10", "15"], question: "Convert array of string numbers into integers", answer: "data.map(Number)" },
    { id: 9, data: [1, 2, 3], question: "Return true for even and false for odd numbers", answer: "data.map(x => x % 2 === 0)" },
    { id: 10, data: ["Hi", "Hello"], question: "Append '!' to every string", answer: "data.map(x => x + '!')" }
  ],
  filter: [
    { id: 1, data: [1, 2, 3, 4, 5], question: "Filter only the Even numbers", answer: "data.filter(x => x % 2 === 0)" },
    { id: 2, data: ["Apple", "Cat", "Banana"], question: "Filter strings that have length greater than 3", answer: "data.filter(x => x.length > 3)" },
    { id: 3, data: [10, 50, 5, 100], question: "Keep only numbers greater than or equal to 50", answer: "data.filter(x => x >= 50)" },
    { id: 4, data: [true, false, true], question: "Filter out only truthy values", answer: "data.filter(Boolean)" },
    { id: 5, data: ["Chennai", "Madurai", "Salem"], question: "Filter cities starting with letter 'C'", answer: "data.filter(x => x.startsWith('C'))" },
    { id: 6, data: [1, null, 3, undefined], question: "Remove null and undefined values", answer: "data.filter(x => x !== null && x !== undefined)" },
    { id: 7, data: [-5, 10, -2, 8], question: "Keep only positive numbers", answer: "data.filter(x => x > 0)" },
    { id: 8, data: [{age: 20}, {age: 15}], question: "Filter people with age greater than 18", answer: "data.filter(x => x.age > 18)" },
    { id: 9, data: [2, 4, 7, 9], question: "Filter out odd numbers", answer: "data.filter(x => x % 2 !== 0)" },
    { id: 10, data: ["React", "Vue", "React Native"], question: "Filter strings that contain the word 'React'", answer: "data.filter(x => x.includes('React'))" }
  ],
  reduce: [
    { id: 1, data: [1, 2, 3, 4], question: "Find the sum of all numbers (initial value 0)", answer: "data.reduce((acc, curr) => acc + curr, 0)" },
    { id: 2, data: [2, 3, 4], question: "Multiply all numbers together (initial value 1)", answer: "data.reduce((acc, curr) => acc * curr, 1)" },
    { id: 3, data: [10, 50, 5, 20], question: "Find the maximum number in the array", answer: "data.reduce((max, curr) => curr > max ? curr : max)" },
    { id: 4, data: ["M", "E", "R", "N"], question: "Concatenate letters into a single string", answer: "data.reduce((acc, curr) => acc + curr, '')" },
    { id: 5, data: [1, 2, 1, 3], question: "Count occurrences: Return object with frequencies", answer: "data.reduce((acc, curr) => {acc[curr] = (acc[curr] || 0) + 1; return acc;}, {})" },
    { id: 6, data: [10, 20, 30], question: "Find the average of the numbers", answer: "data.reduce((acc, curr, i, arr) => acc + curr / arr.length, 0)" },
    { id: 7, data: [[1, 2], [3, 4]], question: "Flatten a 2D array into a 1D array", answer: "data.reduce((acc, curr) => acc.concat(curr), [])" },
    { id: 8, data: [{x:1}, {x:2}], question: "Sum up property 'x' values", answer: "data.reduce((acc, curr) => acc + curr.x, 0)" },
    { id: 9, data: [12, 5, 8], question: "Find the minimum value in the array", answer: "data.reduce((min, curr) => curr < min ? curr : min)" },
    { id: 10, data: ["a", "b", "c"], question: "Reverse the array using reduce right logic", answer: "data.reduceRight((acc, curr) => {acc.push(curr); return acc;}, [])" }
  ],
  sort: [
    { id: 1, data: [40, 10, 100, 5], question: "Sort the numbers in Ascending order", answer: "data.sort((a, b) => a - b)" },
    { id: 2, data: ['Banana', 'Apple', 'Mango'], question: "Sort the fruits in Alphabetical order", answer: "data.sort()" },
    { id: 3, data: [15, 2, 28, 10], question: "Sort the numbers in Descending order", answer: "data.sort((a, b) => b - a)" },
    { id: 4, data: ['Zebra', 'Ant', 'Cat'], question: "Sort the animals in Reverse Alphabetical order", answer: "data.sort().reverse()" },
    { id: 5, data: [{age:30}, {age:20}], question: "Sort objects by age ascending", answer: "data.sort((a, b) => a.age - b.age)" },
    { id: 6, data: ['React', 'Angular', 'Vue'], question: "Sort the JS Frameworks", answer: "data.sort()" },
    { id: 7, data: [500, 100, 800, 200], question: "Descending: [500, 100, 800, 200]", answer: "data.sort((a, b) => b - a)" },
    { id: 8, data: ['Node', 'Java', 'Python'], question: "Reverse Sort the Languages", answer: "data.sort().reverse()" },
    { id: 9, data: [7, 3, 9, 1], question: "Ascending: [7, 3, 9, 1]", answer: "data.sort((a, b) => a - b)" },
    { id: 10, data: ['Chennai', 'Madurai', 'Salem'], question: "Alphabetical: Tamil Nadu Cities", answer: "data.sort()" }
  ],
  some: [
    { id: 1, data: [1, 3, 5, 8], question: "Check if AT LEAST ONE number is Even", answer: "data.some(x => x % 2 === 0)" },
    { id: 2, data: [-2, -5, 10], question: "Check if any number is positive (> 0)", answer: "data.some(x => x > 0)" },
    { id: 3, data: ["apple", "banana", "cherry"], question: "Check if any string contains 'banana'", answer: "data.some(x => x === 'banana')" },
    { id: 4, data: [10, 15, 19], question: "Check if anyone is an adult (age >= 18)", answer: "data.some(x => x >= 18)" },
    { id: 5, data: ["", "admin", ""], question: "Check if there is any non-empty string", answer: "data.some(x => x.length > 0)" },
    { id: 6, data: [0, false, null, 1], question: "Check if at least one value is truthy", answer: "data.some(Boolean)" },
    { id: 7, data: ["JS", "Python", "Go"], question: "Check if any language name length is less than 3", answer: "data.some(x => x.length < 3)" },
    { id: 8, data: [50, 45, 99], question: "Check if any score is exactly 100", answer: "data.some(x => x === 100)" },
    { id: 9, data: [-1, -3, -5], question: "Check if there is a number greater than -2", answer: "data.some(x => x > -2)" },
    { id: 10, data: [{role: 'user'}, {role: 'admin'}], question: "Check if any user has admin role", answer: "data.some(x => x.role === 'admin')" }
  ],
  every: [
    { id: 1, data: [2, 4, 6, 8], question: "Check if ALL numbers are Even", answer: "data.every(x => x % 2 === 0)" },
    { id: 2, data: [10, 20, 30], question: "Check if all values are greater than 5", answer: "data.every(x => x > 5)" },
    { id: 3, data: ["cat", "dog", "cow"], question: "Check if all strings have exactly 3 characters", answer: "data.every(x => x.length === 3)" },
    { id: 4, data: [5, -1, 4], question: "Check if all numbers are positive", answer: "data.every(x => x > 0)" },
    { id: 5, data: [true, true, true], question: "Check if every value is strictly true", answer: "data.every(x => x === true)" },
    { id: 6, data: ["admin", "user", "guest"], question: "Check if all elements are type of string", answer: "data.every(x => typeof x === 'string')" },
    { id: 7, data: [10, 55, 90], question: "Check if all scores are below 100", answer: "data.every(x => x < 100)" },
    { id: 8, data: ["#fff", "#000", "#eee"], question: "Check if all hex codes start with '#'", answer: "data.every(x => x.startsWith('#'))" },
    { id: 9, data: [5, 15, 25], question: "Check if all numbers are multiples of 5", answer: "data.every(x => x % 5 === 0)" },
    { id: 10, data: [{paid: true}, {paid: true}], question: "Check if all invoices are paid", answer: "data.every(x => x.paid === true)" }
  ],
  foreach: [
    { id: 1, data: [1, 2, 3], question: "Log each item to console: console.log(x)", answer: "data.forEach(x => console.log(x))" },
    { id: 2, data: [10, 20], question: "Push elements multiplied by 2 into an external array 'arr'", answer: "data.forEach(x => arr.push(x * 2))" },
    { id: 3, data: [5, 10], question: "Add each value to an external variable 'sum'", answer: "data.forEach(x => sum += x)" },
    { id: 4, data: ["a", "b"], question: "Push upper-cased string into 'resultArr'", answer: "data.forEach(x => resultArr.push(x.toUpperCase()))" },
    { id: 5, data: [1, 2, 3, 4], question: "If number is even, push to 'evenArr'", answer: "data.forEach(x => {if(x % 2 === 0) evenArr.push(x);})" },
    { id: 6, data: ["Apple", "Box"], question: "Alert each item: alert(x)", answer: "data.forEach(x => alert(x))" },
    { id: 7, data: [{val:5}, {val:10}], question: "Sum up the 'val' key values into a 'total' variable", answer: "data.forEach(x => total += x.val)" },
    { id: 8, data: [1, 2], question: "Execute a custom function 'render(x)' for each segment", answer: "data.forEach(x => render(x))" },
    { id: 9, data: ["#div1", "#div2"], question: "Hide elements via an external helper function hide(x)", answer: "data.forEach(x => hide(x))" },
    { id: 10, data: [3, 6, 9], question: "Count how many items exist by incrementing 'count++'", answer: "data.forEach(() => count++)" }
  ]
};

function HOFGame() {
  const [method, setMethod] = useState('map');
  const [currentTask, setCurrentTask] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);

  const currentTasksList = hofTasks[method];
  const task = currentTasksList[currentTask];

  const handleFirework = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: [THEME_COLOR, '#ffffff', '#ffeb3b'],
    });
  };

  const checkCode = () => {
  // 1. Convert everything to lowercase and remove spaces
  let cleanInput = userInput.replace(/\s+/g, '').toLowerCase();
  let cleanAnswer = task.answer.replace(/\s+/g, '').toLowerCase();

  // 2. Exact match aana direct success
  if (cleanInput === cleanAnswer) {
    setResult('success');
    setScore(score + 10);
    handleFirework();
    setShowAnswer(false);
    return;
  }

  // 3. FLEXIBLE VARIABLE CHECKING (Arrow function parameters-ah standard variable 'x'-aa mathuroom)
  // Example: 'in=>in.touppercase()' becomes 'x=>x.touppercase()'
  
  // Find the arrow function variable name used by student
  // Matches patterns like: .map(variable=> or .filter((variable)=>
  const arrowMatch = userInput.match(/\.(?:map|filter|reduce|sort|some|every|forEach)\s*\(\s*\(?\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\)?\s*=>/i);

  if (arrowMatch && arrowMatch[1]) {
    const studentVariable = arrowMatch[1]; // e.g., 'in' or 'val'
    
    // Student input-la irukra antha specific variable-ah 'x'-ku replace panroöm
    const normalizedInput = userInput
      .replace(new RegExp(`\\b${studentVariable}\\b`, 'g'), 'x')
      .replace(/\s+/g, '')
      .toLowerCase();

    // Answer-aium 'x' vechu normalize panroöm
    const answerVariableMatch = task.answer.match(/\.(?:map|filter|reduce|sort|some|every|forEach)\s*\(\s*\(?\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\)?\s*=>/i);
    let normalizedAnswer = cleanAnswer;
    
    if (answerVariableMatch && answerVariableMatch[1]) {
      const answerVariable = answerVariableMatch[1];
      normalizedAnswer = task.answer
        .replace(new RegExp(`\\b${answerVariable}\\b`, 'g'), 'x')
        .replace(/\s+/g, '')
        .toLowerCase();
    }

    // Ippo variable names standard-aa maariduchu, logic-ah check பண்ணலாம்!
    if (normalizedInput === normalizedAnswer) {
      setResult('success');
      setScore(score + 10);
      handleFirework();
      setShowAnswer(false);
      return;
    }
  }

  // Rendu match-um fail aana thaan Fail
  setResult('fail');
  setShowAnswer(true);
};

  const nextQuestion = () => {
    if (currentTask < currentTasksList.length - 1) {
      setCurrentTask(currentTask + 1);
      setUserInput('');
      setResult(null);
      setShowAnswer(false);
    }
  };

  const handleMethodChange = (e) => {
    setMethod(e.target.value);
    setCurrentTask(0);
    setUserInput('');
    setResult(null);
    setShowAnswer(false);
  };

  return (
    <Box sx={{ bgcolor: '#050505', minHeight: '100vh', py: 6, color: '#fff' }}>
      <Container maxWidth="lg">
        {/* HEADER */}
        <Typography variant="h3" sx={{ fontWeight: 900, textAlign: 'center', mb: 1, textShadow: '0 0 20px rgba(255,255,255,0.15)', fontSize: { xs: '2rem', md: '3.5rem' } }}>
          HOF Master <span style={{ color: THEME_COLOR, textShadow: `0 0 25px ${THEME_COLOR}` }}>Pro</span> ⚡
        </Typography>
        <Typography sx={{ textAlign: 'center', color: '#d0d0d0', mb: 4, fontSize: '1rem' }}>
          Choose a method and unlock JavaScript Higher-Order Functions logic!
        </Typography>

        {/* METHOD DROPDOWN SELECTION */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <FormControl sx={{ minWidth: 250, bgcolor: '#111', borderRadius: '12px', border: '1px solid #333' }}>
            <InputLabel id="method-select-label" sx={{ color: '#aaa' }}>Select HOF Method</InputLabel>
            <Select
              labelId="method-select-label"
              value={method}
              label="Select HOF Method"
              onChange={handleMethodChange}
              sx={{
                color: '#fff',
                '.MuiSvgIcon-root': { color: '#fff' },
                '& .MuiOutlinedInput-notchedOutline': { border: 'none' }
              }}
            >
              <MenuItem value="map">📌 .map() - Transformation</MenuItem>
              <MenuItem value="filter">🔍 .filter() - Conditional Filter</MenuItem>
              <MenuItem value="reduce">🧮 .reduce() - Accumulation</MenuItem>
              <MenuItem value="sort">🔀 .sort() - Arrangement</MenuItem>
              <MenuItem value="some">🧪 .some() - Partial Check</MenuItem>
              <MenuItem value="every">💎 .every() - Complete Check</MenuItem>
              <MenuItem value="foreach">🔄 .forEach() - Iteration</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* MAIN CARD */}
        <Paper sx={{ p: { xs: 3, md: 5 }, bgcolor: 'rgba(255,255,255,0.03)', borderRadius: '28px', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)', boxShadow: '0 0 30px rgba(0,0,0,0.4)' }}>
          
          {/* TOP BAR */}
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
            <Chip label={`${method.toUpperCase()} - Task ${task.id} / 10`} sx={{ bgcolor: '#181818', color: '#fff', border: '1px solid rgba(255,255,255,0.08)', fontWeight: 700 }} />
            <Typography sx={{ color: THEME_COLOR, fontWeight: 800, fontSize: '1.1rem' }}>Score: {score}</Typography>
          </Stack>

          {/* QUESTION */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 700, color: '#fff', lineHeight: 1.7, fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
              {task.question}
            </Typography>

            {/* DATA BOXES */}
            <Grid container spacing={2} justifyContent="center">
              <Typography variant="body2" sx={{ color: '#888', mb: 1, width: '100%' }}>Input Array State (data):</Typography>
              {task.data.map((item, i) => (
                <Grid item key={i}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Paper sx={{ px: 2.5, py: 1.2, bgcolor: '#111', border: `1px solid ${THEME_COLOR}33`, color: '#fff', fontWeight: 'bold', fontFamily: 'monospace', borderRadius: '10px', textAlign: 'center' }}>
                      {typeof item === 'object' ? JSON.stringify(item) : String(item)}
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)', mb: 4 }} />

          {/* CODE TEXTFIELD */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="subtitle2" sx={{ color: '#fff', mb: 1.5, display: 'flex', alignItems: 'center', gap: 1, fontWeight: 700, letterSpacing: 1 }}>
              <CodeIcon fontSize="small" /> ENTER YOUR JAVASCRIPT LOGIC
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={3}
              placeholder={`e.g. data.${method}(...)`}
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              sx={inputStyle}
            />
          </Box>

          {/* OPERATIONAL BUTTONS */}
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button fullWidth variant="contained" onClick={checkCode} sx={btnStyle} disabled={result === 'success'}>
              Validate Logic
            </Button>
            {result && currentTask < currentTasksList.length - 1 && (
              <Button fullWidth variant="outlined" onClick={nextQuestion} sx={nextBtnStyle}>
                Next Task
              </Button>
            )}
          </Stack>

          {/* NOTIFICATION FEEDBACKS */}
          <AnimatePresence>
            {result === 'success' && (
              <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                <Box sx={{ mt: 4, p: 2, bgcolor: 'rgba(9, 238, 36, 0.1)', borderRadius: '14px', border: '1px solid #09ee2444', textAlign: 'center' }}>
                  <Typography sx={{ color: THEME_COLOR, fontWeight: 'bold', display: 'flex', alignItems: 'center', justifycontent: 'center', gap: 1, justifyContent: 'center' }}>
                    <CheckCircleOutlineIcon /> Correct Logic! Moving closer to becoming a JS Expert!
                  </Typography>
                </Box>
              </motion.div>
            )}

            {showAnswer && (
              <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                <Box sx={{ mt: 4, p: 2.5, bgcolor: 'rgba(255, 82, 82, 0.1)', borderRadius: '14px', border: '1px solid #ff525244' }}>
                  <Typography sx={{ color: '#ff5252', fontWeight: 'bold', mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <ErrorOutlineIcon /> Syntax/Logic Match Failed
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#ddd', mb: 1 }}>Expected Concept Pattern:</Typography>
                  <Typography variant="h6" sx={{ fontFamily: 'monospace', color: '#fff', bgcolor: '#111', p: 2, borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)', fontSize: '0.95rem' }}>
                    {task.answer}
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

// Styles configuration
const inputStyle = {
  '& .MuiOutlinedInput-root': {
    color: '#fff',
    fontFamily: 'monospace',
    bgcolor: '#000',
    borderRadius: '14px',
    '& fieldset': { borderColor: '#333' },
    '&:hover fieldset': { borderColor: '#666' },
    '&.Mui-focused fieldset': { borderColor: THEME_COLOR },
  },
  '& textarea::placeholder': { color: '#555', opacity: 1 },
};

const btnStyle = {
  bgcolor: THEME_COLOR, color: '#000', fontWeight: 800, borderRadius: '12px', py: 1.5, textTransform: 'none', fontSize: '1rem',
  '&:hover': { bgcolor: '#07c91f', boxShadow: `0 0 20px ${THEME_COLOR}44` },
  '&.Mui-disabled': { bgcolor: '#114411', color: '#777' },
};

const nextBtnStyle = {
  borderRadius: '12px', color: '#fff', borderColor: '#444', textTransform: 'none', fontSize: '1rem',
  '&:hover': { borderColor: THEME_COLOR, bgcolor: `${THEME_COLOR}11` },
};

export default HOFGame;