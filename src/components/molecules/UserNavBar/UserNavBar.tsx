import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import {
  AppBar,
  Button,
  Toolbar,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { logoutUser } from "../../../features/auth/auth.slice";
import {
  AdminTabs,
  CartIcon,
  PictureButton,
  SearchBox,
  UserTabs,
} from "../../atoms";
import { DrawerComp } from "../Drawer/Drawer";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

const UserNavBar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const { token, user } = useAppSelector((state) => state.auth);
  const [isSearch, setIsSearch] = useState(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <React.Fragment>
      <AppBar sx={{ background: "white" }} position="sticky">
        <Toolbar>
          <Button
            variant="text"
            size="large"
            sx={{ fontSize: 25 }}
            onClick={() => navigate("/")}
          >
            CraftJwel
          </Button>
          {isMatch ? (
            <Box sx={{ ml: "auto" }}>
              <CartIcon />
              <DrawerComp />
            </Box>
          ) : (
            <>
              {isSearch ? (
                <>
                  {" "}
                  <SearchBox />{" "}
                </>
              ) : (
                <>{user.isAdmin ? <AdminTabs /> : <UserTabs />}</>
              )}
              <PictureButton
                icon={<SearchOutlinedIcon />}
                onClick={() => setIsSearch(!isSearch)}
              />
              {token ? (
                <PictureButton
                  icon={<LogoutIcon />}
                  onClick={() => dispatch(logoutUser())}
                />
              ) : (
                <PictureButton
                  icon={<PersonOutlineOutlinedIcon />}
                  onClick={() => navigate("/login")}
                />
              )}
              {user.isAdmin ? (
                <PictureButton
                  icon={<AddCircleOutlineOutlinedIcon />}
                  onClick={() => navigate("/admin/add-product")}
                />
              ) : (
                <>{token ? <CartIcon /> : <></>}</>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export { UserNavBar };
