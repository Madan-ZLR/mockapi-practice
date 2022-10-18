import { Typography, Stack, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
const DeleteUser = () => {
  const [id, SetId] = useState();
  const [status, setStatus] = useState("");
  const DeleteData = () => {
    axios
      .delete("https://634d449cacb391d34a986ec8.mockapi.io/Users/" + id)
      .then((res) => {
        setStatus("Deleted Successfully");
      })
      .catch((error) => {
        setStatus("Task Failed");
      });
  };
  return (
    <>
      <Typography>Delete User Page</Typography>
      <br></br>
      <Typography>Enter Id to Delete User</Typography>
      <Stack spacing={3} width={500}>
        <TextField
          type="number"
          label="Enter ID"
          onChange={(e) => {
            SetId(e.target.value);
          }}
        />

        <Button variant="contained" onClick={DeleteData}>
          Add
        </Button>
        {status.length>0 &&  <Typography>{status}</Typography>}
      </Stack>
    </>
  );
};

export default DeleteUser;
