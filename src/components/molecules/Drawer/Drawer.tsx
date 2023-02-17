import React, { useState, useEffect } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useAppDispatch } from "../../../app/hooks";
import { logoutUser } from "../../../features/auth/auth.slice";
import { clearCart } from "../../../features/cart/cart.slice";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { pages } from "./Pages";
import useToken from "../../../hooks/useToken";

const DrawerComp = () => {
  const token = useToken();
  const dispatch = useAppDispatch();
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    dispatch(logoutUser());
    dispatch(clearCart());
  };

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {pages
            .filter((page) => (token ? page.page !== "/login" : true))
            .map((page, index) => (
              <ListItemButton key={index} onClick={() => navigate(page.page)}>
                <ListItemIcon>
                  <ListItemText>{page.label}</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            ))}
          {token ? (
            <ListItemButton onClick={logout}>
              <ListItemIcon>
                <ListItemText>Logout</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ) : (
            <></>
          )}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="secondary" />
      </IconButton>
    </React.Fragment>
  );
};

export { DrawerComp };
