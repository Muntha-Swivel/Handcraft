import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, FormPage, AdminDashboardPage, CartPage } from "../pages";
import AdminProtectedRoutes from "./protectedRoutes/admin.route";
import { useAppDispatch } from "../app/hooks";
import { setUser } from "../features/auth/auth.slice";
import { decodeToken } from "react-jwt";
import useToken from "../hooks/useToken";
import axiosClient from "../api/apiClient";
const Router = () => {
  const dispatch = useAppDispatch();
  const token = useToken();
  useEffect(() => {
    if (token) {
      axiosClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const decodedUser: any = decodeToken(token);
      const { _id, email, isAdmin, sessionId } = decodedUser;
      dispatch(setUser({ _id, email, isAdmin, sessionId }));
    }
  }, [token]);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<FormPage />} />
      <Route path="/userRegister" element={<FormPage />} />

      <Route element={<AdminProtectedRoutes />}>
        <Route path="/admin/add-product" element={<FormPage />} />
        <Route path="/admin/edit-product/:id" element={<FormPage />} />
      </Route>

      <Route
        path="/admin-dashboard-products"
        element={<AdminDashboardPage />}
      />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};
export { Router };
