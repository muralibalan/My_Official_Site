import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  useMediaQuery,
} from '@mui/material';

import { motion } from 'framer-motion';

const THEME_COLOR = '#09ee24ff';

// ---------------- ANIMATION VARIANTS ----------------

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// ---------------- SKILLS DATA WITH AI TOOLS ----------------

const skillCategories = [
  {
    category: 'AI Tools & Generative AI',
    skills: [
      { name: 'Cursor AI & GitHub Copilot', value: 92, note: 'AI Code Assist' },
      { name: 'Google Gemini & AI Studio', value: 90, note: 'Prompt Engineering' },
      { name: 'AI Image Gen (Midjourney, Imagen)', value: 85, note: 'Visual Assets' },
      { name: 'AI Video Gen (Runway, Kling, Veo)', value: 80, note: 'Motion & Reels' },
      { name: 'AI Audio & Voice (ElevenLabs, Suno)', value: 82, note: 'Voiceover & SFX' },
    ],
  },
  {
    category: 'Front-end Development',
    skills: [
      { name: 'HTML5 / CSS3 / Modern Layouts', value: 95, note: 'Responsive Design' },
      { name: 'JavaScript (ES6+)', value: 85, note: 'Core Logic' },
      { name: 'React.js & Material UI', value: 82, note: 'SPA Frameworks' },
    ],
  },
  {
    category: 'Back-end & Databases',
    skills: [
      { name: 'Node.js & Express.js', value: 68, note: 'REST APIs' },
      { name: 'MySQL & Database Modeling', value: 75, note: 'Relational DB' },
      { name: 'Java Programming', value: 67, note: 'OOP & Core Logic' },
      { name: 'Python Programming', value: 60, note: 'Scripting & Basics' },
    ],
  },
  {
    category: 'Data Visualization & Analytics',
    skills: [
      { name: 'Power BI', value: 85, note: 'Dashboards & Modeling' },
      { name: 'Tableau', value: 80, note: 'Data Storytelling' },
      { name: 'Excel Advanced Analytics', value: 90, note: 'Formulas & Charts' },
    ],
  },
  {
    category: 'Workflow, Git & Deployment',
    skills: [
      { name: 'Git & GitHub Version Control', value: 90, note: 'Collaboration' },
      { name: 'Vercel & Cloud Deployment', value: 85, note: 'CI/CD Hosting' },
    ],
  },
];

// ---------------- TIMELINE ITEM (WITH VIDEO) ----------------

const TimelineItem = ({
  title,
  date,
  subtitle,
  points,
  videoUrl,
  posterUrl,
}) => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box
      component={motion.div}
      variants={fadeInUp}
      sx={{
        position: 'relative',
        borderLeft: `2px solid ${THEME_COLOR}44`,
        pl: { xs: 2.5, md: 5 },
        mb: 6,
        '&::before': {
          content: '""',
          position: 'absolute',
          left: { xs: -7, md: -10 },
          top: 40,
          width: { xs: 12, md: 18 },
          height: { xs: 12, md: 18 },
          borderRadius: '50%',
          background: '#050505',
          border: `3px solid ${THEME_COLOR}`,
          boxShadow: `0 0 15px ${THEME_COLOR}`,
        },
      }}
    >
      <Paper
        elevation={0}
        sx={{
          overflow: 'hidden',
          borderRadius: { xs: '16px', md: '24px' },
          bgcolor: 'rgba(255,255,255,0.03)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.08)',
          transition: '0.4s ease',
          '&:hover': {
            transform: isMobile ? 'none' : 'translateX(8px)',
            borderColor: `${THEME_COLOR}66`,
            boxShadow: `0 15px 40px rgba(0,0,0,0.5), 0 0 20px ${THEME_COLOR}22`,
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            minHeight: 320,
          }}
        >
          {/* VIDEO SECTION */}
          <Box
            sx={{
              width: { xs: '100%', md: '36%' },
              minHeight: { xs: 220, md: 'auto' },
              position: 'relative',
              overflow: 'hidden',
              bgcolor: '#000',
            }}
          >
            <Box
              component="video"
              src={videoUrl}
              poster={posterUrl}
              autoPlay
              loop
              muted
              playsInline
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />

            {/* Subtle Gradient Overlay */}
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background: {
                  xs: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)',
                  md: 'linear-gradient(to right, transparent 60%, rgba(5,5,5,0.9) 100%)',
                },
                pointerEvents: 'none',
              }}
            />
          </Box>

          {/* CONTENT SECTION */}
          <Box
            sx={{
              flex: 1,
              p: { xs: 2.5, md: 4 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,
                color: '#fff',
                mb: 1,
                fontSize: { xs: '1.25rem', md: '1.45rem' },
                lineHeight: 1.3,
              }}
            >
              {title}
            </Typography>

            <Typography
              sx={{
                color: THEME_COLOR,
                fontWeight: 700,
                mb: 1,
                textTransform: 'uppercase',
                letterSpacing: 1.2,
                fontSize: '0.82rem',
              }}
            >
              {date}
            </Typography>

            <Typography
              sx={{
                color: '#bbb',
                mb: 2.5,
                fontStyle: 'italic',
                fontWeight: 500,
                fontSize: '0.92rem',
              }}
            >
              {subtitle}
            </Typography>

            {/* BULLETS */}
            <Box
              component="ul"
              sx={{
                m: 0,
                pl: 2.5,
                display: 'flex',
                flexDirection: 'column',
                gap: 1.1,
                '& li': {
                  color: '#ccc',
                  lineHeight: 1.75,
                  fontSize: { xs: '0.88rem', md: '0.94rem' },
                },
                '& li::marker': {
                  color: THEME_COLOR,
                },
              }}
            >
              {points.map((point, index) => (
                <Typography key={index} component="li">
                  {point}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

// ---------------- MAIN COMPONENT ----------------

function Education() {
  const sectionHeaderStyle = {
    fontWeight: 900,
    mb: { xs: 4, md: 6 },
    borderLeft: `5px solid ${THEME_COLOR}`,
    pl: 2,
    fontSize: { xs: '1.5rem', md: '2.2rem' },
    textTransform: 'uppercase',
    letterSpacing: 1,
  };

  return (
    <Box
      sx={{
        bgcolor: '#050505',
        backgroundImage: `radial-gradient(circle at top, ${THEME_COLOR}12 0%, transparent 55%)`,
        color: '#fff',
        py: { xs: 8, md: 12 },
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        {/* HERO SECTION */}
        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                mb: 3,
                fontSize: { xs: '2rem', md: '3.8rem' },
                letterSpacing: -0.5,
              }}
            >
              QUALIFICATIONS &
              <Box
                component="span"
                sx={{
                  color: THEME_COLOR,
                  display: 'block',
                  textShadow: `0 0 25px ${THEME_COLOR}`,
                }}
              >
                EXPERIENCE
              </Box>
            </Typography>

            <Typography
              sx={{
                color: '#999',
                maxWidth: 820,
                mx: 'auto',
                lineHeight: 1.8,
                fontSize: { xs: '0.95rem', md: '1.05rem' },
              }}
            >
              Passionate Tech Trainer & Full-Stack Developer with hands-on expertise in
              modern web development, data visualization, and generative AI toolchains,
              having guided over 1000+ students through practical industry standards.
            </Typography>
          </motion.div>
        </Box>

        {/* PROFESSIONAL EXPERIENCE */}
        <Box
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Typography variant="h4" sx={sectionHeaderStyle}>
            Professional Experience
          </Typography>

          <TimelineItem
  title="Center Head"
  date="November 2025 – Present"
  subtitle="Green Apple Computer Education, Kumbakonam - 612 001"
  videoUrl="/videos/GATN68.mp4"
  posterUrl="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600"
  autoPlay
  loop
  muted
  playsInline
  points={[
    'Conducting training programs in Java, Web Development, and Computer Fundamentals.',
    'Delivered full-stack MERN training including React.js, Node.js, Express.js, and MongoDB.',
    'Conducted foundational courses in C, C++, Java, JDBC, and Python programming.',
    'Provided Data Science and Analytics training with Tableau and Power BI.',
    'Conducted interview preparation and technical confidence building.',
    'Prepared students through mock tests, coding challenges, and resume reviews.',
    'Designed curriculum delivery plans and schedules.',
    'Tracked student progress with personalized learning strategies.',
  ]}
/>

          <TimelineItem
            title="Apps & Web Developer"
            date="November 2025 – Present"
            subtitle="ProgramPark Technologies Pvt. Ltd Chennai - 33"
            videoUrl="/videos/programpark.mp4"
            posterUrl="/images/sriamuth.png"
            points={[
              'Designing and developing mobile and web applications in parallel with training commitments.',
              'Working with React, Node.js, and modern tooling for product-based solutions.',
            ]}
          />

          <TimelineItem
            title="Front-end Developer"
            date="March 2024 – November 2025"
            subtitle="BlueTick Coders Pvt. Ltd, Adambakkam, Chennai - 32"
            videoUrl="/videos/bluetick.mp4"
            posterUrl="/images/btc.png"
            points={[
              'Developed and maintained responsive web applications using React, JavaScript, and REST APIs.',
              'Collaborated with developers on UI components, performance optimization, and code reviews.',
              'Implemented reusable front-end components aligned with design and UX standards.',
            ]}
          />

          <TimelineItem
            title="Center Head (Training Division)"
            date="March 2024 – November 2025"
            subtitle="SoftTechAshram (Operated by BlueTick Coders), Chennai - 32"
            videoUrl="/videos/softtech.mp4"
            posterUrl="/images/sta.png"
            points={[
              'Designed and delivered training programs on HTML, CSS, JavaScript, and React.',
              'Empowered 150+ students to build responsive web applications.',
              'Mentored learners with personalized front-end guidance.',
              'Conducted code reviews to improve code quality.',
              'Aligned curriculum with modern frameworks and tools.',
              'Enhanced practical skills through hands-on projects.',
            ]}
          />

          <TimelineItem
            title="C, Core Java, HTML, CSS, and JDBC Trainer"
            date="June 2022 – January 2023"
            subtitle="Green Apple, Mayiladuthurai"
            videoUrl="/videos/mayiladuthurai.mp4"
            posterUrl="/images/GreenApple.png"
            points={[
              'Delivered training sessions on C, Core Java, HTML, CSS, SQL, and JDBC.',
              'Fostered strong programming foundations for 30+ students.',
              'Developed engaging course materials and practical exercises.',
              'Managed a team of 8 developers across multiple projects.',
              'Guided students in building basic applications and problem-solving.',
            ]}
          />
        </Box>

        {/* EDUCATION */}
        <Box sx={{ mt: { xs: 8, md: 12 } }}>
          <Typography variant="h4" sx={sectionHeaderStyle}>
            Education
          </Typography>

          <TimelineItem
            title="Master of Science in Computer Science"
            date="2016 – 2018"
            subtitle="Poompuhar College (Autonomous), Melaiyur, Bharathidasan University"
            videoUrl="/videos/msc-college.mp4"
            posterUrl="/images/poomphar.png"
            points={[
              'Programming & Web Technologies (Java, Web Development, Compiler Design)',
              'Algorithms & Advanced Computer Architecture',
              'Artificial Intelligence, Data Mining & Machine Learning',
              'Cloud Computing & Distributed Systems',
              'Mobile & Wireless Computing including Wireless Sensor Networks & Image Processing',
            ]}
          />

          <TimelineItem
            title="Bachelor of Computer Applications"
            date="2013 – 2016"
            subtitle="Poompuhar College (Autonomous), Melaiyur, Bharathidasan University"
            videoUrl="/videos/bca-college.mp4"
            posterUrl="/images/poomphar.png"
            points={[
              'Programming & Data Structures (C, C++, Java, Visual Basic, ASP, HTML)',
              'Database & Information Systems (RDBMS, Financial Accounting, MIS)',
              'Computer Architecture & Operating Systems',
              'Software Engineering, Numerical Analysis & Statistics',
              'Artificial Intelligence, Computer Graphics & Multimedia Technologies',
            ]}
          />
        </Box>

        {/* UNIFIED TECHNICAL EXPERTISE TABLE */}
        <Box sx={{ mt: { xs: 8, md: 12 } }}>
          <Typography variant="h4" sx={sectionHeaderStyle}>
            Technical Expertise & AI Stack
          </Typography>

          <TableContainer
            component={Paper}
            sx={{
              bgcolor: 'rgba(255,255,255,0.02)',
              backdropFilter: 'blur(16px)',
              borderRadius: { xs: '16px', md: '24px' },
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: `0 20px 50px rgba(0,0,0,0.6)`,
              overflowX: 'auto',
            }}
          >
            <Table sx={{ minWidth: 680 }}>
              <TableHead>
                <TableRow
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.04)',
                    borderBottom: `2px solid ${THEME_COLOR}55`,
                  }}
                >
                  <TableCell
                    sx={{
                      color: THEME_COLOR,
                      fontWeight: 800,
                      letterSpacing: 1,
                      textTransform: 'uppercase',
                      fontSize: '0.88rem',
                      py: 2.2,
                    }}
                  >
                    Domain / Category
                  </TableCell>
                  <TableCell
                    sx={{
                      color: '#fff',
                      fontWeight: 800,
                      letterSpacing: 1,
                      textTransform: 'uppercase',
                      fontSize: '0.88rem',
                      py: 2.2,
                    }}
                  >
                    Skill / Tool Name
                  </TableCell>
                  <TableCell
                    sx={{
                      color: '#fff',
                      fontWeight: 800,
                      letterSpacing: 1,
                      textTransform: 'uppercase',
                      fontSize: '0.88rem',
                      py: 2.2,
                      width: '38%',
                    }}
                  >
                    Proficiency
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      color: '#fff',
                      fontWeight: 800,
                      letterSpacing: 1,
                      textTransform: 'uppercase',
                      fontSize: '0.88rem',
                      py: 2.2,
                    }}
                  >
                    Focus Area
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {skillCategories.map((group, groupIdx) => (
                  <React.Fragment key={groupIdx}>
                    {group.skills.map((skill, skillIdx) => (
                      <TableRow
                        key={skill.name}
                        sx={{
                          '&:hover': {
                            bgcolor: 'rgba(255,255,255,0.04)',
                          },
                          borderBottom:
                            skillIdx === group.skills.length - 1
                              ? `1px solid rgba(255,255,255,0.12)`
                              : '1px solid rgba(255,255,255,0.04)',
                        }}
                      >
                        {/* CATEGORY (Rendered once per group) */}
                        {skillIdx === 0 ? (
                          <TableCell
                            rowSpan={group.skills.length}
                            sx={{
                              verticalAlign: 'top',
                              pt: 2.8,
                              fontWeight: 700,
                              color: THEME_COLOR,
                              fontSize: '0.96rem',
                              borderRight: '1px solid rgba(255,255,255,0.05)',
                              bgcolor: 'rgba(0,0,0,0.15)',
                            }}
                          >
                            {group.category}
                          </TableCell>
                        ) : null}

                        {/* SKILL NAME */}
                        <TableCell
                          sx={{
                            color: '#eee',
                            fontWeight: 600,
                            fontSize: '0.92rem',
                            py: 1.8,
                          }}
                        >
                          {skill.name}
                        </TableCell>

                        {/* PROGRESS BAR */}
                        <TableCell sx={{ py: 1.8 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Box
                              sx={{
                                flex: 1,
                                height: 7,
                                borderRadius: 10,
                                bgcolor: 'rgba(255,255,255,0.08)',
                                overflow: 'hidden',
                              }}
                            >
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.value}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, ease: 'easeOut' }}
                                style={{
                                  height: '100%',
                                  background: `linear-gradient(90deg, ${THEME_COLOR}, #00ffe5)`,
                                  borderRadius: 'inherit',
                                  boxShadow: `0 0 10px ${THEME_COLOR}99`,
                                }}
                              />
                            </Box>
                            <Typography
                              sx={{
                                color: THEME_COLOR,
                                fontWeight: 800,
                                fontSize: '0.85rem',
                                minWidth: 40,
                                textAlign: 'right',
                              }}
                            >
                              {skill.value}%
                            </Typography>
                          </Box>
                        </TableCell>

                        {/* FOCUS / BADGE */}
                        <TableCell align="right" sx={{ py: 1.8 }}>
                          <Chip
                            label={skill.note}
                            size="small"
                            sx={{
                              bgcolor: 'rgba(9, 238, 36, 0.08)',
                              color: '#b6ffc2',
                              border: `1px solid ${THEME_COLOR}44`,
                              fontWeight: 600,
                              fontSize: '0.75rem',
                            }}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </Box>
  );
}

export default Education;