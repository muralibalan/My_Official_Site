import React from 'react';
import { Box, Typography, Grid, Paper, LinearProgress } from '@mui/material';

const frontSkills = [
  { name: 'HTML/CSS', value: 95 },
  { name: 'JavaScript', value: 85 },
  { name: 'React Js', value: 80 },
];

const backSkills = [
  { name: 'Node.js', value: 65 },
  { name: 'Express Js', value: 60 },
  { name: 'My SQL', value: 75 },
  { name: 'Java Programming', value: 67 },
  { name: 'Python Programming', value: 40 },
];

const visualizationSkills = [
  { name: 'Tableau', value: 80 },
  { name: 'Power BI', value: 85 },
  { name: 'Excel Analytics', value: 90 },
  { name: 'Data Storytelling', value: 75 },
];



const visualizationPaperStyle = {
  bgcolor: '#676980ff',
  width: { xs: '100%', sm: 400, md: 450 },
  p: { xs: 2, sm: 3, md: 4 },
  borderRadius: 4,
  boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
};

const workflowSkills = [
  { name: 'Git & GitHub', value: 90 },
  { name: 'Vercel Deployment', value: 85 },
  { name: 'Prompt-based Code Generation', value: 80 },
];

const SkillProgress = ({ name, value }) => (
  <Box sx={{ mb: 2, width: '100%' }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
      <Typography sx={{ fontWeight: 500, color: 'white', fontSize: { xs: 16, sm: 18, md: 20 } }}>
        {name}
      </Typography>
      <Typography sx={{ fontWeight: 500, color: 'white', fontSize: { xs: 14, sm: 16 } }}>
        {value}%
      </Typography>
    </Box>
    <LinearProgress
      variant="determinate"
      value={value}
      sx={{
        height: { xs: 10, sm: 12, md: 15 },
        borderRadius: 2,
        bgcolor: '#252525',
        '& .MuiLinearProgress-bar': {
          bgcolor: '#fff',
        },
      }}
    />
  </Box>
);

function Education() {
  const skillPaperStyle = {
    bgcolor: '#676980ff',
    width: { xs: '100%', sm: 400, md: 450 }, // Responsive width
    p: { xs: 2, sm: 3, md: 4 }, // Responsive padding
    borderRadius: 4,
    boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
  };

  return (
    <Box sx={{ flex: 1, px: { xs: 2, sm: 4, md: 8 }, py: 4 }}>
      {/* ______________________Heading____________________ */}
      <Typography
        variant="h5"
        sx={{
          textAlign: 'center',
          fontWeight: 700,
          mb: 2,
          fontSize: { xs: 20, sm: 24, md: 28 }, // Responsive font size
        }}
      >
        QUALIFICATIONS AND EXPERIENCE
      </Typography>

      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            mb: 3,
            color: '#ccc',
            fontSize: { xs: 16, sm: 18, md: 20 },
            maxWidth: { xs: '100%', sm: 800, md: 1000 },
          }}
        >
          Passionate and experienced Tech Trainer with a strong commitment to teaching, having
          successfully guided over 1000+ students through practical and industry-relevant technology
          training.
        </Typography>
      </Box>

      {/* ____________________Professional Experience___________________ */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          mb: 2,
          borderBottom: '2px solid #00bfff',
          pb: 1,
          fontSize: { xs: 18, sm: 22, md: 26 },
        }}
      >
        Professional Experience
      </Typography>

      {/* __________________________Job Present________________________ */}
      {/*Green Apple  */}
      <Box sx={{ textAlign: 'start', mb: 3 }}>

        <Typography variant="h6" sx={{ fontWeight: 700, fontSize: { xs: 16, sm: 18, md: 20 } }}>
          Center Head
        </Typography>

        <Typography variant="subtitle2" sx={{ color: '#aaa', mb: 1, fontSize: { xs: 12, sm: 14 } }}>
          November 2025 – Present | Green Apple Computer Education, Kumbakonam - 612 001
        </Typography>

        <Box sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }}>
          <ul>
            <li>
              <Typography variant="body1" sx={{ mb: 2, fontSize: 'inherit' }}>
                Conducting training programs in Java, Web Development, and Computer Fundamentals.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ mb: 2, fontSize: 'inherit' }}>
                Delivered full-stack MERN training including React.js, Node.js, Express.js, and MongoDB.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ mb: 2, fontSize: 'inherit' }}>
                Conducted foundational courses in C, C++, Java, JDBC, and Python programming.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ mb: 2, fontSize: 'inherit' }}>
                Provided Data Science and Analytics training with visualization tools such as Tableau and Power BI.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ mb: 2, fontSize: 'inherit' }}>
                Conducted skill-oriented training focused on interview preparation and technical confidence building.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ mb: 2, fontSize: 'inherit' }}>
                Prepared students for interviews through mock tests, coding challenges, and resume reviews.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ mb: 2, fontSize: 'inherit' }}>
                Designed training roadmaps, curriculum delivery plans, and batch schedules.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ mb: 2, fontSize: 'inherit' }}>
                Tracked student progress and implemented personalized learning strategies.
              </Typography>
            </li>
          </ul>
        </Box>
      </Box>


      {/*ProgramPark */}
      <Box sx={{ textAlign: 'start', mb: 3 }}>

        <Typography variant="h6" sx={{ fontWeight: 700, fontSize: { xs: 16, sm: 18, md: 20 } }}>
          Apps & Web Developer
        </Typography>

        <Typography variant="subtitle2" sx={{ color: '#aaa', mb: 1, fontSize: { xs: 12, sm: 14 } }}>
          November 2025 – Present | ProgramPark Technologies Pvt. Ltd Chennai - 33
        </Typography>

        <Box sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }}>
          <ul>
            <li>
              <Typography variant="body1" sx={{ mb: 2, fontSize: 'inherit' }}>
                Designing and developing mobile and web applications in parallel with training commitments.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ mb: 2, fontSize: 'inherit' }}>
                Working with React, Node.js, and modern tooling for product-based solutions.
              </Typography>
            </li>
          </ul>
        </Box>
      </Box>

      {/* BlueTick Coders */}
      <Box sx={{ textAlign: 'start', mb: 3 }}>

        <Typography variant="h6" sx={{ fontWeight: 700, fontSize: { xs: 16, sm: 18, md: 20 } }}>
          Front-end Developer
        </Typography>

        <Typography variant="subtitle2" sx={{ color: '#aaa', mb: 1, fontSize: { xs: 12, sm: 14 } }}>
          March 2024 – November 2025 | BlueTick Coders Pvt. Ltd, Adambakkam, Chennai - 32.
        </Typography>

        <Box sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }}>
          <ul>
            <li>
              <Typography variant="body1" sx={{ mb: 2, fontSize: 'inherit' }}>
                Developed and maintained responsive web applications using React, JavaScript, and REST APIs.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ mb: 2, fontSize: 'inherit' }}>
                Collaborated with developers on UI components, performance optimization, and code reviews.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ mb: 2, fontSize: 'inherit' }}>
                Implemented reusable front-end components aligned with design and UX standards.
              </Typography>
            </li>
          </ul>
        </Box>
      </Box>

      {/* Soft Tech Ashram */}
      <Box sx={{ textAlign: 'start', mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, fontSize: { xs: 16, sm: 18, md: 20 } }}>
          Center Head (Training Division)
        </Typography>
        <Typography variant="subtitle2" sx={{ color: '#aaa', mb: 1, fontSize: { xs: 12, sm: 14 } }}>
          March 2024 – November 2025 | SoftTechAshram (Operated by BlueTick Coders), Chennai - 32.
        </Typography>
        <Box sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }}>
          <ul>
            <li>
              <Typography variant="body1" sx={{ mb: 2, fontSize: 'inherit' }}>
                Designed and delivered training programs on HTML, CSS, JavaScript, and React,
                empowering 150+ students to build responsive web applications.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ mb: 2, fontSize: 'inherit' }}>
                Mentored learners, providing personalized guidance to strengthen their front-end
                development skills.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ mb: 2, fontSize: 'inherit' }}>
                Conducted code reviews, offering constructive feedback to improve code quality and
                adherence to best practices.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ mb: 2, fontSize: 'inherit' }}>
                Aligned curriculum with industry trends, incorporating modern frameworks and tools to
                ensure relevance.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ mb: 2, fontSize: 'inherit' }}>
                Enhanced students’ practical skills through hands-on projects and real-world coding
                scenarios.
              </Typography>
            </li>
          </ul>
        </Box>
      </Box>

      {/* Job before Soft Tech Ashram */}
      <Box sx={{ textAlign: 'start', mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, fontSize: { xs: 16, sm: 18, md: 20 } }}>
          C, Core Java, HTML, CSS, and JDBC Trainer
        </Typography>
        <Typography variant="subtitle2" sx={{ color: '#aaa', mb: 1, fontSize: { xs: 12, sm: 14 } }}>
          June 2022 – January 2023 | Green Apple, Mayiladuthurai
        </Typography>
        <Box sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }}>
          <ul>
            <li>
              <Typography variant="body1" sx={{ mb: 2, fontSize: 'inherit' }}>
                Delivered training sessions on C, Core Java, HTML, CSS, SQL, and JDBC to 30+ students,
                fostering a strong foundation in programming.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ mb: 2, fontSize: 'inherit' }}>
                Developed engaging course materials and practical exercises to improve learners’
                understanding of software development.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ mb: 2, fontSize: 'inherit' }}>
                Managed team of 8 developers across multiple projects.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ mb: 2, fontSize: 'inherit' }}>
                Guided students in building basic applications, focusing on problem-solving and coding
                efficiency.
              </Typography>
            </li>
          </ul>
        </Box>
      </Box>

      {/* _____________________Education_________________________ */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          mb: 2,
          borderBottom: '2px solid #00bfff',
          pb: 1,
          fontSize: { xs: 18, sm: 22, md: 26 },
        }}
      >
        Education
      </Typography>

      <Box sx={{ textAlign: 'start', mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, fontSize: { xs: 16, sm: 18, md: 20 } }}>
          Master of Science in Computer Science
        </Typography>
        <Typography variant="subtitle2" sx={{ color: '#aaa', mb: 1, fontSize: { xs: 12, sm: 14 } }}>
          2016 – 2018 | Poompuhar College (Autonomous), Melaiyur, Bharathidasan University
        </Typography>
        <Box sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }}>
          <ul>
            <li>
              <Typography variant="body1" sx={{ mb: 2, fontSize: 'inherit' }}>
                Programming & Web Technologies (Java, Web Development, Compiler Design)
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ mb: 2, fontSize: 'inherit' }}>
                Algorithms & Advanced Computer Architecture
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ mb: 2, fontSize: 'inherit' }}>
                Artificial Intelligence, Data Mining & Machine Learning
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ mb: 2, fontSize: 'inherit' }}>
                Cloud Computing & Distributed Systems
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ mb: 2, fontSize: 'inherit' }}>
                Mobile & Wireless Computing (including Wireless Sensor Networks & Image Processing)
              </Typography>
            </li>
          </ul>
        </Box>
      </Box>

      <Box sx={{ textAlign: 'start', mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, fontSize: { xs: 16, sm: 18, md: 20 } }}>
          Bachelor of Computer Applications
        </Typography>
        <Typography variant="subtitle2" sx={{ color: '#aaa', mb: 1, fontSize: { xs: 12, sm: 14 } }}>
          2013 – 2016 | Poompuhar College (Autonomous), Melaiyur, Bharathidasan University
        </Typography>
        <Box sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }}>
          <ul>
            <li>
              <Typography variant="body1" sx={{ mb: 2, fontSize: 'inherit' }}>
                Programming & Data Structures (C, C++, Java, Visual Basic, ASP, HTML)
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ mb: 2, fontSize: 'inherit' }}>
                Database & Information Systems (RDBMS, Financial Accounting, MIS)
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ mb: 2, fontSize: 'inherit' }}>
                Computer Architecture & Operating Systems
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ mb: 2, fontSize: 'inherit' }}>
                Software Engineering, Numerical Analysis & Statistics
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ mb: 2, fontSize: 'inherit' }}>
                Artificial Intelligence, Computer Graphics & Multimedia Technologies
              </Typography>
            </li>
          </ul>
        </Box>
      </Box>

      {/* _____________________Skills Area_____________________ */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          mb: 2,
          borderBottom: '2px solid #00bfff',
          pb: 1,
          fontSize: { xs: 18, sm: 22, md: 26 },
        }}
      >
        Technical & Training Skills
      </Typography>

      <Box
        sx={{
          bgcolor: '#181818',
          py: { xs: 2, sm: 4 },
          px: { xs: 2, sm: 4, md: 8 },
        }}
      >
        <Grid container spacing={{ xs: 2, sm: 4, md: 8 }} justifyContent="center">
          <Grid item xs={12} sm={6} md={5}>
            <Paper sx={skillPaperStyle}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, mb: 2, color: 'white', fontSize: { xs: 16, sm: 18 } }}
              >
                Front-end Development
              </Typography>
              <Box sx={{ borderBottom: '2px solid #fff', width: 45, mb: 2 }} />
              {frontSkills.map((skill) => (
                <SkillProgress key={skill.name} name={skill.name} value={skill.value} />
              ))}
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={5}>
            <Paper sx={skillPaperStyle}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, mb: 2, color: 'white', fontSize: { xs: 16, sm: 18 } }}
              >
                Back-end Development
              </Typography>
              <Box sx={{ borderBottom: '2px solid #fff', width: 45, mb: 2 }} />
              {backSkills.map((skill) => (
                <SkillProgress key={skill.name} name={skill.name} value={skill.value} />
              ))}
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={5}>
            <Paper sx={visualizationPaperStyle}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, mb: 2, color: 'white', fontSize: { xs: 16, sm: 18 } }}
              >
                Data Visualization & BI Tools
              </Typography>
              <Box sx={{ borderBottom: '2px solid #fff', width: 45, mb: 2 }} />
              {visualizationSkills.map((skill) => (
                <SkillProgress key={skill.name} name={skill.name} value={skill.value} />
              ))}
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={5}>
            <Paper sx={skillPaperStyle}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, mb: 2, color: 'white', fontSize: { xs: 16, sm: 18 } }}
              >
                Workflow & Deployment Tools
              </Typography>
              <Box sx={{ borderBottom: '2px solid #fff', width: 45, mb: 2 }} />
              {workflowSkills.map((skill) => (
                <SkillProgress key={skill.name} name={skill.name} value={skill.value} />
              ))}
            </Paper>
          </Grid>

        </Grid>
      </Box>

      {/* Technical Skills */}
      <Typography
        variant="h6"
        sx={{ fontWeight: 700, mb: 2, fontSize: { xs: 16, sm: 18, md: 20 } }}
      >
        Technical Skills
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {[
          { skill: 'Tech Mentoring', value: 95 },
          { skill: 'Develop Course Material', value: 85 },
          { skill: 'Learn Any Technology', value: 90 },
          { skill: 'Communications', value: 80 },
        ].map((item, index) => (
          <Box
            key={index}
            sx={{ mb: 2, width: { xs: '100%', sm: 600, md: 700 } }}
          >
            <Typography variant="body2" sx={{ mb: 0.5, fontSize: { xs: 14, sm: 16 } }}>
              {item.skill}
            </Typography>
            <LinearProgress
              variant="determinate"
              value={item.value}
              sx={{
                height: { xs: 10, sm: 12, md: 15 },
                borderRadius: 5,
                bgcolor: '#333',
                '& .MuiLinearProgress-bar': { bgcolor: '#00bfff' },
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Education;