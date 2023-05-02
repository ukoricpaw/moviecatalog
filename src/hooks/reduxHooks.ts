import { RootState, AppDispatch } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDisptach = (): AppDispatch => { return useDispatch() }