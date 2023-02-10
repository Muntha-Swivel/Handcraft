import axiosClient from "../apiClient";
import { IProduct } from "../../shared";
const getAllProductService = () => {
  return axiosClient.get("/api/product");
};
const getProductSerivce = (id: string) => {
  return axiosClient.get(`/api/product/${id}`);
};
const addProductService = (product: Omit<Omit<IProduct, "_id">, "sold">) => {
  return axiosClient.post("/api/product", JSON.stringify(product));
};
const updateProductService = (
  product: Omit<Omit<IProduct, "_id">, "sold">,
  id: string
) => {
  return axiosClient.put(`/api/product/${id}`, JSON.stringify(product));
};
const deleteProductService = (id: string) => {
  return axiosClient.delete(`/api/product/${id}`);
};

export {
  getAllProductService,
  addProductService,
  getProductSerivce,
  updateProductService,
  deleteProductService,
};
