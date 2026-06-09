import React, { useState, useEffect } from 'react';
import { 
  TextField, Button, Card, CardContent, Typography, 
  CircularProgress, Box, Alert, IconButton, Divider
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

// 🚀 Live Deployment URL
const API_URL = "https://script.google.com/macros/s/AKfycbytpwgPHNnkFVoqTq5HZ60Bi7uOkgbgIjQRdUsprBQ7sYiDLIoYROJmJU9LiiYMPu-Hlw/exec";

export default function AdminForm() {
  const [formData, setFormData] = useState({
    batchName: '', subject: '', topics: '', timeFrom: '', timeTo: '', classLink: ''
  });
  
  const [classes, setClasses] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [tableLoading, setTableLoading] = useState(true);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Fetch all classes for editing/deleting management
  const fetchSchedule = async () => {
    try {
      const response = await fetch(`${API_URL}?_=${new Date().getTime()}`);
      const data = await response.json();
      if (Array.isArray(data)) setClasses(data);
    } catch (err) {
      console.error(err);
    } finally {
      setTableLoading(false);
    }
  };

  useEffect(() => {
    fetchSchedule();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit Logic for Add & Edit Actions
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg('');
    setErrorMsg('');
    
    const searchParams = new URLSearchParams();
    searchParams.append('action', isEditing ? 'edit' : 'add');
    if (isEditing) searchParams.append('id', editId);
    
    Object.keys(formData).forEach(key => {
      searchParams.append(key, formData[key]);
    });

    try {
      await fetch(API_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: searchParams.toString()
      });
      
      setSuccessMsg(isEditing ? 'Class updated successfully!' : 'New class published successfully!');
      setFormData({ batchName: '', subject: '', topics: '', timeFrom: '', timeTo: '', classLink: '' });
      setIsEditing(false);
      setEditId(null);
      fetchSchedule(); // Reload screen lists
    } catch (err) {
      setErrorMsg('Operation failed. Check network link.');
    } finally {
      setLoading(false);
    }
  };

  // Trigger Edit Mode
  const handleEditClick = (cls) => {
    setIsEditing(true);
    setEditId(cls.id);
    setFormData({
      batchName: cls.batchName,
      subject: cls.subject,
      topics: cls.topics,
      timeFrom: cls.timeFrom,
      timeTo: cls.timeTo,
      classLink: cls.classLink
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Trigger Delete Logic
  const handleDeleteClick = async (id) => {
    if(!window.confirm("Intha class schedule-ah morthama delete pannaலாமா?")) return;
    setTableLoading(true);
    
    const searchParams = new URLSearchParams();
    searchParams.append('action', 'delete');
    searchParams.append('id', id);

    try {
      await fetch(API_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: searchParams.toString()
      });
      setSuccessMsg('Class configuration deleted successfully!');
      fetchSchedule();
    } catch (err) {
      setErrorMsg('Delete operation failed.');
      setTableLoading(false);
    }
  };

  return (
    <Box sx={{ p: { xs: 2, sm: 4 }, maxWidth: 800, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 4 }}>
      
      {/* 🛠️ GRID-LESS RESPONSIVE FORM SECTION */}
      <Card sx={{ boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.4)', borderRadius: 3, bgcolor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <CardContent>
          <Typography variant="h5" fontWeight="900" color="#09ee24ff" sx={{ mb: 3 }}>
            {isEditing ? '⚡ Edit Mode - Modify Class' : '➕ Admin Panel - Add New Class'}
          </Typography>

          {successMsg && <Alert severity="success" sx={{ mb: 3, borderRadius: '12px' }}>{successMsg}</Alert>}
          {errorMsg && <Alert severity="error" sx={{ mb: 3, borderRadius: '12px' }}>{errorMsg}</Alert>}

          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              
              <TextField required fullWidth label="Batch Name" name="batchName" value={formData.batchName} onChange={handleChange} sx={inputStyle} />
              <TextField required fullWidth label="Subject" name="subject" value={formData.subject} onChange={handleChange} sx={inputStyle} />
              <TextField required fullWidth multiline rows={3} label="Topics to Cover" name="topics" value={formData.topics} onChange={handleChange} sx={inputStyle} />
              
              <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
                <TextField required fullWidth type="time" label="Time From" name="timeFrom" value={formData.timeFrom} onChange={handleChange} InputLabelProps={{ shrink: true }} sx={inputStyle} />
                <TextField required fullWidth type="time" label="Time To" name="timeTo" value={formData.timeTo} onChange={handleChange} InputLabelProps={{ shrink: true }} sx={inputStyle} />
              </Box>

              <TextField required fullWidth type="url" label="Google Meet Link" name="classLink" value={formData.classLink} onChange={handleChange} sx={inputStyle} />
              
              <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
                <Button 
                  type="submit" variant="contained" size="large" disabled={loading}
                  sx={{ 
                    flex: 2, py: 1.5, bgcolor: isEditing ? '#ffaa00' : '#09ee24ff', color: '#000', fontWeight: '900', borderRadius: '12px',
                    '&:hover': { bgcolor: isEditing ? '#cc8800' : '#07c91f' }
                  }}
                >
                  {loading ? <CircularProgress size={24} sx={{ color: '#000' }} /> : isEditing ? 'Update Schedule' : 'Publish to Google Sheet'}
                </Button>

                {isEditing && (
                  <Button 
                    variant="outlined" size="large" 
                    onClick={() => {
                      setIsEditing(false);
                      setFormData({ batchName: '', subject: '', topics: '', timeFrom: '', timeTo: '', classLink: '' });
                    }}
                    sx={{ flex: 1, borderColor: '#ff4444', color: '#ff4444', borderRadius: '12px', '&:hover': { borderColor: '#cc0000', bgcolor: 'rgba(255,68,68,0.05)' } }}
                  >
                    Cancel
                  </Button>
                )}
              </Box>
            </Box>
          </form>
        </CardContent>
      </Card>

      {/* 📋 SCHEDULER MANAGEMENT LIST VIEW */}
      <Card sx={{ boxShadow: 3, borderRadius: 3, bgcolor: 'rgba(255, 255, 255, 0.01)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <CardContent>
          <Typography variant="h6" fontWeight="800" color="#fff" sx={{ mb: 2 }}>
            Current Class Dashboard ({classes.length})
          </Typography>
          {/* 💡 FIX 1: Removed invalid 'fracture' attribute */}
          <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)', mb: 2 }} />

          {tableLoading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}><CircularProgress sx={{ color: '#09ee24ff' }} /></Box>
          ) : classes.length === 0 ? (
            <Typography align="center" sx={{ color: '#666', py: 2 }}>No active classes found in sheet.</Typography>
          ) : (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {classes.map((cls) => (
                <Box 
                  key={cls.id} 
                  sx={{ 
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                    p: 2, bgcolor: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.04)',
                    flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 2, sm: 0 }, textAlign: { xs: 'center', sm: 'left' }
                  }}
                >
                  {/* 💡 FIX 2: Corrected matching closing tag </Box> instead of </Typography> */}
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold" color="#09ee24ff">{cls.batchName}</Typography>
                    <Typography variant="body2" color="#fff" sx={{ opacity: 0.9 }}>{cls.subject} ({cls.timeFrom} - {cls.timeTo})</Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <IconButton onClick={() => handleEditClick(cls)} sx={{ color: '#ffaa00', bgcolor: 'rgba(255,170,0,0.05)', '&:hover': { bgcolor: 'rgba(255,170,0,0.15)' } }}>
                      <EditIcon size="small" />
                    </IconButton>
                    <IconButton onClick={() => handleDeleteClick(cls.id)} sx={{ color: '#ff4444', bgcolor: 'rgba(255,68,68,0.05)', '&:hover': { bgcolor: 'rgba(255,68,68,0.15)' } }}>
                      <DeleteIcon size="small" />
                    </IconButton>
                  </Box>
                </Box>
              ))}
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}

const inputStyle = {
  '& .MuiOutlinedInput-root': {
    color: '#fff', borderRadius: '12px',
    '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
    '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.2)' },
    '&.Mui-focused fieldset': { borderColor: '#09ee24ff' },
  },
  '& .MuiInputLabel-root': { color: '#888' },
  '& .MuiInputLabel-root.Mui-focused': { color: '#09ee24ff' }
};