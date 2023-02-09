import {
  createSlice,
  isRejectedWithValue,
  PayloadAction,
} from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginService, logoutService } from "../../api/services/auth.service";
import { ILogin, IUser } from "../../shared";
import { isExpired, decodeToken } from "react-jwt";
import Cookies from "js-cookie";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: Cookies.get("accessToken"),
    user: {} as IUser,
    loading: false,
    networkError: false,
    loginErrorMessage: "",
  },
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.networkError = false;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      const token = action.payload.accessToken;
      const decodedUser: any = decodeToken(token);
      const { _id, email, isAdmin, sessionId } = decodedUser;
      const userDetails = { _id, email, isAdmin, sessionId };
      state.user = userDetails;
      state.token = action.payload.accessToken;
      state.loading = false;
      state.networkError = false;
      state.loginErrorMessage = "";
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      if (action.error.code === "ERR_BAD_REQUEST") {
        state.loginErrorMessage = "Invalid Username or Password";
      } else {
        state.loginErrorMessage = "Something went wrong please try again later";
      }
      state.loading = false;
      state.networkError = false;
    });
    //logout user
    builder.addCase(logoutUser.pending, (state) => {
      state.loading = true;
      state.networkError = false;
    });
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");
      state.token = action.payload.accessToken;
      state.user = { _id: "", email: "", isAdmin: false, sessionId: "" };
    });
    builder.addCase(logoutUser.rejected, (state, action) => {
      state.loading = false;
      state.networkError = false;
    });
  },
});

export default authSlice.reducer;

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (user: ILogin, { rejectWithValue }) => {
    try {
      const response = await loginService(user);
      return response.data;
    } catch (err: any) {
      console.log(err);
      throw err;
    }
  }
);
export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  try {
    const response = await logoutService();
    return response.data;
  } catch (err: any) {
    console.log(err);
    throw err;
  }
});

export const { setUser } = authSlice.actions;
//ERR_NETWORK
//ERR_BAD_REQUEST
