// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      paper: "#ffffff",
      default: "#fcfcf8",
      contrast: "#efefe3",
    },

    text: {
      primary: "#000000",
      secondary: "#555555",
      dark: "#f6f6f6",
      darkSecondary: "#707070",
    },

    primary: {
      main: "#c6f000",
      contrastText: "#000000",
    },

    accent: {
      main: "#ffd600",
      contrastText: "#000000",
    },

    divider: "#dddddd",
  },

  shape: {
    borderRadius: 8,
  },

  typography: {
    fontFamily: "Inter, sans-serif",

    h1: {
      fontWeight: 400,
      lineHeight: 1.1,
      letterSpacing: "-0.035em",
      color: "#000000",
      fontSize: "32px", // mobile first

      "@media (min-width:600px)": {
        fontSize: "40px",
      },

      "@media (min-width:900px)": {
        fontSize: "48px",
      },

      "@media (min-width:1200px)": {
        fontSize: "56px",
      },
    },

    body1: {
      fontSize: "16px",
      color: "#555555",
    },

    body2: {
      fontSize: "14px",
      fontWeight: 500,
    },

    overline: {
      fontSize: "12px",
      letterSpacing: "0.05em",
      fontWeight: 500,
      color: "#555555",
    },

    button: {
      fontSize: "14px",
      fontWeight: 500,
      textTransform: "none",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "14px 22px",
          borderRadius: 8,
          textTransform: "none",
          boxShadow: "none",
        },

        containedPrimary: {
          backgroundColor: "#c6f000",
          color: "#000",
          "&:hover": {
            backgroundColor: "#c6f000",
            boxShadow: "none",
          },
        },

        outlined: {
          border: "1px solid #ddd",
          color: "#000",
          "&:hover": {
            border: "1px solid #ddd",
            backgroundColor: "transparent",
          },
        },
      },
    },
  },
});

export default theme;
