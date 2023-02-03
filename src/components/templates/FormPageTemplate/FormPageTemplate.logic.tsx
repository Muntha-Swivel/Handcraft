import React from "react";
import {
  ACard,
  LoginForm,
  UserRegisterForm,
  ProductForm,
} from "../../molecules";
import { useLocation } from "react-router-dom";

const Form = () => {
  const location = useLocation();
  if (location.pathname === "/login") {
    return <LoginForm />;
  }
  if (location.pathname === "/userRegister") {
    return <UserRegisterForm />;
  }
  if (location.pathname === "/admin/add-product") {
    return <ProductForm />;
  } else {
    return <></>;
  }
};
export { Form };
