import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FaUsers,
  FaUserShield,
  FaChartBar,
  FaDatabase
} from "react-icons/fa";

function Admin() {
  return (
    <>
      <Navbar />

      <div className="page">
        <div className="card">

          <h1>Admin Panel</h1>

          <p><FaUsers /> Manage Users</p>

          <p><FaUserShield /> Manage Roles</p>

          <p><FaChartBar /> View Reports</p>

          <p><FaDatabase /> Full System Access</p>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Admin;