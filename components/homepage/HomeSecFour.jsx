"use client";
import DVD from "@/Templates/DVD";
import Section from "@/Templates/Section";
import SectionTitle from "@/Templates/SectionTitle";
import { Box, Grid, Skeleton, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import urlsList from "@/public/data/urlsList.json";
import Link from "next/link";
import MainButton from "@/Templates/MainButton";

const HomeSecFour = () => {
  const url = urlsList.projects;
  const [projects, setProjects] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        const filteredProjects = res.data.filter(
          (project) => project.featured == true
        );
        setProjects(filteredProjects);
      })
      .catch((error) =>
        setErrorMsg(
          "Oops! there is an error occured and we are fixing it now, please try again later"
        )
      );
  }, []);

  return (
    <Section isLightBg={false}>
      <SectionTitle text1={"Featured"} text2={"Projects"} />
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
        </Grid>
      )}
      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item key={project.id} xs={12} sm={6} md={6} lg={4} xl={4}>
            <Link href={`/portfolio/${project.slug}`}>
              <DVD
                title={project.title}
                description={project.description}
                img={project.img}
                type={project.category}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
      <Box display={"flex"} justifyContent={"center"} pt={7}>
        <Link href={"/portfolio"}>
          <MainButton>See All Projects</MainButton>
        </Link>
      </Box>
    </Section>
  );
};

export default HomeSecFour;
