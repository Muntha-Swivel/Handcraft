import axios from "axios";

const axiosClient = axios.create({
  baseURL:
    "http://employeemanager-env.eba-mhwcuic3.ap-northeast-1.elasticbeanstalk.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true,
  },
});

export default axiosClient;
