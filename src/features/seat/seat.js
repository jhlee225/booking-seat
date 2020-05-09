import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLogin } from "../menu/menuSlice";
export function Seats() {
  return (
    <>
      <div className="seats">
        <BlankRow />
        <SeatRow />
        <SeatRow />
        <BlankRow />
        <BlankRow />
        <SeatRow />
        <SeatRow />
        <BlankRow />
      </div>
    </>
  );
}

function SeatRow() {
  return (
    <div className="row">
      <div className="blank"></div>
      <Seat />
      <Seat />
      <Seat />
      <Seat />
      <Seat />
      <div className="blank"></div>
      <div className="blank"></div>
      <Seat />
      <Seat />
      <Seat />
      <Seat />
      <Seat />
      <div className="blank"></div>
    </div>
  );
}

function BlankRow() {
  return (
    <div className="row">
      <div className="blank"></div>
      <div className="blank"></div>
      <div className="blank"></div>
      <div className="blank"></div>
      <div className="blank"></div>
      <div className="blank"></div>
      <div className="blank"></div>
      <div className="blank"></div>
      <div className="blank"></div>
      <div className="blank"></div>
      <div className="blank"></div>
      <div className="blank"></div>
      <div className="blank"></div>
      <div className="blank"></div>
    </div>
  );
}

function Seat(props) {
  const isIn = Math.floor(Math.random() * 2);
  const isLogin = useSelector(selectIsLogin);

  return (
    <Link to={isLogin ? "/Seat" : "/Login"}>
      {isIn ? (
        <div className="seat userIn"> 좌석</div>
      ) : (
        <div className="seat"> 좌석</div>
      )}
    </Link>
  );
}
