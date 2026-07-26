import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Reset from "./components/Reset";

const App = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <Routes>
      {/* Login */}
      <Route
        path="/"
        element={currentUser ? <Navigate to="/home" /> : <Login />}
      />

      {/* Signup */}
      <Route
        path="/signup"
        element={currentUser ? <Navigate to="/home" /> : <Signup />}
      />

      {/* Reset Password */}
      <Route
        path="/reset-password"
        element={currentUser ? <Navigate to="/home" /> : <Reset />}
      />

      {/* Home */}
      <Route
        path="/home"
        element={currentUser ? <Home /> : <Navigate to="/" />}
      />
    </Routes>
  );
};

export default App;