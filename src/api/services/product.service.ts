import axiosClient from "../apiClient";

const getAllProductService = () => {
  return axiosClient.get("/api/product");
};
export { getAllProductService };
