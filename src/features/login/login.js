import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setId, setPw, selectId, selectPw } from "./loginSlice";
import { setIsLogin } from "../menu/menuSlice";
import axios from "axios";

export function Login() {
  const userId = useSelector(selectId),
    userPw = useSelector(selectPw);
  const dispatch = useDispatch();
  function sendLogIn() {
    const url = "/login";
    const data = { id: userId, pw: userPw };
    console.log(JSON.stringify(data));
    axios
      .post(url, JSON.stringify(data), {
        headers: { "content-type": "application/json", dataType: "json" },
      })
      .then((res) => console.log(res));
    dispatch(setIsLogin({ isLogin: true }));
  }
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
          <div className="login btn" onClick={(e) => sendLogIn()}>
            로그인
          </div>
        </Link>
        <Link to="/SignUp">
          <div className="signUp btn">회원가입</div>
        </Link>
      </div>
    </div>
  );
}
