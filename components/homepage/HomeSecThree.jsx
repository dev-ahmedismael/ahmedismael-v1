import Section from "@/Templates/Section";
import SectionTitle from "@/Templates/SectionTitle";
import React from "react";
import ServiceTemplate from "@/Templates/ServiceTemplate";
import { Grid } from "@mui/material";

const HomeSecThree = () => {
  const services = [
    {
      id: 1,
      icon: "/images/seo.png",
      title: "SEO",
      description:
        "Keep in the top of search engines results and reach more through effective search engine optimization.",
    },
    {
      id: 2,
      icon: "/images/uiux.png",
      title: "UI/UX",
      description:
        "Keep in the top of search engines results and reach more through effective search engine optimization.",
    },
    {
      id: 3,
      icon: "/images/coding.png",
      title: "Frontend Development",
      description:
        "Build your website from scratch the way you want with high performance, responsive to all screens and enjoy the power of React & Next JS.",
    },
    {
      id: 4,
      icon: "/images/coding.png",
      title: "Backend Development",
      description:
        "Build your website the way you want, whether you prefer an API backend only or a full-stack development and enjoy the power of PHP & Laravel.",
    },
  ];
  return (
    <Section isLightBg={true}>
      <SectionTitle text1="Services" text2="I Offer" />
      <Grid container spacing={2}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6} key={service.id}>
            <ServiceTemplate
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

export default HomeSecThree;
