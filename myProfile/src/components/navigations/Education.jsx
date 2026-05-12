import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Container,
} from '@mui/material';
import { motion } from 'framer-motion';

const THEME_COLOR = '#09ee24ff';

// ---------------- ANIMATIONS ----------------

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

// ---------------- SKILL DATA ----------------

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
  <Box sx={{ mb: 3 }}>
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
          fontWeight: 700,
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
        height: 8,
        bgcolor: '#222',
        borderRadius: 10,
        overflow: 'hidden',
      }}
    >
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        style={{
          height: '100%',
          background: THEME_COLOR,
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
}) => (
  <Box
    component={motion.div}
    variants={fadeInUp}
    sx={{
      position: 'relative',
      borderLeft: `2px solid ${THEME_COLOR}33`,
      pl: { xs: 3, md: 5 },
      mb: 6,
      pb: 2,

      '&::before': {
        content: '""',
        position: 'absolute',
        left: -10,
        top: 45,
        width: 18,
        height: 18,
        borderRadius: '50%',
        background: '#111',
        border: `4px solid ${THEME_COLOR}`,
        boxShadow: `0 0 20px ${THEME_COLOR}`,
      },
    }}
  >
    <Paper
      sx={{
        bgcolor: 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(10px)',
        borderRadius: '24px',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.05)',
        transition: '0.4s ease',

        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: `0 0 30px ${THEME_COLOR}22`,
          borderColor: `${THEME_COLOR}55`,
        },
      }}
    >
      {/* SAME FLEX LAYOUT */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
          alignItems: 'stretch',
          minHeight: 320,
        }}
      >
        {/* LEFT CONTENT */}
        <Box
          sx={{
            flex: 1,
            p: { xs: 3, md: 5 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {/* TITLE */}
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

          {/* DATE */}
          <Typography
            sx={{
              color: THEME_COLOR,
              fontWeight: 800,
              mb: 1.5,
              letterSpacing: 1,
              fontSize: '0.95rem',
            }}
          >
            {date}
          </Typography>

          {/* SUBTITLE */}
          <Typography
            sx={{
              color: '#aaa',
              mb: 3,
              fontWeight: 600,
              fontSize: '1rem',
              lineHeight: 1.7,
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
              gap: 1.5,

              '& li': {
                color: '#ccc',
                lineHeight: 1.9,
                fontSize: '15px',
                paddingLeft: '5px',
              },

              '& li::marker': {
                color: THEME_COLOR,
                fontSize: '18px',
              },
            }}
          >
            {points.map((point, index) => (
              <motion.li
                key={index}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
              >
                {point}
              </motion.li>
            ))}
          </Box>
        </Box>

        {/* RIGHT IMAGE */}
        <Box
          sx={{
            width: {
              xs: '100%',
              md: 340,
            },
            minHeight: {
              xs: 260,
              md: '100%',
            },
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <motion.img
            whileHover={{
              scale: 1.08,
            }}
            transition={{
              duration: 0.5,
            }}
            src={imageUrl}
            alt={title}
            onError={(e) => {
              e.target.src =
                'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop';
            }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              position: 'absolute',
              inset: 0,
            }}
          />

          {/* OVERLAY */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.1))',
            }}
          />
        </Box>
      </Box>
    </Paper>
  </Box>
);

// ---------------- MAIN COMPONENT ----------------

function Education() {
  const cardStyle = {
    bgcolor: '#181818',
    p: 4,
    borderRadius: '24px',
    border: '1px solid rgba(255,255,255,0.05)',
    transition: '0.4s ease',

    '&:hover': {
      transform: 'translateY(-10px)',
      borderColor: THEME_COLOR,
      boxShadow: `0 0 25px ${THEME_COLOR}22`,
    },
  };

  return (
    <Box
      sx={{
        bgcolor: '#0a0a0a',
        color: '#fff',
        py: 12,
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">

        {/* HEADER */}

        <Box
          sx={{
            textAlign: 'center',
            mb: 12,
          }}
        >
          <motion.div
            initial={{
              opacity: 0,
              y: -30,
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
                  xs: '2.3rem',
                  md: '4.5rem',
                },
              }}
            >
              QUALIFICATIONS &{' '}
              <span
                style={{
                  color: THEME_COLOR,
                  textShadow: `0 0 25px ${THEME_COLOR}`,
                }}
              >
                EXPERIENCE
              </span>
            </Typography>

            <Typography
              sx={{
                color: '#888',
                maxWidth: 900,
                mx: 'auto',
                lineHeight: 1.8,
                fontSize: '1.05rem',
              }}
            >
              Passionate and experienced Tech Trainer with a strong commitment
              to teaching, having successfully guided over 1000+ students
              through practical and industry-relevant technology training.
            </Typography>
          </motion.div>
        </Box>

        {/* EXPERIENCE */}

        <Box
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 900,
              mb: 8,
              borderLeft: `6px solid ${THEME_COLOR}`,
              pl: 3,
              textTransform: 'uppercase',
              textShadow: `0 0 20px ${THEME_COLOR}55`,
            }}
          >
            Professional Experience
          </Typography>

          {/* GREEN APPLE */}

          <TimelineItem
            title="Center Head"
            date="November 2025 – Present"
            subtitle="Green Apple Computer Education, Kumbakonam"
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

          {/* PROGRAM PARK */}

          <TimelineItem
            title="Apps & Web Developer"
            date="November 2025 – Present"
            subtitle="ProgramPark Technologies Pvt. Ltd Chennai"
            imageUrl="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=500"
            points={[
              'Designing and developing mobile and web applications.',
              'Working with React, Node.js, and modern tooling.',
            ]}
          />

          {/* BLUETICK */}

          <TimelineItem
            title="Front-end Developer"
            date="March 2024 – November 2025"
            subtitle="BlueTick Coders Pvt. Ltd, Chennai"
            imageUrl="https://images.unsplash.com/photo-1581291518655-95245be4b50d?auto=format&fit=crop&q=80&w=500"
            points={[
              'Developed responsive web applications using React and REST APIs.',
              'Collaborated on UI components and performance optimization.',
              'Implemented reusable front-end components aligned with UX standards.',
            ]}
          />

          {/* SOFT TECH */}

          <TimelineItem
            title="Center Head (Training Division)"
            date="March 2024 – November 2025"
            subtitle="SoftTechAshram, Chennai"
            imageUrl="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=500"
            points={[
              'Designed and delivered training programs for 150+ students.',
              'Mentored learners with personalized guidance.',
              'Conducted code reviews and quality improvements.',
              'Aligned curriculum with industry trends.',
              'Enhanced practical skills through projects.',
            ]}
          />

          {/* TRAINER */}

          <TimelineItem
            title="C, Core Java, HTML, CSS, JDBC Trainer"
            date="June 2022 – January 2023"
            subtitle="Green Apple, Mayiladuthurai"
            imageUrl="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=500"
            points={[
              'Delivered training sessions for 30+ students.',
              'Developed engaging course materials and exercises.',
              'Managed a team of 8 developers.',
              'Guided students in building applications.',
            ]}
          />
        </Box>

        {/* EDUCATION */}

        <Typography
          variant="h4"
          sx={{
            fontWeight: 900,
            mt: 12,
            mb: 8,
            borderLeft: `6px solid ${THEME_COLOR}`,
            pl: 3,
          }}
        >
          Education
        </Typography>

        <TimelineItem
          title="Master of Science in Computer Science"
          date="2016 – 2018"
          subtitle="Poompuhar College (Autonomous)"
          imageUrl="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=500"
          points={[
            'Programming & Web Technologies.',
            'Algorithms & Advanced Architecture.',
            'Artificial Intelligence & Machine Learning.',
            'Cloud Computing & Distributed Systems.',
            'Wireless Sensor Networks & Image Processing.',
          ]}
        />

        <TimelineItem
          title="Bachelor of Computer Applications"
          date="2013 – 2016"
          subtitle="Poompuhar College (Autonomous)"
          imageUrl="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=500"
          points={[
            'Programming & Data Structures.',
            'Database & Information Systems.',
            'Operating Systems & Architecture.',
            'Software Engineering & Statistics.',
            'AI, Graphics & Multimedia Technologies.',
          ]}
        />

        {/* SKILLS */}

        <Typography
          variant="h4"
          sx={{
            fontWeight: 900,
            mt: 12,
            mb: 6,
            borderLeft: `6px solid ${THEME_COLOR}`,
            pl: 3,
          }}
        >
          Technical & Training Skills
        </Typography>

        <Grid container spacing={4}>
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
          ].map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper sx={cardStyle}>
                <Typography
                  variant="h6"
                  sx={{
                    color: THEME_COLOR,
                    fontWeight: 800,
                    mb: 4,
                  }}
                >
                  {item.title}
                </Typography>

                {item.skills.map((skill, i) => (
                  <SkillProgress
                    key={i}
                    name={skill.name}
                    value={skill.value}
                  />
                ))}
              </Paper>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
}

export default Education;