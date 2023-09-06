"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  auth: authSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export default function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
