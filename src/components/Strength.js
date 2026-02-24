import { useState } from "react";
import { Box, Typography, Chip, Stack } from "@mui/material";
import { strengthData } from "../data/strengthData";

function StrengthsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSection = strengthData.sections[activeIndex];

  return (
    <Box
      sx={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 3,
        pb: { xs: 8, sm: 6, md: 0 }, // extra bottom padding on smaller screens
      }}
    >
      <Box
        sx={{
          maxWidth: 1000,
          width: "100%",
          textAlign: "center",
        }}
      >
        {/* LABEL */}
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 500,
            letterSpacing: "0.08em",
            color: "var(--text-secondary)",
            mb: 4,
          }}
        >
          {strengthData.label}
        </Typography>

        {/* TAGS */}
        <Stack
          direction="row"
          justifyContent="center"
          flexWrap="wrap"
          sx={{
            mb: 5,
            rowGap: 2,      // vertical spacing between wrapped rows
            columnGap: 2,   // horizontal spacing between items
          }}
        >
          {strengthData.sections.map((section, index) => (
            <Chip
              key={index}
              label={section.title}
              clickable
              onClick={() => setActiveIndex(index)}
              sx={{
                px: 2,
                py: 1.5,
                fontSize: 14,
                fontWeight: 500,
                borderRadius: 999,
                bgcolor:
                  activeIndex === index
                    ? "var(--accent)"
                    : "#fff",
                color:
                  activeIndex === index
                    ? "#000"
                    : "var(--text-secondary)",
                border: "1px solid rgba(0,0,0,0.08)",
                boxShadow:
                  activeIndex === index
                    ? "0 10px 30px rgba(0,0,0,0.15)"
                    : "0 6px 18px rgba(0,0,0,0.08)",
                transition: "all 0.25s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.16)",
                },
              }}
            />
          ))}
        </Stack>

        {/* DESCRIPTION */}
        <Typography
          sx={{
            mx: "auto",
            maxWidth: 900,
            fontSize: { xs: 16, md: 18 },
            lineHeight: 1.7,
            color: "var(--text-secondary)",
          }}
        >
          {activeSection.description}
        </Typography>
      </Box>
    </Box>
  );
}

export default StrengthsSection;