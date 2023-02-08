import React from "react";
import { CartPageTemplate } from "../../components/templates";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

const CartPage = () => {
  const { items, total } = useAppSelector((state) => state.cart);
  return <CartPageTemplate data={items} total={total} />;
};

export { CartPage };
