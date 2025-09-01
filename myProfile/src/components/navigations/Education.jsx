import React from 'react'
import { Box,Typography, Grid, Paper, LinearProgress } from '@mui/material'

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

//This is my Education Details
function Education() {

  //This is Skill papar component style..
  const skillPaperStyle = {
                            bgcolor: "#676980ff",
                            width: 450,
                            p: 4,
                            borderRadius: 4,
                            boxShadow: "0 2px 10px rgba(0,0,0,0.3)"
  }

  return <>
    <Box sx={{ flex: 1 }}>
    {/* ______________________Heading____________________ */}
        <Typography
          variant="h5"
          sx={{ textAlign: "center", fontWeight: 700, mb: 2 }}
        >
          QUALIFICATIONS AND EXPERIENCE
        </Typography>
        
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Typography
                variant="body1"
                sx={{ textAlign: "center", mb: 3, color: "#ccc", fontSize: 20, maxWidth: 1000 }}
            >
                Passionate and experienced Tech Trainer with a strong commitment to
                teaching, having successfully guided over 120 students through
                practical and industry-relevant technology training.
            </Typography>
        </Box>

    {/* ____________________Professional Experience___________________ */}
        <Typography
          variant="h5"
          sx={{ fontWeight: 700, mb: 2, borderBottom: "2px solid #00bfff", pb: 1 }}
        >
          Professional Experience
        </Typography>

        {/* Job Present */}
        <Box sx={{ textAlign: "start",mb: 3 }}>

          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Center Head At SoftTechAshram
          </Typography>

          <Typography variant="subtitle2" sx={{ color: "#aaa", mb: 1 }}>
            March 2024 – Present | BlueTick Coders Pvt. Ltd, Adambakkam, Chennai - 32.
          </Typography>
          <Box sx={{fontSize:20}}>
            <ul>
              <li><Typography variant="body1" sx={{ mb: 3, fontSize: 18 }}>
                    Designed and delivered training programs on HTML, CSS, JavaScript,
                    and React, empowering 50+ students to build responsive web
                    applications.
                </Typography></li>
                <li><Typography variant="body1" sx={{ mb: 3, fontSize: 18 }}>
                    Mentored learners, providing personalized guidance to strengthen
                    their front-end development skills.
                </Typography></li>
                <li><Typography variant="body1" sx={{ mb: 3, fontSize: 18 }}>
                    Conducted code reviews, offering constructive feedback to improve
                    code quality and adherence to best practices.
                </Typography></li>
                <li><Typography variant="body1" sx={{ mb: 3, fontSize: 18 }}>
                    Aligned curriculum with industry trends, incorporating modern
                    frameworks and tools to ensure relevance.
                </Typography></li>
                <li><Typography variant="body1" sx={{ mb: 3, fontSize: 18 }}>
                    Enhanced students’ practical skills through hands-on projects and
                    real-world coding scenarios.
                </Typography></li>
            </ul>
          </Box> 
        </Box>

        {/* Job before Soft Tech Ashram */}
        <Box sx={{ textAlign: "start",mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            C, Core Java, HTML, CSS, and JDBC Trainer
          </Typography>
          <Typography variant="subtitle2" sx={{ color: "#aaa", mb: 1 }}>
            June 2022 – January 2023 | Green Apple, Mayiladuthurai
          </Typography>

          <Box sx={{fontSize:20, }}>
            <ul>
                <li><Typography variant="body1" sx={{ mb: 3, fontSize: 18 }}>
                    Delivered training sessions on C, Core Java, HTML, CSS, SQL, and
                    JDBC to 30+ students, fostering a strong foundation in
                    programming.
                </Typography></li>
                <li><Typography variant="body1" sx={{ mb: 3, fontSize: 18 }}>
                    Developed engaging course materials and practical exercises to
                    improve learners’ understanding of software development.
                </Typography></li>
                <li><Typography variant="body1" sx={{ mb: 3, fontSize: 18 }}>
                    Managed team of 8 developers across multiple projects.
                </Typography></li>
                <li><Typography variant="body1" sx={{ mb: 3, fontSize: 18 }}>
                    Guided students in building basic applications, focusing on
                    problem-solving and coding efficiency.
                </Typography></li>
            </ul>
          </Box>
        </Box>

    {/* _____________________Education_________________________ */}
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
          <Box sx={{fontSize:20, }}>
            <ul>
                <li><Typography variant="body1" sx={{ mb: 3, fontSize: 18 }}>
                    Programming & Web Technologies (Java, Web Development, Compiler Design)
                </Typography></li>
                <li><Typography variant="body1" sx={{ mb: 3, fontSize: 18 }}>
                    Algorithms & Advanced Computer Architecture
                </Typography></li>
                <li><Typography variant="body1" sx={{ mb: 3, fontSize: 18 }}>
                    Artificial Intelligence, Data Mining & Machine Learning
                </Typography></li>
                <li><Typography variant="body1" sx={{ mb: 3, fontSize: 18 }}>
                    Cloud Computing & Distributed Systems
                </Typography></li>
                <li><Typography variant="body1" sx={{ mb: 3, fontSize: 18 }}>
                    Mobile & Wireless Computing (including Wireless Sensor Networks & Image Processing)
                </Typography></li>
            </ul>
          </Box>
        </Box>

        <Box sx={{ textAlign: "start", mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Bachelor of Computer Applications
          </Typography>
          <Typography variant="subtitle2" sx={{ color: "#aaa", mb: 1 }}>
            2013 – 2016 | Poompuhar College (Autonomous), Melaiyur, Bharathidasan
            University
          </Typography>
          <Box sx={{fontSize:20, }}>
            <ul>
                <li><Typography variant="body1" sx={{ mb: 3, fontSize: 18 }}>
                    Programming & Data Structures (C, C++, Java, Visual Basic, ASP, HTML)
                </Typography></li>
                <li><Typography variant="body1" sx={{ mb: 3, fontSize: 18 }}>
                    Database & Information Systems (RDBMS, Financial Accounting, MIS)
                </Typography></li>
                <li><Typography variant="body1" sx={{ mb: 3, fontSize: 18 }}>
                    Computer Architecture & Operating Systems
                </Typography></li>
                <li><Typography variant="body1" sx={{ mb: 3, fontSize: 18 }}>
                    Software Engineering, Numerical Analysis & Statistics
                </Typography></li>
                <li><Typography variant="body1" sx={{ mb: 3, fontSize: 18 }}>
                    Artificial Intelligence, Computer Graphics & Multimedia Technologies
                </Typography></li>
            </ul>
          </Box>
        </Box>
      </Box>

{/* _____________________This is skills Area_____________________ */}
     <Typography
      variant="h5"
      sx={{ fontWeight: 700, mb: 2, borderBottom: "2px solid #00bfff", pb: 1 }}
    >
      Technical & Training Skills
    </Typography>

    <Box sx={{
          bgcolor: '#181818',
          // minHeight: '100vh',
          height:'59vh',
          py: 2,
          px: { xs: 2, md: 8 }
        }}>
         
          <Grid container spacing={20} justifyContent="center">
    
            <Grid item xs={12} md={5}>
              <Paper  sx={skillPaperStyle}>
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
              <Paper  sx={skillPaperStyle}>
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

{/* Technical Skills */}
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                Technical Skills
              </Typography>

              <Box sx={{display:'flex',flexDirection:'column', alignItems:'center'}}>
                  {[
                  { skill: "Tech Mentoring", value: 95 },
                  { skill: "Develop Course Material", value: 85 },
                  { skill: "Learn Any Technology", value: 90 },
                  { skill: "Communications", value: 80 },
                ].map((item, index) => (
                  <Box key={index}  sx={{ mb: 2,width: 700 }}>
                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                      {item.skill}
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={item.value}
                      sx={{
                        height: 15,
                        borderRadius: 5,
                        bgcolor: "#333",
                        "& .MuiLinearProgress-bar": { bgcolor: "#00bfff" },
                      }}
                    />
                  </Box>
                ))}
              </Box> 
                
  </>
}

export default Education