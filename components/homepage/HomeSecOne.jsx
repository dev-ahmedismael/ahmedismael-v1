"use client";
import AnimatedAvatar from "@/Templates/AnimatedAvatar";
import Section from "@/Templates/Section";
import SectionTitle from "@/Templates/SectionTitle";
import { Box, Typography } from "@mui/material";
import React from "react";
import AhmedIsmael from "@/public/images/ahmedismael.jpg";
import MainButton from "@/Templates/MainButton";
import Link from "next/link";

const HomeSecOne = () => {
  return (
    <Section isLightBg={true}>
      <SectionTitle text1="About" text2="Me" />
      <Box display={"flex"} justifyContent={"center"} pb={7}>
        <AnimatedAvatar src={AhmedIsmael} />
      </Box>
      <Typography textAlign={"center"} pb={7}>
        My name is Ahmed Ismael, I'm a Frontend Web Developer from Egypt <br />{" "}
        I've experience in web designing and development building high quality &
        responsive website using React and Next JS, and I've a good knowledge
        also in back-end development using PHP & Laravel.
      </Typography>
      <Box display={"flex"} justifyContent={"center"}>
        <Link href={"about"}>
          <MainButton>Read more</MainButton>
        </Link>
      </Box>
    </Section>
  );
};

export default HomeSecOne;
