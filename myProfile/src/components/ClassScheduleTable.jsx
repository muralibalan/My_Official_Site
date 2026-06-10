
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
  "https://script.google.com/macros/s/AKfycbwgI6zKoGbFmj41ytRLqcQxVRL2A2KJcFKJ5xn1hMXpFKNq-pt9DT1l634w346-qLuwvw/exec";

export default function ClassScheduleTable() {

  const [classes, setClasses] =
    useState([]);

  const [fetching, setFetching] =
    useState(true);

  const [nextClassMessage,
    setNextClassMessage] =
    useState('');

  // =========================
  // FORMAT TIME
  // =========================

  const formatTime = (time) => {

    if (!time) return '';

    try {

      const timeString =
        time.toString();

      const [hour, minute] =
        timeString.split(':');

      const h = parseInt(hour);

      const ampm =
        h >= 12 ? 'PM' : 'AM';

      const formattedHour =
        h % 12 || 12;

      return `${formattedHour}:${minute} ${ampm}`;

    } catch (err) {

      return time;
    }
  };

  // =========================
  // FORMAT DATE
  // =========================

  const formatDate = (date) => {

    if (!date) return '';

    try {

      const d = new Date(date);

      return d.toLocaleDateString(
        'en-IN',
        {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        }
      );

    } catch (err) {

      return date;
    }
  };

  // =========================
  // FETCH CLASSES
  // =========================

  const fetchClasses = async () => {

    try {

      const response =
        await fetch(
          `${API_URL}?t=${new Date().getTime()}`
        );

      const data =
        await response.json();

      if (Array.isArray(data)) {

        setClasses(data);
      }

    } catch (error) {

      console.error(
        'Fetch Error:',
        error
      );

    } finally {

      setFetching(false);
    }
  };

  useEffect(() => {

    fetchClasses();

  }, []);

  // =========================
  // NEXT CLASS TICKER
  // =========================

  useEffect(() => {

    if (classes.length === 0)
      return;

    const now = new Date();

    const today =
      now.toISOString().split('T')[0];

    // TODAY CLASSES
    const todayClasses =
      classes.filter(
        (cls) =>
          cls.classDate === today
      );

    // SORT TIME
    const sortedClasses =
      todayClasses.sort((a, b) => {

        const aTime =
          new Date(
            `${a.classDate}T${a.timeFrom}`
          );

        const bTime =
          new Date(
            `${b.classDate}T${b.timeFrom}`
          );

        return aTime - bTime;
      });

    // FIND NEXT CLASS
    const nextClass =
      sortedClasses.find((cls) => {

        const classTime =
          new Date(
            `${cls.classDate}T${cls.timeFrom}`
          );

        return classTime > now;
      });

    // MESSAGE
    if (nextClass) {

      setNextClassMessage(

        `அடுத்த கிளாஸ் ${formatTime(
          nextClass.timeFrom
        )} மணிக்கு "${nextClass.batchName}" Batch க்கு நடைபெற உள்ளது. Ready ஆக இருங்கள் .....`
      );

    } else {

      setNextClassMessage(
        ' இன்றைய அனைத்து Classes-ம் முடிந்துவிட்டது.....Thank You!'
      );
    }

  }, [classes]);

  // =========================
  // LOADING
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
        px: {
          xs: 2,
          sm: 3,
          md: 4
        },

        py: 4,

        maxWidth: 1200,

        mx: 'auto'
      }}
    >

      {/* =========================
         LIVE NEWS TICKER
      ========================= */}

      <Box
        sx={{
          width: '100%',

          overflow: 'hidden',

          mb: 4,

          borderRadius: '14px',

          background:
            'linear-gradient(90deg,#ff1744,#ff9100)',

          boxShadow:
            '0 8px 25px rgba(255,80,80,0.25)',
        }}
      >

        <Box
          sx={{
            whiteSpace: 'nowrap',

            display: 'inline-block',

            py: 1.3,

            animation:
              'tickerMove 18s linear infinite',

            '@keyframes tickerMove': {

              '0%': {
                transform:
                  'translateX(100%)'
              },

              '100%': {
                transform:
                  'translateX(-100%)'
              }
            }
          }}
        >

          <Typography
            sx={{
              color: '#fff',

              fontWeight: 'bold',

              fontSize: {
                xs: '13px',
                sm: '15px'
              },

              px: 2,

              letterSpacing: '0.3px'
            }}
          >
            {nextClassMessage}
          </Typography>

        </Box>

      </Box>

      {/* HEADER */}

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
              'linear-gradient(90deg,#7B1FA2 0%,#9C27B0 100%)',

            WebkitBackgroundClip:
              'text',

            WebkitTextFillColor:
              'transparent',

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

      {/* EMPTY */}

      {classes.length === 0 ? (

        <Card
          sx={{
            borderRadius: 5,

            textAlign: 'center',

            py: 8,

            boxShadow:
              '0 8px 25px rgba(0,0,0,0.08)'
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

                boxShadow:
                  '0 10px 30px rgba(0,0,0,0.08)',

                transition: '0.35s ease',

                '&:hover': {

                  transform:
                    'translateY(-6px)',

                  boxShadow:
                    '0 18px 40px rgba(0,0,0,0.12)'
                }
              }}
            >

              {/* TOP BAR */}

              <Box
                sx={{
                  height: 8,

                  background:
                    'linear-gradient(90deg,#7B1FA2 0%,#9C27B0 100%)'
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

                    backgroundColor:
                      '#ede7f6',

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

                {/* DATE + TIME */}

                <Box
                  sx={{
                    display: 'flex',

                    justifyContent:
                      'space-between',

                    alignItems: 'center',

                    flexWrap: 'wrap',

                    gap: 2,

                    mb: 3
                  }}
                >

                  <Box>

                    {/* DATE */}

                    <Typography
                      variant="body2"

                      sx={{
                        color: '#999',
                        mb: 0.5
                      }}
                    >
                      📅 Class Date
                    </Typography>

                    <Typography
                      fontWeight="bold"

                      sx={{
                        color: '#7B1FA2',
                        mb: 1
                      }}
                    >
                      {formatDate(
                        cls.classDate
                      )}
                    </Typography>

                    {/* TIME */}

                    <Typography
                      variant="body2"

                      sx={{
                        color: '#999',
                        mb: 0.5
                      }}
                    >
                      🕒 Class Timing
                    </Typography>

                    <Typography
                      variant="h6"

                      fontWeight="bold"

                      sx={{
                        color: '#2E7D32'
                      }}
                    >
                      {formatTime(
                        cls.timeFrom
                      )}
                    </Typography>

                    <Typography
                      sx={{
                        color: '#666',
                        fontSize: '14px'
                      }}
                    >
                      to {formatTime(
                        cls.timeTo
                      )}
                    </Typography>

                  </Box>

                  {/* LIVE BADGE */}

                  <Chip
                    label="LIVE"

                    sx={{
                      backgroundColor:
                        '#ffebee',

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
                      'linear-gradient(90deg,#43A047 0%,#66BB6A 100%)',

                    '&:hover': {

                      background:
                        'linear-gradient(90deg,#388E3C 0%,#4CAF50 100%)'
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

