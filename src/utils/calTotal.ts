import { IProductCart } from "../shared";
const calculateTotal = (products: IProductCart[]) => {
  return products.reduce((total, current) => total + current.totalPrice, 0);
  //this function will iterate throught an array of objects
  //get the property total price from every objet
  //sum them up
};
export { calculateTotal };
