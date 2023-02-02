import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, FormPage, AdminDashboardPage } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<FormPage />} />
      <Route path="/userRegister" element={<FormPage />} />
      <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
    </Routes>
  );
};
export { Router };
