import axiosClient from "../apiClient";
import { ILogin, ICreateUser } from "../../shared";

const createUserService = (data: ICreateUser) => {
  return axiosClient.post("/api/users", JSON.stringify(data));
};
const loginService = (data: ILogin) => {
  return axiosClient.post("/api/sessions", JSON.stringify(data));
};
const logoutService = () => {
  return axiosClient.delete("/api/sessions");
};

export { loginService, logoutService, createUserService };
