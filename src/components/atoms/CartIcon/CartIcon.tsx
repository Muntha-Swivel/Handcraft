import * as React from "react";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { useNavigate } from "react-router-dom";

export default function CustomizedBadges() {
  const navigate = useNavigate();
  const products: number = useAppSelector((state) => state.cart.items.length);
  return (
    <IconButton aria-label="cart" onClick={() => navigate("/cart")}>
      <Badge badgeContent={products} color="error">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
}
