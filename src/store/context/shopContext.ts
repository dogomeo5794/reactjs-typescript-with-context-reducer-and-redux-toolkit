import { createContext } from "react";

export interface ShopCartDataTypes {
    productId: number,
    product: string,
    price?: number,
    quantity?: number
}

export const ShopChartContext = createContext<{
    items: ShopCartDataTypes[],
    addCartItem: (payload: ShopCartDataTypes) => void
}>({
    items: [],
    addCartItem: () => {},
})