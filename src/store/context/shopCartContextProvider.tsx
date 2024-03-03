import React, { useReducer } from 'react'
import { ShopCartContext, ShopCartData } from './shopCartContext'

interface ShopCartState {
  items: ShopCartData[]
}

interface ShopCartAction {
  type: "ADD_ITEM" | "UPDATE_ITEM" | "REMOVE_ITEM" | "ADD_QTY" | "MINUS_QTY",
  payload: ShopCartData
}

const ShopCartReducer = (state: ShopCartState, action: ShopCartAction) => {
  console.log('xxx')
  if (action.type === "ADD_ITEM") {
    const newProductItems = [...state.items];
    if (newProductItems.some(data => data.productId === action.payload.productId)) {
      newProductItems.map(data => {
        if (data.productId === action.payload.productId) {
          data.quantity = (data.quantity || 0) + 1
        }
        return data
      })
    }
    else {
      newProductItems.push({
        ...action.payload,
        quantity: 1
      })
    }
    return {
      ...state,
      items: newProductItems
    }
  }
  else if (action.type === "ADD_QTY") {
    const newProductItems = [...state.items];
    newProductItems.map(data => {
      if (data.productId === action.payload.productId) {
        data.quantity = (data.quantity || 0) + 1
      }
      return data
    })
    return {
      ...state,
      items: newProductItems
    }
  }
  else if (action.type === "MINUS_QTY") {
    const newProductItems = [...state.items];
    const index = newProductItems.findIndex(data => data.productId === action.payload.productId)
    const qty = newProductItems[index].quantity || 0;
    if (qty < 1) {
      newProductItems.splice(index, 1)
    }
    else {
      newProductItems[index].quantity = qty - 1
    }
    
    return {
      ...state,
      items: newProductItems
    }
  }
  else if (action.type === "REMOVE_ITEM") {
    const newProductItems = [...state.items];
    const index = newProductItems.findIndex(data => data.productId === action.payload.productId)
    newProductItems.splice(index, 1)

    return {
      ...state,
      items: newProductItems
    }
  }

  return state;
}

const shopCartInitState = {
  items: []
}

const ShopCartContextProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [shopCartState, shopCartDispatch] = useReducer(ShopCartReducer, shopCartInitState)
  const handleAddCartItem = (product: ShopCartData) => {
    shopCartDispatch({
      type: "ADD_ITEM",
      payload: product
    })
  }

  const handleAddQuantity = (product: ShopCartData) => {
    shopCartDispatch({
      type: "ADD_QTY",
      payload: product
    })
  }

  const handleMinusQuantity = (product: ShopCartData) => {
    shopCartDispatch({
      type: "MINUS_QTY",
      payload: product
    })
  }
  
  const handleRemoveCartItem = (product: ShopCartData) => {
    shopCartDispatch({
      type: "REMOVE_ITEM",
      payload: product
    })
  }

  const ctxValue = {
    items: shopCartState.items,
    addCartItem: handleAddCartItem,
    addQuantity: handleAddQuantity,
    minusQuantity: handleMinusQuantity,
    removeCartItem: handleRemoveCartItem
  }

  return (
    <ShopCartContext.Provider value={ctxValue}>
      {children}
    </ShopCartContext.Provider>
  )
}

export default ShopCartContextProvider