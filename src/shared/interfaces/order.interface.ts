interface IOrderProduct {
  product: string;
  quantity: number;
}
export interface IOrder {
  products: IOrderProduct[];
  total: number;
}
