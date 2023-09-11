import { createSlice } from "@reduxjs/toolkit";
import { verify_URL } from "../components/apiRoutes";

export const isVerified = () => {
  const token = localStorage.getItem("token");
  let isVerified = false;
  async function fetchData() {
    const res = await fetch(verify_URL, {
      method: "POST",
      headers: {
        authorization: token,
      },
    });
    const result = await res.json();
    if (result.success === true) {
      isVerified = true;
    } else {
      isVerified = false;
    }
  }
  if (token) {
    fetchData();
  }
  return isVerified;
};

const initialState = {
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
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

export const { login, logout } = authSlice.actions;

export const authReducer = authSlice.reducer;
