import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/login/loginSlice";
import seatReducer from "../features/seat/seatSlice";
import menuReducer from "../features/menu/menuSlice";
import bookReducer from "../features/booking/BookSlice";
import timeReducer from "../features/time/timeSlice";
import signUpReducer from "../features/signup/signupSlice";

export default configureStore({
  reducer: {
    login: loginReducer,
    seat: seatReducer,
    menu: menuReducer,
    time: timeReducer,
    book: bookReducer,
    signUp: signUpReducer,
  },
});
