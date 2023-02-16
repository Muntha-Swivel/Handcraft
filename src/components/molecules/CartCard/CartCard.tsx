import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { IProductCart } from "../../../shared/interfaces/productCart.interface";
import { useAppDispatch } from "../../../app/hooks";
import {
  addToCart,
  updateQuantity,
  removeFromCart,
} from "../../../features/cart/cart.slice";
import ClearIcon from "@mui/icons-material/Clear";
import { PictureButton } from "../../atoms";
import styles from "./CartCard.module.css";
const CartCard = ({
  _id,
  title,
  price,
  description,
  image,
  quantity,
  totalPrice,
}: IProductCart) => {
  const dispatch = useAppDispatch();
  return (
    <Card className={styles.card}>
      <Box className={styles.Box}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography variant="h6" color="text.secondary" component="div">
            {totalPrice}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <Typography variant="body1">QTY</Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            type="number"
            size="small"
            sx={{ width: 75, margin: 1 }}
            value={quantity}
            InputProps={{
              inputProps: {
                min: 0,
                pattern: "[0-9]*",
              },
            }}
            onChange={(e) =>
              dispatch(
                updateQuantity({
                  _id: _id,
                  quantity: Number(e.target.value),
                  price: price,
                })
              )
            }
          />
          <Typography variant="body1">x{price}</Typography>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={image}
        alt="Live from space album cover"
      />
      <PictureButton
        icon={<ClearIcon />}
        onClick={() => dispatch(removeFromCart(_id))}
      />
    </Card>
  );
};

export { CartCard };
