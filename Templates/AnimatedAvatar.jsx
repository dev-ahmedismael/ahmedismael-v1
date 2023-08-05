"use client";
import { Box, useTheme } from "@mui/material";
import React from "react";
import styles from "@/Styles/avatar.module.css";
import Image from "next/image";

const AnimatedAvatar = ({ src }) => {
  const theme = useTheme();
  return (
    <div className={styles.container}>
      <Box
        className={styles.outerCircle}
        sx={{
          borderLeft: ` 3px solid ${theme.palette.info.main} `,
          borderRight: `3px solid ${theme.palette.info.main}`,
        }}
      ></Box>

      <Image
        src={src}
        alt="Avatar"
        width={100}
        height={100}
        className={styles.innerCircle}
        style={{
          border: `5px solid ${theme.palette.info.main}`,
          backgroundColor: theme.palette.primary.main,
        }}
      />
    </div>
  );
};

export default AnimatedAvatar;
