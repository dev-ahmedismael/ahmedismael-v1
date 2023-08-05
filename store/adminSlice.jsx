import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  token: "",
};

export const counterSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.token = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = counterSlice.actions;

export default counterSlice.reducer;
