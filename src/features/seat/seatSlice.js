import { createSlice } from "@reduxjs/toolkit";

export const seatSlice = createSlice({
  name: "seat",
  initialState: {
    floor: { floor: "1층 좌측", row: 5, col: 5 },
    seats: [
      [
        "blank",
        { seatNum: 1, isIn: false },
        { seatNum: 2, isIn: false },
        { seatNum: 3, isIn: false },
        { seatNum: 4, isIn: false },
      ],
      [{ seatNum: 5, isIn: false }, "blank", "blank", "blank", "blank"],
      [
        { seatNum: 6, isIn: false },
        "blank",
        { seatNum: 7, isIn: false },
        { seatNum: 8, isIn: false },
        { seatNum: 9, isIn: false },
      ],
    ],
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
