import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Reset = () => {
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();

    // Empty validation
    if (
      !email.trim() ||
      !oldPassword.trim() ||
      !newPassword.trim()
    ) {
      alert("Fill all inputs");
      return;
    }

    // Password validation
    if (newPassword.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    // Get all users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find user by email
    const user = users.find(
      (user) => user.email === email.trim()
    );

    if (!user) {
      alert("Email not found");
      return;
    }

    // Check old password
    if (user.password !== oldPassword) {
      alert("Incorrect Old Password");
      return;
    }

    // Prevent same password
    if (oldPassword === newPassword) {
      alert("New password must be different");
      return;
    }

    // Update password
    user.password = newPassword;

    // Save updated users
    localStorage.setItem("users", JSON.stringify(users));

    // Update current logged-in user if needed
    const currentUser = JSON.parse(
      localStorage.getItem("currentUser")
    );

    if (currentUser && currentUser.email === user.email) {
      currentUser.password = newPassword;

      localStorage.setItem(
        "currentUser",
        JSON.stringify(currentUser)
      );
    }

    alert("Password Updated Successfully");

    // Clear inputs
    setEmail("");
    setOldPassword("");
    setNewPassword("");

    // Go back to Login
    navigate("/");
  };

  return (
    <div>
      <h2>Reset Password</h2>

      <form onSubmit={handleReset}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Enter Old Password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Enter New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">
          Update Password
        </button>

        <br />
        <br />

        <Link to="/">
          <button type="button">
            Back to Login
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Reset;