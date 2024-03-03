import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/redux";

export const useShopCartDispatch: () => AppDispatch = useDispatch;
export const useShopCartSelector: TypedUseSelectorHook<RootState> = useSelector
