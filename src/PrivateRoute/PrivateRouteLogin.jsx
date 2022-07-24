import React from "react";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router";

export default function PrivateRouteLogin() {
  const user = localStorage.getItem("user");

  return user ? <Navigate to="/dashboard" /> : <Outlet />;
}
