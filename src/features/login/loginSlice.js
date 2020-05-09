import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    id: "",
    pw: "",
  },
  reducers: {
    setId: (state, action) => {
      state.id = action.payload.id;
    },
    setPw: (state, action) => {
      state.pw = action.payload.pw;
    },
  },
});

export const { setId, setPw } = loginSlice.actions;

export const selectId = (state) => state.login.id;
export const selectPw = (state) => state.login.pw;

export default loginSlice.reducer;
