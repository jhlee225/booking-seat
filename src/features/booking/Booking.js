import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setName, setDate, setPhone, setTime } from "./BookSlice";
import { Link } from "react-router-dom";
export function Booking() {
  const dispatch = useDispatch();
  useEffect(() => {
    return function cleanUp() {
      dispatch(setName({ name: null }));
      dispatch(setPhone({ phone: null }));
      dispatch(setDate({ date: null }));
      dispatch(setTime({ time: null }));
    };
  });
  return (
    <div className="bookingWrap">
      <div className="booking">
        <div className="book name">
          <span>Name</span>
          <input
            className="name inputBox"
            type="text"
            onChange={(e) => dispatch(setName({ name: e.target.value }))}
          />
        </div>
        <div className="book phone">
          <span>Phone</span>
          <input
            className="phone inputBox"
            type="text"
            onChange={(e) => dispatch(setPhone({ phone: e.target.value }))}
          />
        </div>
        <div className="book date">
          <span>날짜</span>
          <input
            className="date inputBox"
            type="date"
            onChange={(e) => dispatch(setDate({ date: e.target.value }))}
          />
        </div>
        <div className="book time">
          <span>시간</span>
          <input
            className="time inputBox"
            type="time"
            onChange={(e) => dispatch(setTime({ time: e.target.value }))}
          />
        </div>
      </div>
      <div className="signUpBtns">
        <Link to="/Seat">
          <div className="back btn">취소</div>
        </Link>
        <Link to="/Seat">
          <div className="signUp btn">예약</div>
        </Link>
      </div>
    </div>
  );
}
