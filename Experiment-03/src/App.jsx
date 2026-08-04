import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Editor from "./pages/Editor";
import Viewer from "./pages/Viewer";
import Unauthorized from "./pages/Unauthorized";

import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute
            allowedRoles={["Admin", "Editor", "Viewer"]}
          >
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={["Admin"]}>
            <Admin />
          </ProtectedRoute>
        }
      />

      <Route
        path="/editor"
        element={
          <ProtectedRoute
            allowedRoles={["Admin", "Editor"]}
          >
            <Editor />
          </ProtectedRoute>
        }
      />

      <Route
        path="/viewer"
        element={
          <ProtectedRoute
            allowedRoles={["Admin", "Editor", "Viewer"]}
          >
            <Viewer />
          </ProtectedRoute>
        }
      />

      <Route
        path="/unauthorized"
        element={<Unauthorized />}
      />
    </Routes>
  );
}

export default App;