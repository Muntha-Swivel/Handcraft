import axiosClient from "../apiClient";

const loginService = (data: any) => {
  return axiosClient.post("/api/sessions", JSON.stringify(data));
};

export { loginService };
