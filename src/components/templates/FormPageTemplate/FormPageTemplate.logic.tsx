import React, { useEffect } from "react";
import {
  ACard,
  LoginForm,
  UserRegisterForm,
  ProductForm,
} from "../../molecules";
import { useLocation } from "react-router-dom";
import { useMatch } from "react-router-dom";

const Form = () => {
  const location = useLocation();
  const productForm = useMatch("/admin/edit-product/:id");

  if (location.pathname === "/login") {
    return <LoginForm />;
  }
  if (location.pathname === "/userRegister") {
    return <UserRegisterForm />;
  }
  if (location.pathname === "/admin/add-product") {
    return <ProductForm editForm={false} />;
  }
  if (productForm) {
    return <ProductForm editForm={true} />;
  } else {
    return <></>;
  }
};
export { Form };
