import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputUser: {
    name: "",
    id: "",
    password: "",
  },
};

export const loginSigninSlice = createSlice({
  name: "loginSigninSlice",
  initialState: initialState,
  reducers: {
    updateInputName: (state, action) => {
      const newVal = {
        name: action.payload,
        id: state.inputUser.id,
        password: state.inputUser.password,
      };
      state.inputUser=newVal
    },
    updateInputId: (state, action) => {
        const newVal = {
          name: state.inputUser.name,
          id: action.payload,
          password: state.inputUser.password,
        };
        state.inputUser=newVal
      },
      updateInputPassword: (state, action) => {
        const newVal = {
          name: state.inputUser.name,
          id: state.inputUser.id,
          password: action.payload,
        };
        state.inputUser=newVal
      },
  },
});

export const {updateInputName} = loginSigninSlice.actions

export const loginSigninReducer=loginSigninSlice.reducer