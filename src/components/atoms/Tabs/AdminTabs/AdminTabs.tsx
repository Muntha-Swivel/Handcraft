import React from "react";
import { useState } from "react";
import { Tab, Tabs } from "@mui/material";
const AdminTabs = () => {
  const [value, setValue] = useState();
  return (
    <Tabs
      sx={{ marginLeft: "auto", marginRight: "auto" }}
      indicatorColor="secondary"
      textColor="secondary"
      value={value}
      onChange={(e, value) => setValue(value)}
    >
      <Tab label="PRODUCTS" />
      <Tab label="INSIGHTS" />
    </Tabs>
  );
};

export { AdminTabs };
