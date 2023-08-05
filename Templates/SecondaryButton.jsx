import { Box, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@emotion/react";
import styles from "@/Styles/buttons.module.css";

const SecondaryButton = ({ children }) => {
  const theme = useTheme();
  return (
    <Box className={styles.secondaryButton}>
      <Box className={styles.secondaryButtonLayer}>
        <Typography mx={"15px"} my={"7px"} color={"primary"}>
          {children}
        </Typography>
      </Box>
      <Typography mx={"15px"} my={"7px"} color={"info"}>
        {children}
      </Typography>
    </Box>
  );
};

export default SecondaryButton;
