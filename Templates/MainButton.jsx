import { Box, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@emotion/react";
import styles from "@/Styles/buttons.module.css";

const MainButton = ({ children }) => {
  const theme = useTheme();
  return (
    <Box className={styles.mainButton}>
      <Box className={styles.mainButtonLayer}>
        <Typography mx={"15px"} my={"7px"} color={"info"}>
          {children}
        </Typography>
      </Box>
      <Typography mx={"15px"} my={"7px"} color={"primary"}>
        {children}
      </Typography>
    </Box>
  );
};

export default MainButton;
