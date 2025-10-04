import React, { useState } from "react";
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
    title: "Green Apple Institue UI",
    image: "/projects_Ui/Computer_Institute_UI.png",
    link: "https://greenappleinstitute.vercel.app/",
    category: "business",
  },
  {
    id: 2,
    title: "Portfolio Website",
    image: "/projects_Ui/MyPortfolio.png",
    link: "https://muraliofficial.vercel.app/",
    category: "business",
  },
  {
    id: 3,
    title: "Snake Game",
    image: "/images/project3.png",
    link: "https://snake-game.vercel.app",
    category: "games",
  },
  {
    id: 4,
    title: "Memory Puzzle",
    image: "/images/project4.png",
    link: "https://memory-game.vercel.app",
    category: "games",
  },
  {
    id: 5,
    title: "E-Commerce App",
    image: "/images/project5.png",
    link: "https://ecommerce.vercel.app",
    category: "ecommerce",
  },
  {
    id: 6,
    title: "Production CRM",
    image: "/images/project6.png",
    link: "https://production-crm.vercel.app",
    category: "production",
  },
];

function Projects() {
  const [activeTab, setActiveTab] = useState("business");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
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
            <Tab label="Games" value="games" />
            <Tab label="E-Commerce" value="ecommerce" />
            <Tab label="Production Sites" value="production" />
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
