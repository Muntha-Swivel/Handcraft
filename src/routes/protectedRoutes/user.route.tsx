import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";

const UserProtectedRoutes = () => {
  const { user } = useAppSelector((state) => state.auth);
  return user._id ? <Outlet /> : <Navigate to="/" />;
};

export default UserProtectedRoutes;
