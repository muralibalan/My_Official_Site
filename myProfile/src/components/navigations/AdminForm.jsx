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
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

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
  // HELPER: FORMAT TIME TO 12-HOUR (AM/PM)
  // =========================
  const formatTimeTo12Hour = (timeString) => {
    if (!timeString) return '';
    try {
      const [hourString, minuteString] = timeString.split(':');
      let hour = parseInt(hourString, 10);
      const ampm = hour >= 12 ? 'PM' : 'AM';
      
      hour = hour % 12;
      hour = hour ? hour : 12;
      
      const formattedHour = hour < 10 ? `0${hour}` : hour;
      
      return `${formattedHour}:${minuteString} ${ampm}`;
    } catch (e) {
      console.error("Time format error:", e);
      return timeString;
    }
  };

  // =========================
  // HELPER: SEND WHATSAPP NOTIFICATION (ONLY COPY)
  // =========================
  const sendWhatsAppNotification = async (data, isEditMode) => {
    const header = isEditMode ? `*⚡ CLASS SCHEDULE UPDATED* ⚡` : `*📢 NEW CLASS SCHEDULED* 📢`;
    
    const formattedTimeFrom = formatTimeTo12Hour(data.timeFrom);
    const formattedTimeTo = formatTimeTo12Hour(data.timeTo);

    const message = `${header}\n\n` +
      `*Batch:* ${data.batchName}\n` +
      `*Subject:* ${data.subject}\n` +
      `*Topics:* ${data.topics}\n` +
      `*Date:* ${data.classDate}\n` +
      `*Time:* ${formattedTimeFrom} To ${formattedTimeTo}\n\n` +
      `*🔗 Google Meet Link:* ${data.classLink}\n\n` +
      `Kindly join the class on time! 👍`;

    try {
      // 🌟 மெசேஜை கிளிப்போர்டில் காப்பி மட்டும் செய்கிறது (No window.open)
      await navigator.clipboard.writeText(message);
      alert(`Message copied for Batch: "${data.batchName}".\nஇப்போது வாட்ஸ்அப் குரூப்பில் சென்று Paste செய்யவும்!`);
    } catch (err) {
      console.error("Failed to copy message: ", err);
      alert("Copy செய்வதில் சிக்கல்! மேனுவலாக ட்ரை செய்யவும்.");
    }
  };

  // =========================
  // HELPER: CHECK IF CLASS EXPIRED
  // =========================
  const isClassExpired = (classDate, timeTo) => {
    try {
      if (!classDate || !timeTo) return false;
      const now = new Date();
      const classEndTime = new Date(`${classDate}T${timeTo}`);
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
        const activeClasses = data.filter(cls => !isClassExpired(cls.classDate, cls.timeTo));
        setClasses(activeClasses);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setTableLoading(false);
    }
  };

  useEffect(() => {
    fetchSchedule();

    const interval = setInterval(() => {
      setClasses((prevClasses) => 
        prevClasses.filter(cls => !isClassExpired(cls.classDate, cls.timeTo))
      );
    }, 60000);

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

    const currentFormData = { ...formData };
    const currentEditState = isEditing;

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
        currentEditState
          ? 'Class updated successfully!'
          : 'New class published successfully!'
      );

      await sendWhatsAppNotification(currentFormData, currentEditState);

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
                    isEditing ? 'Update & Share' : 'Publish & Share'
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
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
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
                      🕒 {formatTimeTo12Hour(cls.timeFrom)} - {formatTimeTo12Hour(cls.timeTo)}
                    </Typography>
                  </Box>

                  {/* RIGHT - ACTION BUTTONS */}
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    {/* வாட்ஸ்அப் ஐகான் கிளிக் செய்தால் காப்பி மட்டும் ஆகும் */}
                    <IconButton
                      onClick={() => sendWhatsAppNotification(cls, false)}
                      title="Copy Message for WhatsApp"
                      sx={{
                        color: '#25D366',
                        bgcolor: 'rgba(37,211,102,0.08)',
                        '&:hover': { bgcolor: 'rgba(37,211,102,0.18)' }
                      }}
                    >
                      <WhatsAppIcon />
                    </IconButton>

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