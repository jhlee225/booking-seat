import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
  name: "book",
  initialState: {
    name: "",
    phone: "",
    date: null,
    time: null,
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload.name;
    },
    setPhone: (state, action) => {
      state.phone = action.payload.phone;
    },
    setDate: (state, action) => {
      state.date = action.payload.date;
    },
    setTime: (state, action) => {
      state.time = action.payload.time;
    },
  },
});

export const { setDate, setName, setPhone, setTime } = bookSlice.actions;

export const selectName = (state) => state.book.name;
export const selectPhone = (state) => state.book.phone;
export const selectDate = (state) => state.book.date;
export const selectTime = (state) => state.book.time;

export default bookSlice.reducer;
