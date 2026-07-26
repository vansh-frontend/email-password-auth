import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Empty validation
    if (!email.trim() || !password.trim()) {
      alert("Fill all inputs");
      return;
    }

    // Read all users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find matching user
    const user = users.find(
      (user) =>
        user.email === email.trim() &&
        user.password === password
    );

    // If no user found
    if (!user) {
      alert("Invalid Email or Password");
      return;
    }

    // Save current logged in user
    localStorage.setItem(
      "currentUser",
      JSON.stringify(user)
    );

    alert("Login Successful");

    navigate("/home");
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">Login</button>

        <Link to="/signup">
  <button>Signup</button>
</Link>

<Link to="/reset-password">
  <button>Reset Password</button>
</Link>
      </form>
    </div>
  );
};

export default Login;