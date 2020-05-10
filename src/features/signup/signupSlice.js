import { createSlice } from "@reduxjs/toolkit";

export const signUpSlice = createSlice({
  name: "signUp",
  initialState: {
    id: "",
    pw: "",
    name: "",
    phone: "",
  },
  reducers: {
    setId: (state, action) => {
      state.id = action.payload.id;
    },
    setPw: (state, action) => {
      state.pw = action.payload.pw;
    },
    setName: (state, action) => {
      state.name = action.payload.name;
    },
    setPhone: (state, action) => {
      state.phone = action.payload.phone;
    },
  },
});

export const { setId, setPw, setName, setPhone } = signUpSlice.actions;

export const selectId = (state) => state.signUp.id;
export const selectPw = (state) => state.signUp.pw;
export const selectName = (state) => state.signUp.name;
export const selectPhone = (state) => state.signUp.phone;

export default signUpSlice.reducer;
