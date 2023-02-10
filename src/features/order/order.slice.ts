import {
  createSlice,
  isRejectedWithValue,
  PayloadAction,
} from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { placeOrderService } from "../../api/services/order.service";
import { IOrder } from "../../shared";

interface IOrderProduct {
  product: string;
  quanity: number;
}
interface IPlaceOrder {
  products: IOrderProduct[];
  total: number;
}

const authSlice = createSlice({
  name: "order",
  initialState: {
    // order: {} as IPlaceOrder,
    loading: false,
    networkError: false,
    errorMessage: "",
    successMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(order.pending, (state) => {
      state.loading = true;
      state.networkError = false;
    });
    builder.addCase(order.fulfilled, (state, action) => {
      state.loading = false;
      state.networkError = false;
    });
    builder.addCase(order.rejected, (state, action) => {
      state.loading = false;
      state.networkError = true;
    });
  },
});

export default authSlice.reducer;

export const order = createAsyncThunk(
  "product/updateProduct",
  async (order: IOrder) => {
    try {
      const response = await placeOrderService(order);
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
);

//ERR_NETWORK
//ERR_BAD_REQUEST
