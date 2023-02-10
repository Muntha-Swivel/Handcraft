import React from "react";
import { PrimaryButton, PictureButton } from "../../atoms";
import { ACard } from "../../molecules/ACard/ACard";
import Grid from "@mui/material/Grid";
import { IProductGridView } from "./ProductGridView.interface";
import { addToCart } from "../../../features/cart/cart.slice";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { useNavigate } from "react-router-dom";
import useToken from "../../../hooks/useToken";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { onClickEdit } from "./ProdutGridView.logic";
import { deleteProduct } from "../../../features/product/product.slice";

const ProductsGridView = ({ data }: IProductGridView) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const token = useToken();
  const { user } = useAppSelector((state) => state.auth);

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
              sold={product.sold}
            >
              {user.isAdmin ? (
                <>
                  <PictureButton
                    icon={<EditIcon />}
                    onClick={() => onClickEdit(dispatch, navigate, product._id)}
                  />
                  <PictureButton
                    icon={<DeleteIcon />}
                    onClick={() => dispatch(deleteProduct(product._id))}
                  />
                </>
              ) : (
                <PrimaryButton
                  text="ADD TO CART"
                  onClick={() =>
                    token
                      ? dispatch(
                          addToCart({
                            ...product,
                            quantity: 1,
                            totalPrice: product.price,
                          })
                        )
                      : navigate("/login")
                  }
                />
              )}
            </ACard>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export { ProductsGridView };
