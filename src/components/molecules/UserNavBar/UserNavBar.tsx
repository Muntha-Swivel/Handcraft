import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { DrawerComp } from "../Drawer/Drawer";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { PictureButton } from "../../atoms";
const UserNavBar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar sx={{ background: "white" }} elevation={0}>
        <Toolbar>
          <Typography variant="subtitle1">CRAFTJWEL</Typography>
          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto", marginRight: "auto" }}
                indicatorColor="secondary"
                textColor="secondary"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="SHOP" />
                <Tab label="OUR STORY" />
                <Tab label="REVIEWS" />
              </Tabs>
              <PictureButton
                icon={<SearchOutlinedIcon />}
                onClick={() => console.log("hello")}
              />
              <PictureButton
                icon={<PersonOutlineOutlinedIcon />}
                onClick={() => console.log("hello")}
              />
              <PictureButton
                icon={<LocalMallOutlinedIcon />}
                onClick={() => console.log("hello")}
              />
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export { UserNavBar };
