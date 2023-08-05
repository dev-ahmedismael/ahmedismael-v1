"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import urlsList from "@/public/data/urlsList.json";
import Section from "@/Templates/Section";
import SectionTitle from "@/Templates/SectionTitle";
import { Box, Button, Grid, Typography } from "@mui/material";
import StreamIcon from "@mui/icons-material/Stream";
import GitHubIcon from "@mui/icons-material/GitHub";
import DVD from "@/Templates/DVD";
import Link from "next/link";
import Project from "@/components/portfolio/project/Project";
import ProjectSkeleton from "@/components/portfolio/project/ProjectSkeleton";

const page = () => {
  const url = urlsList.projects;
  const params = useParams();
  const [project, setProject] = useState(null);
  useEffect(() => {
    axios.get(url).then((res) => {
      const foundProject = res.data.find(
        (project) => project.slug === params.id
      );
      setProject(foundProject);
    });
  }, []);

  return (
    <Section isLightBg={true}>
      {project === null ? <ProjectSkeleton /> : <Project project={project} />}
    </Section>
  );
};

export default page;
