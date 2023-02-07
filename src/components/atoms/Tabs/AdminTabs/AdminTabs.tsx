import React from "react";
import { useState, useEffect } from "react";
import { Tab, Tabs } from "@mui/material";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { setPath } from "../Tabs.logic";

const AdminTabs = () => {
  const location = useLocation();
  const [value, setValue] = useState<any>();
  const paths = ["/admin-dashboard-products", "/admin-products-insight"];
  useEffect(() => {
    const status = setPath(location, paths);
    setValue(status);
    console.log(status);
  }, [location]);

  return (
    <Tabs
      sx={{ marginLeft: "auto", marginRight: "auto" }}
      textColor="secondary"
      value={value}
    >
      <Tab label="PRODUCTS" component={Link} to={"/admin-dashboard-products"} />
      <Tab label="INSIGHTS" component={Link} to={"/admin-products-insight"} />
    </Tabs>
  );
};

export { AdminTabs };
