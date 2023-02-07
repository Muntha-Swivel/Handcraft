import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProductService } from "../../api/services/product.service";
import { IProduct } from "../../shared";
const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [] as IProduct[],
    loading: false,
    networkError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true;
      state.networkError = false;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
      state.networkError = false;
    });
    builder.addCase(getAllProducts.rejected, (state) => {
      state.loading = false;
      state.networkError = true;
    });
  },
});

export default productSlice.reducer;

export const getAllProducts = createAsyncThunk(
  "product/getAllProduct",
  async () => {
    try {
      const response = await getAllProductService();
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
);
