import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    secondary: {
      main: "#4dd672",
    },
  },
  typography: {
    body1: {
      fontFamily: "Source Code Pro",
      fontWeight: 400,
    },
    body2: {
      fontFamily: "Source Code Pro",
      fontSize: "1.3rem",
      fontWeight: 200,
    },
    button: {
      fontFamily: "'Press Start 2P'",
      color: "#4dd672",
    },
    h1: {
      fontFamily: "Source Code Pro",
    },
    h2: {
      fontFamily: "Source Code Pro",
    },
    h3: {
      fontFamily: "Source Code Pro",
      fontWeight: 500,
    },
    h4: {
      fontFamily: "Source Code Pro",
    },
    h5: {
      fontFamily: "Source Code Pro",
    },
    h6: {
      fontFamily: "Source Code Pro",
    },
    subtitle1: {
      fontFamily: "'Press Start 2P'",
    },
    subtitle2: {
      fontFamily: "'Press Start 2P'",
      fontSize: "0.75rem",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
