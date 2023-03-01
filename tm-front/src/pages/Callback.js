/* 로그인 페이지 */

import React, { useEffect } from "react";
import {useHistory } from "react-router-dom";
import NaverLogin from "react-login-by-naver";
import "../style/login.css"; // 이 페이지의 커스텀 디자인을 위한 CSS 입니다.

const Callback = () => {
  const history = useHistory(); // 라우팅을 위한 히스토리 객체

  useEffect(() => {

    if (localStorage.getItem("login") === "true") {
      alert("이미 로그인 상태입니다.");
      history.push("/main");
    }
  }, []);



  const responseLogin = (res, type) => {

  }

  // 아래는 JSX 껍데기
  return (
      <div className="column">
        <NaverLogin
          clientId="PckNTs2JD903WZgtj1x0"
          callbackUrl="http://192.168.35.115:3000/management-callback"
          render={(props) => <div onClick={props.onClick}></div>}
          onSuccess={(res) => responseLogin(res, "naver")}
        />
      </div>
  );
};

export default Callback;

//0301