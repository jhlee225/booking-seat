import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setId, setPw, setName, setPhone } from "./signupSlice";
import { selectId, selectPw } from "./signupSlice";
import axios from "axios";

export function SignUp() {
  const userId = useSelector(selectId);
  const userPw = useSelector(selectPw);
  const dispatch = useDispatch();

  function sendSignUp() {
    const url = "/register";
    const data = { id: userId, pw: userPw };
    console.log(JSON.stringify(data));
    axios
      .post(url, JSON.stringify(data), {
        headers: { "content-type": "application/json", dataType: "json" },
      })
      .then((res) => console.log(res));
  }
  return (
    <div className="SignUpWrap">
      <div className="signUp">
        <div className="signUp name">
          <span>Name</span>
          <input
            className="name inputBox"
            type="text"
            onChange={(e) => dispatch(setName({ name: e.target.value }))}
          />
        </div>
        <div className="signUp phone">
          <span>Phone</span>
          <input
            className="phone inputBox"
            type="text"
            onChange={(e) => dispatch(setPhone({ phone: e.target.value }))}
          />
        </div>
        <div className="signUp id">
          <span>ID</span>
          <input
            className="id inputBox"
            type="text"
            onChange={(e) => dispatch(setId({ id: e.target.value }))}
          />
        </div>
        <div className="signUp pw">
          <span>PW</span>
          <input
            className="pw inputBox"
            type="password"
            onChange={(e) => dispatch(setPw({ pw: e.target.value }))}
          />
        </div>
      </div>
      <div className="signUpBtns">
        <Link to="/">
          <div className="back btn">취소</div>
        </Link>
        <Link to="/">
          <div onClick={() => sendSignUp()} className="signUp btn">
            가입
          </div>
        </Link>
      </div>
    </div>
  );
}
