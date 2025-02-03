import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#b71c1c", // Deep red (blood theme)
    },
    secondary: {
      main: "#ffffff", // White for contrast
    },
    background: {
      default: "#f8f9fa", // Light gray for background
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h6: {
      color: "#ffffff", // Navbar title color
    },
    button: {
      textTransform: "none", // Avoid uppercase text
    },
  },
});

export default theme;
