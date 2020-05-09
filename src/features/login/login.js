import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setId, setPw } from "./loginSlice";
import { setIsLogin } from "../menu/menuSlice";
export function Login() {
  const dispatch = useDispatch();
  return (
    <div className="loginWrap">
      <div className="login">
        <div className="login id">
          <span>ID</span>
          <input
            className="id inputBox"
            type="text"
            onChange={(e) => dispatch(setId({ id: e.target.value }))}
          />
        </div>
        <div className="login pw">
          <span>PW</span>
          <input
            className="pw inputBox"
            type="password"
            onChange={(e) => dispatch(setPw({ pw: e.target.value }))}
          />
        </div>
      </div>
      <div className="btns">
        <Link to="/">
          <div
            className="login btn"
            onClick={(e) => dispatch(setIsLogin({ isLogin: true }))}
          >
            로그인
          </div>
        </Link>
        <div className="signUp btn">회원가입</div>
      </div>
    </div>
  );
}
