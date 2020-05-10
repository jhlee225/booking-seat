import { createSlice } from "@reduxjs/toolkit";

export const seatSlice = createSlice({
  name: "seat",
  initialState: {
    seat: "",
    time: [],
  },
  reducers: {
    setFloor: (state, action) => {
      state.floor = action.payload.floor;
    },
    setSeats: (state, action) => {
      state.seats = action.payload.seats;
    },
  },
});

export const { setFloor, setSeats } = seatSlice.actions;

export const selectFloor = (state) => state.seat.floor;
export const selectSeats = (state) => state.seat.seats;

export default seatSlice.reducer;
