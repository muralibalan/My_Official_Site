import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Tooltip,
  Tabs,
  Tab,
  MenuItem,
  Select,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import VisibilityIcon from "@mui/icons-material/Visibility";

// Sample project data with category
const projects = [
  {
    id: 1,
    title: "Variable Validation",
    image: "/projects_Ui/variableVali.png",
    link: "/variablegame", 
    category: "games",
    isInternal: true, 
  },
  {
    id: 2, // ID duplicate fix panni 2 aakiruken boss
    title: "MERN Stack Snake Game",
    image: "/projects_Ui/mernSnake.png",
    link: "/mernsnake", 
    category: "games",
    isInternal: true, 
  },
  {
    id: 3,
    title: "Loop Logic",
    image: "/projects_Ui/loopGame.png",
    link: "/loopgame", 
    category: "games",
    isInternal: true, 
  },
  {
    id: 4,
    title: "E-Commerce App",
    image: "/images/project5.png",
    link: "https://ecommerce.vercel.app",
    category: "ecommerce",
  },
  {
    id: 5,
    title: "Production CRM",
    image: "/projects_Ui/crm.png",
    link: "https://production-crm.vercel.app",
    category: "production",
  },
  {
    id: 6,
    title: "Green Apple Computer Education",
    image: "/projects_Ui/greenApple.png",
    link: "https://www.greenapple.co.in/",
    category: "business",
  },
  {
    id: 7,
    title: "ProgramPARK",
    image: "/projects_Ui/programPark.png",
    link: "https://www.programpark.in/",
    category: "business",
  },
  {
    id: 8,
    title: "Metrozo Ads",
    image: "/projects_Ui/Mdp.png",
    link: "https://mdpsite.vercel.app/",
    category: "business",
  },
  {
    id: 9,
    title: "Job Assigner Web Application",
    image: "/projects_Ui/jobassigner.png",
    link: "https://production-crm.vercel.app",
    category: "production",
  },
  {
    id: 10,
    title: "Green Apple Institue UI",
    image: "/projects_Ui/Computer_Institute_UI.png",
    link: "https://greenappleinstitute.vercel.app/",
    category: "business",
  },
  {
    id: 11,
    title: "Portfolio Website",
    image: "/projects_Ui/MyPortfolio.png",
    link: "https://muraliofficial.vercel.app/",
    category: "business",
  },
  {
    id: 12,
    title: "Array Accessing",
    image: "/projects_Ui/arrayGame.png",
    link: "/arraygame", 
    category: "games",
    isInternal: true, 
  },
  {
    id: 13,
    title: "Sort Accessing",
    image: "/projects_Ui/sortGame.png",
    link: "/sortgame", 
    category: "games",
    isInternal: true, 
  },
  {
    id: 14,
    title: "HOF Game",
    image: "/projects_Ui/HOF.png",
    link: "/hof", 
    category: "games",
    isInternal: true, 
  },
  {
    id: 15,
    title: "Flames Logic Game",
    image: "/projects_Ui/flames.png",
    link: "/flames", 
    category: "games",
    isInternal: true, 
  },
  {
    id: 16,
    title: "Timer Methods for Js",
    image: "/projects_Ui/timer.png",
    link: "/timergame", 
    category: "games",
    isInternal: true, 
  },
  {
    id: 17,
    title: "Condition Game",
    image: "/projects_Ui/condition.png",
    link: "/conditiongame", 
    category: "games",
    isInternal: true, 
  },
  {
    id: 18,
    title: "Function Game",
    image: "/projects_Ui/jsFunction.png",
    link: "/functiongame", 
    category: "games",
    isInternal: true, 
  },
  {
    id: 19,
    title: "Regex Game",
    image: "/projects_Ui/regex.png",
    link: "/regex", 
    category: "games",
    isInternal: true, 
  },
  {
    id: 20,
    title: "Event Loop Game",
    image: "/projects_Ui/eventloop.png",
    link: "/eventloop", 
    category: "games",
    isInternal: true, 
  },
  {
    id: 21,
    title: "Quiz Game",
    image: "/projects_Ui/quizstill.png",
    link: "/quizgame", 
    category: "games",
    isInternal: true, 
  },
  {
    id: 22,
    title: "+1 Mega Quiz",
    image: "/projects_Ui/still11th.png",
    link: "/stateboard", 
    category: "games",
    isInternal: true, 
  },
  {
    id: 23,
    title: "Learn English",
    image: "/projects_Ui/englishgame.png",
    link: "/learneng", 
    category: "games",
    isInternal: true, 
  },
];

function Projects() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // ✅ URL search params vachu tab state maintain panrom
  const [searchParams, setSearchParams] = useSearchParams();
  
  // URL-la parameter illana default-aa 'business' edukum
  const activeTab = searchParams.get("tab") || "business";

  const handleChangeTab = (newValue) => {
    // Tab maarும்போது URL query string-ah update pannum (e.g., /projects?tab=games)
    setSearchParams({ tab: newValue });
  };

  const handleViewProject = (project) => {
    if (project.isInternal) {
      navigate(project.link);
    } else {
      window.open(project.link, "_blank");
    }
  };

  // Filter projects based on active tab
  const filteredProjects = projects.filter(
    (project) => project.category === activeTab
  );

  return (
    <Box
      sx={{
        bgcolor: "#181818",
        color: "white",
        minHeight: "100vh",
        px: { xs: 2, md: 6 },
        py: 8,
      }}
    >
      {/* Heading */}
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontWeight: 800,
          mb: 4,
          textAlign: "center",
          fontSize: { xs: "2rem", md: "2.5rem" },
        }}
      >
        My Projects
      </Typography>

      {/* Tabs or Dropdown based on screen */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 6 }}>
        {isMobile ? (
          // Mobile view → Select dropdown
          <Select
            value={activeTab}
            onChange={(e) => handleChangeTab(e.target.value)}
            sx={{
              bgcolor: "#222",
              color: "white",
              borderRadius: "8px",
              minWidth: 200,
              "& .MuiSvgIcon-root": { color: "white" },
            }}
          >
            <MenuItem value="business">Business UI</MenuItem>
            <MenuItem value="games">Games</MenuItem>
            <MenuItem value="ecommerce">E-Commerce</MenuItem>
            <MenuItem value="production">Production Sites</MenuItem>
          </Select>
        ) : (
          // Desktop view → Tabs
          <Tabs
            value={activeTab}
            onChange={(e, val) => handleChangeTab(val)}
            textColor="inherit"
            TabIndicatorProps={{ style: { backgroundColor: "#09ee24ff" } }}
          >
            <Tab label="Business UI" value="business" />
            <Tab label="Production Sites" value="production" />
            <Tab label="Games" value="games" />
            <Tab label="E-Commerce" value="ecommerce" />
          </Tabs>
        )}
      </Box>

      {/* Project Cards */}
      <Grid container spacing={4} justifyContent="center">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <Card
                sx={{
                  bgcolor: "#222",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: 3,
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    color: "white",
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {project.title}
                  </Typography>
                  <Tooltip title="View Project">
                    <IconButton
                      onClick={() => handleViewProject(project)}
                      sx={{ color: "#09ee24ff" }}
                    >
                      <VisibilityIcon />
                    </IconButton>
                  </Tooltip>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="h6" sx={{ color: "#bbb", mt: 4 }}>
            No projects available in this category.
          </Typography>
        )}
      </Grid>
    </Box>
  );
}

export default Projects;