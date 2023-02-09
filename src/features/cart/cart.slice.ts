import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";
import { IProductCart } from "../../shared/index";
import { calculateTotal } from "../../utils/calTotal.utils";

interface updateQty {
  _id: string;
  quantity: number;
  price: number;
}
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [] as IProductCart[],
    total: 0 as number,
  },
  reducers: {
    addToCart: (state, action: PayloadAction<IProductCart>) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item._id === action.payload._id
      );
      if (existingItemIndex === -1) {
        state.items.push(action.payload);
      } else {
        state.items[existingItemIndex] = {
          ...state.items[existingItemIndex],
          quantity: state.items[existingItemIndex].quantity + 1,
          totalPrice:
            state.items[existingItemIndex].totalPrice + action.payload.price,
        };
      }
      state.total = calculateTotal(state.items);
    },
    updateQuantity: (state, action: PayloadAction<updateQty>) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item._id === action.payload._id
      );
      if (existingItemIndex === -1) {
        return;
      } else {
        state.items[existingItemIndex] = {
          ...state.items[existingItemIndex],
          quantity: action.payload.quantity,
          totalPrice: action.payload.quantity * action.payload.price,
        };
      }
      state.total = calculateTotal(state.items);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
      state.total = calculateTotal(state.items);
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
