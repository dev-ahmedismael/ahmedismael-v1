"use client";
import { Box, Container } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material";

const Section = ({ isLightBg, children }) => {
  const theme = useTheme();
  return (
    <section>
      <Box
        bgcolor={
          isLightBg ? theme.palette.secondary.main : theme.palette.primary.main
        }
        py={7}
      >
        <Container>{children}</Container>
      </Box>
    </section>
  );
};

export default Section;
