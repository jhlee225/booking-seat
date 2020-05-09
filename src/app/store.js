import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/login/loginSlice";
import seatReducer from "../features/seat/seatSlice";
import menuReducer from "../features/menu/menuSlice";

export default configureStore({
  reducer: {
    login: loginReducer,
    seat: seatReducer,
    menu: menuReducer,
  },
});
