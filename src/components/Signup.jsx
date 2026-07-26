import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const mailDomains = [
    "@gmail.com",
    "@yahoo.com",
    "@outlook.com",
  ];

  const handleBook = (e) => {
    e.preventDefault();

    // Empty fields
    if (!email.trim() || !password.trim()) {
      alert("Fill all inputs");
      return;
    }

    // Email domain validation
    const isValidEmail = mailDomains.some((domain) =>
      email.endsWith(domain)
    );

    if (!isValidEmail) {
      alert("Enter a valid email.");
      return;
    }

    // Password validation
    if (password.length < 6) {
      alert("Password must contain at least 6 characters.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

  // Check duplicate email
  const userExists = users.find((user) => user.email === email);

  if (userExists) {
    alert("Email already exists");
    return;
  }

  // Add user
  users.push({
    email,
    password,
  });

  // Save
  localStorage.setItem("users", JSON.stringify(users));

    alert("Signup Success");

    setEmail("");
    setPass("");


  };

  

  return (
    <div>

    <h2>signup</h2>
        <form onSubmit={handleBook}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
    
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPass(e.target.value)}
          />
    
          <button type="submit">Signup</button>
        </form>
    
    </div>
  )
};

export default Signup;