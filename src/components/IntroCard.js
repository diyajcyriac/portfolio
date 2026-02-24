import { Box, Typography, Stack, Card, IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faLocationDot,
  faFileLines,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { introData } from "../data/introData";

/* motion wrappers */
const MotionBox = motion(Box);
const MotionCard = motion(Card);
const MotionStack = motion(Stack);

/* icon resolver */
const iconMap = {
  "graduation-cap": faGraduationCap,
  "location-dot": faLocationDot,
  "file-lines": faFileLines,
  phone: faPhone,
  linkedin: faLinkedin,
  github: faGithub,
};

/* animation variants */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemFade = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function IntroCard() {
  return (
    <MotionBox
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp}
      sx={{
        maxWidth: 1200,
        mx: "auto",
        px: 3,
      }}
    >
      <MotionCard
        elevation={0}
        variants={fadeUp}
        sx={{
          borderRadius: 2,
          p: { xs: 3.5, md: 7 },
          pb: "75px",
          border: "1px solid",
          borderColor: "divider",
          boxShadow:
            "0 20px 50px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.04)",
        }}
      >
        {/* LABEL */}
        <Typography
          variant="overline"
          sx={{ display: "block", mb: 4 }}
        >
          {introData.label}
        </Typography>

        {/* CONTENT GRID */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.2fr 0.7fr" },
            gap: { xs: 5, md: 12 },
          }}
        >
          {/* LEFT TEXT */}
          <Typography
            sx={{
              fontSize: 18,
              lineHeight: 1.6,
              color: "text.secondary",
            }}
          >
            {introData.left.text}
          </Typography>

          {/* RIGHT COLUMN */}
          <Stack spacing={4} justifyContent="space-between">
            {/* DETAILS LIST */}
            <MotionStack
              spacing={2.5}
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {introData.right.listItems.map((item, index) => (
                <MotionStack
                  key={index}
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  variants={itemFade}
                >
                  <Box
                    sx={{
                      width: 20,
                      display: "flex",
                      justifyContent: "center",
                      color: "text.secondary",
                      fontSize: 18,
                    }}
                  >
                    <FontAwesomeIcon icon={iconMap[item.icon]} />
                  </Box>

                  <Typography
                    sx={{
                      fontSize: 17,
                      lineHeight: 1.2,
                      letterSpacing: "-0.035em",
                      color: "text.secondary",
                    }}
                  >
                    {item.value}
                  </Typography>
                </MotionStack>
              ))}
            </MotionStack>

            {/* SOCIAL ICONS */}
            <Stack direction="row" spacing={2}>
              {introData.right.iconItems.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconButton
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.title}
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      border: "1px solid",
                      borderColor: "divider",
                      color: "text.secondary",
                      fontSize: 15,
                      transition: "all 0.25s ease",
                      "&:hover": {
                        bgcolor: "primary.main",
                        color: "primary.contrastText",
                      },
                    }}
                  >
                    <FontAwesomeIcon icon={iconMap[item.icon]} />
                  </IconButton>
                </motion.div>
              ))}
            </Stack>
          </Stack>
        </Box>
      </MotionCard>
    </MotionBox>
  );
}
