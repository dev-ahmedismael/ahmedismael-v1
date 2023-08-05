"use client";
import Section from "@/Templates/Section";
import SectionTitle from "@/Templates/SectionTitle";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import ContactForm from "@/Templates/ContactForm";

const Contact = () => {
  const theme = useTheme();
  const contactDetails = [
    {
      id: 1,
      icon: <FmdGoodIcon color={"info"} />,
      title: "Location",
      info: "Cairo, Egypt",
    },
    {
      id: 2,
      icon: <CallIcon color={"info"} />,
      title: "Phone",
      info: "+201286523946",
    },
    {
      id: 3,
      icon: <EmailIcon color={"info"} />,
      title: "Email",
      info: "dev.ahmedismael@outlook.com",
    },
  ];

  return (
    <Section isLightBg={true}>
      <SectionTitle text1={"Contact"} text2={"Me"} />
      <Grid container mb={7} spacing={2}>
        {contactDetails.map((e) => (
          <Grid item xs={12} sm={12} lg={4} xl={4} key={e.id}>
            <Box
              display={"flex"}
              bgcolor={theme.palette.primary.main}
              p={1}
              borderRadius={1}
            >
              <Box>
                <Box
                  width={60}
                  height={60}
                  border={`2px solid ${theme.palette.info.main}`}
                  borderRadius={"100%"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  mr={3}
                >
                  {e.icon}
                </Box>
              </Box>
              <Box overflow={"hidden"}>
                <Typography
                  fontSize={"x-large"}
                  color={theme.palette.info.main}
                >
                  {e.title}
                </Typography>
                <Typography>{e.info}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <ContactForm />
    </Section>
  );
};

export default Contact;
