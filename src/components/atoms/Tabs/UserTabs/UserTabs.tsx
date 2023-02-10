import React from "react";
import { useState, useEffect } from "react";
import { Tab, Tabs } from "@mui/material";
import { useLocation } from "react-router-dom";
import { setPath } from "../Tabs.logic";
import { Link } from "react-router-dom";
const UserTabs = () => {
  const [value, setValue] = useState<any>();
  const location = useLocation();
  const paths = ["/", "/about", "/contact"];
  useEffect(() => {
    const path = setPath(location, paths);
    setValue(path);
  });
  return (
    <Tabs
      sx={{ marginLeft: "auto", marginRight: "auto" }}
      indicatorColor="secondary"
      textColor="secondary"
      value={value}
    >
      <Tab label="HOME" component={Link} to="/" />
      {/* <Tab label="ABOUT US" component={Link} to="/analytics" />
      <Tab label="CONTACT" component={Link} to="/contact" /> */}
    </Tabs>
  );
};

export { UserTabs };
