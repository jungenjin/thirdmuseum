/* 로그인 페이지 */

import React, { useEffect, useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import NaverLogin from "react-login-by-naver";
import axios from "axios";
import '../style/login.css';
import SubVisual from '../common/SubVisual';

const Login = () => {
  const history = useHistory(); // 라우팅을 위한 히스토리 객체
  const [formData, setFormData] = useState(null);
  const [checked, setChecked] = useState(false);
  const handleInputChange = (e) => {
    // 아이디와 비밀번호가 실시간으로 바뀔때마다, state에 값이 업데이트 됩니다.
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (localStorage.getItem("/login") === "true") {
      alert("이미 로그인 상태입니다.");
      history.push("/main");
    }
  }, []);


  const handleSubmit = () => {
    // 로그인 버튼을 눌렀을때 동작합니다.
    fetch("http://192.168.35.115:3001/api/login", {
      headers: {
        "Content-Type": "application/json", // 파일업로딩이 없으니 json 타입입니다.
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        formData, // formData에는 아이디와 비밀번호가 들어가 있습니다.
      }),
    })
      .then((result) => result.json())
      .then((data) => {
        if (data.success === true) {
          /* 로그인상태유지 체크박스가 체크되어 있으면, localStorage에 저장 */
          if (checked) {
            localStorage.setItem("login", true);
          }

          // 서버로부터 true가 나오면, 2페이지로 이동하고, 환영합니다 메세지를 띄웁니다.
          history.push("/main");
        }

        alert(data.msg);
      });
  };

  //네이버로그인성공시 호출되는 함수
  const responseLogin = (res, type) => {
    localStorage.setItem("login", true); //로그인 처리
    localStorage.setItem("login_type", "naver"); // 로그인 타입 저장

    fetch("http://192.168.35.115:3001/api/naverlogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // 파일업로딩이 없으니 json 타입입니다.
        Accept: "application/json",
      },
      body: JSON.stringify(res)
    }).then(result => result.json()).then(data => {
      alert(data.msg);  // 알럿
      history.push("/main"); // 메인페이지로 이동
    })


  }

  // 로그인
  return (
    <>
    <SubVisual name={'로그인'} imgName={''} /><div className="wrapper">
      <div className="column">
        <input
          outlined
          label="아이디"
          className="userId inputlogin"
          name="userId"
          placeholder="아이디를 입력해주세요."
          onChange={handleInputChange} />

      </div>

      <div className="column">

        <input
          outlined
          label="비밀번호"
          className="userPw inputlogin"
          name="userPw"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          onChange={handleInputChange} />
      </div>
      <br />
      <button className="btnlogin" label="로그인" raised onClick={handleSubmit}>로그인</button>
      <hr />
      <div className="column">

        <NaverLogin
clientId="PckNTs2JD903WZgtj1x0" // 옆에 네이버 클라이언트 ID 수정 바랍니다
callbackUrl="http://localhost:3000/"
render={(props) => (
  <div onClick={props.onClick}>
    <button className="btnnaverlogin" type="submit"><b className="Nv">N </b> 네이버 로그인</button>
  </div>
)}
onSuccess={(res) => responseLogin(res, "naver")}
onFailure={() => console.log("naver login fail")} />
</div>
</div>
</>
);
};

export default Login;
