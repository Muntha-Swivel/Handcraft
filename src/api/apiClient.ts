import axios from "axios";

const axiosClient = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:8080",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default axiosClient;
