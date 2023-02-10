import axiosClient from "../apiClient";
import { IOrder } from "../../shared/interfaces/order.interface";

const placeOrderService = (order: IOrder) => {
  return axiosClient.post(`/api/order`, JSON.stringify(order));
};

export { placeOrderService };
