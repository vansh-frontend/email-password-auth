import { useNavigate,Link } from "react-router-dom";

const Home = () => {
  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );

  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove logged-in user
    localStorage.removeItem("currentUser");

    // Go back to login page
    navigate("/");
  };

  return (
    <div>
      <h1>Home</h1>

      <h2>Welcome</h2>

      <p>{currentUser?.email}</p>

      <button onClick={handleLogout}>
        Logout
      </button> <br /> <br />
     <Link to="/reset-password">
  <button>Reset Password</button>
</Link>
    </div>
  );
};

export default Home;