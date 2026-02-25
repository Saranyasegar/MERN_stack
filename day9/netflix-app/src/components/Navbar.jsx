import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="navbar">
      <h2 className="logo">NETFLIX</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Navbar;