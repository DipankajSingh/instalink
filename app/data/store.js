'use client'
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { loginSigninReducer } from "./loginSigninSlice";
import { authenticationReducer } from "./authenticationSlice";
import { Provider } from "react-redux";

const rootReducer=combineReducers({
    loginSignin:loginSigninReducer,
    authentication:authenticationReducer,
})

export const store=configureStore({
    reducer:rootReducer
})

export default function ReduxProvider({ children }){
    return <Provider store={store}>{children}</Provider>
}