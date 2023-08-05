"use client";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Hero from "@/public/images/hero_logo.png";
import Image from "next/image";
import { useTheme } from "@emotion/react";
import MainButton from "@/Templates/MainButton";
import SecondaryButton from "@/Templates/SecondaryButton";
import SocialMediaIcons from "@/Templates/SocialMediaIcons";
import Link from "next/link";
import "animate.css";

const Header = () => {
  const theme = useTheme();
  return (
    <header>
      <Box bgcolor={theme.palette.primary.main} height={"100%"}>
        <Container sx={{ height: "100%" }}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            height={"100%"}
          >
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "block",
                  lg: "block",
                  xl: "block",
                },
              }}
              className="animate__animated animate__fadeInLeft"
            >
              <Typography variant="h2">Hi, I'm Ahmed Ismael</Typography>
              <Typography variant="h4" color={theme.palette.info.main} mb={2}>
                Frontend Web Developer
              </Typography>
              <Typography>
                Have experience in web designing and development building <br />
                high quality & responsive website using React & Next JS and I've{" "}
                <br />a good knowlege in back-end development using PHP &
                Laravel <br />
              </Typography>
              <Box display={"flex"} my={"30px"}>
                <Box mr={"20px"}>
                  <MainButton>Download CV</MainButton>
                </Box>
                <Box>
                  <Link href={"mailto:dev.ahmedismael@outlook.com"}>
                    <SecondaryButton>Let's Talk</SecondaryButton>
                  </Link>
                </Box>
              </Box>
              <SocialMediaIcons />
            </Box>
            {/* Small screen */}
            <Box
              sx={{
                display: {
                  xs: "block",
                  sm: "block",
                  md: "none",
                  lg: "none",
                  xl: "none",
                },
                textAlign: "center",
              }}
              className="animate__animated animate__fadeInLeft"
            >
              <Typography variant="h4" color={"white"}>
                Hi, <br /> I'm Ahmed Ismael
              </Typography>
              <Typography variant="h6" color={theme.palette.info.main} mb={2}>
                Frontend Web Developer
              </Typography>
              <Typography>
                Have an experience in web designing and development building{" "}
                <br />
                high quality & responsive website using React & Next JS and I've{" "}
                <br />a good knowlege in backend development using PHP & Laravel{" "}
                <br />
              </Typography>
              <Box display={"flex"} justifyContent={"center"} my={"30px"}>
                <Box mr={"20px"}>
                  <MainButton>Download CV</MainButton>
                </Box>
                <Box>
                  <Link href={"mailto:dev.ahmedismael@outlook.com"}>
                    <SecondaryButton>Let's Talk</SecondaryButton>
                  </Link>
                </Box>
              </Box>
              <Box display={"flex"} justifyContent={"center"}>
                <SocialMediaIcons />
              </Box>
            </Box>
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                  md: "block",
                  lg: "block",
                  xl: "block",
                },
              }}
              className="animate__animated animate__fadeInRight"
            >
              <Image src={Hero} alt="Logo" width={400} height={400} priority />
            </Box>
          </Box>
        </Container>
      </Box>
    </header>
  );
};

export default Header;
