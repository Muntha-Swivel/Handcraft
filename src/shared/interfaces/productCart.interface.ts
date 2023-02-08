import { IProduct } from "./product.interface";

export interface IProductCart extends IProduct {
  quantity: number;
  totalPrice: number;
}
