import { useContext } from "react";
import { AuthContex } from "../Contex/AuthContex";
import { Navigate, useLocation } from "react-router";
import Loader from "./Loader";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContex);
  const location = useLocation();

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return <Navigate to={`/login?redirect=${location.pathname}`} replace />;
  }

  return children;
};

export default ProtectedRoute;
