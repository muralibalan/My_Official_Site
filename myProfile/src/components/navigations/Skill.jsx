import React from 'react';
import { Box, Typography, Grid, Paper, LinearProgress } from '@mui/material';

const frontSkills = [
  { name: "HTML/CSS", value: 95 },
  { name: "JavaScript", value: 85 },
  { name: "React Js", value: 80 },
];

const backSkills = [
  { name: "Node.js", value: 35 },
  { name: "Express Js", value: 30 },
  { name: "My SQL", value: 65 },
];

const SkillProgress = ({ name, value }) => (
  <Box sx={{ mb: 3 }}>
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
      <Typography sx={{ fontWeight: 500, color:"white",fontSize:20 }}>{name}</Typography>
      <Typography sx={{ fontWeight: 500, color:"white" }}>{value}%</Typography>
    </Box>
    <LinearProgress
      variant="determinate"
      value={value}
      sx={{
        height: 15,
        borderRadius: 2,
        bgcolor: "#252525",
        "& .MuiLinearProgress-bar": {
          bgcolor: "#fff",
        },
      }}
    />
  </Box>
);

export default function Skills() {
  return (
    <Box sx={{
      bgcolor: '#181818',
      // minHeight: '100vh',
      height:'59vh',
      py: 2,
      px: { xs: 2, md: 8 }
    }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h4" sx={{
          fontWeight: 800,
          letterSpacing: 1,
          display: 'inline-block',
        }}>
          <span style={{
            borderTop: '2px solid #fff',
            borderBottom: '2px solid #fff',
            padding: '0 24px',
            color:"white"
          }}>
            Skills
          </span>
        </Typography>
        <Typography sx={{ color: '#ccc', fontSize: 28, mt: 2 }}>
          Technical & Training Skills
        </Typography>
      </Box>

      <Grid container spacing={20} justifyContent="center">

        <Grid item xs={12} md={5}>
          <Paper elevation={0} sx={{
            bgcolor: "#3843baff",
            width: 450,
            p: 4,
            borderRadius: 4,
            boxShadow: "0 2px 10px rgba(0,0,0,0.3)"
          }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2,color:"white" }}>
              Front-end Development
            </Typography>
            <Box sx={{
              borderBottom: "2px solid #fff",
              width: 45,
              mb: 2
            }} />
            {frontSkills.map(skill =>
              <SkillProgress key={skill.name} name={skill.name} value={skill.value} />
            )}
          </Paper>
        </Grid>

        <Grid item xs={12} md={5}>
          <Paper elevation={0} sx={{
            bgcolor: "#3843baff",
            p: 4,
             width: 450,
            borderRadius: 4,
            boxShadow: "0 2px 10px rgba(0,0,0,0.3)"
          }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2,color:"white" }}>
              Back-end Development
            </Typography>
            <Box sx={{
              borderBottom: "2px solid #fff",
              width: 45,
              mb: 2
            }} />
            {backSkills.map(skill =>
              <SkillProgress key={skill.name} name={skill.name} value={skill.value} />
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
