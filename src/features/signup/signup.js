import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setId, setPw, setName, setPhone } from "./signupSlice";
export function SignUp() {
  const dispatch = useDispatch();
  useEffect(() => {
    return function cleanUp() {
      dispatch(setName({ name: null }));
      dispatch(setPhone({ phone: null }));
      dispatch(setId({ id: null }));
      dispatch(setPw({ pw: null }));
    };
  });
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
          <div className="signUp btn">가입</div>
        </Link>
      </div>
    </div>
  );
}
