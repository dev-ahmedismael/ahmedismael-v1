"use client";
import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";

const ServiceTemplate = ({ icon, title, description }) => {
  const theme = useTheme();
  return (
    <Box
      border={`2px solid ${theme.palette.info.main}`}
      borderRadius={"5px"}
      bgcolor={theme.palette.primary.main}
      p={2}
      sx={{
        cursor: "pointer",
        "&: hover": {
          bgcolor: theme.palette.secondary.main,
        },
      }}
    >
      <Image src={icon} alt={title} width={50} height={50} />
      <Typography variant={"h6"} color={theme.palette.info.main}>
        {title}
      </Typography>
      <Typography>{description}</Typography>
    </Box>
  );
};

export default ServiceTemplate;
