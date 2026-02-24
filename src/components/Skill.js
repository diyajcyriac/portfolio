import { useState } from "react";
import {
  Box,
  Typography,
  Chip,
  Stack,
  Card,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { skillData } from "../data/skillData";

function SkillSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const activeSection = skillData.sections[activeIndex];

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (index) => {
    setActiveIndex(index);
    handleClose();
  };

  return (
    <Box
      sx={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: 3,
        py: 8,
      }}
      component="section"
      id="skills"
    >
      {/* LABEL */}
      <Typography
        sx={{
          fontSize: 14,
          fontWeight: 500,
          letterSpacing: "0.08em",
          color: "text.secondary",
          mb: 4,
          textAlign: "center",
        }}
      >
        {skillData.label}
      </Typography>

      {/* RESPONSIVE MENU */}
      {isMobile ? (
        <>
          <Button
            variant="contained"
            onClick={handleOpen}
            endIcon={<KeyboardArrowDownIcon />}
            sx={{
              mb: 6,
              borderRadius: 999,
              px: 3,
              py: 1.2,
              backgroundColor: "var(--accent)",
              color: "#000",
              fontWeight: 500,
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              "&:hover": {
                backgroundColor: "var(--accent)",
              },
            }}
          >
            {activeSection.title}
          </Button>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            {skillData.sections.map((section, index) => (
              <MenuItem
                key={index}
                onClick={() => handleSelect(index)}
                selected={index === activeIndex}
              >
                {section.title}
              </MenuItem>
            ))}
          </Menu>
        </>
      ) : (
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          flexWrap="wrap"
          sx={{
            mb: 6,
            rowGap: 1,
            px: 2,
            maxWidth: 1000,
          }}
        >
          {skillData.sections.map((section, index) => (
            <Chip
              key={index}
              label={section.title}
              clickable
              onClick={() => setActiveIndex(index)}
              sx={{
                px: 2.5,
                py: 1.5,
                fontSize: 14,
                fontWeight: 500,
                borderRadius: 999,
                bgcolor: activeIndex === index ? "var(--accent)" : "#fff",
                color: activeIndex === index ? "#000" : "var(--text-secondary)",
                border: "1px solid rgba(0,0,0,0.08)",
                boxShadow:
                  activeIndex === index
                    ? "0 10px 30px rgba(0,0,0,0.15)"
                    : "0 6px 18px rgba(0,0,0,0.08)",
                transition: "all 0.25s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                },
              }}
            />
          ))}
        </Stack>
      )}

      {/* WHITE CARD SKILLS SECTION */}
      <Card
        sx={{
          maxWidth: 1050,
          width: "100%",
          px: { xs: 3, md: 6 },
          py: { xs: 4, md: 6 },
          borderRadius: 3,
          backgroundColor: "#ffffff",
          boxShadow: `
            0 35px 100px rgba(0,0,0,0.12),
            0 10px 30px rgba(0,0,0,0.06)
          `,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 2.5,
            maxWidth: 900,
            mx: "auto",
          }}
        >
          {activeSection.items.map((item, index) => (
            <Box
              key={index}
              sx={{
                px: 2.5,
                py: 1.25,
                minWidth: 150,
                borderRadius: 2,
                fontSize: 15,
                fontWeight: 500,
                color: "var(--text-secondary)",
                border: "1px solid rgba(0,0,0,0.08)",
                backgroundColor: "#f4f4e6",
                textAlign: "center",
                whiteSpace: "nowrap",
              }}
            >
              {item}
            </Box>
          ))}
        </Box>
      </Card>
    </Box>
  );
}

export default SkillSection;
