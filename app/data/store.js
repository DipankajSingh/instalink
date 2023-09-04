'use client'
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { loginSigninReducer } from "./loginSigninSlice";
import { authenticationReducer } from "./authenticationSlice";

const rootReducer=combineReducers({
    loginSignin:loginSigninReducer,
    authentication:authenticationReducer,
})

export const store=configureStore({
    reducer:rootReducer
})