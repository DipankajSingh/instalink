import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authenticated:true
};

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState: initialState,
  reducers: {
    setAuthenticated: (state, action) => {
      state.authenticated=action.payload
    },
  },
});

export const {setAuthenticated} = authenticationSlice.actions

export const authenticationReducer=authenticationSlice.reducer