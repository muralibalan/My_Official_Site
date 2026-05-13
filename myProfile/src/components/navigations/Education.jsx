import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Container,
  useMediaQuery,
} from '@mui/material';

import { motion } from 'framer-motion';

const THEME_COLOR = '#09ee24ff';

// ---------------- ANIMATION ----------------

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
    y: 40,
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

// ---------------- SKILLS ----------------

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

const workflowSkills = [
  { name: 'Git & GitHub', value: 90 },
  { name: 'Vercel Deployment', value: 85 },
  { name: 'Prompt-based Code Generation', value: 80 },
];

// ---------------- SKILL BAR ----------------

const SkillProgress = ({ name, value }) => (
  <Box sx={{ mb: 2.5 }}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        mb: 1,
      }}
    >
      <Typography
        sx={{
          color: '#fff',
          fontWeight: 600,
          fontSize: {
            xs: '0.9rem',
            md: '1rem',
          },
        }}
      >
        {name}
      </Typography>

      <Typography
        sx={{
          color: THEME_COLOR,
          fontWeight: 800,
        }}
      >
        {value}%
      </Typography>
    </Box>

    <Box
      sx={{
        width: '100%',
        height: 7,
        borderRadius: 10,
        overflow: 'hidden',
        bgcolor: 'rgba(255,255,255,0.08)',
      }}
    >
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{
          duration: 1.3,
        }}
        style={{
          height: '100%',
          background: `linear-gradient(90deg,${THEME_COLOR},#00ffe5)`,
          borderRadius: 'inherit',
          boxShadow: `0 0 15px ${THEME_COLOR}`,
        }}
      />
    </Box>
  </Box>
);

// ---------------- TIMELINE ITEM ----------------

const TimelineItem = ({
  title,
  date,
  subtitle,
  points,
  imageUrl,
}) => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box
      component={motion.div}
      variants={fadeInUp}
      sx={{
        position: 'relative',
        borderLeft: `2px solid ${THEME_COLOR}44`,
        pl: {
          xs: 2.5,
          md: 5,
        },
        mb: 6,

        '&::before': {
          content: '""',
          position: 'absolute',
          left: {
            xs: -7,
            md: -10,
          },
          top: 40,
          width: {
            xs: 12,
            md: 18,
          },
          height: {
            xs: 12,
            md: 18,
          },
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
          borderRadius: {
            xs: '16px',
            md: '24px',
          },

          bgcolor: 'rgba(255,255,255,0.03)',
          backdropFilter: 'blur(12px)',

          border:
            '1px solid rgba(255,255,255,0.08)',

          transition: '0.4s ease',

          '&:hover': {
            transform: isMobile
              ? 'none'
              : 'translateX(10px)',

            borderColor: `${THEME_COLOR}55`,

            boxShadow: `0 15px 40px rgba(0,0,0,0.4),
              0 0 20px ${THEME_COLOR}22`,
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              md: 'row',
            },

            minHeight: 320,
          }}
        >
          {/* IMAGE */}

          <Box
            sx={{
              width: {
                xs: '100%',
                md: '35%',
              },

              height: {
                xs: 220,
                md: 'auto',
              },

              position: 'relative',
            }}
          >
            <Box
              component="img"
              src={imageUrl}
              alt={title}
              onError={(e) => {
                e.target.src =
                  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop';
              }}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />

            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to right,rgba(0,0,0,0.35),transparent)',
              }}
            />
          </Box>

          {/* CONTENT */}

          <Box
            sx={{
              flex: 1,
              p: {
                xs: 2.5,
                md: 4,
              },

              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 900,
                color: '#fff',
                mb: 1,
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
                letterSpacing: 1,
                fontSize: '0.85rem',
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
                gap: 1.2,

                '& li': {
                  color: '#ccc',
                  lineHeight: 1.8,
                  fontSize: {
                    xs: '0.88rem',
                    md: '0.96rem',
                  },
                },

                '& li::marker': {
                  color: THEME_COLOR,
                },
              }}
            >
              {points.map((point, index) => (
                <Typography
                  key={index}
                  component="li"
                >
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
  const cardStyle = {
    bgcolor: 'rgba(255,255,255,0.03)',

    backdropFilter: 'blur(12px)',

    p: {
      xs: 3,
      md: 4,
    },

    borderRadius: '24px',

    border:
      '1px solid rgba(255,255,255,0.06)',

    transition: '0.4s ease',

    '&:hover': {
      borderColor: THEME_COLOR,
      boxShadow: `0 10px 30px ${THEME_COLOR}22`,
    },
  };

  const sectionHeaderStyle = {
    fontWeight: 900,
    mb: {
      xs: 4,
      md: 6,
    },

    borderLeft: `5px solid ${THEME_COLOR}`,

    pl: 2,

    fontSize: {
      xs: '1.5rem',
      md: '2.2rem',
    },

    textTransform: 'uppercase',
    letterSpacing: 1,
  };

  return (
    <Box
      sx={{
        bgcolor: '#050505',

        backgroundImage: `radial-gradient(circle at top,
        ${THEME_COLOR}15 0%,
        transparent 50%)`,

        color: '#fff',

        py: {
          xs: 8,
          md: 12,
        },

        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">

        {/* HERO */}

        <Box
          sx={{
            textAlign: 'center',
            mb: {
              xs: 8,
              md: 12,
            },
          }}
        >
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                mb: 3,

                fontSize: {
                  xs: '2rem',
                  md: '4rem',
                },
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
                maxWidth: 800,
                mx: 'auto',
                lineHeight: 1.8,
              }}
            >
              Passionate and experienced Tech Trainer with a strong commitment to teaching,
              having successfully guided over 1000+ students through practical and industry-relevant technology training.
            </Typography>
          </motion.div>
        </Box>

        {/* EXPERIENCE */}

        <Box
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
        >
          <Typography
            variant="h4"
            sx={sectionHeaderStyle}
          >
            Professional Experience
          </Typography>

          <TimelineItem
            title="Center Head"
            date="November 2025 – Present"
            subtitle="Green Apple Computer Education, Kumbakonam - 612 001"
            imageUrl="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=500"
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
            imageUrl="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=500"
            points={[
              'Designing and developing mobile and web applications in parallel with training commitments.',
              'Working with React, Node.js, and modern tooling for product-based solutions.',
            ]}
          />

          <TimelineItem
            title="Front-end Developer"
            date="March 2024 – November 2025"
            subtitle="BlueTick Coders Pvt. Ltd, Adambakkam, Chennai - 32"
            imageUrl="https://images.unsplash.com/photo-1581291518655-95245be4b50d?auto=format&fit=crop&q=80&w=500"
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
            imageUrl="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=500"
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
            imageUrl="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=500"
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

        <Box
          sx={{
            mt: {
              xs: 8,
              md: 12,
            },
          }}
        >
          <Typography
            variant="h4"
            sx={sectionHeaderStyle}
          >
            Education
          </Typography>

          <TimelineItem
            title="Master of Science in Computer Science"
            date="2016 – 2018"
            subtitle="Poompuhar College (Autonomous), Melaiyur, Bharathidasan University"
            imageUrl="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=500"
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
            imageUrl="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=500"
            points={[
              'Programming & Data Structures (C, C++, Java, Visual Basic, ASP, HTML)',
              'Database & Information Systems (RDBMS, Financial Accounting, MIS)',
              'Computer Architecture & Operating Systems',
              'Software Engineering, Numerical Analysis & Statistics',
              'Artificial Intelligence, Computer Graphics & Multimedia Technologies',
            ]}
          />
        </Box>

        {/* SKILLS */}

        <Box
          sx={{
            mt: {
              xs: 8,
              md: 12,
            },
          }}
        >
          <Typography
            variant="h4"
            sx={sectionHeaderStyle}
          >
            Technical Expertise
          </Typography>

          <Grid container spacing={3}>
            {[
              {
                title: 'Front-end Development',
                skills: frontSkills,
              },

              {
                title: 'Back-end Development',
                skills: backSkills,
              },

              {
                title: 'Data Visualization & BI Tools',
                skills: visualizationSkills,
              },

              {
                title: 'Workflow & Deployment Tools',
                skills: workflowSkills,
              },
            ].map((category, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                key={index}
              >
                <Paper sx={cardStyle}>
                  <Typography
                    sx={{
                      color: THEME_COLOR,
                      fontWeight: 800,
                      mb: 3,
                      textTransform: 'uppercase',
                    }}
                  >
                    {category.title}
                  </Typography>

                  {category.skills.map(
                    (skill, i) => (
                      <SkillProgress
                        key={i}
                        name={skill.name}
                        value={skill.value}
                      />
                    )
                  )}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

      </Container>
    </Box>
  );
}

export default Education;