import { useState, useEffect, useRef } from "react";
import {
  Box,
  Button,
  Typography,
  List,
  ListItem,
  Link,
  ThemeProvider,
} from "@mui/material";
import theme from "../theme";
import { navbarData } from "../data/navbarData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  /* Scroll direction detection (same behavior, cleaner logic) */
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY.current && currentScroll > 80) {
        setVisible(false); // scrolling down
      } else {
        setVisible(true); // scrolling up
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          transform: visible ? "translateY(0)" : "translateY(-110%)",
          opacity: visible ? 1 : 0,
          transition: "transform 0.35s ease, opacity 0.35s ease",
          animation: "navbar-enter 0.6s ease",
          "@keyframes navbar-enter": {
            from: { opacity: 0, transform: "translateY(-20px)" },
            to: { opacity: 1, transform: "translateY(0)" },
          },
        }}
      >
        <Box sx={{ p: "20px 24px" }}>
          <Box
            sx={{
              maxWidth: 1200,
              mx: "auto",
              bgcolor: "background.paper",
              borderRadius: 2,
              p: "14px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
              position: "relative",
            }}
          >
            {/* Logo */}
            <Link
              href={navbarData.logo.href}
              underline="none"
              color="text.primary"
            >
              <Typography variant="h6">{navbarData.logo.label}</Typography>
            </Link>

            {/* Hamburger */}
            <Box
              onClick={() => setOpen((prev) => !prev)}
              sx={{
                display: { xs: "flex", md: "none" },
                flexDirection: "column",
                gap: "5px",
                cursor: "pointer",
              }}
            >
              {[0, 1, 2].map((i) => (
                <Box
                  key={i}
                  sx={{
                    width: 22,
                    height: 2,
                    bgcolor: "text.primary",
                    transition: "0.3s",
                    ...(open &&
                      (i === 0
                        ? { transform: "rotate(45deg) translate(5px,5px)" }
                        : i === 1
                          ? { opacity: 0 }
                          : {
                              transform: "rotate(-45deg) translate(5px,-5px)",
                            })),
                  }}
                />
              ))}
            </Box>

            {/* Links */}
            <List
              sx={{
                display: "flex",
                gap: { xs: 2, md: 4 },
                flexDirection: { xs: "column", md: "row" },
                position: { xs: "absolute", md: "static" },
                top: { xs: "calc(100% + 12px)", md: "auto" },
                left: 0,
                right: 0,
                bgcolor: { xs: "background.paper", md: "transparent" },
                borderRadius: { xs: 2, md: 0 },
                p: { xs: 2, md: 0 },
                boxShadow: {
                  xs: "0 20px 40px rgba(0,0,0,0.08)",
                  md: "none",
                },
                opacity: { xs: open ? 1 : 0, md: 1 },
                pointerEvents: { xs: open ? "auto" : "none", md: "auto" },
                transform: {
                  xs: open ? "translateY(0)" : "translateY(-10px)",
                  md: "none",
                },
                transition: "0.25s",
              }}
            >
              {navbarData.links.map(({ label, href }) => (
                <ListItem key={label} sx={{ p: 0 }}>
                  <Link
                    href={href}
                    target={label === "Resume" ? "_blank" : "_self"}
                    rel={label === "Resume" ? "noopener noreferrer" : undefined}
                    underline="none"
                    color="text.secondary"
                    onClick={() => setOpen(false)}
                    sx={{
                      typography: "body2",
                      "&:hover": { color: "text.primary" },
                    }}
                  >
                    {label}
                  </Link>
                </ListItem>
              ))}
            </List>

            {/* Desktop CTA */}
            <Button
              component="a"
              href={navbarData.cta.href}
              sx={{
                display: { xs: "none", md: "inline-flex" },
                bgcolor: "background.contrast",
                borderRadius: 999,
                px: 2,
                py: 1,
                color: "text.primary",
                "&:hover": { bgcolor: "#e5e5e5" },
              }}
            >
              {navbarData.cta.label}
            </Button>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
