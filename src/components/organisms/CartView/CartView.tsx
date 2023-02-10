import React from "react";
import { CartCard } from "../../molecules";
import { ICartVeiw } from "./CartView.interface";
const CartView = ({ data }: ICartVeiw) => {
  return (
    <>
      {data.map((product) => (
        <CartCard
          key={product._id}
          _id={product._id}
          title={product.title}
          price={product.price}
          description={product.description}
          image={product.image}
          quantity={product.quantity}
          totalPrice={product.totalPrice}
          sold={product.sold}
        />
      ))}
    </>
  );
};
export { CartView };
