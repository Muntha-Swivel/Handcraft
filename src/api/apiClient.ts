import axios from "axios";

const axiosClient = axios.create({
  withCredentials: true,
  baseURL: "http://192.168.1.26:8080",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default axiosClient;
