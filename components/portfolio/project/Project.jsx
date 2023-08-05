import React from "react";
import SectionTitle from "@/Templates/SectionTitle";
import { Box, Button, Grid, Typography } from "@mui/material";
import StreamIcon from "@mui/icons-material/Stream";
import GitHubIcon from "@mui/icons-material/GitHub";
import DVD from "@/Templates/DVD";
import Link from "next/link";

const Project = ({ project }) => {
  return (
    <Box>
      <SectionTitle text2={project.title} />
      <Grid container spacing={5}>
        <Grid item xs={12} sm={4}>
          <DVD
            title={project.title}
            description={project.description}
            img={project.img}
            type={project.category}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            minHeight="100%"
          >
            <Typography variant="h6">Title: {project.title}</Typography>
            <Typography variant="h6">
              Description: {project.description}
            </Typography>
            <Typography variant="h6">Type: {project.category}</Typography>
            <Typography variant="h6">
              Programming languages & Frameworks: {project.languages}
            </Typography>
            <Typography variant="h6">
              Release Date: {project.release_date}
            </Typography>
            <Typography variant="h6">Features:</Typography>
            <Typography variant="h6" whiteSpace={"pre"}>
              {project.features}
            </Typography>
            <Box display={"flex"}>
              <Box mr={2}>
                <Link href={project.demo} target="_blank">
                  <Button variant="contained">
                    <Box mr={1} mt={1}>
                      <StreamIcon />
                    </Box>
                    <Typography>Demo</Typography>
                  </Button>
                </Link>
              </Box>
              <Box>
                <Link href={project.github} target="_blank">
                  <Button variant="contained">
                    <Box mr={1} mt={1}>
                      <GitHubIcon />
                    </Box>
                    <Typography>Github</Typography>
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}></Grid>
      </Grid>
    </Box>
  );
};

export default Project;
