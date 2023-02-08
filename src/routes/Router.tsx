import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, FormPage, AdminDashboardPage, CartPage } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<FormPage />} />
      <Route path="/userRegister" element={<FormPage />} />
      <Route path="/admin/add-product" element={<FormPage />} />
      <Route
        path="/admin-dashboard-products"
        element={<AdminDashboardPage />}
      />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};
export { Router };
