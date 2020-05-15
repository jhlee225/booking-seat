import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLogin } from "../menu/menuSlice";
import { selectFloor, selectSeats } from "./seatSlice";
export function Seats() {
  const floor = useSelector(selectFloor);
  const seats = useSelector(selectSeats);
  return (
    <>
      <div className="seats">
        <header className="floorName">{floor.floor}</header>
        <main className="seatTable">
          {seats.map((row, key) => (
            <SeatRow data={row} key={key} />
          ))}
        </main>
        <Link to="/">
          <div className="back btn">메인메뉴</div>
        </Link>
      </div>
    </>
  );
}

function SeatRow(props) {
  const { data } = props;
  return (
    <div className="row">
      {data.map((seat, key) =>
        seat === "blank" ? (
          <div key={key} className="blank"></div>
        ) : (
          <Seat key={key} data={seat} />
        )
      )}
    </div>
  );
}

function Seat(props) {
  const { data } = props;
  const isLogin = useSelector(selectIsLogin);
  return (
    <>
      <Link to={isLogin ? "/Time" : "/Login"}>
        {data.isIn ? (
          <div className="seat userIn">{data.seatNum}</div>
        ) : (
          <div className="seat">{data.seatNum}</div>
        )}
      </Link>
    </>
  );
}
