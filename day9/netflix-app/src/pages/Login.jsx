import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.get("http://localhost:4000/users");

      const user = res.data.find(
        (u) => u.id === Number(id) && u.password === password
      );

      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/dashboard");
      } else {
        alert("Invalid ID or Password");
      }
    } catch (err) {
      alert("Server Error");
    }
  };

  return (
    <div className="login-container">
      <h1 className="logo">NETFLIX</h1>

      <div className="login-box">
        <h2>Sign In</h2>

        <input
          type="number"
          placeholder="Enter ID"
          onChange={(e) => setId(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;