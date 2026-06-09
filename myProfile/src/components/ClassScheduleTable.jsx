
import React, { useState, useEffect } from 'react';
import {
  Button,
  Typography,
  CircularProgress,
  Link,
  Box,
  Chip,
  Card,
  CardContent,
  Divider
} from '@mui/material';

const API_URL =
  "https://script.google.com/macros/s/AKfycbytpwgPHNnkFVoqTq5HZ60Bi7uOkgbgIjQRdUsprBQ7sYiDLIoYROJmJU9LiiYMPu-Hlw/exec";

export default function ClassScheduleTable() {

  const [classes, setClasses] = useState([]);
  const [fetching, setFetching] = useState(true);

  // =========================
  // FORMAT TIME
  // =========================

// =========================
// FORMAT TIME
// =========================

const formatTime = (time) => {

  if (!time) return '';

  try {

    // IF DATE OBJECT STRING
    const date = new Date(time);

    // VALID DATE
    if (!isNaN(date.getTime())) {

      return date.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
    }

    // NORMAL HH:mm FORMAT
    const [hour, minute] = time
      .toString()
      .split(':');

    const h = parseInt(hour);

    const ampm = h >= 12
      ? 'PM'
      : 'AM';

    const formattedHour =
      h % 12 || 12;

    return `${formattedHour}:${minute} ${ampm}`;

  } catch (err) {

    return time;
  }
};



  // =========================
  // FETCH CLASSES
  // =========================
  const fetchClasses = async () => {

    try {

      const response = await fetch(
        `${API_URL}?t=${new Date().getTime()}`
      );

      const data = await response.json();

      if (Array.isArray(data)) {

        setClasses(data);
      }

    } catch (error) {

      console.error('Fetch Error:', error);

    } finally {

      setFetching(false);
    }
  };

  useEffect(() => {

    fetchClasses();

  }, []);

  // =========================
  // LOADING UI
  // =========================
  if (fetching) {

    return (

      <Box
        sx={{
          minHeight: '60vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: 2
        }}
      >
        <CircularProgress
          size={45}
          thickness={4}
          sx={{
            color: '#7B1FA2'
          }}
        />

        <Typography
          sx={{
            color: '#777'
          }}
        >
          Loading Live Classes...
        </Typography>
      </Box>
    );
  }

  // =========================
  // MAIN UI
  // =========================
  return (

    <Box
      sx={{
        px: { xs: 2, sm: 3, md: 4 },
        py: 4,
        maxWidth: 1200,
        mx: 'auto'
      }}
    >

      {/* ================= HEADER ================= */}

      <Box
        sx={{
          mb: 5,
          textAlign: 'center'
        }}
      >

        <Typography
          variant="h3"
          fontWeight="900"
          sx={{
            fontSize: {
              xs: '30px',
              sm: '38px',
              md: '45px'
            },
            background:
              'linear-gradient(90deg, #7B1FA2 0%, #9C27B0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 1
          }}
        >
          Upcoming Live Classes
        </Typography>

        <Typography
          sx={{
            color: '#777',
            fontSize: {
              xs: '14px',
              sm: '16px'
            }
          }}
        >
          Attend your scheduled sessions instantly
        </Typography>

      </Box>

      {/* ================= EMPTY UI ================= */}

      {classes.length === 0 ? (

        <Card
          sx={{
            borderRadius: 5,
            textAlign: 'center',
            py: 8,
            boxShadow: '0 8px 25px rgba(0,0,0,0.08)'
          }}
        >

          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{
              color: '#999',
              mb: 1
            }}
          >
            No Classes Scheduled
          </Typography>

          <Typography
            sx={{
              color: '#bbb'
            }}
          >
            Please check again later.
          </Typography>

        </Card>

      ) : (

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 1fr'
            },
            gap: 3
          }}
        >

          {classes.map((cls, index) => (

            <Card
              key={cls.id || index}
              sx={{
                borderRadius: 5,
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                transition: '0.35s ease',

                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: '0 18px 40px rgba(0,0,0,0.12)'
                }
              }}
            >

              {/* TOP BAR */}

              <Box
                sx={{
                  height: 8,
                  background:
                    'linear-gradient(90deg, #7B1FA2 0%, #9C27B0 100%)'
                }}
              />

              <CardContent
                sx={{
                  p: 3
                }}
              >

                {/* BATCH */}

                <Chip
                  label={cls.batchName}
                  sx={{
                    mb: 2,
                    px: 1,
                    backgroundColor: '#ede7f6',
                    color: '#5E35B1',
                    fontWeight: 'bold',
                    fontSize: '13px'
                  }}
                />

                {/* SUBJECT */}

                <Typography
                  variant="h5"
                  fontWeight="900"
                  sx={{
                    color: '#222',
                    mb: 1
                  }}
                >
                  {cls.subject}
                </Typography>

                {/* TOPICS */}

                <Typography
                  sx={{
                    color: '#666',
                    lineHeight: 1.9,
                    minHeight: 70,
                    fontSize: '15px'
                  }}
                >
                  {cls.topics}
                </Typography>

                <Divider
                  sx={{
                    my: 2
                  }}
                />

                {/* TIMING */}

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 2,
                    mb: 3
                  }}
                >

                  <Box>

                    <Typography
                      variant="body2"
                      sx={{
                        color: '#999',
                        mb: 0.5
                      }}
                    >
                      Class Timing
                    </Typography>

                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{
                        color: '#2E7D32'
                      }}
                    >
                      {formatTime(cls.timeFrom)}
                    </Typography>

                    <Typography
                      sx={{
                        color: '#666',
                        fontSize: '14px'
                      }}
                    >
                      to {formatTime(cls.timeTo)}
                    </Typography>

                  </Box>

                  {/* LIVE BADGE */}

                  <Chip
                    label="LIVE"
                    sx={{
                      backgroundColor: '#ffebee',
                      color: '#d32f2f',
                      fontWeight: 'bold'
                    }}
                  />

                </Box>

                {/* BUTTON */}

                <Button
                  fullWidth
                  variant="contained"
                  component={Link}
                  href={cls.classLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    py: 1.6,
                    borderRadius: 3,
                    textTransform: 'none',
                    fontWeight: 'bold',
                    fontSize: '15px',
                    letterSpacing: '0.4px',
                    background:
                      'linear-gradient(90deg, #43A047 0%, #66BB6A 100%)',

                    '&:hover': {
                      background:
                        'linear-gradient(90deg, #388E3C 0%, #4CAF50 100%)'
                    }
                  }}
                >
                  Join Live Class
                </Button>

              </CardContent>

            </Card>
          ))}

        </Box>
      )}

    </Box>
  );
}

