import React, { use } from "react";
import AuthContext from "../Contexts/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const { pathname } = useLocation();

  if (loading) {
    return <h1>loading...</h1>;
  }

  if (user && user.email) {
    return children;
  }
  return <Navigate state={pathname} to="/auth/login"></Navigate>;
};

export default PrivateRoute;
