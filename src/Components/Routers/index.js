import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "../AddUser";
import DeleteUser from "../DeleteUser";
import Homepage from "../Homepage";
import UpdateUser from "../UpdateData";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/update" element={<UpdateUser />} />
          <Route path="/delete" element={<DeleteUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
