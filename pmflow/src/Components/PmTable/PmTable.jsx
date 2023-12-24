import React from "react";
import {
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import ProgressBtn from "../../Common/ProgressButton/ProgressBtn";

const options = [
  "Create a merge commit",
  "Squash and merge",
  "Rebase and merge",
];

function PmTable() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
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
    <Container>
      <Box my={4}>
        <Typography variant="h6" component="h2" gutterBottom>
          Project Management Table
        </Typography>
        <TableContainer>
          <Table sx={{ minWidth: 400 }} aria-label="simple table">
            <TableHead>
              <TableRow
                sx={{
                  height: "10px",
                  background: "#DDEDFE",
                }}
              >
                <TableCell
                  align="center"
                  sx={{
                    fontWeight: 700,
                    padding: "8px",
                    borderTopLeftRadius: "8px",
                  }}
                >
                  Module Name
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontWeight: 700, padding: "7px 12px" }}
                >
                  Task
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontWeight: 700, padding: "8px" }}
                >
                  Description Of Task
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontWeight: 700, padding: "8px" }}
                >
                  Assign Task To
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontWeight: 700, padding: "8px" }}
                >
                  Task ETA
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontWeight: 700,
                    padding: "8px",
                    borderTopRightRadius: "8px",
                  }}
                >
                  Module ETA
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((rowData, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{rowData.moduleName}</TableCell>
                  <TableCell align="center" sx={{ padding: "16px 0" }}>
                    {rowData.task}
                  </TableCell>
                  <TableCell align="center">
                    {rowData.taskDescription}{" "}
                    
                  </TableCell>
                  <TableCell align="center">{rowData.assignee}</TableCell>
                  <TableCell align="center">{rowData.taskETA}</TableCell>
                  <TableCell align="center">
                    {rowData.moduleETA} <ProgressBtn />
                  </TableCell>
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
