import React from "react";
import {
  Box,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

function PmTable() {
  const tableData = [
    {
      moduleName: "Developer",
      task: "Payment Plan",
      taskDescription: "Lorem hai bhai",
      assignee: "Pratik Chaudhari",
      taskETA: "10 Hour",
      moduleETA: "80 Hours",
    },
    {
      task: "Payment Plan",
      taskDescription: "Lorem hai bhai",
      assignee: "Pratik Chaudhari",
      taskETA: "10 Hour",
      moduleETA: "80 Hours",
    },
    {
      task: "Payment Plan",
      taskDescription: "Lorem hai bhai",
      assignee: "Pratik Chaudhari",
      taskETA: "10 Hour",
      moduleETA: "80 Hours",
    },
    {
      task: "Payment Plan",
      taskDescription: "Lorem hai bhai",
      assignee: "Pratik Chaudhari",
      taskETA: "10 Hour",
      moduleETA: "80 Hours",
    },
    {
      task: "Payment Plan",
      taskDescription: "Lorem hai bhai",
      assignee: "Pratik Chaudhari",
      taskETA: "10 Hour",
      moduleETA: "80 Hours",
    },
  ];

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h6" component="h2" gutterBottom>
          Project Management Table
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 400 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{height: "50px"}}>
                <TableCell align="center">Module Name</TableCell>
                <TableCell align="center">Task</TableCell>
                <TableCell align="center">Description Of Task</TableCell>
                <TableCell align="center">Assign Task To</TableCell>
                <TableCell align="center">Task ETA</TableCell>
                <TableCell align="center">Module ETA</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((rowData, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{rowData.moduleName}</TableCell>
                  <TableCell align="center">{rowData.task}</TableCell>
                  <TableCell align="center">{rowData.taskDescription}</TableCell>
                  <TableCell align="center">{rowData.assignee}</TableCell>
                  <TableCell align="center">{rowData.taskETA}</TableCell>
                  <TableCell align="center">{rowData.moduleETA}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}

export default PmTable;
