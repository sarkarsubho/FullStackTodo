import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const RequiredAuth = ({ children }) => {
  const location = useLocation();
  const isAuth = useSelector((state) => state);
  if (isAuth) {
    return children;
  } else {
    return <Navigate to={"/login"} state={{ from: location }}></Navigate>;
  }
};
