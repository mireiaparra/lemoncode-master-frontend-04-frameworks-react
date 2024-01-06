import React from "react";

interface Props {
    onLogin: (username: string, password: string) => void;
}

export const LoginComponent: React.FC<Props> = (props) => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const { onLogin } = props;

    const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onLogin(username, password);
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
}