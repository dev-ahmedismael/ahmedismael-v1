"use client";
import { Box, Container, Typography, useTheme } from "@mui/material";
import React from "react";

const OfficeSection = ({ title, children }) => {
  const theme = useTheme();
  return (
    <section>
      <Box bgcolor={theme.palette.primary.main} borderRadius={2} py={7}>
        <Container>
          <Typography variant="h5" color={theme.palette.info.main} mb={7}>
            {title}
          </Typography>
          {children}
        </Container>
      </Box>
    </section>
  );
};

export default OfficeSection;
