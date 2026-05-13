import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Box, Typography, Paper, Container, Stack, Chip, Button, Grid } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

const THEME_COLOR = '#09ee24ff';

const DETAILED_ROADMAP = [
  { id: 1, label: "HTML Elements", color: "#e34c26" },
  { id: 2, label: "Media Tags", color: "#e34c26" },
  { id: 3, label: "HTML Forms", color: "#e34c26" },
  { id: 4, label: "CSS Selectors", color: "#264de4" },
  { id: 5, label: "Box Model", color: "#264de4" },
  { id: 6, label: "Flex & Grid", color: "#264de4" },
  { id: 7, label: "Responsive Design", color: "#264de4" },
  { id: 8, label: "JS Basics", color: "#f7df1e" },
  { id: 9, label: "DOM Manipulation", color: "#f7df1e" },
  { id: 10, label: "React Components", color: "#61dbfb" },
  { id: 11, label: "Node.js APIs", color: "#68a063" },
  { id: 12, label: "MongoDB Data", color: "#4db33d" },
  { id: 13, label: "MERN MASTER 🏆", color: "#09ee24" },
];

const GRID_SIZE = 25;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];

const MernSnakeFull = () => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState({ x: 0, y: -1 });
  const [milestoneIdx, setMilestoneIdx] = useState(0);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [gameOver, setGameOver] = useState(false);
  const [isWon, setIsWon] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0); // Score state added

  const gameLoopRef = useRef();

  const generateFood = useCallback(() => {
    return {
      x: Math.floor(Math.random() * (GRID_SIZE - 2)) + 1,
      y: Math.floor(Math.random() * (GRID_SIZE - 2)) + 1
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowUp': if (direction.y === 0) setDirection({ x: 0, y: -1 }); break;
        case 'ArrowDown': if (direction.y === 0) setDirection({ x: 0, y: 1 }); break;
        case 'ArrowLeft': if (direction.x === 0) setDirection({ x: -1, y: 0 }); break;
        case 'ArrowRight': if (direction.x === 0) setDirection({ x: 1, y: 0 }); break;
        default: break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [direction]);

 const moveSnake = useCallback(() => {
  if (gameOver || isWon || !gameStarted)
    return;

  const newSnake = [...snake];

  let newX =
    newSnake[0].x + direction.x;

  let newY =
    newSnake[0].y + direction.y;

  // ---------------- WALL WRAP ----------------

  if (newX < 0) {
    newX = GRID_SIZE - 1;
  }

  if (newX >= GRID_SIZE) {
    newX = 0;
  }

  if (newY < 0) {
    newY = GRID_SIZE - 1;
  }

  if (newY >= GRID_SIZE) {
    newY = 0;
  }

  const head = {
    x: newX,
    y: newY,
  };

  // ---------------- SELF COLLISION ----------------

  const hitSelf = newSnake.some(
    (segment) =>
      segment.x === head.x &&
      segment.y === head.y
  );

  if (hitSelf) {
    setGameOver(true);
    return;
  }

  // ---------------- MOVE ----------------

  newSnake.unshift(head);

  // ---------------- FOOD HIT ----------------

  if (
    head.x === food.x &&
    head.y === food.y
  ) {
    if (
      milestoneIdx <
      DETAILED_ROADMAP.length - 1
    ) {
      setMilestoneIdx(
        (prev) => prev + 1
      );

      setScore(
        (prev) => prev + 10
      );

      setFood(generateFood());
    } else {
      setIsWon(true);

      confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  } else {
    newSnake.pop();
  }

  setSnake(newSnake);
}, [
  snake,
  direction,
  food,
  gameOver,
  isWon,
  milestoneIdx,
  gameStarted,
  generateFood,
]);
  useEffect(() => {
    const speed = Math.max(80, 160 - milestoneIdx * 5);
    gameLoopRef.current = setInterval(moveSnake, speed);
    return () => clearInterval(gameLoopRef.current);
  }, [moveSnake, milestoneIdx]);

  return (
    <Box sx={{ bgcolor: '#0a0a0a', minHeight: '100vh', py: 5, color: '#fff' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" sx={{ fontWeight: 900, mb: 3 }}>
          MERN <span style={{ color: THEME_COLOR }}>QUEST</span> 🚀
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, bgcolor: '#111', borderRadius: '20px', border: '1px solid #222', maxHeight: '500px', overflowY: 'auto' }}>
              <Typography variant="h6" sx={{ color: THEME_COLOR, mb: 2, fontWeight: 800 }}>Roadmap: {score} pts</Typography>
              <Stack spacing={1}>
                {DETAILED_ROADMAP.map((m, i) => (
                  <Box key={m.id} sx={{ 
                    p: 1.5, borderRadius: '10px', 
                    bgcolor: i === milestoneIdx ? `${m.color}22` : 'transparent',
                    borderLeft: `4px solid ${i <= milestoneIdx ? m.color : '#333'}`,
                    opacity: i <= milestoneIdx ? 1 : 0.4,
                    display: 'flex', justifyContent: 'space-between'
                  }}>
                    <Typography variant="body2" sx={{ fontWeight: i === milestoneIdx ? 800 : 400 }}>{m.label}</Typography>
                    {i < milestoneIdx && <Typography sx={{ color: THEME_COLOR }}>✓</Typography>}
                  </Box>
                ))}
              </Stack>
            </Paper>
          </Grid>

          <Grid item xs={12} md={8}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Paper sx={{ 
                width: 500, height: 500, bgcolor: '#000', 
                border: `4px solid #111`, position: 'relative', 
                boxShadow: `0 0 40px ${THEME_COLOR}11`,
                overflow: 'hidden'
              }}>
                {snake.map((s, i) => (
                  <Box key={i} sx={{
                    position: 'absolute', width: 19, height: 19,
                    left: s.x * 20, top: s.y * 20,
                    bgcolor: i === 0 ? THEME_COLOR : '#048a10',
                    borderRadius: i === 0 ? '4px' : '2px',
                    zIndex: 5
                  }} />
                ))}

                {!isWon && !gameOver && gameStarted && (
                  <Box sx={{ position: 'absolute', left: food.x * 20, top: food.y * 20, zIndex: 2 }}>
                    <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity }}>
                      <Typography sx={{ 
                        fontSize: '11px', fontWeight: 900, 
                        color: DETAILED_ROADMAP[milestoneIdx].color,
                        bgcolor: 'rgba(0,0,0,0.8)', px: 1, borderRadius: '4px',
                        whiteSpace: 'nowrap', border: `1px solid ${DETAILED_ROADMAP[milestoneIdx].color}`
                      }}>
                        {DETAILED_ROADMAP[milestoneIdx].label}
                      </Typography>
                    </motion.div>
                  </Box>
                )}

                {(!gameStarted || gameOver || isWon) && (
                  <Box sx={overlayStyle}>
                    {gameOver && <Typography variant="h4" color="error" sx={{ mb: 2, fontWeight: 900 }}>RESTART THE PATH</Typography>}
                    {isWon && <Typography variant="h3" sx={{ color: THEME_COLOR, fontWeight: 900, textAlign: 'center' }}>🏆 FULL STACK <br/> DEVELOPER</Typography>}
                    <Button 
                      variant="contained" 
                      onClick={() => { 
                        setGameOver(false); setIsWon(false); setGameStarted(true); 
                        setSnake(INITIAL_SNAKE); setMilestoneIdx(0); setScore(0);
                      }}
                      sx={btnStyle}
                    >
                      {gameOver ? "Retry Journey" : isWon ? "Start Again" : "Start Learning"}
                    </Button>
                  </Box>
                )}
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const overlayStyle = {
  position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
  bgcolor: 'rgba(0,0,0,0.9)', zIndex: 10,
  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 4
};

const btnStyle = {
  bgcolor: THEME_COLOR, color: '#000', fontWeight: 900, px: 5, py: 2,
  borderRadius: '15px', '&:hover': { bgcolor: '#07c91f' }
};

export default MernSnakeFull;