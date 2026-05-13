import React, { useState } from 'react';

import {
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  Container,
  Stack,
  TextField,
} from '@mui/material';

import {
  motion,
  AnimatePresence,
} from 'framer-motion';

import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import InventoryIcon from '@mui/icons-material/Inventory';

const THEME_COLOR = '#09ee24ff';

function ArrayAccessGame() {

  // ---------------- 1D ARRAY ----------------

  const warehouse = [
    '🍎',
    '🍔',
    '🚲',
    '🎮',
    '🎸',
    '⌚',
  ];

  const [index1D, setIndex1D] =
    useState('');

  const [found1D, setFound1D] =
    useState(null);

  // ---------------- 2D ARRAY ----------------

  const office = [
    ['💻', '🖨️', '☕'],
    ['📂', '📱', '🎧'],
    ['💡', '🔑', '📦'],
  ];

  const [row2D, setRow2D] =
    useState('');

  const [col2D, setCol2D] =
    useState('');

  const [found2D, setFound2D] =
    useState(null);

  // ---------------- 1D ACCESS ----------------

  const handleAccess1D = () => {
    const idx = parseInt(index1D);

    if (
      idx >= 0 &&
      idx < warehouse.length
    ) {
      setFound1D(warehouse[idx]);
    } else {
      setFound1D('❌ Out of Bound');
    }
  };

  // ---------------- 2D ACCESS ----------------

  const handleAccess2D = () => {
    const r = parseInt(row2D);

    const c = parseInt(col2D);

    if (office[r] && office[r][c]) {
      setFound2D(office[r][c]);
    } else {
      setFound2D('❌ Invalid Index');
    }
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
            fontWeight: 900,
            textAlign: 'center',
            mb: 1,

            color: '#fff',

            textShadow:
              '0 0 20px rgba(255,255,255,0.15)',

            fontSize: {
              xs: '2rem',
              md: '3.5rem',
            },
          }}
        >
          Array{' '}
          <span
            style={{
              color: THEME_COLOR,
              textShadow: `0 0 25px ${THEME_COLOR}`,
            }}
          >
            Hunter
          </span>{' '}
          🎯
        </Typography>

        <Typography
          sx={{
            textAlign: 'center',
            color: '#bdbdbd',
            mb: 6,
            fontSize: '1rem',
          }}
        >
          Master Array Indexing (1D & 2D)
          visually
        </Typography>

        {/* MAIN GRID */}

        <Grid
          container
          spacing={4}
          justifyContent="center"
        >

          {/* 1D ARRAY */}

          <Grid
            item
            xs={12}
            md={6}
            lg={5.5}
            sx={{
              display: 'flex',
            }}
          >
            <Paper sx={sectionStyle}>

              {/* TITLE */}

              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{ mb: 4 }}
              >
                <InventoryIcon
                  sx={{
                    color: THEME_COLOR,
                  }}
                />

                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    color: '#fff',
                  }}
                >
                  Single Dimension (1D)
                </Typography>
              </Stack>

              {/* ARRAY BOXES */}

              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  mb: 4,
                  overflowX: 'auto',
                  pb: 2,

                  justifyContent: 'center',

                  '&::-webkit-scrollbar': {
                    height: '6px',
                  },

                  '&::-webkit-scrollbar-thumb':
                    {
                      bgcolor: '#333',
                      borderRadius: '10px',
                    },
                }}
              >
                {warehouse.map(
                  (item, index) => {
                    const active =
                      parseInt(index1D) ===
                      index;

                    return (
                      <Box
                        key={index}
                        sx={{
                          textAlign:
                            'center',
                        }}
                      >
                        <motion.div
                          animate={{
                            scale: active
                              ? 1.08
                              : 1,

                            borderColor:
                              active
                                ? THEME_COLOR
                                : '#444',

                            boxShadow:
                              active
                                ? `0 0 25px ${THEME_COLOR}`
                                : 'none',
                          }}
                          style={{
                            ...boxStyle,

                            background:
                              active
                                ? `${THEME_COLOR}15`
                                : '#111',

                            color:
                              '#fff',
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize:
                                '2rem',

                              filter:
                                active
                                  ? 'brightness(1.2)'
                                  : 'brightness(1)',
                            }}
                          >
                            {item}
                          </Typography>
                        </motion.div>

                        <Typography
                          sx={{
                            mt: 1,
                            color: '#bbb',
                            fontWeight: 800,
                          }}
                        >
                          [{index}]
                        </Typography>
                      </Box>
                    );
                  }
                )}
              </Box>

              {/* CODE */}

              <Box
                sx={{
                  bgcolor: '#000',
                  p: 3,
                  borderRadius: '18px',
                  mb: 3,

                  border:
                    '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <Typography
                  sx={{
                    color: '#c678dd',
                    fontFamily:
                      'monospace',

                    mb: 3,
                  }}
                >
                  let item =
                  warehouse[
                  <input
                    type="number"
                    value={index1D}
                    onChange={(e) =>
                      setIndex1D(
                        e.target.value
                      )
                    }
                    style={inlineInput}
                    placeholder="idx"
                  />
                  ];
                </Typography>

                <Button
                  fullWidth
                  onClick={handleAccess1D}
                  sx={btnStyle}
                >
                  Access Item
                </Button>
              </Box>

              {/* RESULT */}

              <AnimatePresence>
                {found1D && (
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
                    <Typography
                      sx={{
                        textAlign:
                          'center',

                        fontSize:
                          '1.2rem',

                        color:
                          THEME_COLOR,
                      }}
                    >
                      Result:{' '}
                      <b>
                        {found1D}
                      </b>
                    </Typography>
                  </motion.div>
                )}
              </AnimatePresence>
            </Paper>
          </Grid>

          {/* 2D ARRAY */}

          <Grid
            item
            xs={12}
            md={6}
            lg={5.5}
            sx={{
              display: 'flex',
            }}
          >
            <Paper sx={sectionStyle}>

              {/* TITLE */}

              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{ mb: 4 }}
              >
                <SportsEsportsIcon
                  sx={{
                    color: THEME_COLOR,
                  }}
                />

                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    color: '#fff',
                  }}
                >
                  Multi-Dimension (2D)
                </Typography>
              </Stack>

              {/* GRID */}

              <Box
                sx={{
                  display: 'flex',
                  flexDirection:
                    'column',

                  alignItems:
                    'center',

                  mb: 4,
                }}
              >
                {office.map(
                  (row, rIdx) => (
                    <Stack
                      key={rIdx}
                      direction="row"
                      spacing={1.5}
                      sx={{ mb: 1.5 }}
                    >
                      <Typography
                        sx={{
                          width: 20,

                          display:
                            'flex',

                          alignItems:
                            'center',

                          color:
                            '#bbb',

                          fontWeight: 800,
                        }}
                      >
                        {rIdx}
                      </Typography>

                      {row.map(
                        (
                          item,
                          cIdx
                        ) => {
                          const active =
                            parseInt(
                              row2D
                            ) ===
                              rIdx &&
                            parseInt(
                              col2D
                            ) ===
                              cIdx;

                          return (
                            <motion.div
                              key={cIdx}
                              animate={{
                                scale:
                                  active
                                    ? 1.08
                                    : 1,

                                borderColor:
                                  active
                                    ? THEME_COLOR
                                    : '#444',

                                boxShadow:
                                  active
                                    ? `0 0 25px ${THEME_COLOR}`
                                    : 'none',
                              }}
                              style={{
                                ...boxStyle,

                                background:
                                  active
                                    ? `${THEME_COLOR}15`
                                    : '#111',

                                color:
                                  '#fff',
                              }}
                            >
                              <Typography
                                sx={{
                                  fontSize:
                                    '2rem',
                                }}
                              >
                                {item}
                              </Typography>
                            </motion.div>
                          );
                        }
                      )}
                    </Stack>
                  )
                )}

                {/* COLUMN INDEX */}

                <Stack
                  direction="row"
                  spacing={5.2}
                  sx={{
                    ml: 3,
                    mt: 1,
                  }}
                >
                  {office[0].map(
                    (_, cIdx) => (
                      <Typography
                        key={cIdx}
                        sx={{
                          color:
                            '#bbb',

                          fontWeight: 800,
                        }}
                      >
                        {cIdx}
                      </Typography>
                    )
                  )}
                </Stack>
              </Box>

              {/* CODE */}

              <Box
                sx={{
                  bgcolor: '#000',
                  p: 3,
                  borderRadius: '18px',
                  mb: 3,

                  border:
                    '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <Typography
                  sx={{
                    color: '#c678dd',
                    fontFamily:
                      'monospace',

                    mb: 3,
                  }}
                >
                  let obj = office[
                  <input
                    type="number"
                    value={row2D}
                    onChange={(e) =>
                      setRow2D(
                        e.target.value
                      )
                    }
                    style={inlineInput}
                    placeholder="r"
                  />
                  ][
                  <input
                    type="number"
                    value={col2D}
                    onChange={(e) =>
                      setCol2D(
                        e.target.value
                      )
                    }
                    style={inlineInput}
                    placeholder="c"
                  />
                  ];
                </Typography>

                <Button
                  fullWidth
                  onClick={handleAccess2D}
                  sx={btnStyle}
                >
                  Search Office
                </Button>
              </Box>

              {/* RESULT */}

              <AnimatePresence>
                {found2D && (
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
                    <Typography
                      sx={{
                        textAlign:
                          'center',

                        fontSize:
                          '1.2rem',

                        color:
                          THEME_COLOR,
                      }}
                    >
                      Found:{' '}
                      <b>
                        {found2D}
                      </b>
                    </Typography>
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

// ---------------- STYLES ----------------

const sectionStyle = {
  flex: 1,

  p: 4,

  bgcolor: 'rgba(255,255,255,0.03)',

  borderRadius: '24px',

  border:
    '1px solid rgba(255,255,255,0.08)',

  backdropFilter: 'blur(10px)',

  transition: '0.4s ease',

  '&:hover': {
    borderColor: `${THEME_COLOR}66`,

    boxShadow: `0 0 25px ${THEME_COLOR}22`,
  },
};

const boxStyle = {
  width: 72,

  height: 72,

  border: '2px solid #333',

  borderRadius: '16px',

  display: 'flex',

  alignItems: 'center',

  justifyContent: 'center',

  transition: '0.3s',

  cursor: 'pointer',
};

const inlineInput = {
  background: '#1a1a1a',

  border: `1px solid ${THEME_COLOR}44`,

  color: THEME_COLOR,

  width: '45px',

  borderRadius: '4px',

  textAlign: 'center',

  fontWeight: 'bold',

  outline: 'none',

  margin: '0 5px',
};

const btnStyle = {
  bgcolor: THEME_COLOR,

  color: '#000',

  fontWeight: 800,

  borderRadius: '12px',

  py: 1.2,

  textTransform: 'none',

  '&:hover': {
    bgcolor: '#07c91f',

    boxShadow: `0 0 20px ${THEME_COLOR}44`,
  },
};

export default ArrayAccessGame;