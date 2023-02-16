import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";

const AdminProtectedRoutes = () => {
  const { token, user } = useAppSelector((state) => state.auth);
  return user.isAdmin ? <Outlet /> : <Navigate to="/" />;
};

export default AdminProtectedRoutes;
