import React, { useCallback, useReducer } from 'react'
import { ShopCartDataTypes, ShopChartContext } from './shopContext'

interface State {
  items: ShopCartDataTypes[]
}

interface Action {
  type: "ADD_ITEM" | "REMOVE_ITEM",
  payload: ShopCartDataTypes
}

const ShopCartReducer = (state: State, action: Action) => {
  const newItem = [...state.items]
  if (action.type === "ADD_ITEM") {
    const index = newItem.findIndex(data => data.productId === action.payload.productId);
    if (index > -1) {
      newItem[index].quantity = (newItem[index].quantity || 0) + 1
    }
    else{
      newItem.push({
        ...action.payload,
        quantity: 1
      })
    }
    return {
      ...state,
      items: newItem
    }
  }
  return state;
}

const initState: {items: ShopCartDataTypes[]} = {
  items: []
}

const ShopContextProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
  const [shopCartInitState, shopCartDispatch] = useReducer(ShopCartReducer, initState)

  const addItemCallbackHook = useCallback((payload: ShopCartDataTypes) => {
    shopCartDispatch({
      type: "ADD_ITEM",
      payload: payload
    })
  }, [shopCartDispatch])

  const handleAddCartItem = (payload: ShopCartDataTypes) => {
    addItemCallbackHook(payload)
  }

  const ctxValue = {
    items: shopCartInitState.items,
    addCartItem: handleAddCartItem
  }
  return (
    <ShopChartContext.Provider value={ctxValue}>
      {children}
    </ShopChartContext.Provider>
  )
}

export default ShopContextProvider