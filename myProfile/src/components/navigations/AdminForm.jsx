import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Box,
  Alert,
  IconButton,
  Divider,
  Chip
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

// =========================
// API URL
// =========================
const API_URL =
  "https://script.google.com/macros/s/AKfycbyghq5mIplCYcfAIBvsK7wPHgfS-Dk0f3RFbzcnMPE6jqT3rYYQW366KIt7yPngljgykA/exec";

// =========================
// MAIN COMPONENT
// =========================
export default function AdminForm() {

  // =========================
  // FORM DATA
  // =========================
  const [formData, setFormData] = useState({
    batchName: '',
    subject: '',
    topics: '',
    classDate: '',
    timeFrom: '',
    timeTo: '',
    classLink: ''
  });

  // =========================
  // STATES
  // =========================
  const [classes, setClasses] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [tableLoading, setTableLoading] = useState(true);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // =========================
  // HELPER: CHECK IF CLASS EXPIRED
  // =========================
  // இந்த பங்க்ஷன் கிளாஸ் முடிந்ததா இல்லையா என்று சோதிக்கும்
  const isClassExpired = (classDate, timeTo) => {
    try {
      if (!classDate || !timeTo) return false;
      
      // தற்போதைய தேதி மற்றும் நேரம்
      const now = new Date();
      
      // கிளாஸ் முடியும் நேரம் (YYYY-MM-DDTHH:MM)
      const classEndTime = new Date(`${classDate}T${timeTo}`);
      
      // தற்போதைய நேரம் கிளாஸ் முடியும் நேரத்தை விட அதிகமாக இருந்தால் true என மாறும்
      return now > classEndTime;
    } catch (e) {
      console.error("Error parsing date/time:", e);
      return false;
    }
  };

  // =========================
  // FETCH SCHEDULE
  // =========================
  const fetchSchedule = async () => {
    try {
      const response = await fetch(
        `${API_URL}?_=${new Date().getTime()}`
      );
      const data = await response.json();

      if (Array.isArray(data)) {
        // 🌟 முக்கிய மாற்றம்: முடிந்த வகுப்புகளை வடிகட்டி (Filter), நடக்கவிருக்கும் வகுப்புகளை மட்டும் சேமிக்கும்
        const activeClasses = data.filter(cls => !isClassExpired(cls.classDate, cls.timeTo));
        setClasses(activeClasses);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setTableLoading(false);
    }
  };

  // ஒவ்வொரு 1 நிமிடத்திற்கும் தானாகவே காலாவதியான கிளாஸ்களை செக் செய்ய இந்த Interval உதவும்
  useEffect(() => {
    fetchSchedule();

    const interval = setInterval(() => {
      setClasses((prevClasses) => 
        prevClasses.filter(cls => !isClassExpired(cls.classDate, cls.timeTo))
      );
    }, 60000); // 60 வினாடிகளுக்கு ஒருமுறை செக் செய்யும்

    return () => clearInterval(interval);
  }, []);

  // =========================
  // HANDLE CHANGE
  // =========================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // =========================
  // SUBMIT
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg('');
    setErrorMsg('');

    const searchParams = new URLSearchParams();
    searchParams.append('action', isEditing ? 'edit' : 'add');

    if (isEditing) {
      searchParams.append('id', editId);
    }

    Object.keys(formData).forEach(key => {
      searchParams.append(key, formData[key]);
    });

    try {
      await fetch(API_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: searchParams.toString()
      });

      setSuccessMsg(
        isEditing
          ? 'Class updated successfully!'
          : 'New class published successfully!'
      );

      // RESET FORM
      setFormData({
        batchName: '',
        subject: '',
        topics: '',
        classDate: '',
        timeFrom: '',
        timeTo: '',
        classLink: ''
      });
      setIsEditing(false);
      setEditId(null);
      fetchSchedule();

    } catch (err) {
      setErrorMsg('Operation failed. Check network.');
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // EDIT MODE
  // =========================
  const handleEditClick = (cls) => {
    setIsEditing(true);
    setEditId(cls.id);
    setFormData({
      batchName: cls.batchName,
      subject: cls.subject,
      topics: cls.topics,
      classDate: cls.classDate,
      timeFrom: cls.timeFrom,
      timeTo: cls.timeTo,
      classLink: cls.classLink
    });

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // =========================
  // DELETE
  // =========================
  const handleDeleteClick = async (id) => {
    if (!window.confirm("Delete this class schedule?")) return;

    setTableLoading(true);
    const searchParams = new URLSearchParams();
    searchParams.append('action', 'delete');
    searchParams.append('id', id);

    try {
      await fetch(API_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: searchParams.toString()
      });

      setSuccessMsg('Class deleted successfully!');
      fetchSchedule();
    } catch (err) {
      setErrorMsg('Delete failed.');
      setTableLoading(false);
    }
  };

  // =========================
  // RETURN
  // =========================
  return (
    <Box
      sx={{
        p: { xs: 2, sm: 4 },
        maxWidth: 900,
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }}
    >
      {/* FORM SECTION */}
      <Card
        sx={{
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          borderRadius: 4,
          bgcolor: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)'
        }}
      >
        <CardContent>
          <Typography variant="h5" fontWeight="900" color="#09ee24ff" sx={{ mb: 3 }}>
            {isEditing ? '⚡ Edit Class Schedule' : '➕ Add New Class'}
          </Typography>

          {successMsg && (
            <Alert severity="success" sx={{ mb: 3, borderRadius: '12px' }}>
              {successMsg}
            </Alert>
          )}

          {errorMsg && (
            <Alert severity="error" sx={{ mb: 3, borderRadius: '12px' }}>
              {errorMsg}
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              <TextField
                required
                fullWidth
                label="Batch Name"
                name="batchName"
                value={formData.batchName}
                onChange={handleChange}
                sx={inputStyle}
              />

              <TextField
                required
                fullWidth
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                sx={inputStyle}
              />

              <TextField
                required
                fullWidth
                multiline
                rows={3}
                label="Topics"
                name="topics"
                value={formData.topics}
                onChange={handleChange}
                sx={inputStyle}
              />

              <TextField
                required
                fullWidth
                type="date"
                label="Class Date"
                name="classDate"
                value={formData.classDate}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                sx={inputStyle}
              />

              <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
                <TextField
                  required
                  fullWidth
                  type="time"
                  label="Time From"
                  name="timeFrom"
                  value={formData.timeFrom}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  sx={inputStyle}
                />

                <TextField
                  required
                  fullWidth
                  type="time"
                  label="Time To"
                  name="timeTo"
                  value={formData.timeTo}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  sx={inputStyle}
                />
              </Box>

              <TextField
                required
                fullWidth
                type="url"
                label="Google Meet Link"
                name="classLink"
                value={formData.classLink}
                onChange={handleChange}
                sx={inputStyle}
              />

              <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={loading}
                  sx={{
                    flex: 2,
                    py: 1.5,
                    bgcolor: isEditing ? '#ffaa00' : '#09ee24ff',
                    color: '#000',
                    fontWeight: '900',
                    borderRadius: '12px',
                    '&:hover': { bgcolor: isEditing ? '#cc8800' : '#07c91f' }
                  }}
                >
                  {loading ? (
                    <CircularProgress size={24} sx={{ color: '#000' }} />
                  ) : (
                    isEditing ? 'Update Schedule' : 'Publish Schedule'
                  )}
                </Button>

                {isEditing && (
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => {
                      setIsEditing(false);
                      setFormData({
                        batchName: '',
                        subject: '',
                        topics: '',
                        classDate: '',
                        timeFrom: '',
                        timeTo: '',
                        classLink: ''
                      });
                    }}
                    sx={{
                      flex: 1,
                      borderColor: '#ff4444',
                      color: '#ff4444',
                      borderRadius: '12px',
                      '&:hover': { borderColor: '#cc0000', bgcolor: 'rgba(255,68,68,0.05)' }
                    }}
                  >
                    Cancel
                  </Button>
                )}
              </Box>
            </Box>
          </form>
        </CardContent>
      </Card>

      {/* TABLE SECTION */}
      <Card
        sx={{
          boxShadow: 3,
          borderRadius: 4,
          bgcolor: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.05)'
        }}
      >
        <CardContent>
          <Typography variant="h6" fontWeight="900" color="#fff" sx={{ mb: 2 }}>
            Current Class Dashboard ({classes.length})
          </Typography>

          <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)', mb: 2 }} />

          {tableLoading ? (
            <Box sx={{ display: 'flex', justifycontent: 'center', py: 4 }}>
              <CircularProgress sx={{ color: '#09ee24ff' }} />
            </Box>
          ) : classes.length === 0 ? (
            <Typography align="center" sx={{ color: '#666', py: 2 }}>
              No active classes found.
            </Typography>
          ) : (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {classes.map((cls) => (
                <Box
                  key={cls.id}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    p: 2,
                    bgcolor: 'rgba(255,255,255,0.03)',
                    borderRadius: '14px',
                    border: '1px solid rgba(255,255,255,0.05)',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 2,
                    textAlign: { xs: 'center', sm: 'left' }
                  }}
                >
                  {/* LEFT */}
                  <Box>
                    <Chip
                      label={cls.batchName}
                      sx={{
                        mb: 1,
                        backgroundColor: '#09ee2418',
                        color: '#09ee24ff',
                        fontWeight: 'bold'
                      }}
                    />
                    <Typography variant="subtitle1" fontWeight="bold" color="#fff">
                      {cls.subject}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#aaa', mt: 0.5 }}>
                      📅 {cls.classDate}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#aaa' }}>
                      🕒 {cls.timeFrom} - {cls.timeTo}
                    </Typography>
                  </Box>

                  {/* RIGHT */}
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <IconButton
                      onClick={() => handleEditClick(cls)}
                      sx={{
                        color: '#ffaa00',
                        bgcolor: 'rgba(255,170,0,0.08)',
                        '&:hover': { bgcolor: 'rgba(255,170,0,0.18)' }
                      }}
                    >
                      <EditIcon />
                    </IconButton>

                    <IconButton
                      onClick={() => handleDeleteClick(cls.id)}
                      sx={{
                        color: '#ff4444',
                        bgcolor: 'rgba(255,68,68,0.08)',
                        '&:hover': { bgcolor: 'rgba(255,68,68,0.18)' }
                      }}
                    >
                      <DeleteIcon />
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

// =========================
// INPUT STYLE
// =========================
const inputStyle = {
  '& .MuiOutlinedInput-root': {
    color: '#fff',
    borderRadius: '12px',
    '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
    '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.2)' },
    '&.Mui-focused fieldset': { borderColor: '#09ee24ff' },
  },
  '& .MuiInputLabel-root': { color: '#888' },
  '& .MuiInputLabel-root.Mui-focused': { color: '#09ee24ff' }
};