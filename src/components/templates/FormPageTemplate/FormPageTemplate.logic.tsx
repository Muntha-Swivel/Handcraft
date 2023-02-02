import React from "react";
import { ACard, LoginForm, UserRegisterForm } from "../../molecules";
import { useLocation } from "react-router-dom";

const Form = () => {
  const location = useLocation();
  if (location.pathname === "/login") {
    return <LoginForm />;
  }
  if (location.pathname === "/userRegister") {
    return <UserRegisterForm />;
  } else {
    return <></>;
  }
};
export { Form };
