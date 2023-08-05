"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import urlsList from "@/public/data/urlsList.json";
import CertificatesTable from "@/components/office/certificates-manager/CertificatesTable";
import {
  Box,
  Button,
  FormControl,
  OutlinedInput,
  Typography,
  Grid,
} from "@mui/material";
import { useSelector } from "react-redux";

const CertificatesManager = () => {
  const tableHead = ["Title", "Image", "Edit", "Delete"];
  const [tableRows, setTableRows] = useState([]);
  const url = urlsList.certificates;
  const token = useSelector((state) => state.admin.token);

  // Get certificates
  useEffect(() => {
    axios.get(url).then((res) => {
      setTableRows(res.data);
    });
  }, []);

  // Add a new certificates
  const addCertificate = async (event) => {
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
      .then((res) => setTableRows((prev) => [...prev, res.data]))
      .finally(event.currentTarget.reset());
  };

  // Show ertificate
  const [shownCertificate, setShownCertificate] = useState(null);

  const showCertificate = (id) => {
    axios.get(`${url}/${id}`).then((res) => setShownCertificate(res.data.id));
  };

  // Update certificate
  const updateCertificate = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    axios
      .post(`${url}/${shownCertificate}`, data, {
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

  // Delete certificate
  const deleteCertificate = (id) => {
    axios.delete(`${url}/${id}`, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    const updatedRows = tableRows.filter((e) => e.id !== id);
    setTableRows(updatedRows);
  };

  return (
    <Box>
      <Box mb={7}>
        <CertificatesTable
          tableHead={tableHead}
          tableRows={tableRows}
          showCertificate={showCertificate}
          updateCertificate={updateCertificate}
          deleteCertificate={deleteCertificate}
        />
      </Box>
      <Box>
        <Typography variant="h6" mb={3}>
          Have a new certificate?
        </Typography>
        <form onSubmit={addCertificate}>
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
                <OutlinedInput name="img" type="file" color="info" />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="info" type="submit">
                Add a new certificate
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default CertificatesManager;
