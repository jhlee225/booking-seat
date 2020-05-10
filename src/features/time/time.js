import React from "react";
import { Link } from "react-router-dom";
export function Time() {
  return (
    <>
      <div className="times">
        <input type="date" />
        <BlankRow />
        <div>현재 예약 현황</div>
        <Link to="/Book">
          <div className="btn">예약하기</div>
        </Link>
        <BlankRow />
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
