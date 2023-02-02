import { createTheme } from "@mui/material/styles";
import { PALETTE } from "./colorPalette";
const theme = createTheme({
  palette: {
    primary: {
      main: "#ffff",
    },
    secondary: {
      main: PALETTE.SECONDARY,
    },
  },

  typography: {
    subtitle1: {
      fontSize: "2rem",
      color: PALETTE.SECONDARY,
    },
  },
});

export { theme };
