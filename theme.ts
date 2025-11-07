import { createTheme } from "@mui/material/styles";

export default createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0f766e", // teal
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#7c3aed", // purple
      contrastText: "#ffffff",
    },
    background: {
      default: "#f7fafc",
      paper: "#ffffff",
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: [
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    h4: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h5: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 10,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow:
            "0 6px 18px rgba(15, 118, 110, 0.06), 0 1px 3px rgba(15,118,110,0.04)",
        },
      },
    },
  },
});
