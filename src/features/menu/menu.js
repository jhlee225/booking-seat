import React from "react";
import { Link } from "react-router-dom";
import { selectIsLogin, setIsLogin } from "./menuSlice";
import { useSelector, useDispatch } from "react-redux";

export function Menu() {
  const isLogin = useSelector(selectIsLogin);
  const dispatch = useDispatch();
  return (
    <div className="btns">
      <Link to="/Seat">
        <div className="menuBtn">좌석보기</div>
      </Link>
      {isLogin ? (
        <Link to="/">
          <div
            className="menuBtn"
            onClick={(e) => dispatch(setIsLogin({ isLogin: false }))}
          >
            로그아웃
          </div>
        </Link>
      ) : (
        <>
          <Link to="/Login">
            <div className="menuBtn">로그인</div>
          </Link>
          <Link to="/SignUp">
            <div className="menuBtn">회원가입</div>
          </Link>
        </>
      )}
    </div>
  );
}
