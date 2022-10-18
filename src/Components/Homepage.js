import React, { useState } from "react";
import {
  Typography,
  Stack,
  Button,
  Box,
  TableContainer,
  TableCell,
  TableBody,
  TableRow,
  Table,
  TableHead,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Homepage = () => {
  const navigate = useNavigate();
  const [allUsersData, SetAllUsersData] = useState([]);

  const getAllUsers = async () => {
    console.log("hfgvej");
    try {
      const result = await axios(
        "https://634d449cacb391d34a986ec8.mockapi.io/Users"
      );
      SetAllUsersData(result.data);
      console.log(result);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <Stack spacing={4}>
        <Typography variant="h2" color="primary">
          Welcome to MockApi Data Center
        </Typography>

        <Stack spacing={8} direction="row" justifyContent="center">
          <Button variant="outlined" color="secondary" onClick={getAllUsers}>
            All Users
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => {
              navigate("/add");
            }}
          >
            ADD New User
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => {
              navigate("/update");
            }}
          >
            Update Specific User
          </Button>
          <Button variant="outlined" color="secondary"  onClick={() => {
            navigate("/delete")
          }}>
            Delete User
          </Button>
          <Button>venky</Button>
        </Stack>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {allUsersData.length > 0 ? (
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">RollNo</TableCell>
                    <TableCell align="center">Id</TableCell>
                    <TableCell align="center">Avatar</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {allUsersData.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell align="center">{row.name}</TableCell>
                      <TableCell align="center">{row.RollNo}</TableCell>
                      <TableCell align="center">{row.id}</TableCell>
                      <TableCell align="center">
                        <img src={row.avatar} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            "NO DATA"
          )}
        </Box>
      </Stack>
    </>
  );
};

export default Homepage;
