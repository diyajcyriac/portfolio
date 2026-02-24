import { useMemo, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  Chip,
  IconButton,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Link } from "react-router-dom";
import { projectData } from "../data/projectData";
import Tags from "./Tags";

function FeaturedProjects() {
  const [activeTag, setActiveTag] = useState("All");

  // Collect unique skill tags
  const allTags = useMemo(() => {
    const tags = projectData.projects.flatMap((p) => p.skills);
    return ["All", ...new Set(tags)];
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    if (activeTag === "All") return projectData.projects;
    return projectData.projects.filter((project) =>
      project.skills.includes(activeTag),
    );
  }, [activeTag]);

  return (
    <section className="section-wrapper" id='projects'>
      <Box>
        {/* HEADER */}
        <Box
          sx={{
            maxWidth: 1300,
            mx: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 4,
            gap: 3,
            flexWrap: "wrap",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              textAlign: "center",
              mb: "30px",
              mx: "auto",
            }}
          >
            My Featured Projects
          </Typography>

          {/* <Button
            component={Link}
            to="/projects"
            variant="contained"
            endIcon={<ArrowOutwardIcon />}
            disableElevation
            sx={{
              backgroundColor: "var(--accent)",
              color: "#000",
              px: "22px",
              py: "14px",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 500,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#000",
                color: "#fff",
              },
            }}
          >
            View All Works
          </Button> */}
        </Box>

        {/* FILTER TAGS */}
        <Box
          sx={{
            maxWidth: 1300,
            mx: "auto",
            mb: 6,
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 1.5,
          }}
        >
          {allTags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              onClick={() => setActiveTag(tag)}
              sx={{
                px: 1.5,
                fontSize: "14px",
                fontWeight: 500,
                borderRadius: "999px",
                bgcolor:
                  activeTag === tag ? "var(--accent)" : "var(--card-bg-color)",
                color: activeTag === tag ? "#000" : "var(--text-color)",
                cursor: "pointer",
                "&:hover": {
                  bgcolor:
                    activeTag === tag
                      ? "var(--accent)"
                      : "var(--card-hover-bg, #1a1a1a)",
                },
              }}
            />
          ))}
        </Box>

        {/* PROJECT GRID */}
        <Box
          sx={{
            maxWidth: 1300,
            mx: "auto",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 4,
          }}
        >
          {filteredProjects.map((project, i) => (
            <Card
              key={project.slug}
              sx={{
                bgcolor: "background.paper",
                borderRadius: 4,
                overflow: "hidden",
                position: "relative",
                transition: "transform 0.25s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                },
              }}
            >
              {/* IMAGE */}
              <CardMedia
                component="img"
                image={project.data.heroImage}
                alt={project.data.title}
                sx={{
                  height: { xs: 260, md: 360 },
                  objectFit: "cover",
                }}
              />

              {/* CONTENT */}
              <Box sx={{ p: 3 }}>
                <Typography variant="h6" fontWeight={500}>
                  {project.data.title}
                </Typography>

                {/* BOTTOM ROW */}
                <Box
                  sx={{
                    mt: 3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 2,
                  }}
                >
                  {/* 90% Skills */}
                  <Box sx={{ flex: 9 }}>
                    <Tags items={project.data.skills} align="flex-start" />
                  </Box>

                  {/* 10% Button */}
                  <Box
                    sx={{
                      flex: 1,
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <IconButton
                      component={Link}
                      to={`/projects/${project.slug}`}
                      sx={{
                        bgcolor: "var(--accent)",
                        color: "#000",
                        width: 48,
                        height: 48,
                        "&:hover": {
                          bgcolor: "#000",
                          color: "primary.main",
                        },
                      }}
                    >
                      <ArrowOutwardIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
    </section>
  );
}

export default FeaturedProjects;
