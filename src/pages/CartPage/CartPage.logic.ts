import { IProductCart } from "../../shared";
import { order } from "../../features/order/order.slice";
const placeOrder = async (
  cartProducts: IProductCart[],
  total: number,
  dispatch: any
) => {
  const products = cartProducts.map((product) => ({
    product: product._id,
    quantity: product.quantity,
  }));

  const orderObj = { products: products, total: total };

  try {
    await dispatch(order(orderObj)).unwrap();
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const filterProducts = (cartProducts: IProductCart[]) => {
  const products = cartProducts.map((product) => ({
    product: product._id,
    quantity: product.quantity,
  }));
  return products;
};

export { filterProducts, placeOrder };
