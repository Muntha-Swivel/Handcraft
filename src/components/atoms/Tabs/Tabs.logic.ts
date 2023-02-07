import { Location } from "react-router-dom";
const setPath = (location: Location, paths: string[]) => {
  const index = paths.findIndex((path) => location.pathname === path);

  return index !== -1 ? index : false;
};

export { setPath };
