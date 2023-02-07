import React, { useEffect } from "react";
import { HomePageTemplate } from "../../components/templates";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

import { getAllProducts } from "../../features/product/product.slice";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.product);
  console.log(products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return <HomePageTemplate data={products} />;
};

export { HomePage };
