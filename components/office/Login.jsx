"use client";
import Section from "@/Templates/Section";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import urlsList from "@/public/data/urlsList.json";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { login } from "@/store/adminSlice";
const Login = () => {
  const theme = useTheme();
  const url = urlsList.login;
  const router = useRouter();
  const dispatch = useDispatch();

  const logIn = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    axios
      .post(url, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        dispatch(login(res.data.token));
        router.replace("/office");
      })
      .catch((err) => console.log(err));
  };
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
      <Box display={"flex"} justifyContent={"center"}>
        <Image src={"/images/logo.png"} alt="Logo" width={100} height={100} />
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        <Box py={7} bgcolor={"primary"} borderRadius={1}>
          <Container>
            <form onSubmit={logIn}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    fullWidth
                    name="email"
                    placeholder="Email"
                    color="info"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="password"
                    fullWidth
                    name="password"
                    placeholder="Password"
                    color="info"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained">
                    Sign In
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Container>
        </Box>
      </Box>
    </Section>
  );
};

export default Login;
