import { createContext } from "react";

export interface ShopCartData {
    productId: string,
    product: string,
    price?: number,
    quantity?: number
}

export const ShopCartContext = createContext<{
    items: ShopCartData[], 
    addCartItem: (payload: ShopCartData) => void,
    addQuantity: (payload: ShopCartData) => void,
    minusQuantity: (payload: ShopCartData) => void,
    removeCartItem: (payload: ShopCartData) => void,
}>({
    items: [],
    addCartItem: () => {},
    addQuantity: () => {},
    minusQuantity: () => {},
    removeCartItem: () => {},
})