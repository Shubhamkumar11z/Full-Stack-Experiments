import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import { FaShieldAlt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <FaShieldAlt size={28} />
        <span>JWT & RBAC Demo</span>
      </div>

      <div className="nav-links">
        <Link to="/dashboard">Dashboard</Link>

        {user?.role === "Admin" && (
          <Link to="/admin">Admin</Link>
        )}

        {(user?.role === "Admin" ||
          user?.role === "Editor") && (
          <Link to="/editor">Editor</Link>
        )}

        <Link to="/viewer">Viewer</Link>
      </div>

      <div className="user-info">
        <div className="user-details">
          <div>
            <FaUserCircle /> {user?.email}
          </div>

          <small>{user?.role}</small>
        </div>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;