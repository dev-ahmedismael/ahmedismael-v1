import { Box, Typography } from "@mui/material";
import React from "react";
import Logo from "@/public/images/dvd_logo.png";
import Image from "next/image";
import styles from "@/Styles/dvd.module.css";

const DVDHeader = ({ type }) => {
  return (
    <Box
      className={styles.dvdHeader}
      p={1}
      borderBottom={"2px solid white"}
      display={"flex"}
      justifyContent={"space-between"}
    >
      <Image src={Logo} alt="Logo" width={60} height={60} />
      <Typography variant="h6">{type}</Typography>
    </Box>
  );
};

export default DVDHeader;
