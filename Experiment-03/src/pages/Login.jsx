import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { authenticate } from "../utils/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const user = authenticate(email, password);

    if (user) {
      login(user);
      navigate("/dashboard");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h1>🔐 JWT Authentication</h1>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="login-btn">
            Login
          </button>

        </form>

        <div className="demo-box">

          <h3>Demo Accounts</h3>

          <p><strong>Admin</strong></p>
          <p>admin@gmail.com</p>
          <p>Password : 1234</p>

          <hr />

          <p><strong>Editor</strong></p>
          <p>editor@gmail.com</p>
          <p>Password : 1234</p>

          <hr />

          <p><strong>Viewer</strong></p>
          <p>viewer@gmail.com</p>
          <p>Password : 1234</p>

        </div>

      </div>
    </div>
  );
}

export default Login;