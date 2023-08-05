import React from "react";
import Section from "@/Templates/Section";
import SectionTitle from "@/Templates/SectionTitle";
import { SiCplusplus } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { SiLaravel } from "react-icons/si";
import { Box, Typography } from "@mui/material";
import styles from "@/Styles/languages.module.css";

const HomeSecTwo = () => {
  const langs = [
    <SiCplusplus />,
    <SiPython />,
    <SiHtml5 />,
    <SiCss3 />,
    <SiBootstrap />,
    <SiTailwindcss />,
    <SiJavascript />,
    <SiReact />,
    <SiNextdotjs />,
    <SiRedux />,
    <SiMui />,
    <SiMysql />,
    <SiPhp />,
    <SiLaravel />,
    <SiCplusplus />,
    <SiPython />,
    <SiHtml5 />,
    <SiCss3 />,
    <SiBootstrap />,
    <SiTailwindcss />,
    <SiJavascript />,
    <SiReact />,
    <SiNextdotjs />,
    <SiRedux />,
    <SiMui />,
    <SiMysql />,
    <SiPhp />,
    <SiLaravel />,
  ];
  return (
    <Section isLightBg={false}>
      <SectionTitle text1="Languages" text2="I Speak" />
      <Typography textAlign={"center"} pb={7}>
        Programming languages, frameworks and libraries I'm using
      </Typography>
      <Box className={styles.scrollContainer}>
        <Box className={styles.scroll}>
          {langs.map((lang, index) => (
            <Box key={index} color={"gray"} fontSize={"80px"} mr={5}>
              {lang}
            </Box>
          ))}
        </Box>
      </Box>
    </Section>
  );
};

export default HomeSecTwo;
