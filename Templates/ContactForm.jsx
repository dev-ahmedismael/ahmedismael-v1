"use client";
import {
  Box,
  Grid,
  FormControl,
  OutlinedInput,
  TextareaAutosize,
  Button,
  Typography,
  Container,
  Skeleton,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import urlsList from "@/public/data/urlsList.json";
import Modal from "@mui/material/Modal";
import { useFormik } from "formik";
import * as yup from "yup";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#091b29",
  borderRadius: "4px",
  boxShadow: 24,
  p: 4,
};

const validationSchema = yup.object({
  first_name: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  last_name: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  subject: yup.string().required("Required"),
});

const ContactForm = () => {
  // Handle modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Send a message
  const url = urlsList.mails;
  const [responseMsg, setResponseMsg] = useState(null);
  const sendMail = (formData) => {
    // event.preventDefault();
    // const formData = new FormData(event.currentTarget);
    const data = formData;
    axios
      .post(url, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setResponseMsg(
          "Message has been sent successfully, thanks for contacting me."
        );
      })
      .catch((error) =>
        setResponseMsg(
          "Oops! Failed to send message, you can email me at dev.ahmedismael@outlook.com"
        )
      );
  };

  // Contact form validation

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      subject: "",
    },
    validationSchema: validationSchema,
    onSubmit: (formData) => {
      sendMail(formData);
      handleOpen();
    },
  });

  return (
    <Box>
      <Grid container>
        <Grid item xs={0} sm={3}></Grid>
        <Grid item xs={12} sm={6}>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <FormControl fullWidth>
                  <OutlinedInput
                    color="info"
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    value={formik.values.first_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.first_name &&
                      Boolean(formik.errors.first_name)
                    }
                  />
                  {formik.touched.first_name &&
                    Boolean(formik.errors.first_name) && (
                      <Typography color={"error"}>
                        {formik.errors.first_name}
                      </Typography>
                    )}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <FormControl fullWidth>
                  <OutlinedInput
                    color="info"
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    value={formik.values.last_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.last_name &&
                      Boolean(formik.errors.last_name)
                    }
                  />
                  {formik.touched.last_name &&
                    Boolean(formik.errors.last_name) && (
                      <Typography color={"error"}>
                        {formik.errors.last_name}
                      </Typography>
                    )}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <FormControl fullWidth>
                  <OutlinedInput
                    color="info"
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                  />
                  {formik.touched.email && Boolean(formik.errors.email) && (
                    <Typography color={"error"}>
                      {formik.errors.email}
                    </Typography>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <FormControl fullWidth>
                  <TextareaAutosize
                    minRows={6}
                    placeholder="What's on your mind?"
                    name="subject"
                    value={formik.values.subject}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.subject && formik.errors.subject}
                  />
                  {formik.touched.subject && Boolean(formik.errors.subject) && (
                    <Typography color={"error"}>
                      {formik.errors.subject}
                    </Typography>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Box display={"flex"} justifyContent={"center"}>
                  <Button variant="contained" color={"info"} type="submit">
                    Send Message
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid item xs={0} sm={3}></Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Container>
            {responseMsg === null && (
              <Box id="modal-modal-description" sx={{ mt: 2 }}>
                <Skeleton variant="rounded" width={"100%"} height={40} />
              </Box>
            )}
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {responseMsg}
            </Typography>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              width={"100%"}
              pt={3}
            >
              <Button variant="contained" color="info" onClick={handleClose}>
                Close
              </Button>
            </Box>
          </Container>
        </Box>
      </Modal>
    </Box>
  );
};

export default ContactForm;
