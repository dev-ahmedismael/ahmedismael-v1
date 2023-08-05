"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import urlsList from "@/public/data/urlsList.json";
import ProjectsTable from "@/components/office/projects-manager/ProjectsTable";
import {
  Box,
  Button,
  FormControl,
  OutlinedInput,
  Typography,
  Grid,
  TextareaAutosize,
} from "@mui/material";
import { useSelector } from "react-redux";

const ProjectsManager = () => {
  const tableHead = ["Title", "Image", "Edit", "Delete"];
  const [tableRows, setTableRows] = useState([]);
  const url = urlsList.projects;
  const token = useSelector((state) => state.admin.token);

  // Get projects
  useEffect(() => {
    axios.get(url).then((res) => {
      setTableRows(res.data);
    });
  }, []);

  // Add a new project
  const addProject = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    await axios
      .post(url, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setTableRows((prev) => [...prev, res.data]);
        console.log(res);
      })
      .finally(event.currentTarget.reset());
  };

  // Show project
  const [shownProject, setShownProject] = useState(null);

  const showProject = (id) => {
    axios.get(`${url}/${id}`).then((res) => setShownProject(res.data.id));
  };

  // Update project
  const updateProject = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    axios
      .post(`${url}/${shownProject}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const index = tableRows.findIndex((row) => row.id === res.data.id);
        let updatedRows = tableRows;
        updatedRows[index] = res.data;
        setTableRows(updatedRows);
      });
  };

  // Delete project
  const deleteProject = (id) => {
    axios.delete(`${url}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const updatedRows = tableRows.filter((e) => e.id !== id);
    setTableRows(updatedRows);
  };

  return (
    <Box>
      <Box mb={7}>
        <ProjectsTable
          tableHead={tableHead}
          tableRows={tableRows}
          showProject={showProject}
          updateProject={updateProject}
          deleteProject={deleteProject}
        />
      </Box>
      <Box>
        <Typography variant="h6" mb={3}>
          Have a new project?
        </Typography>
        <form onSubmit={addProject}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <OutlinedInput
                  name="title"
                  type="text"
                  placeholder="Title"
                  color="info"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <OutlinedInput
                  name="slug"
                  type="text"
                  placeholder="Slug"
                  color="info"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <OutlinedInput
                  name="description"
                  type="text"
                  placeholder="Description"
                  color="info"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <OutlinedInput
                  name="featured"
                  type="text"
                  placeholder="Is Featured"
                  color="info"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <OutlinedInput
                  name="category"
                  type="text"
                  placeholder="Category"
                  color="info"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <OutlinedInput
                  name="languages"
                  type="text"
                  placeholder="Programming Languages"
                  color="info"
                />
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <OutlinedInput
                  name="video"
                  type="text"
                  placeholder="Video"
                  color="info"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <OutlinedInput
                  name="github"
                  type="text"
                  placeholder="GitHub"
                  color="info"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <OutlinedInput
                  name="demo"
                  type="text"
                  placeholder="Demo"
                  color="info"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <OutlinedInput name="img" type="file" color="info" />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <OutlinedInput
                  name="release_date"
                  type="text"
                  placeholder="Release Date"
                  color="info"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextareaAutosize
                  minRows={6}
                  name="features"
                  type="text"
                  placeholder="Features"
                  color="info"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="info" type="submit">
                Add a new project
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default ProjectsManager;
