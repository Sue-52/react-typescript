import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { AppDispatch, AppState } from "@/store";

export const useTypedSelecter: TypedUseSelectorHook<AppState> = useSelector;
export const useTypedDispatch = () => useDispatch<AppDispatch>();
