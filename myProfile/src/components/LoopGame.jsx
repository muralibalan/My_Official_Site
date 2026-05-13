import React, { useState } from 'react';

import {
    Box,
    Typography,
    Paper,
    Grid,
    Button,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    Container,
    Alert,
    TextField,
} from '@mui/material';

import { motion } from 'framer-motion';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const THEME_COLOR = '#09ee24ff';

function LoopGame() {
    const [loopType, setLoopType] = useState('for');

    const [totalRows, setTotalRows] =
        useState(10);

    const [targetPos, setTargetPos] =
        useState(5);

    const [monkeyPos, setMonkeyPos] =
        useState(1);

    const [currentMonkeyPos, setCurrentMonkeyPos] =
        useState(1);

    const [startIndex, setStartIndex] =
        useState(1);

    const [conditionValue, setConditionValue] =
        useState(5);

    const [isRunning, setIsRunning] =
        useState(false);

    const [message, setMessage] = useState({
        type: 'info',
        text: 'Set Monkey & Banana by clicking the boxes!',
    });

    const [executionSteps, setExecutionSteps] =
        useState([]);

    // ---------------- ROWS ----------------

    const rows = Array.from(
        { length: totalRows },
        (_, i) => i + 1
    );

    // ---------------- RUN GAME ----------------

    const handleRunGame = async () => {
        setIsRunning(true);

        setExecutionSteps([]);

        setCurrentMonkeyPos(startIndex);

        let current = startIndex;

        let steps = [];

        while (
            current <= conditionValue &&
            current <= totalRows
        ) {
            steps.push({
                row: current,
                result: true,
            });

            setExecutionSteps([...steps]);

            await new Promise((resolve) =>
                setTimeout(resolve, 500)
            );

            setCurrentMonkeyPos(current);

            current++;
        }

        // FALSE CONDITION

        steps.push({
            row: current,
            result: false,
        });

        setExecutionSteps([...steps]);

        if (
            current - 1 === targetPos
        ) {
            setMessage({
                type: 'success',
                text: 'Success! Monkey reached Banana 🍌🐒',
            });
        } else {
            setMessage({
                type: 'error',
                text: 'Loop stopped before reaching Banana ❌',
            });
        }

        setIsRunning(false);
    };

    // ---------------- RESET ----------------

    const resetGame = () => {
        setCurrentMonkeyPos(monkeyPos);

        setExecutionSteps([]);

        setMessage({
            type: 'info',
            text: 'Game Reset!',
        });
    };

    return (
        <Box
            sx={{
                bgcolor: '#050505',
                minHeight: '100vh',
                py: 8,
                color: '#fff',
            }}
        >
            <Container maxWidth="xl">

                {/* HEADER */}

                <Typography
                    variant="h3"
                    sx={{
                        textAlign: 'center',
                        fontWeight: 900,
                        mb: 6,

                        fontSize: {
                            xs: '2rem',
                            md: '3.5rem',
                        },
                    }}
                >
                    Loop{' '}
                    <span
                        style={{
                            color: THEME_COLOR,
                            textShadow: `0 0 20px ${THEME_COLOR}`,
                        }}
                    >
                        Logic
                    </span>{' '}
                    Lab
                </Typography>

                {/* MAIN GRID */}

                <Grid
                    container
                    spacing={3}
                    alignItems="stretch"
                    justifyContent="center"
                    sx={{
                        maxWidth: '1600px',
                        mx: 'auto',
                    }}
                >

                    {/* LEFT PANEL */}

                    <Grid
                        item
                        xs={12}
                        md={4}
                        lg={3.8}
                        sx={{
                            display: 'flex',
                        }}
                    >
                        <Paper
                            sx={{
                                flex: 1,
                                p: 4,

                                bgcolor:
                                    'rgba(255,255,255,0.03)',

                                border:
                                    '1px solid rgba(255,255,255,0.08)',

                                borderRadius: '24px',

                                backdropFilter: 'blur(10px)',
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    color: THEME_COLOR,
                                    fontWeight: 800,
                                    mb: 4,
                                }}
                            >
                                Configuration
                            </Typography>

                            {/* INPUTS */}

                            <Grid
                                container
                                spacing={2}
                                sx={{ mb: 3 }}
                            >
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        type="number"
                                        label="Rows"
                                        value={totalRows}
                                        onChange={(e) =>
                                            setTotalRows(
                                                Number(e.target.value)
                                            )
                                        }
                                        sx={inputStyle}
                                        InputLabelProps={{
                                            style: {
                                                color: '#888',
                                            },
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={6}>
                                    <FormControl
                                        fullWidth
                                        sx={selectStyle}
                                    >
                                        <InputLabel
                                            sx={{
                                                color: '#888',
                                            }}
                                        >
                                            Loop Type
                                        </InputLabel>

                                        <Select
                                            value={loopType}
                                            label="Loop Type"
                                            onChange={(e) =>
                                                setLoopType(
                                                    e.target.value
                                                )
                                            }
                                            sx={{
                                                color: '#fff',
                                            }}
                                        >
                                            <MenuItem value="for">
                                                For Loop
                                            </MenuItem>

                                            <MenuItem value="while">
                                                While Loop
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>

                            {/* CODE BLOCK */}

                            <Box
                                sx={{
                                    p: 3,
                                    bgcolor: '#000',
                                    borderRadius: '18px',
                                    border:
                                        '1px solid rgba(255,255,255,0.08)',

                                    fontFamily:
                                        'monospace',

                                    mb: 4,
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: '#d19a66',
                                        lineHeight: 2,
                                    }}
                                >
                                    {`// Start Monkey`}
                                    <br />

                                    <span
                                        style={{
                                            color: '#c678dd',
                                        }}
                                    >
                                        let
                                    </span>{' '}
                                    i =
                                    <input
                                        type="number"
                                        value={startIndex}
                                        onChange={(e) => {
                                            setStartIndex(
                                                Number(e.target.value)
                                            );

                                            setMonkeyPos(
                                                Number(e.target.value)
                                            );

                                            setCurrentMonkeyPos(
                                                Number(e.target.value)
                                            );
                                        }}
                                        style={inlineInput}
                                    />
                                    ;
                                </Typography>

                                <Typography
                                    sx={{
                                        color: '#56b6c2',
                                        mt: 2,
                                    }}
                                >
                                    {loopType === 'for'
                                        ? `for ( ; i <= `
                                        : `while (i <= `}

                                    <input
                                        type="number"
                                        value={conditionValue}
                                        onChange={(e) =>
                                            setConditionValue(
                                                Number(e.target.value)
                                            )
                                        }
                                        style={inlineInput}
                                    />

                                    {loopType === 'for'
                                        ? `; i++) {`
                                        : `) {`}
                                </Typography>

                                <Typography
                                    sx={{
                                        color: '#98c379',
                                        ml: 4,
                                        my: 1,
                                    }}
                                >
                                    monkey.moveTo(i);
                                </Typography>

                                <Typography
                                    sx={{
                                        color: '#56b6c2',
                                    }}
                                >
                                    {'}'}
                                </Typography>
                            </Box>

                            {/* BUTTONS */}

                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: 2,
                                }}
                            >
                                <Button
                                    fullWidth
                                    disabled={isRunning}
                                    startIcon={
                                        <PlayArrowIcon />
                                    }
                                    onClick={handleRunGame}
                                    sx={btnStyle}
                                >
                                    Run Game
                                </Button>

                                <Button
                                    onClick={resetGame}
                                    sx={{
                                        border:
                                            '1px solid #333',

                                        color: '#999',

                                        borderRadius:
                                            '12px',

                                        minWidth: 60,
                                    }}
                                >
                                    <RestartAltIcon />
                                </Button>
                            </Box>

                            {/* ALERT */}

                            <Alert
                                severity={message.type}
                                sx={{
                                    mt: 3,
                                    bgcolor: '#111',
                                    color: '#fff',
                                    borderRadius: '12px',
                                }}
                            >
                                {message.text}
                            </Alert>
                        </Paper>
                    </Grid>

                    {/* CENTER PANEL */}

                    <Grid
                        item
                        xs={12}
                        md={4}
                        lg={3.8}
                        sx={{
                            display: 'flex',
                        }}
                    >
                        <Paper
                            sx={{
                                flex: 1,
                                p: 3,

                                bgcolor:
                                    'rgba(255,255,255,0.03)',

                                border:
                                    '1px solid rgba(255,255,255,0.08)',

                                borderRadius: '24px',

                                backdropFilter: 'blur(10px)',
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    color: THEME_COLOR,
                                    fontWeight: 800,
                                    mb: 3,
                                }}
                            >
                                Visual Board
                            </Typography>

                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 1,

                                    maxHeight: '700px',

                                    overflowY: 'auto',

                                    pr: 1,
                                }}
                            >
                                {rows.map((row) => (
                                    <Box
                                        key={row}
                                        sx={{
                                            minHeight: 55,

                                            border:
                                                '1px solid rgba(255,255,255,0.06)',

                                            borderRadius: '12px',

                                            display: 'flex',
                                            alignItems: 'center',

                                            px: 3,

                                            position: 'relative',

                                            bgcolor:
                                                'rgba(255,255,255,0.02)',
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                width: 40,
                                                color: '#555',
                                                fontWeight: 800,
                                            }}
                                        >
                                            {row}
                                        </Typography>

                                        {/* SET BUTTONS */}

                                        <Box
                                            sx={{
                                                display: 'flex',
                                                gap: 1,
                                                ml: 'auto',
                                            }}
                                        >
                                            <Button
                                                size="small"
                                                onClick={() => {
                                                    setMonkeyPos(row);

                                                    setCurrentMonkeyPos(
                                                        row
                                                    );

                                                    setStartIndex(
                                                        row
                                                    );
                                                }}
                                                sx={{
                                                    color:
                                                        monkeyPos === row
                                                            ? THEME_COLOR
                                                            : '#333',

                                                    minWidth: 0,
                                                }}
                                            >
                                                SET 🐒
                                            </Button>

                                            <Button
                                                size="small"
                                                onClick={() =>
                                                    setTargetPos(row)
                                                }
                                                sx={{
                                                    color:
                                                        targetPos === row
                                                            ? '#ffeb3b'
                                                            : '#333',

                                                    minWidth: 0,
                                                }}
                                            >
                                                SET 🍌
                                            </Button>
                                        </Box>

                                        {/* MONKEY */}

                                        <Box
                                            sx={{
                                                position:
                                                    'absolute',

                                                left: '40%',
                                            }}
                                        >
                                            {currentMonkeyPos ===
                                                row && (
                                                    <motion.div
                                                        layoutId="monkey"
                                                        transition={{
                                                            type: 'spring',
                                                            stiffness: 300,
                                                            damping: 30,
                                                        }}
                                                    >
                                                        <Typography
                                                            sx={{
                                                                fontSize:
                                                                    '30px',
                                                            }}
                                                        >
                                                            🐒
                                                        </Typography>
                                                    </motion.div>
                                                )}
                                        </Box>

                                        {/* BANANA */}

                                        <Box
                                            sx={{
                                                position:
                                                    'absolute',

                                                left: '60%',
                                            }}
                                        >
                                            {targetPos === row && (
                                                <motion.div
                                                    animate={{
                                                        scale: [
                                                            1,
                                                            1.2,
                                                            1,
                                                        ],
                                                    }}
                                                    transition={{
                                                        repeat:
                                                            Infinity,
                                                        duration: 1.5,
                                                    }}
                                                >
                                                    <Typography
                                                        sx={{
                                                            fontSize:
                                                                '25px',
                                                        }}
                                                    >
                                                        🍌
                                                    </Typography>
                                                </motion.div>
                                            )}
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </Paper>
                    </Grid>

                    {/* RIGHT PANEL */}

                    <Grid
                        item
                        xs={12}
                        md={4}
                        lg={3.8}
                        sx={{
                            display: 'flex',
                        }}
                    >
                        <Paper
                            sx={{
                                flex: 1,
                                p: 3,

                                bgcolor:
                                    'rgba(255,255,255,0.03)',

                                border:
                                    '1px solid rgba(255,255,255,0.08)',

                                borderRadius: '24px',

                                backdropFilter: 'blur(10px)',
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    color: THEME_COLOR,
                                    fontWeight: 800,
                                    mb: 3,
                                }}
                            >
                                Loop Execution
                            </Typography>

                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 2,

                                    maxHeight: '700px',
                                    overflowY: 'auto',

                                    pr: 1,
                                }}
                            >
                                {executionSteps.map(
                                    (step, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{
                                                opacity: 0,
                                                x: 20,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                x: 0,
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    p: 2,

                                                    borderRadius:
                                                        '14px',

                                                    border:
                                                        step.result
                                                            ? `1px solid ${THEME_COLOR}`
                                                            : '1px solid #ff5252',

                                                    bgcolor:
                                                        step.result
                                                            ? `${THEME_COLOR}11`
                                                            : 'rgba(255,82,82,0.08)',
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        color: '#fff',
                                                        fontWeight: 700,
                                                        mb: 1,
                                                    }}
                                                >
                                                    Iteration {index + 1}
                                                </Typography>

                                                <Typography
                                                    sx={{
                                                        color: '#aaa',
                                                        lineHeight: 1.8,
                                                    }}
                                                >
                                                    i = {step.row}
                                                </Typography>

                                                <Typography
                                                    sx={{
                                                        color:
                                                            step.result
                                                                ? '#00ff88'
                                                                : '#ff5252',

                                                        fontWeight: 700,
                                                    }}
                                                >
                                                    Condition:
                                                    {` `}
                                                    {step.row} ≤{' '}
                                                    {conditionValue}
                                                    {` `}
                                                    →
                                                    {` `}
                                                    {step.result
                                                        ? 'TRUE ✅'
                                                        : 'FALSE ❌'}
                                                </Typography>

                                                {step.result ? (
                                                    <Typography
                                                        sx={{
                                                            color:
                                                                THEME_COLOR,

                                                            mt: 1,
                                                        }}
                                                    >
                                                        🐒 Monkey moved
                                                        to row{' '}
                                                        {step.row}
                                                    </Typography>
                                                ) : (
                                                    <Typography
                                                        sx={{
                                                            color:
                                                                '#ff5252',

                                                            mt: 1,

                                                            fontWeight: 700,
                                                        }}
                                                    >
                                                        Loop Stops Here 🚫
                                                    </Typography>
                                                )}
                                            </Box>
                                        </motion.div>
                                    )
                                )}
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

// ---------------- STYLES ----------------

const inlineInput = {
    background: '#1a1a1a',

    border: `1px solid ${THEME_COLOR}44`,

    color: THEME_COLOR,

    width: '55px',

    borderRadius: '4px',

    textAlign: 'center',

    fontWeight: 'bold',

    outline: 'none',
};

const inputStyle = {
    '& .MuiOutlinedInput-root': {
        color: '#fff',

        borderRadius: '12px',

        '& fieldset': {
            borderColor: '#333',
        },

        '&:hover fieldset': {
            borderColor: '#555',
        },

        '&.Mui-focused fieldset': {
            borderColor: THEME_COLOR,
        },
    },
};

const selectStyle = {
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#333',
        borderRadius: '12px',
    },

    '&:hover .MuiOutlinedInput-notchedOutline':
    {
        borderColor: '#555',
    },

    '&.Mui-focused .MuiOutlinedInput-notchedOutline':
    {
        borderColor: THEME_COLOR,
    },
};

const btnStyle = {
    bgcolor: THEME_COLOR,

    color: '#000',

    fontWeight: 800,

    borderRadius: '12px',

    py: 1.5,

    textTransform: 'none',

    fontSize: '1rem',

    '&:hover': {
        bgcolor: '#07c91f',

        boxShadow: `0 0 20px ${THEME_COLOR}44`,
    },
};

export default LoopGame;