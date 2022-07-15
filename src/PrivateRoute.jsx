import React from "react";
import { Navigate } from "react-router-dom";
// import Cookies from "universal-cookie";
import { Outlet } from "react-router";

// const cookie = new Cookies();

export default function PrivateRoute() {
  // const user = cookie.get("Bearer");
  // const user = localStorage.getItem('Bearer');

  const user = localStorage.getItem("user");
  console.log(user);
  const userJson = JSON.parse(user);

  return userJson.token ? <Outlet /> : <Navigate to="/" />;
}
