// src/pages/CaseTemplate.jsx

import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Divider,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { projectData } from "../../data/projectData";

const CaseTemplate = () => {
  const { id } = useParams(); // slug

  const project = projectData.projects.find(
    (p) => p.slug === id
  )?.data;

  if (!project) {
    return (
      <Container sx={{ py: 20 }}>
        <Typography variant="h4">Project not found</Typography>
      </Container>
    );
  }

  return (
    <Box sx={{ backgroundColor: "background.default" }}>
      {/* HERO */}
      <Container maxWidth="lg" sx={{ pt: 16, pb: 10 }}>
        <Typography variant="overline" gutterBottom>
          Case Study
        </Typography>

        <Typography variant="h1" sx={{ mb: 3 }}>
          {project.title}
        </Typography>

        <Typography variant="body1" sx={{ maxWidth: 640, mb: 6 }}>
          {project.subtitle}
        </Typography>

        {project.link && (
          <Button variant="contained" color="primary" href={project.link} target="_blank">
            View Live Product
          </Button>
        )}
      </Container>

      {/* HERO IMAGE */}
      <Box
        component="img"
        src={project.heroImage}
        alt={project.title}
        sx={{
          width: "100%",
          height: { xs: 300, md: 600 },
          objectFit: "cover",
        }}
      />

      <Divider />

      {/* META INFO */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Typography variant="overline">Client</Typography>
            <Typography variant="body2">{project.client}</Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="overline">Year</Typography>
            <Typography variant="body2">{project.year}</Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="overline">Role</Typography>
            <Typography variant="body2">{project.role}</Typography>
          </Grid>
        </Grid>
      </Container>

      <Divider />

      {project.sections.map((section, index) => (
        <Container key={index} maxWidth="lg" sx={{ py: 6 }}>
          <Grid container spacing={10} alignItems="center">
            {/* IMAGE */}
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={section.image}
                alt={section.title}
                sx={{
                  width: "100%",
                  borderRadius: 3,
                  boxShadow: 4,
                }}
              />
            </Grid>

            {/* TEXT */}
            <Grid item xs={12} md={6}>
              <Typography variant="h1" sx={{ mb: 4 }}>
                {section.title}
              </Typography>

              {section.body.split("\n").map((v, i) =>
                v.trim() ? (
                  <Typography key={i} variant="body1" sx={{ mb: 1.2 }}>
                    {v.split("**").map((text, idx) =>
                      idx % 2 === 1 ? (
                        <Box
                          key={idx}
                          component="span"
                          sx={{
                            fontWeight: 600,
                            textDecoration: "underline",
                            textDecorationStyle: "dotted",
                            textDecorationThickness: "2px",
                            textUnderlineOffset: "4px",
                            textDecorationColor: (theme) =>
                              theme.palette.primary.main,
                          }}
                        >
                          {text}
                        </Box>
                      ) : (
                        text
                      )
                    )}
                  </Typography>
                ) : (
                  <Box key={i} sx={{ height: 8 }} />
                )
              )}
            </Grid>
          </Grid>
        </Container>
      ))}
    </Box>
  );
};

export default CaseTemplate;