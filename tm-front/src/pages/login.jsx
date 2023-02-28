/* 로그인 페이지 */

import React, { useEffect, useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { TextField } from "@rmwc/textfield"; // React Material 디자인 TextField 컴포넌트입니다.
import { Button } from "@rmwc/button"; // React Material 디자인 Button 컴포넌트 입니다.
import { Checkbox } from "@rmwc/checkbox"; //React Material 디자인 Checkbox 컴포넌트 입니다.
import NaverLogin from "react-login-by-naver";
import "@rmwc/button/styles"; // React Material Button 디자인 CSS 입니다.
import "@rmwc/textfield/styles"; // React Material TextField 디자인 CSS 입니다.
import "../style/login.css"; // 이 페이지의 커스텀 디자인을 위한 CSS 입니다.

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
    if (localStorage.getItem("login") === "true") {
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

  // 아래는 JSX 껍데기
  return (
    <div className="wrapper">
      <div className="column">
        <TextField
          outlined
          className="userId inputlogin"
          name="userId"
          placeholder="아이디를 입력해주세요."
          onChange={handleInputChange}
        />
      </div>

      <div className="column">
        <TextField
          outlined
          className="userPw inputlogin"
          name="userPw"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          onChange={handleInputChange}
        />
      </div>

      <div className="column">
        <Checkbox label="로그인 상태 유지" className="login__checkbox" checked={checked} onChange={evt => setChecked(!!evt.currentTarget.checked)} />
      </div>
      <br/>
      {/* <Link to="/main"> */}
        <button className="btnlogin" label="로그인" raised onClick={handleSubmit}>로그인</button>
      {/* </Link> */}
      <hr/>
      <div className="column">
        <NaverLogin
          clientId="PckNTs2JD903WZgtj1x0"
          callbackUrl="http://192.168.35.115:3000/management-callback"
          render={(props) => 
          <div onClick={props.onClick}>
            <button className="btnnaverlogin" type="submit"><b className="Nv">N </b> 네이버 로그인</button>
          </div>}
          onSuccess={(res) => responseLogin(res, "naver")}
          onFailure={() => console.log("naver login fail")}
        />
      </div>
    </div>
  );
};

export default Login;
