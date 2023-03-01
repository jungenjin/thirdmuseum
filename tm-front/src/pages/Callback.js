/* 로그인 페이지 */
import React, { useEffect, useState } from "react";
import {useHistory } from "react-router-dom";
import NaverLogin from "react-login-by-naver";
import "../style/login.css"; // 이 페이지의 커스텀 디자인을 위한 CSS 입니다.

const Callback = () => {
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