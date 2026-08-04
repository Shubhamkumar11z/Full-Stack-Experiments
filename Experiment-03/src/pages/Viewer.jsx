import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FaEye,
  FaBook,
  FaClipboardList
} from "react-icons/fa";

function Viewer() {
  return (
    <>
      <Navbar />

      <div className="page">
        <div className="card">

          <h1>Viewer Panel</h1>

          <p><FaEye /> View Dashboard</p>

          <p><FaBook /> Read Content</p>

          <p><FaClipboardList /> Browse Reports</p>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Viewer;