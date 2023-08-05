"use client";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Typography } from "@mui/material";
import urlsList from "@/public/data/urlsList.json";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#091b29",
  boxShadow: 24,
  p: 4,
};

export default function MailTable({
  tableHead,
  tableRows,
  showMail,
  deleteMail,
}) {
  const theme = useTheme();

  return (
    <TableContainer component={Paper} sx={{ maxHeight: 200 }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {tableHead.map((e, index) => (
              <StyledTableCell key={index} align="center">
                {e}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {tableRows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {row.first_name} {row.last_name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.subject}</StyledTableCell>
              <StyledTableCell align="center">
                <EditIcon
                  color={"info"}
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    showMail(row.id);
                  }}
                />
              </StyledTableCell>
              <StyledTableCell align="center">
                <DeleteIcon
                  color={"error"}
                  sx={{ cursor: "pointer" }}
                  onClick={() => deleteMail(row.id)}
                />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      {tableRows.length === 0 && (
        <Box py={3}>
          <Typography textAlign={"center"} color={theme.palette.info.main}>
            There are no mails to show
          </Typography>
        </Box>
      )}
    </TableContainer>
  );
}
