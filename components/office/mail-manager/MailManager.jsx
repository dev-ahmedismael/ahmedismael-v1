"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import urlsList from "@/public/data/urlsList.json";
import { Box, Typography, useTheme, Container } from "@mui/material";
import MailTable from "./MailTable";
import { useSelector } from "react-redux";

const MailManager = () => {
  const theme = useTheme();
  const tableHead = ["From", "Subject", "Read", "Delete"];
  const [tableRows, setTableRows] = useState([]);
  const url = urlsList.mails;
  const token = useSelector((state) => state.admin.token);

  // Get Mails
  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setTableRows(res.data);
      });
  }, []);

  // Show Mail
  const [shownMail, setShownMail] = useState(null);

  const showMail = (id) => {
    axios
      .get(`${url}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setShownMail(res.data.subject));
  };

  // Delete Mail
  const deleteMail = (id) => {
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
      {/* Mail inbox */}
      <Box mb={7}>
        <MailTable
          tableHead={tableHead}
          tableRows={tableRows}
          showMail={showMail}
          deleteMail={deleteMail}
        />
      </Box>

      {/* Mail reader */}
      <Box>
        <Box
          bgcolor={theme.palette.info.main}
          py={2}
          sx={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px" }}
        >
          <Typography textAlign={"center"}>Mail Reader</Typography>
        </Box>
        <Box
          bgcolor={"white"}
          maxHeight={300}
          py={3}
          sx={{ borderBottomLeftRadius: "4px", borderBottomRightRadius: "4px" }}
        >
          <Container>
            {shownMail === null && (
              <Typography color={theme.palette.info.main} textAlign={"center"}>
                Select mail to read
              </Typography>
            )}
            <Typography color={theme.palette.primary.main}>
              {shownMail}
            </Typography>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default MailManager;
