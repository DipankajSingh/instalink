import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: null,
  userId:null,
  profilePicture
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const userReducer = userSlice.reducer;
