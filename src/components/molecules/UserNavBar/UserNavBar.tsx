import React, { useState, useEffect } from "react";
import {
  AppBar,
  Button,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { DrawerComp } from "../Drawer/Drawer";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { PictureButton, SearchBox } from "../../atoms";
import { useNavigate } from "react-router-dom";
import { UserTabs, AdminTabs, CartIcon } from "../../atoms";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import LogoutIcon from "@mui/icons-material/Logout";
import { logoutUser } from "../../../features/auth/auth.slice";

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
            <>
              <DrawerComp />
            </>
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
