import axiosClient from "../apiClient";
import { ILogin } from "../../shared";

const loginService = (data: ILogin) => {
  return axiosClient.post("/api/sessions", JSON.stringify(data));
};
const logoutService = () => {
  return axiosClient.delete("/api/sessions");
};

export { loginService, logoutService };
