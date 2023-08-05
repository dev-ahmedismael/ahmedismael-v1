"use client";
import AnimatedAvatar from "@/Templates/AnimatedAvatar";
import CVSection from "@/Templates/CVSection";
import Section from "@/Templates/Section";
import SectionTitle from "@/Templates/SectionTitle";
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { GrSkype } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";
import Carousel from "react-bootstrap/Carousel";
import certificates from "@/public/data/certificates.json";

const About = () => {
  const theme = useTheme();
  return (
    <Section isLightBg={true}>
      <SectionTitle text1={"About"} text2={"Me"} />
      <Grid container>
        <Grid item xs={12} lg={4} pb={7}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <AnimatedAvatar src={"/images/ahmedismael.jpg"} />
            <Typography variant="h5" mt={2} mb={1}>
              Ahmed Ismael
            </Typography>
            <Typography mb={1} color={"gray"}>
              @devahmedismael
            </Typography>
            <Typography mb={1}>Frontend Web Developer</Typography>
            <Box mb={1}>
              <Link
                href="https://www.credly.com/badges/cb737357-e7de-4d01-8ef9-938165a9dad0/public_url"
                target="_blank"
              >
                <Image
                  src={"/images/meta-full-stack-engineer-certificate.png"}
                  alt="Ahmed Ismael's Certificate from Meta as a Full-Stack Software Engineer"
                  width={100}
                  height={100}
                />
              </Link>
            </Box>
            <Box display={"flex"}>
              <Box mr={2}>
                <Link href={"tel:00201286523946"} target="_blank">
                  <FaPhoneAlt color="#15a8d4" fontSize={"x-large"} />
                </Link>
              </Box>
              <Box mr={2}>
                <Link
                  href={"mailto:dev.ahmedismael@outlook.com"}
                  target="_blank"
                >
                  <GrMail color="#15a8d4" fontSize={"x-large"} />
                </Link>
              </Box>
              <Box mr={2}>
                <Link
                  href={"skype:live:.cid.fd69434a53a31b5e?chat"}
                  target="_blank"
                >
                  <GrSkype color="#15a8d4" fontSize={"x-large"} />
                </Link>
              </Box>
              <Box>
                <Link
                  href={"https://github.com/devahmedismael"}
                  target="_blank"
                >
                  <GrGithub color="#15a8d4" fontSize={"x-large"} />
                </Link>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} lg={8}>
          <CVSection title={"Personal Info"}>
            <Typography>Name: Ahmed Mohamed Ismael</Typography>
            <Typography>Nationality: Egyptian</Typography>
            <Typography>Location: Cairo, Egypt</Typography>
            <Typography>
              Education: Bachelor's degree in Tourism & Hotels from Mansoura
              University
            </Typography>
          </CVSection>
          <CVSection title={"Courses"}>
            <Typography>Frontend Web Development from Meta</Typography>
            <Typography>Backend Web Development from Meta</Typography>
          </CVSection>
          <CVSection title={"Certificates"}>
            <Carousel fade>
              {certificates.map((certificate) => (
                <Carousel.Item key={certificate.id}>
                  <img src={certificate.url} width={"100%"} height={400} />
                  <Carousel.Caption>
                    <Typography variant="h6" color={"secondary"}>
                      {certificate.title}
                    </Typography>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </CVSection>
          <CVSection title={"Spoken Languages"}>
            <Typography>
              C++, Python, HTML5, CSS3, Bootstrap, Tailwind CSS, JavaScript,
              React, Material UI, Redux Toolkit, Next JS, MySQL, PHP, Laravel.{" "}
            </Typography>
          </CVSection>
          <CVSection title={"Work Experience"}>
            <Typography>
              2022 - Present: Freelancer Frontend Web Developer at Upwork.
            </Typography>
            <Typography>
              2023 - Present: Remote Frontend Web Developer at HMS Development.
            </Typography>
          </CVSection>
          <CVSection title={"Contact Details"}>
            <Typography>Phone: 0020502522516</Typography>
            <Typography>Cell: 00201286523946</Typography>
            <Typography>Email: dev.ahmedismael@outlook.com</Typography>
            <Typography>Skype: live:.cid.fd69434a53a31b5e</Typography>
          </CVSection>
        </Grid>
      </Grid>
    </Section>
  );
};

export default About;
