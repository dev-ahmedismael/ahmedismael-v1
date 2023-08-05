"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material";

const SectionTitle = ({ text1, text2 }) => {
  const theme = useTheme();
  return (
    <Box display={"flex"} justifyContent={"center"} pb={7}>
      <Typography
        variant="h3"
        textAlign={"center"}
        mr={2}
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            lg: "block",
            xl: "block",
          },
        }}
      >
        {text1}
      </Typography>
      <Typography
        variant="h3"
        textAlign={"center"}
        color={theme.palette.info.main}
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            lg: "block",
            xl: "block",
          },
        }}
      >
        {text2}
      </Typography>
      <Typography
        variant="h5"
        textAlign={"center"}
        mr={1}
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
            xl: "none",
          },
        }}
      >
        {text1}
      </Typography>
      <Typography
        variant="h5"
        textAlign={"center"}
        color={theme.palette.info.main}
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
            xl: "none",
          },
        }}
      >
        {text2}
      </Typography>
    </Box>
  );
};

export default SectionTitle;
