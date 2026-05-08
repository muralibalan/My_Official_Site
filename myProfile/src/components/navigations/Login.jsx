import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper, CircularProgress } from '@mui/material';

// App.jsx-la irunthu 'setAuth' nu props anupura nala, ingeyum 'setAuth' nu vachukalam
const Login = ({ setAuth }) => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!user || !pass) {
      setError("Please fill all fields!");
      return;
    }

    setLoading(true);
    setError("");

    const scriptURL = "https://script.google.com/macros/s/AKfycbxq0on6kC6iOnK4I_ERAdfWknJbQU_smC87oeLf1WnY8WHjLUV9yGlh4dMyZJzklyv8Og/exec"; 
    
    try {
      // Google Script-ku data anupuroom
      const response = await fetch(`${scriptURL}?username=${encodeURIComponent(user)}&password=${encodeURIComponent(pass)}`);
      const data = await response.json();
      
      if (data.status === "success") {
        setAuth(true); // Login success! Ippo CourseViewer open aagum
      } else {
        setError("Invalid Username or Password!");
      }
    } catch (err) {
      setError("Connection error. Check your internet or Script URL.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 5 }}>
      <Paper elevation={5} sx={{ p: 4, width: 350, textAlign: 'center', bgcolor: '#242424', color: '#fff', borderRadius: 3 }}>
        <Typography variant="h5" mb={3} sx={{ fontWeight: 'bold', color: '#cd3ecdff' }}>
          Student Access
        </Typography>

        {error && (
          <Typography sx={{ color: '#ff5252', mb: 2, fontSize: '0.9rem', bgcolor: 'rgba(255, 82, 82, 0.1)', p: 1, borderRadius: 1 }}>
            {error}
          </Typography>
        )}

        <TextField 
          fullWidth 
          label="Username" 
          variant="filled"
          sx={{ mb: 2, bgcolor: '#fff', borderRadius: 1 }} 
          onChange={(e) => setUser(e.target.value)}
        />
        
        <TextField 
          fullWidth 
          label="Password" 
          type="password" 
          variant="filled"
          sx={{ mb: 3, bgcolor: '#fff', borderRadius: 1 }} 
          onChange={(e) => setPass(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleLogin()} // Enter amukkunaalum login aagum
        />

        <Button 
          variant="contained" 
          fullWidth 
          onClick={handleLogin}
          disabled={loading}
          sx={{ 
            bgcolor: '#cd3ecdff', 
            '&:hover': { bgcolor: '#b235b2ff' },
            py: 1.5,
            fontWeight: 'bold'
          }}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Login"}
        </Button>
      </Paper>
    </Box>
  );
};

export default Login;