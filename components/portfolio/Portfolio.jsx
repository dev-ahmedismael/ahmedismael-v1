"use client";
import Section from "@/Templates/Section";
import SectionTitle from "@/Templates/SectionTitle";
import React, { useEffect, useState } from "react";
import { Grid, Skeleton, Typography } from "@mui/material";
import DVD from "@/Templates/DVD";
import axios from "axios";
import urlsList from "@/public/data/urlsList.json";

const Portfolio = () => {
  const url = urlsList.projects;
  const [projects, setProjects] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setProjects(res.data);
      })
      .catch((error) =>
        setErrorMsg(
          "Oops! there is an error occured and we are fixing it now, please try again later"
        )
      );
  }, []);
  return (
    <Section isLightBg={true}>
      <SectionTitle text1={"My"} text2={"Portfolio"} />
      {errorMsg !== null && (
        <Typography textAlign={"center"} color={"yellow"} mb={7}>
          {errorMsg}
        </Typography>
      )}
      {projects.length === 0 && (
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
            <Skeleton variant="rounded" width={"100%"} height={450} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
            <Skeleton variant="rounded" width={"100%"} height={450} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
            <Skeleton variant="rounded" width={"100%"} height={450} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
            <Skeleton variant="rounded" width={"100%"} height={450} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
            <Skeleton variant="rounded" width={"100%"} height={450} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
            <Skeleton variant="rounded" width={"100%"} height={450} />
          </Grid>
        </Grid>
      )}
      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item key={project.id} xs={12} sm={6} md={6} lg={4} xl={4}>
            <DVD
              title={project.title}
              description={project.description}
              img={project.img}
            />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

export default Portfolio;
