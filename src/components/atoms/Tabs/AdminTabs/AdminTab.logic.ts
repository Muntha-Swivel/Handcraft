import { exit } from "process";
import { Location } from "react-router-dom";
const setPath = (location: Location) => {
  const paths = ["/admin-dashboard-products", "/admin-products-insight"];
  const index = paths.findIndex((path) => location.pathname === path);

  return index !== -1 ? index : false;
};

export { setPath };
