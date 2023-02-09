import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { decodeToken } from "react-jwt";
import { IUser } from "../../shared";
const AdminProtectedRoutes = () => {
  const { token, user } = useAppSelector((state) => state.auth);
  console.log(user.isAdmin);
  return user.isAdmin ? <Outlet /> : <Navigate to="/" />;
};

export default AdminProtectedRoutes;
