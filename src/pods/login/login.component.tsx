import { AccountCircle } from "@mui/icons-material";
import { Avatar, Button, TextField } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
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
          <div className="login-container">
              <Avatar sx={{ bgcolor: deepPurple[500] }}><AccountCircle/></Avatar>
              <TextField label="Username" variant="outlined" value={username} onChange={e => setUsername(e.target.value)}/>
              <TextField label="Password" variant="outlined" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
          <Button variant="contained" type="submit">Login</Button>
          </div>
        </form>
      );
}