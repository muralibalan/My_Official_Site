import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    link: "/variablegame", // Inga internal route path-ah kudukkuran 
    category: "games",
    isInternal: true, // Idhu internal route-nu identify panna oru flag
  },
  {
    id: 2,
    title: "Snake Game",
    image: "/projects_Ui/snake.png",
    link: "https://snake-game.vercel.app",
    category: "games",
  },
  {
    id: 3,
    title: "Loop Logic",
    image: "/projects_Ui/loopGame.png",
    link: "/loopgame", // Inga internal route path-ah kudukkuran 
    category: "games",
    isInternal: true, // Idhu internal route-nu identify panna oru flag
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
    link: "/arraygame", // Inga internal route path-ah kudukkuran 
    category: "games",
    isInternal: true, // Idhu internal route-nu identify panna oru flag
  },
  {
    id: 13,
    title: "Sort Accessing",
    image: "/projects_Ui/sortGame.png",
    link: "/sortgame", // Inga internal route path-ah kudukkuran 
    category: "games",
    isInternal: true, // Idhu internal route-nu identify panna oru flag
  },
];

function Projects() {
  const [activeTab, setActiveTab] = useState("business");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // 3. View handle panna puthiya function
  const handleViewProject = (project) => {
    if (project.isInternal) {
      // Unga app-kullae irukra component-ku pogum
      navigate(project.link);
    } else {
      // External website-ku puthu tab-la open aagum
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
            onChange={(e) => setActiveTab(e.target.value)}
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
            onChange={handleChange}
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
                      onClick={() => window.open(project.link, "_blank")}
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
