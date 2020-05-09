import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    isLogin: false,
  },
  reducers: {
    setIsLogin: (state, action) => {
      state.isLogin = action.payload.isLogin;
    },
  },
});

export const { setIsLogin } = menuSlice.actions;

export const selectIsLogin = (state) => state.menu.isLogin;

export default menuSlice.reducer;
