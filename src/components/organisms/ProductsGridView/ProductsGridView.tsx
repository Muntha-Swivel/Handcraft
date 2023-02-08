import React from "react";
import { PrimaryButton } from "../../atoms";
import { ACard } from "../../molecules/ACard/ACard";
import Grid from "@mui/material/Grid";
import { IProductGridView } from "./ProductGridView.interface";
import { addToCart } from "../../../features/cart/cart.slice";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";

const ProductsGridView = ({ data }: IProductGridView) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <Grid container spacing={2} direction="row">
        {data.map((product) => (
          <Grid item md={4} sm={6} xs={12} key={product._id}>
            <ACard
              _id={product._id}
              title={product.title}
              price={product.price}
              description={product.description}
              image={product.image}
            >
              <PrimaryButton
                text="ADD TO CART"
                onClick={() =>
                  dispatch(
                    addToCart({
                      ...product,
                      quantity: 1,
                      totalPrice: product.price,
                    })
                  )
                }
              />
            </ACard>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export { ProductsGridView };
