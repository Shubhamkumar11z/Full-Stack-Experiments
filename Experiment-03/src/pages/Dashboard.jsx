import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FaUser,
  FaEnvelope,
  FaCheckCircle
} from "react-icons/fa";

function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Navbar />

      <div className="page">
        <div className="card">

          <h1>Dashboard</h1>

          <p>
            <FaEnvelope color="#2563eb" />
            {" "}
            <strong>Email</strong>
          </p>

          <p>{user.email}</p>

          <br />

          <p>
            <FaUser color="#2563eb" />
            {" "}
            <strong>Role</strong>
          </p>

          <p>{user.role}</p>

          <br />

          <p className="success">
            <FaCheckCircle />

            {" "}

            Authenticated Successfully
          </p>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;