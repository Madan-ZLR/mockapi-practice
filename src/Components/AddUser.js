import { Typography, Stack, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
const AddUser = () => {
  const [name, SetName] = useState("");
  const [RollNo, SetRollNo] = useState(0);
  const [id, SetId] = useState(0);
  const [avatar, SetAvatar] = useState("");
  const [status, setStatus] = useState("");
  const AddData = () => {
    axios
      .post("https://634d449cacb391d34a986ec8.mockapi.io/Users", {
        name,
        RollNo,
        id,
        avatar,
      })
      .then((res) => {
        setStatus("added Successfully");
      })
      .catch((error) => {
        setStatus("Task Failed");
      });
  };
  return (
    <Stack spacing={4} width="100%" justifyContent="center" alignItems="center">
      <Typography variant="h4" color="primary">
        Add New User Page
      </Typography>
      <Stack spacing={3} width={500}>
        <TextField
          type="text"
          label="Enter Name"
          onChange={(e) => {
            SetName(e.target.value);
          }}
        />
        <TextField
          type="number"
          label="Enter RollNo"
          onChange={(e) => {
            SetRollNo(e.target.value);
          }}
        />
        <TextField
          type="number"
          label="Enter ID"
          onChange={(e) => {
            SetId(e.target.value);
          }}
        />
        <TextField
          type="text"
          label="Enter Image Url"
          onChange={(e) => {
            SetAvatar(e.target.value);
          }}
        />
        <Button variant="contained" onClick={AddData}>
          Add
        </Button>
      </Stack>
      {status.length>0 &&  <Typography>{status}</Typography>}
    </Stack>
  );
};

export default AddUser;
