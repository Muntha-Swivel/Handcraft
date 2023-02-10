import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { string } from "yup";
import {
  getAllProductService,
  getProductSerivce,
  addProductService,
  updateProductService,
  deleteProductService,
} from "../../api/services/product.service";
import { IProduct } from "../../shared";
const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [] as IProduct[],
    product: {} as IProduct,
    productToUpdate: {} as IProduct,
    successMessage: "",
    errorMessage: "",
    loading: false,
    networkError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    //getting all procucts
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
    //add a product
    builder.addCase(addProduct.pending, (state) => {
      state.loading = true;
      state.networkError = false;
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.product = action.payload;
      state.loading = false;
      state.networkError = false;
      state.successMessage = "Product successfuly added!";
      state.errorMessage = "";
    });
    builder.addCase(addProduct.rejected, (state) => {
      state.loading = false;
      state.networkError = true;
      state.errorMessage = "Could not add something went wrong!";
      state.successMessage = "";
    });
    //get Product
    builder.addCase(getProuduct.pending, (state) => {
      state.loading = true;
      state.networkError = false;
    });
    builder.addCase(getProuduct.fulfilled, (state, action) => {
      state.productToUpdate = action.payload;
      state.loading = false;
      state.networkError = false;
    });
    builder.addCase(getProuduct.rejected, (state) => {
      state.loading = false;
      state.networkError = true;
    });
    //update product
    builder.addCase(updateProduct.pending, (state) => {
      state.loading = true;
      state.networkError = false;
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      state.product = action.payload;
      state.loading = false;
      state.networkError = false;
      state.successMessage = "Product successfuly updated!";
      state.errorMessage = "";
    });
    builder.addCase(updateProduct.rejected, (state) => {
      state.loading = false;
      state.networkError = true;
      state.errorMessage = "Could not update something went wrong!";
      state.successMessage = "";
    });
    //delete product
    builder.addCase(deleteProduct.pending, (state) => {
      state.loading = true;
      state.networkError = false;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
      state.networkError = false;
      state.successMessage = "";
      state.errorMessage = "";
    });
    builder.addCase(deleteProduct.rejected, (state) => {
      state.loading = false;
      state.networkError = true;
      state.errorMessage = "";
      state.successMessage = "";
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
export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (product: Omit<Omit<IProduct, "_id">, "sold">) => {
    try {
      const response = await addProductService(product);
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
);
export const getProuduct = createAsyncThunk(
  "product/getProduct",
  async (id: string) => {
    try {
      const response = await getProductSerivce(id);
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
);
export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (product: Omit<IProduct, "sold">) => {
    const { _id } = product;
    try {
      const response = await updateProductService(product, _id);
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
);
export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id: string) => {
    try {
      const response = await deleteProductService(id);
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
);
