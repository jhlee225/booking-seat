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
  const isIn1 = true;
  const isIn2 = false;
  const isLogin = useSelector(selectIsLogin);

  return (
    <>
      <Link to={isLogin ? "/Time" : "/Login"}>
        {isIn1 ? (
          <div className="seat userIn"> 좌석</div>
        ) : (
          <div className="seat"> 좌석</div>
        )}
      </Link>
      <Link to={isLogin ? "/Time" : "/Login"}>
        {isIn2 ? (
          <div className="seat userIn"> 좌석</div>
        ) : (
          <div className="seat"> 좌석</div>
        )}
      </Link>
    </>
  );
}
