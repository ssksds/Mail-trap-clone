import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../Components/PrivateRoute";
import Home from "./Home";
import Login from "./Login";
import Signup from "./MainPage";
import MainPage from "./MainPage";

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/mainpage"
          element={
            <PrivateRoute>
              <MainPage />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default AllRoutes;
