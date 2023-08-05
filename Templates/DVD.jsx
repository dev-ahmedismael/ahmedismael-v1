"use client";
import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import styles from "@/Styles/dvd.module.css";
import DVDHeader from "./DVDHeader";
import urlsList from "@/public/data/urlsList.json";

const DVD = ({ title, description, img, type }) => {
  const theme = useTheme();
  const url = urlsList.baseUrl;
  return (
    <Box
      className={styles.dvd}
      bgcolor={theme.palette.info.main}
      sx={{
        boxShadow: 5,
        borderTop: `10px solid ${theme.palette.info.main}`,
        borderRight: `10px solid ${theme.palette.info.main}`,
        borderBottom: `8px solid ${theme.palette.info.main}`,
        borderRadius: `5px`,
        "&:hover": {
          borderTop: `10px solid #ff1744`,
          borderRight: `10px solid #ff1744`,
          borderBottom: `8px solid #ff1744`,
          bgcolor: "#ff1744",
          cursor: "pointer",
        },
      }}
    >
      <DVDHeader type={type} />
      <Box bgcolor={theme.palette.error.main}>
        <Typography textAlign={"center"}>
          {title.toUpperCase()} - {description.toUpperCase()}
        </Typography>
      </Box>
      <img src={`${url}/${img}`} alt={title} width={"100%"} height={350} />
    </Box>
  );
};

export default DVD;
