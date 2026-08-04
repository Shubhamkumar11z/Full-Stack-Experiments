import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FaEdit,
  FaUpload,
  FaFileAlt
} from "react-icons/fa";

function Editor() {
  return (
    <>
      <Navbar />

      <div className="page">
        <div className="card">

          <h1>Editor Panel</h1>

          <p><FaEdit /> Edit Content</p>

          <p><FaUpload /> Publish Articles</p>

          <p><FaFileAlt /> Manage Posts</p>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Editor;