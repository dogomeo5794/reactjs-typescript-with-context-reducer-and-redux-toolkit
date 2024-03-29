import { configureStore } from "@reduxjs/toolkit";
import shopCartSlice from "./modules/shopCartSlice";

export const store = configureStore({
  reducer: {
    product: shopCartSlice
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
