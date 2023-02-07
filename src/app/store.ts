import { configureStore } from "@reduxjs/toolkit";
//import usersRedcuer from './userSlice';
import productSlice from "../features/product/product.slice";
import cartSlice from "../features/cart/cart.slice";
export const store = configureStore({
  reducer: {
    product: productSlice,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;