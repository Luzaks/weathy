import { createTheme, createStyles } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { lime } from "@mui/material/colors";
import "@fontsource/abhaya-libre/400.css";

/* Global styles */

export const principalTheme = createTheme({
  palette: {
    primary: {
      main: lime[500],
      contrastText: "#000",
    },
    secondary: {
      main: "#E44D69",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: `"abhaya-libre", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

export const GlobalStyles = () => {
  const useStyles = makeStyles(() =>
    createStyles({
      "@global": {
        html: {
          "-webkit-font-smoothing": "antialiased",
          "-moz-osx-font-smoothing": "grayscale",
          height: "100%",
          width: "100%",
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
        "*, *::before, *::after": {
          boxSizing: "border-box",
        },
        body: {
          height: "100%",
          width: "100%",
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
        "#root": {
          height: "100%",
          width: "100%",
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
      },
    })
  );
  useStyles();
  return null;
};

/* Colors */

export const primaryColor = "#000";

/* Locations Data */

export const locations = [
  "Dallas",
  "Atlanta",
  "Denver",
  "Seattle",
  "Boston",
  "Bangalore",
];
