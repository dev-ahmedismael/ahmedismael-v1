"use client";
import Section from "@/Templates/Section";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import OfficeSection from "@/Templates/OfficeSection";
import MailManager from "./mail-manager/MailManager";
import ArticlesManager from "./articles-manager/ArticlesManager";
import ProjectsManager from "./projects-manager/ProjectsManager";
import CertificatesManager from "./certificates-manager/CertificatesManager";

const Office = () => {
  const categories = [
    { id: 1, title: "Mail", section: <MailManager /> },
    { id: 2, title: "Articles", section: <ArticlesManager /> },
    { id: 3, title: "Projects", section: <ProjectsManager /> },
    { id: 4, title: "Certificates", section: <CertificatesManager /> },
  ];

  const theme = useTheme();
  return (
    <Section isLightBg={true}>
      <Typography
        textAlign={"center"}
        color={theme.palette.info.main}
        variant="h5"
        mb={7}
      >
        Ahmed Ismael Secret Office
      </Typography>
      <Grid container spacing={7}>
        {categories.map((cat) => (
          <Grid item xs={12} key={cat.id}>
            <OfficeSection title={cat.title}>{cat.section}</OfficeSection>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

export default Office;
