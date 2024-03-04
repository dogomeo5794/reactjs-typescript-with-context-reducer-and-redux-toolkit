import { createSlice } from "@reduxjs/toolkit";
import { ShopCartDataTypes } from "../../context/shopContext";

const initState: {
  items: ShopCartDataTypes[]
} = {
  items: []
}
export const shopCartSlice = createSlice({
  name: "product",
  initialState: initState,
  reducers: {
    addItem(state, actions) {
      const newItems = [...state.items];
      const index = newItems.findIndex(data => data.productId === actions.payload.productId);
      if (index > -1) {
        newItems[index].quantity = (newItems[index].quantity || 0) + 1
      }
      else{
        newItems.push({
          ...actions.payload,
          quantity: 1
        })
      }
      state.items = newItems;
    }
  }
})

export const {
  addItem
} = shopCartSlice.actions

export default shopCartSlice.reducer;
