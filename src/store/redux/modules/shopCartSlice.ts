import { createSlice } from "@reduxjs/toolkit"

export interface ShopCartReduxData {
  productId: number,
  product: string,
  price?: number,
  quantity?: number
}

const initState: { items: ShopCartReduxData[] } = {
  items: []
}

export const shopCartReduxSlice = createSlice({
  name: "product",
  initialState: initState,
  reducers: {
    addCartItem(state, actions) {
      const prevState = [...state.items]
      const index = prevState.findIndex(data => data.productId === actions.payload.productId);
      if (index > -1) {
        prevState[index].quantity = (prevState[index].quantity || 0) + 1;
      }
      else {
        prevState.push({
          ...actions.payload,
          quantity: 1
        })
      }

      state.items = prevState
    },
    addQuantity(state, actions) {
      const prevState = [...state.items]
      const index = prevState.findIndex(data => data.productId === actions.payload.productId);
      if (index > -1) {
        prevState[index].quantity = (prevState[index].quantity || 0) + 1;
      }

      state.items = prevState
    },
    minusQuantity(state, actions) {
      const prevState = [...state.items]
      const index = prevState.findIndex(data => data.productId === actions.payload.productId);
      if (index > -1) {
        prevState[index].quantity = (prevState[index].quantity || 0) - 1;
      }
      
      const qty = prevState[index].quantity || 0;
      if (qty < 1) {
        prevState.splice(index, 1)
      }

      state.items = prevState
    },
    removeCartItem(state, actions) {
      const prevState = [...state.items]
      const index = prevState.findIndex(data => data.productId === actions.payload.productId);
      if (index > -1) {
        prevState.splice(index, 1)
      }

      state.items = prevState
    }
  }
})

export const {
  addCartItem,
  addQuantity,
  minusQuantity,
  removeCartItem
} = shopCartReduxSlice.actions

export default shopCartReduxSlice.reducer;
