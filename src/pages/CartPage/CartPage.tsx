import React, { useState } from "react";
import { CartPageTemplate } from "../../components/templates";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { placeOrder, filterProducts } from "./CartPage.logic";
import { clearCart } from "../../features/cart/cart.slice";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const dispatch = useAppDispatch();
  const { items, total } = useAppSelector((state) => state.cart);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const { loading } = useAppSelector((state) => state.order);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();
  const onClickAddToCart = async () => {
    const result = await placeOrder(items, total, dispatch);
    setRefresh(!refresh);
    if (result) {
      setError(false);
      setSuccess(true);
      dispatch(clearCart());
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      setSuccess(false);
      setError(true);
    }
  };
  return (
    <CartPageTemplate
      data={items}
      total={total}
      checkoutBtnText={loading ? "Checkout..." : "Checkout"}
      checkoutBtnDisabled={loading ? true : false}
      onClickAddToCart={onClickAddToCart}
      success={success}
      error={error}
      refreshFeedback={refresh}
    />
  );
};

export { CartPage };
