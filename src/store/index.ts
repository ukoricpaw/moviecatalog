import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import HomeReducer from "./reducers/HomeReducer";
import MediaReducer from "./reducers/MediaSlice"
import SearchReducer from "./reducers/SearchReducer";
import PersonReducer from "./reducers/PersonReducer";

const RootReducer = combineReducers({
  HomeReducer,
  MediaReducer,
  SearchReducer,
  PersonReducer
})

export const setupStore = () => configureStore({ reducer: RootReducer })

export type RootState = ReturnType<typeof RootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']