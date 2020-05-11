import React from "react";
import { Link } from "react-router-dom";
export function Time() {
  return (
    <>
      <div className="times">
        <div>현재 예약 현황</div>
        <div>
          <span>날짜 : </span>
          <input type="date" />
        </div>
        <div className="btns">
          <Link to="/Seat">
            <div className="back btn">뒤로가기</div>
          </Link>
          <Link to="/Book">
            <div className="btn">예약하기</div>
          </Link>
        </div>
      </div>
    </>
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
