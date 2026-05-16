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
import TargetIcon from '@mui/icons-material/GpsFixed';

const THEME_COLOR = '#00ff66'; // Neon Cyber Green for Target Lock / Regex

// ---------------- REGEX TASKS DATA (THANGLISH) ----------------
const regexTasks = {
    basics: [
        { id: 1, question: "Intha text-la irukra 'error' nu solra vaarthaiye mattum target panna regex ezhuthunga (Global modifier 'g' use pannunga)", textSample: "system error code 404: critical error detected.", answer: "/error/g" },
        { id: 2, question: "Text-la irukra 'cat' or 'bat' or 'rat' munu vaarthaiyum ore regex-la match pannunga (Character class `[...]` use pannunga with 'g')", textSample: "the cat sat on a mat with a rat and a bat", answer: "/[cbr]at/g" }
    ],
    characterClasses: [
        { id: 1, question: "Text kulla irukra Ella Digits (numbers)-aiyum mattum target panni thookunga (`\\d` shortcut and 'g' modifier use pannunga)", textSample: "user_id: 9845 and pass: 2026", answer: "/\\d/g" },
        { id: 2, question: "Text-la irukra Ella uppercase letters (A-Z) mattum match aaganum", textSample: "welcome to PROGRAMPARK technology training", answer: "/[A-Z]/g" }
    ],
    quantifiers: [
        { id: 1, question: "Exactly munu digits (numbers) continuous-aa varra pattern-ah match pannunga (Quantifier `{...}` use pannunga)", textSample: "codes 45, 8832, 721 and 90 are here", answer: "/\\d{3}/g" },
        { id: 2, question: "Oru vaarthai 'abc' nu start aagi athuku apram ethana 'd' venaalum varalam (0 or more times). Athai match pannunga (`*` quantifier use pannunga)", textSample: "test variants: abc, abcd, abcdddd, abx", answer: "/abcd*/g" }
    ],
    realWorld: [
        { id: 1, question: "Intha string-la irukra 10-digit Indian Mobile Number-ah mattum correct-aa lock pannunga", textSample: "contact us at admin@park.com or +91 9876543210 or 8825413990", answer: "/\\d{10}/g" },
        { id: 2, question: "Text-la irukra secret year '2026' ah munnadi pinni boundary check panni match pannunga (`\\b` word boundary use pannunga)", textSample: "year2026 is false, but 2026 is correct year", answer: "/\\b2026\\b/g" }
    ]
};

function RegexGame() {
    const [category, setCategory] = useState('basics');
    const [currentTask, setCurrentTask] = useState(0);
    const [userInput, setUserInput] = useState('');
    const [result, setResult] = useState(null);
    const [showAnswer, setShowAnswer] = useState(false);
    const [score, setScore] = useState(0);
    const [scannerStatus, setScannerStatus] = useState('SCANNER READY 🎯');

    const currentTasksList = regexTasks[category];
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
        // Exact Trimmed Normalization
        let cleanInput = userInput.trim();
        let cleanAnswer = task.answer.trim();

        // Entha format-la regex pottaalum (with or without slashes for strict match overrides)
        // Dynamic matching test engine simulation
        if (cleanInput === cleanAnswer || cleanInput.replace(/\//g, '') === cleanAnswer.replace(/\//g, '')) {
            setResult('success');
            setScore(score + 10);
            handleFirework();
            setShowAnswer(false);
            setScannerStatus('TARGET LOCKED & EXTRACTED! 🦅');
        } else {
            setResult('fail');
            setShowAnswer(true);
            setScannerStatus('SCANNER MISSED THE PATTERN ❌');
        }
    };

    const nextQuestion = () => {
        if (currentTask < currentTasksList.length - 1) {
            setCurrentTask(currentTask + 1);
            setUserInput('');
            setResult(null);
            setShowAnswer(false);
            setScannerStatus('SCANNER READY 🎯');
        }
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        setCurrentTask(0);
        setUserInput('');
        setResult(null);
        setShowAnswer(false);
        setScannerStatus('SCANNER READY 🎯');
    };

    return (
        <Box sx={{ bgcolor: '#020705', minHeight: '100vh', py: 6, color: '#fff', fontFamily: 'sans-serif' }}>
            <Container maxWidth="lg">

                {/* TITLE */}
                <Typography variant="h3" sx={{ fontWeight: 900, textAlign: 'center', mb: 1, textShadow: '0 0 25px rgba(0,255,102,0.2)', fontSize: { xs: '2rem', md: '3.5rem' } }}>
                    Regex <span style={{ color: THEME_COLOR, textShadow: `0 0 25px ${THEME_COLOR}` }}>Sniper Engine</span> 🎯
                </Typography>
                <Typography sx={{ textAlign: 'center', color: '#8fa399', mb: 4 }}>
                    Write proper Regular Expressions to hunt down and scan strings inside raw data!
                </Typography>

                {/* CATEGORY SELECTOR */}
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                    <FormControl sx={{ minWidth: 280, bgcolor: '#07140e', borderRadius: '14px', border: '1px solid #113322' }}>
                        <InputLabel id="regex-label" sx={{ color: '#4d7561' }}>Select Regex Level</InputLabel>
                        <Select
                            labelId="regex-label"
                            value={category}
                            label="Select Regex Level"
                            onChange={handleCategoryChange}
                            sx={{ color: '#fff', '.MuiSvgIcon-root': { color: THEME_COLOR }, '& .MuiOutlinedInput-notchedOutline': { border: 'none' } }}
                        >
                            <MenuItem value="basics">🔍 Regex Basics - Raw Matches</MenuItem>
                            <MenuItem value="characterClasses">🧱 Character Classes - Wildcards</MenuItem>
                            <MenuItem value="quantifiers">📊 Quantifiers - Count Matches</MenuItem>
                            <MenuItem value="realWorld">💼 Real World - Data Extraction</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                {/* MAIN LAB GRID */}
                <Box
                    sx={{
                        display: "flex",

                        gap: 3,

                        overflowX: "auto",

                        alignItems: "stretch",

                        pb: 2,

                        "&::-webkit-scrollbar": {
                            height: "8px",
                        },

                        "&::-webkit-scrollbar-track": {
                            background: "#04120a",
                        },

                        "&::-webkit-scrollbar-thumb": {
                            background: "#113322",
                            borderRadius: "20px",
                        },
                    }}
                >
                    {/* LEFT PANEL */}

                    <Paper
                        sx={{
                            width: "340px",

                            minWidth: "340px",

                            bgcolor: "#04120a",

                            borderRadius: "24px",

                            border: "1px solid #0d301b",

                            textAlign: "center",

                            p: 4,

                            display: "flex",

                            flexDirection: "column",

                            justifyContent: "center",

                            alignItems: "center",

                            boxShadow:
                                "inset 0 0 30px rgba(0,0,0,0.9)",
                        }}
                    >
                        <TargetIcon
                            sx={{
                                fontSize: 70,

                                color:
                                    scannerStatus.includes(
                                        "LOCKED"
                                    )
                                        ? "#09ee24"
                                        : scannerStatus.includes(
                                            "MISSED"
                                        )
                                            ? "#ff5252"
                                            : THEME_COLOR,

                                mb: 2,

                                transition: "0.3s",
                            }}
                        />

                        <Typography
                            variant="h6"
                            sx={{
                                color: "#4d7561",

                                fontWeight: 600,

                                mb: 2,
                            }}
                        >
                            RAW DATA STREAM
                        </Typography>

                        {/* DATA BOX */}

                        <Box
                            sx={{
                                width: "100%",

                                minHeight: "120px",

                                borderRadius: "16px",

                                display: "flex",

                                alignItems: "center",

                                justifyContent: "center",

                                mb: 3,

                                p: 2,

                                bgcolor: "#000",

                                border: "1px solid #113322",
                            }}
                        >
                            <Typography
                                variant="body2"
                                sx={{
                                    fontFamily: "monospace",

                                    color: "#66ff99",

                                    textAlign: "center",

                                    wordBreak: "break-all",
                                }}
                            >
                                "{task.textSample}"
                            </Typography>
                        </Box>

                        <Chip
                            label={scannerStatus}
                            color={
                                scannerStatus.includes(
                                    "LOCKED"
                                )
                                    ? "success"
                                    : scannerStatus.includes(
                                        "MISSED"
                                    )
                                        ? "error"
                                        : "default"
                            }
                            sx={{
                                fontWeight: "bold",

                                color: "#fff",

                                border:
                                    "1px solid #113322",
                            }}
                        />
                    </Paper>

                    {/* RIGHT PANEL */}

                    <Paper
                        sx={{
                            flex: 1,

                            minWidth: "700px",

                            p: {
                                xs: 3,
                                md: 4,
                            },

                            bgcolor:
                                "rgba(5,20,12,0.6)",

                            borderRadius: "24px",

                            border:
                                "1px solid rgba(255,255,255,0.03)",

                            backdropFilter:
                                "blur(20px)",
                        }}
                    >
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
                                label={`${category.toUpperCase()} - Target ${task.id
                                    } / ${currentTasksList.length
                                    }`}
                                sx={{
                                    bgcolor: "#000",

                                    color: THEME_COLOR,

                                    border:
                                        "1px solid #113322",

                                    fontWeight: 700,
                                }}
                            />

                            <Typography
                                sx={{
                                    color: THEME_COLOR,

                                    fontWeight: 800,
                                }}
                            >
                                Sniper Score: {score}
                            </Typography>
                        </Stack>

                        {/* QUESTION */}

                        <Box sx={{ mb: 4 }}>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 600,

                                    color: "#fff",

                                    mb: 2,

                                    lineHeight: 1.6,

                                    fontSize: "1.1rem",
                                }}
                            >
                                {task.question}
                            </Typography>
                        </Box>

                        <Divider
                            sx={{
                                borderColor:
                                    "rgba(255,255,255,0.03)",

                                mb: 3,
                            }}
                        />

                        {/* INPUT */}

                        <Box sx={{ mb: 3 }}>
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    color: "#8fa399",

                                    mb: 1,

                                    display: "flex",

                                    alignItems: "center",

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

                                REGEX PATTERN INJECTOR
                            </Typography>

                            <TextField
                                fullWidth
                                placeholder="Write pattern here... e.g., /pattern/g"
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
                                flexWrap: "wrap",
                            }}
                        >
                            <Button
                                fullWidth
                                variant="contained"
                                onClick={checkCode}
                                sx={btnStyle}
                                disabled={
                                    result === "success"
                                }
                            >
                                Lock & Shoot Target ⚡
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
                                        Next Target Stream ➡️
                                    </Button>
                                )}
                        </Stack>
                    </Paper>
                </Box>
            </Container>
        </Box>
    );
}

// Styling parameters
const inputStyle = {
    '& .MuiOutlinedInput-root': {
        color: '#fff', fontFamily: 'monospace', bgcolor: '#000', borderRadius: '12px',
        '& fieldset': { borderColor: '#113322' },
        '&:hover fieldset': { borderColor: '#226644' },
        '&.Mui-focused fieldset': { borderColor: THEME_COLOR },
    },
    '& input::placeholder': { color: '#22553b', opacity: 1 },
};

const btnStyle = {
    bgcolor: THEME_COLOR, color: '#000', fontWeight: 800, borderRadius: '12px', py: 1.5, textTransform: 'none', fontSize: '0.95rem',
    '&:hover': { bgcolor: '#00cc52', boxShadow: `0 0 20px ${THEME_COLOR}55` },
    '&.Mui-disabled': { bgcolor: '#04140b', color: '#163821' },
};

const nextBtnStyle = {
    borderRadius: '12px', color: '#fff', borderColor: '#113322', textTransform: 'none', fontSize: '0.95rem',
    '&:hover': { borderColor: THEME_COLOR, bgcolor: `${THEME_COLOR}11` },
};

export default RegexGame;