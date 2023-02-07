import * as React from "react";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import styles from "./CartIcon.module.css";

export default function CustomizedBadges() {
  const products: number = useAppSelector((state) => state.cart.items.length);
  return (
    <IconButton aria-label="cart">
      <Badge badgeContent={products} color="error">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
}
