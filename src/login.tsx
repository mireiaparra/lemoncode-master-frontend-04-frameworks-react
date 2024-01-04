import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(username === "admin" && password === "test") {
            navigate("/list");
        } else {
            alert("Invalid credentials");
        }
    }
  return (
    <form onSubmit={handleNavigation}>
        <h2>Hello from login page</h2>
      <div className="login-container">
        <div>
          <label>Username:</label>
          <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}/>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
        </div>
      <button type="submit">Go</button>
      </div>
    </form>
  );
};