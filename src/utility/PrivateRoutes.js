import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const uid = useSelector((store) => store?.auth?.uid?.uid);
  console.log(uid);

  return uid ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivateRoutes;
