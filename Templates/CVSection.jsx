"use client";
import { Box, Container, Typography, useTheme } from "@mui/material";
import React from "react";

const CVSection = ({ title, children }) => {
  const theme = useTheme();
  return (
    <Box
      border={`2px solid ${theme.palette.info.main}`}
      borderRadius={1}
      position={"relative"}
      mb={7}
    >
      <Typography
        bgcolor={theme.palette.secondary.main}
        color={theme.palette.info.main}
        fontSize={"x-large"}
        position={"absolute"}
        top={-20}
        left={10}
        px={1}
      >
        {title}
      </Typography>
      <Container>
        <Box py={3}>{children}</Box>
      </Container>
    </Box>
  );
};

export default CVSection;
