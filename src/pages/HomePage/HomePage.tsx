import React, { useEffect } from "react";
import { HomePageTemplate } from "../../components/templates";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { getAllProducts } from "../../features/product/product.slice";
import Alert from "@mui/material/Alert";
const HomePage = () => {
  const dispatch = useAppDispatch();
  const { products, loading, networkError } = useAppSelector(
    (state) => state.product
  );

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <>
      {networkError ? (
        <Alert severity="error">
          Sorry! something went wrong with the server
        </Alert>
      ) : (
        <HomePageTemplate data={products} loading={loading} />
      )}
    </>
  );
};

export { HomePage };
