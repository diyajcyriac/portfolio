import { Box, Typography, Stack, IconButton, Link, Card } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import { contactData } from "../data/contactData";

/* icon resolvers */
const detailIcons = {
  email: <EmailIcon fontSize="small" />,
  phone: <PhoneIcon fontSize="small" />,
  location: <LocationOnIcon fontSize="small" />,
};

const socialIcons = {
  linkedin: <LinkedInIcon />,
  github: <GitHubIcon />,
};

function ContactSection() {
  return (
    <Box
      sx={{
        // maxWidth: 1200,
        mx: "auto",
        px: 3,
      }}
      component='section'
      id='contact'
    >
      <Card
        sx={{
          borderRadius: "20px 20px 0 0",
          px: { xs: 3.5, md: 7 },
          pt: { xs: 3.5, md: 7 },
          pb: 1,
          border: "1px solid rgba(0,0,0,0.06)",
          boxShadow:
            "0 20px 50px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.04)",
          backgroundColor: "var(--dark-background)",
          color: "var(--text-primary-dark)",
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={10}
          justifyContent="space-between"
          sx={{ mb: 5 }}
        >
          {/* LEFT – TEXT */}
          <Box>
            <Typography variant="overline" color="primary.main">{contactData.label}</Typography>

            <Typography
              sx={{
                fontSize: { xs: 48, md: 96 },
                fontWeight: 500,
                lineHeight: 1,
                letterSpacing: "-0.04em",
                color: "text.darkSecondary",
                // mb: 3,
              }}
            >
              {contactData.name}
            </Typography>
          </Box>

          {/* RIGHT – DETAILS */}
          <Box sx={{ color: "text.dark" }}>
            <Stack spacing={3} sx={{ mb: 5 }}>
              {contactData.details.map((item, index) => (
                <Stack
                  key={index}
                  direction="row"
                  spacing={2}
                  alignItems="center"
                >
                  {detailIcons[item.type]}
                  {item.link ? (
                    <Link
                      href={item.link}
                      underline="none"
                      variant="body2"
                      sx={{
                        fontSize: 16,
                        color: "text.dark",
                        "&:hover": { opacity: 0.8 },
                      }}
                    >
                      {item.value}
                    </Link>
                  ) : (
                    <Typography variant="body2">{item.value}</Typography>
                  )}
                </Stack>
              ))}
            </Stack>

            <Stack direction="row" spacing={2}>
              {contactData.socials.map((social, index) => (
                <IconButton
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "text.dark",
                    border: "1px solid rgba(255,255,255,0.15)",
                    "&:hover": {
                      bgcolor: "var(--accent)",
                      color: "#000",
                    },
                  }}
                >
                  {socialIcons[social.type]}
                </IconButton>
              ))}
            </Stack>
          </Box>
        </Stack>
        {/* FOOTER */}
        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            pt: 2,
            textAlign: "center",
            color: "text.darkSecondary",
            fontSize: 14,
          }}
        >
          <Typography>
            © {new Date().getFullYear()} All rights reserved. Designed & built
            by me using React & Material UI.
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}

export default ContactSection;
