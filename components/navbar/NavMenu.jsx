import { Box } from "@mui/material";
import React from "react";
import { useTheme } from "@emotion/react";
import styles from "@/Styles/navbar.module.css";
import SecondaryButton from "@/Templates/SecondaryButton";
import Link from "next/link";

const NavMenu = ({ pages, handleNavMenu }) => {
  const theme = useTheme();
  return (
    <Box className={styles.navMenu}>
      {pages.map((page) => (
        <Box key={page.title} onClick={handleNavMenu} m={5}>
          <Link href={page.url}>
            <SecondaryButton>{page.title}</SecondaryButton>
          </Link>
        </Box>
      ))}
    </Box>
  );
};

export default NavMenu;
