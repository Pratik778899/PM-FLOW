import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";

function createData(name) {
  return { name };
}

const rows = [
  createData("Pratik Chaudhari"),
  createData("Pratik Chaudhari"),
  createData("Pratik Chaudhari"),
  createData("Pratik Chaudhari"),
  createData("Pratik Chaudhari"),
];

const Team = (props) => {
  return (
    <TableContainer sx={{ width: "25.3%" }} component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                bgcolor:"#F6FAFF"
              }}
            >
              <Typography variant="h6">{props.name}</Typography>
              <div
                style={{
                  color: "#0563D0",
                  backgroundColor: "#DEEFFF",
                  padding: "1px 10px",
                  borderRadius: "50px",
                  fontWeight: 700,
                }}
              >
                20
              </div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {row.name} <CloseIcon />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Team;
