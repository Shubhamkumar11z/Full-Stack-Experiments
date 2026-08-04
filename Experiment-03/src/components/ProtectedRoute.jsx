import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function ProtectedRoute({ children, allowedRoles }) {
  const { user } = useContext(AuthContext);

  // User is not logged in
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // User doesn't have permission
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  // User is authorized
  return children;
}

export default ProtectedRoute;