import { Link } from "react-router-dom";
import Footer from "../components/Footer";

import { FaBan } from "react-icons/fa";

function Unauthorized() {
  return (
    <>
      <div className="page">
        <div className="card">

          <FaBan
            size={70}
            color="red"
          />

          <h1>403</h1>

          <h2>Access Denied</h2>

          <p>
            You don't have permission to access this page.
          </p>

          <br />

          <Link
            to="/dashboard"
            style={{
              color:"#2563eb",
              fontWeight:"bold"
            }}
          >
            ← Back to Dashboard
          </Link>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Unauthorized;