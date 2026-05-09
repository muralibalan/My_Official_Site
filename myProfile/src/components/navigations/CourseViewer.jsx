import React, { useState } from 'react';
import { Box, Typography, GlobalStyles, Button, Autocomplete, TextField } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

const CourseViewer = ({ setAuth }) => {
  const courseData = [
    { id: 1, name: "Callback Function", url: "https://docs.google.com/document/d/e/2PACX-1vRPv6W9HrZ_wPr4G0eW_QfvZm2rQkzO51XP0KSxKuuexkvVWVFw9IziW5ePRHWFvZI8Qsix4G5kOtaY/pub?embedded=true" },
    { id: 2, name: "HTML Introduction", url: "https://docs.google.com/document/d/e/2PACX-1vRGwueb60T4yEflUkjJoCOanXBjTXfPXKtgL4bdqJeHRRzwT6anwHP6V6ygD_wr55Lz4EMbC7ZNPnWm/pub?embedded=true" },
    { id: 3, name: "Elements", url: "https://docs.google.com/document/d/e/2PACX-1vSMrjBIGtJXrD0P-3Ex4P_pXbn8vPXuUlrBJPBZG_GyvGKWJPsP-OalUAdz35SdNIq6Qg84ng17LSed/pub?embedded=true" },
    { id: 4, name: "Block Elements Basics", url: "https://docs.google.com/document/d/e/2PACX-1vTaeyG8vnZQiwSFW9Ib_XcGztoAaV6Jb_1JxQzRk1DHqIaeCJ6yZIJmfSn2iAXOSvszu9zvrqZqaGoV/pub?embedded=true" },
    { id: 6, name: "Inline Elements", url: "https://docs.google.com/document/d/e/2PACX-1vTh8ONkkEN45eh1mITP0vffjQJBYRHLL-T3HfrULjs2SwiXH5kYVa01c3e_he7F-NCdIQQLKEfo0cln/pub?embedded=true" },
    { id: 7, name: "Void Elements", url: "https://docs.google.com/document/d/e/2PACX-1vT7ehYJOKD5H3QYJWEGArNtKRajfeWeGrum8JrKnp3dZ2lysbsJNxiiwK-f8pMGsUiOVmRy637kFl6X/pub?embedded=true" },
    { id: 8, name: "Semantic Elements", url: "https://docs.google.com/document/d/e/2PACX-1vRSECea6psRVlSK8RBs4lAfUVXLhx7MYCKSsBjZYCeHmPmEIjvPSCk4EhcJ_IU8BWrG4dhNl-19kn-0/pub?embedded=true" },
    { id: 9, name: "Non Semantic Elements", url: "https://docs.google.com/document/d/e/2PACX-1vQltLnjsGzxDFku625M-eXJPZPcaeaozaht1Hn4rLKnyhUJO1GUbHuca6J2K1uPZ1N9AxN939NkC5AR/pub?embedded=true" },
    { id: 10, name: "Element Attribute", url: "https://docs.google.com/document/d/e/2PACX-1vSNAO6TiwTui2y5LOpqXbAQfbhZgpipLu0ln-QWY_tgD-sMT40CsBJtWneAr24-UcyipW-IhrZcNLW9/pub?embedded=true" },
    { id: 11, name: "HTML Comments", url: "https://docs.google.com/document/d/e/2PACX-1vTm0jjXhj-aDGnb_qCB7-LhR33trEpwmAs_fMiMleKfdhH7I3ahztAukE8dZYJga1g9aoVGdCaGTanz/pub?embedded=true" },
    { id: 12, name: "Media Tags", url: "https://docs.google.com/document/d/e/2PACX-1vSmtaI5tLGThphnXmWYpXGO_ar8iDonbBcV8I9_lqYqTBR5Olj6DheLYYftCjBx6jgChVPT7sAJx9vL/pub?embedded=true" },
    { id: 13, name: "Table Tag", url: "https://docs.google.com/document/d/e/2PACX-1vRLlGSQdYmO3HTHIiPPG8Wu9gtx-8yzdpBcyIuUawLYD3O4rz5eGFlR-v_ocH5rRIhrx3OvQe8LsbBZ/pub?embedded=true" },
    { id: 14, name: "Form Tag", url: "https://docs.google.com/document/d/e/2PACX-1vSejZQCNmvUhn-_Q99AzFu_JrihWpjU_BPPFcDeWCWj9QqzRygcqEdyKQSKMMg8brxxKe2y2vDI21Re/pub?embedded=true" },
    { id: 15, name: "DOM Tree", url: "https://docs.google.com/document/d/e/2PACX-1vTixzB_Oc9mBXELdk7M85YNoak2pBsOTBmG4Q1vm0138wtuBQHBP3E5pAn28mi8LmsWyRhwtEeh8LKg/pub?embedded=true" },
    { id: 16, name: "HTML Entities", url: "https://docs.google.com/document/d/e/2PACX-1vQVyGowRraUPMpolpeisxeI8QLkJuXuCi1xDg4DLI8rIcGl1bAlQhqtzCt8NaNuOmtNPLU0nEv4hVsR/pub?embedded=true" },
  ];

  const [selectedDoc, setSelectedDoc] = useState(courseData[0]);

  const handleLogout = () => {
    setAuth(false);
  };

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        bgcolor: '#f0f2f5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        userSelect: 'none',
      }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <GlobalStyles styles={{ '@media print': { body: { display: 'none !important' } } }} />

      <Box sx={{ py: 3, width: '100%', bgcolor: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', mb: 3 }}>
        
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 3, mb: 1 }}>
          <Button 
            variant="outlined" 
            color="error" 
            size="small"
            startIcon={<LogoutIcon />}
            onClick={handleLogout}
            sx={{ fontWeight: 'bold', textTransform: 'none' }}
          >
            Logout
          </Button>
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2', mb: 2 }}>
            E-Learning Portal
          </Typography>

          {/* Dropdown Search List */}
          <Box sx={{ display: 'flex', justifyContent: 'center', px: 2 }}>
            <Autocomplete
              disablePortal
              options={courseData}
              getOptionLabel={(option) => option.name}
              value={selectedDoc}
              onChange={(event, newValue) => {
                if (newValue) {
                  setSelectedDoc(newValue);
                }
              }}
              sx={{ width: { xs: '90%', md: '500px' }, bgcolor: '#fff' }}
              renderInput={(params) => (
                <TextField {...params} label="Select Topic Name" variant="outlined" />
              )}
            />
          </Box>

          <Typography variant="subtitle1" sx={{ mt: 2, color: '#2e7d32', fontWeight: '500' }}>
            Now Viewing: {selectedDoc.name}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          position: 'relative',
          width: { xs: '98%', md: '900px' },
          height: '12000px', 
          bgcolor: '#fff',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          mb: 5,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 10,
            background: 'transparent',
            pointerEvents: 'all',
          }}
        />

        <iframe
          key={selectedDoc.id}
          src={selectedDoc.url}
          width="100%"
          height="100%"
          title={selectedDoc.name}
          style={{ border: 'none', pointerEvents: 'none' }}
        />
      </Box>
    </Box>
  );
};

export default CourseViewer;