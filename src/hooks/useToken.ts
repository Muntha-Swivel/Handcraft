import { useEffect } from "react";
import { useAppSelector } from "../app/hooks";
import Cookies from "js-cookie";

const useToken = () => {
  const { token } = useAppSelector((state) => state.auth);
  const tokenFromCookie = Cookies.get("accessToken");
  useEffect(() => {}, [token]);

  if (token) {
    return token;
  } else if (tokenFromCookie) {
    return tokenFromCookie;
  } else {
    return null;
  }
};
export default useToken;
