import React from "react";
import { Box, Typography, Divider, Stack, LinearProgress } from "@mui/material";
import { FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Resume() {
  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "#181818",
        color: "#fff",
        minHeight: "100vh",
        justifyContent:"flex-start"
      }}
    >
      {/* LEFT SIDEBAR */}
      <Box
        sx={{
          width: "30%",
          bgcolor: "#1f1f1f",
          p: 3,
          borderRadius: 2,
          mr: 3,
        }}
      >
        {/* Profile Image */}
        <Box
          component="img"
          src="images/Murali.jpg"
          alt="profile"
          sx={{ borderRadius: 2, mb: 2, width: "300px" }}
        />

        {/* Professional Summary */}
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
          Professional Summary
        </Typography>

        <Typography variant="body2" sx={{ mb: 2, alignItems: "start" }}>
          I am a tech trainer with a strong passion for teaching. I currently
          work as the Center Head at SoftTechAshram. I enjoy sharing my
          knowledge in web development and other technologies, and I always aim
          to make learning practical and easy for students.
        </Typography>

        {/* Contact Information */}
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
          Contact Information
        </Typography>

        <Stack direction="row" spacing={1}  mb={4}>
          <FaMapMarkerAlt />{" "}
          <Typography variant="body2">
            New No:52 Old No:31 Indira Diwan Bashyam street, Jayanath chetty
            Street Saidapet-West, Chennai-15
          </Typography>
        </Stack>

        <Stack direction="row" spacing={1} alignItems="center" mb={1}>
          <FaEnvelope /> <Typography variant="body2">muralibalan66@gmail.com</Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center" mb={1}>
          <FaPhoneAlt /> <Typography variant="body2">+91 7010777680</Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center" mb={2}>
          <FaLinkedin />{" "}
          <Typography variant="body2">
            www.linkedin.com/in/muraliriya/
          </Typography>
        </Stack>

        {/* Technical Skills */}
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
          Technical Skills
        </Typography>
        {[
          { skill: "Tech Mentoring", value: 95 },
          { skill: "Develop Course Material", value: 85 },
          { skill: "Learn Any Technology", value: 90 },
          { skill: "Communications", value: 80 },
        ].map((item, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              {item.skill}
            </Typography>
            <LinearProgress
              variant="determinate"
              value={item.value}
              sx={{
                height: 8,
                borderRadius: 5,
                bgcolor: "#333",
                "& .MuiLinearProgress-bar": { bgcolor: "#00bfff" },
              }}
            />
          </Box>
        ))}
      </Box>

      {/* RIGHT SECTION */}
      <Box sx={{ flex: 1 }}>
        {/* Heading */}
        <Typography
          variant="h5"
          sx={{ textAlign: "center", fontWeight: 700, mb: 2 }}
        >
          QUALIFICATIONS AND EXPERIENCE
        </Typography>
        
        <Typography
          variant="body1"
          sx={{ textAlign: "start", mb: 3, color: "#ccc", fontSize: 20 }}
        >
          Passionate and experienced Tech Trainer with a strong commitment to
          teaching, having successfully guided over 120 students through
          practical and industry-relevant technology training.
        </Typography>

        {/* Professional Experience */}
        <Typography
          variant="h5"
          sx={{ fontWeight: 700, mb: 2, borderBottom: "2px solid #00bfff", pb: 1 }}
        >
          Professional Experience
        </Typography>

        {/* Job 1 */}
        <Box sx={{ textAlign: "start",mb: 3 }}>

          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Center Head At SoftTechAshram
          </Typography>

          <Typography variant="subtitle2" sx={{ color: "#aaa", mb: 1 }}>
            March 2024 – Present | BlueTick Coders Pvt. Ltd, Adambakkam, Chennai
          </Typography>
          <Box sx={{fontSize:20}}>
            <ul>
              <li>
                Designed and delivered training programs on HTML, CSS, JavaScript,
                and React, empowering 50+ students to build responsive web
                applications.
              </li>
              <li>
                Mentored learners, providing personalized guidance to strengthen
                their front-end development skills.
              </li>
              <li>
                Conducted code reviews, offering constructive feedback to improve
                code quality and adherence to best practices.
              </li>
              <li>
                Aligned curriculum with industry trends, incorporating modern
                frameworks and tools to ensure relevance.
              </li>
              <li>
                Enhanced students’ practical skills through hands-on projects and
                real-world coding scenarios.
              </li>
            </ul>
          </Box>
          
        </Box>

        {/* Job 2 */}
        <Box sx={{ textAlign: "start",mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            C, Core Java, HTML, CSS, and JDBC Trainer
          </Typography>
          <Typography variant="subtitle2" sx={{ color: "#aaa", mb: 1 }}>
            June 2022 – January 2023 | Green Apple, Mayiladuthurai
          </Typography>

          <Box sx={{fontSize:20, }}>
            <ul>
              <li>
                Delivered training sessions on C, Core Java, HTML, CSS, SQL, and
                JDBC to 30+ students, fostering a strong foundation in
                programming.
              </li>
              <li>
                Developed engaging course materials and practical exercises to
                improve learners’ understanding of software development.
              </li>
              <li>
                Managed team of 8 developers across multiple projects.
              </li>
              <li>
                Guided students in building basic applications, focusing on
                problem-solving and coding efficiency.
              </li>
            </ul>
          </Box>
          
        </Box>

        {/* Education */}
        <Typography
          variant="h5"
          sx={{ fontWeight: 700, mb: 2, borderBottom: "2px solid #00bfff", pb: 1 }}
        >
          Education
        </Typography>

        <Box sx={{ textAlign: "start", mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Master of Science in Computer Science
          </Typography>
          <Typography variant="subtitle2" sx={{ color: "#aaa", mb: 1,  }}>
            2016 – 2018 | Poompuhar College (Autonomous), Melaiyur, Bharathidasan
            University
          </Typography>
          <Typography variant="body2" sx={{fontSize:20}}>
            Specialized in Artificial Intelligence and Machine Learning.
            Graduated with honors.
          </Typography>
        </Box>

        <Box sx={{ textAlign: "start", mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Bachelor of Computer Applications
          </Typography>
          <Typography variant="subtitle2" sx={{ color: "#aaa", mb: 1 }}>
            2013 – 2016 | Poompuhar College (Autonomous), Melaiyur, Bharathidasan
            University
          </Typography>
          <Typography variant="body2">
            Developed web-based applications.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Resume;
