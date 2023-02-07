import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";
import { IProduct } from "../../shared/index";

interface cartItem extends IProduct {
  quantity: number;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [] as cartItem[],
  },
  reducers: {
    addToCart: (state, action: PayloadAction<cartItem>) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item._id === action.payload._id
      );
      if (existingItemIndex === -1) {
        state.items.push(action.payload);
      } else {
        state.items[existingItemIndex] = {
          ...state.items[existingItemIndex],
          quantity: state.items[existingItemIndex].quantity + 1,
        };
      }
    },
    removeFromCart: (state, action: PayloadAction<cartItem>) => {
      state.items = state.items.filter(
        (item) => item._id !== action.payload._id
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;

// setCartItems((currItems) => {
//   if (currItems.find((item) => item.id === id) == null) {
//     return [...currItems, { id, quantity: 1 }];
//   } else {
//     return currItems.map((item) => {
//       if (item.id === id) {
//         return { ...item, quantity: item.quantity + 1 };
//       } else {
//         return item;
//       }
//     });
//   }
// });
