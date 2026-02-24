import { useEffect, useRef, useState } from "react";
import { Box, Chip, Typography, useMediaQuery, useTheme } from "@mui/material";
import { experienceData } from "../data/experienceData";
import Tags from "./Tags";

export default function ExperienceCard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionsRef = useRef([]);

  const theme = useTheme();
  const isDesktop = useMediaQuery("(min-width:1024px)");

  useEffect(() => {
    if (!isDesktop) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActiveIndex(Number(e.target.dataset.index));
          }
        });
      },
      { rootMargin: "-30% 0px -50% 0px" },
    );

    sectionsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [isDesktop]);

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", px: 3, pt: 15 }} component="section" id="experience">
      <Box
        sx={{
          display: "flex",
          gap: { xs: 6, lg: 15 },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* LEFT */}
        <Box sx={{ flex: 1 }}>
          <Box sx={{ position: { md: "sticky" }, top: 120 }}>
            <Typography variant="h1">{experienceData.label}</Typography>

            {isDesktop && (
              <>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.2,
                    mt: 3,
                  }}
                >
                  {/* Company */}
                  <Typography
                    variant="overline"
                    sx={{
                      textTransform: "uppercase",
                      opacity: 0.85,
                    }}
                  >
                    {experienceData.sections[activeIndex].company}
                  </Typography>

                  {/* Role */}
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 500,
                      lineHeight: 1.2,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {experienceData.sections[activeIndex].role}
                  </Typography>

                  {/* Timeline */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#555555",
                      opacity: 0.9,
                    }}
                  >
                    {experienceData.sections[activeIndex].timeline}
                  </Typography>

                  {/* Skills */}
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                      mt: 2,
                      flexWrap: "wrap",
                    }}
                  >
                    <Tags
                      items={experienceData.sections[activeIndex].skills}
                      align="flex-start"
                    />
                  </Box>
                </Box>
              </>
            )}
          </Box>
        </Box>

        {/* RIGHT */}
        <Box sx={{ flex: 1 }}>
          {experienceData.sections.map((section, i) => (
            <Box
              key={i}
              ref={(el) => (sectionsRef.current[i] = el)}
              data-index={i}
              sx={{
                mb: 8,
                p: { xs: 3, md: 4 },
                bgcolor: "background.paper",
                borderRadius: 3,
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              {!isDesktop && (
                <>
                  <Typography variant="h6">{section.company}</Typography>

                  <Typography variant="body2" mb={2}>
                    {section.timeline}
                  </Typography>

                  <Box
                    sx={{ display: "flex", gap: 1, mb: 2, flexWrap: "wrap" }}
                  >
                    {section.skills.map((skill, j) => (
                      <Chip
                        key={j}
                        label={skill}
                        sx={{
                          bgcolor: "#dbe5f4",
                          color: "#153a71",
                        }}
                      />
                    ))}
                  </Box>
                </>
              )}

              {section.values.map((v, j) => (
                <Box
                  key={j}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 1.2,
                    mb: 1.2,
                  }}
                >
                  {/* <StarRoundedIcon
                    sx={{
                      color: "primary.main",
                      fontSize: 18,
                      mt: "2px",
                      flexShrink: 0,
                    }}
                  /> */}

                  <Typography variant="body1">
                    {v.split("**").map((text, i) =>
                      i % 2 === 1 ? (
                        <Box
                          key={i}
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
                      ),
                    )}
                  </Typography>
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
