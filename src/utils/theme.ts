import { createTheme, Theme } from "@mui/material/styles";
import "@mui/styles";
declare module "@mui/styles/defaultTheme" {
  interface DefaultTheme extends Theme {}
}

declare module "@mui/material/styles" {
  interface Theme {}
}

declare module "@mui/styles/defaultTheme" {
  interface DefaultTheme extends Theme {}
}

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});
