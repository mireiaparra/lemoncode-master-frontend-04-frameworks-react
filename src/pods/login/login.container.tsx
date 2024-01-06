import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../../router";
import { LoginComponent } from "./login.component";
import { doLogin } from "./login.api";

export const LoginContainer: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (username: string, password: string) => {
    doLogin(username, password).then((result) => {
      if (result) {
        navigate(routes.list);
      } else {
        alert("Invalid login, please try again");
      }
    });
  };

  return <LoginComponent onLogin={handleNavigation}></LoginComponent>;
};
