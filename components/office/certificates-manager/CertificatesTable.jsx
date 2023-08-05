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
import {
  Box,
  Button,
  FormControl,
  Grid,
  OutlinedInput,
  Typography,
} from "@mui/material";
import Modal from "@mui/material/Modal";
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

export default function CertificatesTable({
  tableHead,
  tableRows,
  showCertificate,
  updateCertificate,
  deleteCertificate,
}) {
  const url = urlsList.baseUrl;
  const theme = useTheme();

  // Handle modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <TableContainer component={Paper}>
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
                  {row.title}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <img
                    src={`${url}/${row.img}`}
                    width={100}
                    height={50}
                    alt={row.title}
                  />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <EditIcon
                    color={"info"}
                    sx={{ cursor: "pointer" }}
                    onClick={() => {
                      handleOpen();
                      showCertificate(row.id);
                    }}
                  />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <DeleteIcon
                    color={"error"}
                    sx={{ cursor: "pointer" }}
                    onClick={() => deleteCertificate(row.id)}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        {tableRows.length === 0 && (
          <Box py={3}>
            <Typography textAlign={"center"} color={theme.palette.info.main}>
              There are no certificates to show
            </Typography>
          </Box>
        )}
      </TableContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Certificate
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
            <form onSubmit={updateCertificate}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <OutlinedInput
                      name="title"
                      type="text"
                      placeholder="Title"
                      color="info"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <OutlinedInput name="img" type="file" color="info" />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="info" type="submit">
                    Update
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
