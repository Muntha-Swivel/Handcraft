import { IProductCart } from "../../../shared";

export interface ICartTemplate {
  data: IProductCart[];
  total: number;
}
