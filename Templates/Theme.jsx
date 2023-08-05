"use client";
import { red } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

const Theme = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: { main: "#091b29" },
      secondary: { main: "#122e43" },
      info: { main: "#15a8d4" },
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
