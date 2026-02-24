import { Box, Button, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { heroData } from "../data/heroData";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function Hero() {
  return (
    <Box component="section" id='home'>
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", lg: "flex-start" },
            textAlign: { xs: "center", lg: "left" },
            width: "100%",
          }}
        >
          <MotionTypography
            variant="overline"
            mb={{ xs: 2, md: 3 }}
            variants={itemVariants}
          >
            {heroData.subheading}
          </MotionTypography>

          <MotionTypography
            variant="h1"
            variants={itemVariants}
            sx={{
              maxWidth: 900,
              mb: { xs: 2, md: 4 },
            }}
          >
            {heroData.name} {heroData.headlineBold}{" "}
            <Box
              component="span"
              sx={{ fontWeight: 400, color: "text.secondary" }}
            >
              {heroData.headlineLight}
            </Box>
          </MotionTypography>

          <MotionTypography
            variant="body1"
            variants={itemVariants}
            sx={{
              maxWidth: 700,
              mb: { xs: 4, md: 6 },
              px: { xs: 1, sm: 0 },
            }}
          >
            {heroData.description}
          </MotionTypography>

          <MotionBox
            variants={itemVariants}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              width: "100%",
              justifyContent: { xs: "center", lg: "flex-start" },
              alignItems: "center",
            }}
          >
            <MotionButton
              variant="contained"
              color="primary"
              href = {heroData.primaryCTAHref}
              sx={{
                width: { xs: "80%", sm: "auto" },
                minWidth: { sm: 220 },
                px: 4,
                whiteSpace: "nowrap",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {heroData.primaryCTA}
            </MotionButton>

            <MotionButton
              variant="outlined"
              href={heroData.secondaryCTAHref}
              sx={{
                width: { xs: "80%", sm: "auto" },
                minWidth: { sm: 220 },
                px: 4,
                whiteSpace: "nowrap",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {heroData.secondaryCTA}
            </MotionButton>
          </MotionBox>
        </MotionBox>
      </Container>
    </Box>
  );
}

export default Hero;
