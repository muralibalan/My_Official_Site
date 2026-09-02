import React, { useState, useEffect } from 'react';
import { Box, Paper } from '@mui/material';

const Slider = ({ images = [], darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide images every 3 seconds
  useEffect(() => {
    if (!images || images.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <Paper
      elevation={0}
      sx={{
        p: 1.5,
        borderRadius: '14px',
        bgcolor: darkMode ? '#1e293b' : '#ffffff',
        border: darkMode ? '1px solid #334155' : '1px solid #e2e8f0',
        boxShadow: '0 4px 15px -3px rgba(0, 0, 0, 0.05)',
        // 🌟 DESKTOP VIEW-LA MATTUM VARA (Hidden on mobile & tablet)
        display: { xs: 'none', lg: 'block' },
        overflow: 'hidden',
        boxSizing: 'box-sizing',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '220px',
          borderRadius: '10px',
          overflow: 'hidden',
          bgcolor: darkMode ? '#0f172a' : '#f8fafc',
        }}
      >
        {images.map((img, index) => {
          // Calculate position for left-to-right sliding effect
          let position = '100%'; // Incoming from right
          if (index === currentIndex) {
            position = '0%'; // Active image in center
          } else if (index === (currentIndex - 1 + images.length) % images.length) {
            position = '-100%'; // Outgoing to left
          }

          return (
            <Box
              key={index}
              component="img"
              src={img}
              alt={`Slide ${index + 1}`}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                // 🌟 Left to Right smooth sliding transition
                transform: `translateX(${position})`,
                transition: 'transform 0.6s ease-in-out',
                zIndex: index === currentIndex ? 2 : 1,
              }}
            />
          );
        })}

        {/* Dots Indicator */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 10,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 1,
            zIndex: 3,
          }}
        >
          {images.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: index === currentIndex ? '20px' : '8px',
                height: '8px',
                borderRadius: '4px',
                bgcolor: index === currentIndex ? '#059669' : 'rgba(100, 100, 100, 0.5)',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </Box>
      </Box>
    </Paper>
  );
};

export default Slider;