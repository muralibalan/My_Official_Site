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
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import useSound from "use-sound";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import MenuBookIcon from "@mui/icons-material/MenuBook";

// ⚡ games folder-க்கு உள்ளே இருக்கும் nodeQuestions.js ஃபைலில் இருந்து 6 சாப்டர்களின் டேட்டாவையும் இம்போர்ட் செய்கிறோம்
import { 
  chapter1Tasks, 
  chapter2Tasks, 
  chapter3Tasks, 
  chapter4Tasks, 
  chapter5Tasks, 
  chapter6Tasks 
} from "./nodeQuestions.js"; 

const THEME_COLOR = "#09ee24";
const ERROR_COLOR = "#ff2a2a";

export default function DynamicConceptQuiz({ chapterNumber: initialChapter = 1 }) {
  // ⚡ டிராப் டவுனுக்கான State (Props-லிருந்து வரும் Initial Chapter-ஐ அடிப்படையாகக் கொண்டது)
  const [selectedChapter, setSelectedChapter] = useState(initialChapter);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // 🔊 SOUND EFFECTS (public/sounds/ குள்ள win.mp3 & wrong.mp3 இருக்கணும்)
  const [playCorrect] = useSound("/sounds/win.mp3", { volume: 0.7 });
  const [playWrong] = useSound("/sounds/wrong.mp3", { volume: 0.7 });

  // 🎆 FIREWORKS ANIMATION
  const triggerVediAnimation = () => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { x: 0.2, y: 0.6 },
      colors: ["#09ee24", "#ffeb3b", "#00f0ff", "#ff2a2a"],
    });
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { x: 0.8, y: 0.6 },
      colors: ["#09ee24", "#ffeb3b", "#00f0ff", "#ff2a2a"],
    });
  };

  // ⚡ டிராப் டவுனில் மாற்றும் போது அந்தந்த சாப்டர் டேட்டாவை ரிட்டர்ன் செய்யும் பங்க்சன்
  const getChapterData = () => {
    switch (Number(selectedChapter)) {
      case 1: return chapter1Tasks;
      case 2: return chapter2Tasks;
      case 3: return chapter3Tasks;
      case 4: return chapter4Tasks;
      case 5: return chapter5Tasks;
      case 6: return chapter6Tasks;
      default: return chapter1Tasks;
    }
  };

  const quizData = getChapterData() || [];

  // ⚡ சாப்டரை மாற்றும்போது கொஸ்டின் மற்றும் Score ஐ Reset செய்ய
  const handleChapterChange = (event) => {
    setSelectedChapter(event.target.value);
    setCurrentQuestion(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
  };

  if (!quizData || quizData.length === 0) {
    return (
      <Box sx={{ bgcolor: "#060c09", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Typography sx={{ color: "#fff", fontWeight: 700 }}>No Questions Found for this Chapter! 😅</Typography>
      </Box>
    );
  }

  const rawQuiz = quizData[currentQuestion] || {};

  const activeQuiz = {
    question: rawQuiz?.question || "",
    options: (rawQuiz?.options || []).map((opt) => ({
      text: opt,
      isCorrect: opt === rawQuiz?.answer,
    })),
    explanation: rawQuiz?.explain || rawQuiz?.explanation || "",
  };

  const handleOptionClick = (option) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);

    if (option.isCorrect) {
      triggerVediAnimation();
      playCorrect();
      setScore((prev) => prev + 10);
    } else {
      playWrong();
      setScore((prev) => Math.max(0, prev - 5));
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsAnswered(false);

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
  };

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
        background: "radial-gradient(circle at top,#0b1f15,#050805 80%)",
      }}
    >
      {/* Background Ambient Glows */}
      <Box sx={{ position: "absolute", width: 300, height: 300, bgcolor: "rgba(9,238,36,0.08)", borderRadius: "50%", filter: "blur(120px)", top: -100, left: -100 }} />
      <Box sx={{ position: "absolute", width: 250, height: 250, bgcolor: "rgba(0,240,255,0.08)", borderRadius: "50%", filter: "blur(120px)", bottom: -100, right: -100 }} />

      <Container maxWidth="sm">
        
        {/* ⚡ CHAPTER DROPDOWN SELECTION BAR */}
        <Paper
          elevation={4}
          sx={{
            bgcolor: "rgba(13,22,18,0.85)",
            backdropFilter: "blur(14px)",
            borderRadius: "20px",
            p: 2,
            mb: 3,
            border: "1px solid #1c3528",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <MenuBookIcon sx={{ color: THEME_COLOR }} />
            <Typography sx={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem" }}>
              Select Chapter:
            </Typography>
          </Box>

          <FormControl size="small" sx={{ minWidth: 160 }}>
            <Select
              value={selectedChapter}
              onChange={handleChapterChange}
              sx={{
                color: "#fff",
                bgcolor: "#0c1712",
                borderRadius: "12px",
                fontWeight: 700,
                ".MuiOutlinedInput-notchedOutline": { borderColor: "#1f3d2e" },
                "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: THEME_COLOR },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: THEME_COLOR },
                ".MuiSvgIcon-root": { color: THEME_COLOR },
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: "#0d1a14",
                    color: "#fff",
                    borderRadius: "12px",
                    border: "1px solid #1c3528",
                    "& .MuiMenuItem-root": {
                      fontWeight: 600,
                      "&:hover": { bgcolor: "rgba(9,238,36,0.12)", color: THEME_COLOR },
                      "&.Mui-selected": { bgcolor: "rgba(9,238,36,0.2) !important", color: THEME_COLOR },
                    },
                  },
                },
              }}
            >
              <MenuItem value={1}>Chapter 1</MenuItem>
              <MenuItem value={2}>Chapter 2</MenuItem>
              <MenuItem value={3}>Chapter 3</MenuItem>
              <MenuItem value={4}>Chapter 4</MenuItem>
              <MenuItem value={5}>Chapter 5</MenuItem>
              <MenuItem value={6}>Chapter 6</MenuItem>
            </Select>
          </FormControl>
        </Paper>

        {/* Top Info Bar */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2, px: 1 }}>
          <Typography variant="subtitle2" sx={{ color: "#4d7561", fontWeight: 700 }}>
            CHAPTER {selectedChapter} - PRACTICE QUIZ
          </Typography>
          <Typography sx={{ color: "#fff", fontWeight: 800 }}>Score : {score}</Typography>
        </Box>

        {/* Main Quiz Card */}
        <Paper
          component={motion.div}
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          elevation={10}
          sx={{
            bgcolor: "rgba(13,22,18,0.78)",
            backdropFilter: "blur(16px)",
            borderRadius: "28px",
            p: { xs: 3, md: 4 },
            border: "1px solid #162a20",
            boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
          }}
        >
          {!quizFinished ? (
            <>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                <Chip
                  icon={<EmojiEventsIcon />}
                  label={`Question ${currentQuestion + 1} / ${quizData.length}`}
                  sx={{ bgcolor: "rgba(9,238,36,0.1)", color: THEME_COLOR, fontWeight: 700 }}
                />
                <Typography sx={{ color: THEME_COLOR, fontWeight: 800 }}>Portal Quiz</Typography>
              </Box>

              <LinearProgress
                variant="determinate"
                value={((currentQuestion + 1) / quizData.length) * 100}
                sx={{
                  height: 10,
                  borderRadius: 10,
                  mb: 4,
                  bgcolor: "#101a14",
                  "& .MuiLinearProgress-bar": { bgcolor: THEME_COLOR },
                }}
              />

              <motion.div key={`${selectedChapter}-${currentQuestion}`} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    mb: 4,
                    lineHeight: 1.7,
                    minHeight: { xs: "70px", md: "90px" },
                    fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                    textAlign: "center",
                    background: "linear-gradient(90deg,#00ff95,#00e5ff,#ffe600)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textShadow: "0 0 12px rgba(0,255,149,0.25)",
                    px: { xs: 1, sm: 2 },
                  }}
                >
                  {activeQuiz.question}
                </Typography>
              </motion.div>

              <Stack spacing={2} sx={{ mb: 4 }}>
                {activeQuiz.options.map((option, index) => {
                  let btnBg = "#122019";
                  let btnBorder = "#1c3528";
                  let btnColor = "#fff";
                  let animation = "none";

                  if (isAnswered) {
                    if (option.isCorrect) {
                      btnBg = "rgba(9,238,36,0.1)";
                      btnBorder = THEME_COLOR;
                      btnColor = THEME_COLOR;
                      animation = "pulseGlow 1.2s infinite";
                    } else if (selectedOption?.text === option.text && !option.isCorrect) {
                      btnBg = "rgba(255,42,42,0.1)";
                      btnBorder = ERROR_COLOR;
                      btnColor = ERROR_COLOR;
                    } else {
                      btnBg = "#0a0f0d";
                      btnBorder = "#0d1612";
                      btnColor = "rgba(255,255,255,0.2)";
                    }
                  }

                  return (
                    <Button
                      key={index}
                      fullWidth
                      component={motion.button}
                      whileHover={!isAnswered ? { scale: 1.02 } : {}}
                      whileTap={!isAnswered ? { scale: 0.98 } : {}}
                      animate={
                        isAnswered && selectedOption?.text === option.text && !option.isCorrect
                          ? { x: [0, -15, 15, -10, 10, 0], rotate: [0, -2, 2, -2, 2, 0] }
                          : {}
                      }
                      onClick={() => handleOptionClick(option)}
                      disabled={isAnswered}
                      sx={{
                        justifyContent: "flex-start",
                        textAlign: "left",
                        bgcolor: btnBg,
                        border: `1px solid ${btnBorder}`,
                        color: btnColor,
                        borderRadius: "16px",
                        p: 2,
                        textTransform: "none",
                        fontWeight: 600,
                        fontSize: "1rem",
                        animation,
                        transition: "0.3s",
                        "&.Mui-disabled": { color: btnColor },
                        "&:hover": { bgcolor: !isAnswered ? "#162a20" : btnBg },
                        "@keyframes pulseGlow": {
                          "0%": { boxShadow: "0 0 0px #09ee24" },
                          "50%": { boxShadow: "0 0 25px #09ee24" },
                          "100%": { boxShadow: "0 0 0px #09ee24" },
                        },
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", width: "100%", gap: 1.5 }}>
                        <Box
                          sx={{
                            width: 28,
                            height: 28,
                            borderRadius: "50%",
                            border: "2px solid currentColor",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "12px",
                            flexShrink: 0,
                          }}
                        >
                          {String.fromCharCode(65 + index)}
                        </Box>
                        <Box sx={{ flexGrow: 1 }}>{option.text}</Box>
                        {isAnswered && option.isCorrect && <CheckCircleOutlineIcon />}
                        {isAnswered && selectedOption?.text === option.text && !option.isCorrect && <HighlightOffIcon />}
                      </Box>
                    </Button>
                  );
                })}
              </Stack>

              <AnimatePresence>
                {isAnswered && (
                  <Collapse in>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                      {selectedOption?.isCorrect ? (
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: THEME_COLOR, mb: 1.5 }}>
                          <CheckCircleOutlineIcon />
                          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Super Boss!</Typography>
                        </Box>
                      ) : (
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: ERROR_COLOR, mb: 1.5 }}>
                          <HighlightOffIcon />
                          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>😢 Konjam Practice Pannu Boss!</Typography>
                        </Box>
                      )}

                      <Box sx={{ bgcolor: "#080f0c", p: 2, borderRadius: "14px", borderLeft: `4px solid ${selectedOption?.isCorrect ? THEME_COLOR : ERROR_COLOR}`, mb: 3 }}>
                        <Typography variant="body2" sx={{ color: "#8fa399", lineHeight: 1.7, fontSize: "0.95rem" }}>
                          {activeQuiz.explanation}
                        </Typography>
                      </Box>

                      <Button
                        fullWidth
                        variant="contained"
                        onClick={handleNext}
                        component={motion.button}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        sx={{
                          bgcolor: THEME_COLOR,
                          color: "#000",
                          fontWeight: 700,
                          borderRadius: "14px",
                          py: 1.6,
                          textTransform: "none",
                          fontSize: "1rem",
                          "&:hover": { bgcolor: "#06c21d" },
                        }}
                      >
                        {currentQuestion === quizData.length - 1 ? "Mudichirom! Complete Pannu 🚀" : "Adutha Kelviki Po..."}
                      </Button>
                    </motion.div>
                  </Collapse>
                )}
              </AnimatePresence>
            </>
          ) : (
            <Box sx={{ textAlign: "center", py: 4 }}>
              <EmojiEventsIcon sx={{ fontSize: 60, color: THEME_COLOR, mb: 2 }} />
              <Typography variant="h5" sx={{ color: "#fff", fontWeight: 800, mb: 1 }}>
                Quiz Completed! 🎉
              </Typography>
              <Typography sx={{ color: "#8fa399", mb: 4 }}>
                Uningaloda total score: <strong style={{ color: THEME_COLOR }}>{score}</strong>
              </Typography>
              <Button
                fullWidth
                variant="contained"
                onClick={handleRestart}
                sx={{
                  bgcolor: THEME_COLOR,
                  color: "#000",
                  fontWeight: 700,
                  borderRadius: "14px",
                  py: 1.6,
                }}
              >
                Again Oru Round Polama? 🔄
              </Button>
            </Box>
          )}
        </Paper>
      </Container>
    </Box>
  );
}