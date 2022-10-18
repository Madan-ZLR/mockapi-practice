import { Typography, Stack, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
const UpdateUser = () => {
  const [name, SetName] = useState("");
  const [RollNo, SetRollNo] = useState(0);
  const [id, SetId] = useState(0);
  const [avatar, SetAvatar] = useState("");
  const [status, setStatus] = useState("");

  const UpdateData = () => {
    axios
      .put("https://634d449cacb391d34a986ec8.mockapi.io/Users/" + id, {
        name,
        avatar,
        RollNo,
        id,
      })
      .then((res) => {
        setStatus("Updated Successfully");
      })
      .catch((error) => {
        setStatus("Task Failed");
      });
  };
  return (
    <>
      <Typography>Update User Page</Typography>
      <br></br>
      <Stack>
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
          label="Enter Avatar"
          onChange={(e) => {
            SetAvatar(e.target.value);
          }}
        />
        <Button variant="contained" onClick={UpdateData}>
          Add
        </Button>
        {status.length > 0 && <Typography>{status}</Typography>}
      </Stack>
    </>
  );
};

export default UpdateUser;
