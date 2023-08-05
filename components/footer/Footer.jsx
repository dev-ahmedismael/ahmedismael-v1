"use client";
import { Box, Container, Typography, useTheme } from "@mui/material";
import React from "react";
import { PiHeartBold } from "react-icons/pi";

const Footer = () => {
  const theme = useTheme();
  return (
    <footer>
      <Box bgcolor={theme.palette.primary.main} py={7}>
        <Container>
          <Typography textAlign={"center"}>
            Copyright © 2022 - 2023 All Rights Reserved
          </Typography>
          <Typography textAlign={"center"}>
            Coded with <PiHeartBold color={theme.palette.info.main} /> by Ahmed
            Ismael
          </Typography>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
