import React, { useState } from "react";
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
import { PictureButton } from "../../atoms";
import { useNavigate } from "react-router-dom";
import { UserTabs, AdminTabs } from "../../atoms";

const UserNavBar = () => {
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  const [isAdmin, setIsAdmin] = useState(true);

  const navigate = useNavigate();

  return (
    <React.Fragment>
      <AppBar sx={{ background: "white" }} position="sticky">
        <Toolbar>
          <Button variant="text" size="large" sx={{ fontSize: 25 }}>
            CraftJwel
          </Button>
          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              {isAdmin ? <AdminTabs /> : <UserTabs />}
              <PictureButton
                icon={<SearchOutlinedIcon />}
                onClick={() => console.log("hello")}
              />
              <PictureButton
                icon={<PersonOutlineOutlinedIcon />}
                onClick={() => navigate("/login")}
              />
              {isAdmin ? (
                <PictureButton
                  icon={<AddCircleOutlineOutlinedIcon />}
                  onClick={() => navigate("/admin/add-product")}
                />
              ) : (
                <PictureButton
                  icon={<LocalMallOutlinedIcon />}
                  onClick={() => console.log("hello")}
                />
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export { UserNavBar };
