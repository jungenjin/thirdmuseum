/* 로그인 페이지 */
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import NaverLogin from "react-login-by-naver";
import SubVisual from '../common/SubVisual';
import "../style/login.css"; // 이 페이지의 커스텀 디자인을 위한 CSS 입니다.

const Login = () => {
  const history = useHistory(); // 라우팅을 위한 히스토리 객체
  const [formData, setFormData] = useState(null);
  const [checked] = useState(false);
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

  return (
      <>
      <SubVisual name={'로그인'} imgName='' />
      <div className="wrapper loginform form-control-lg">
        <div className="column">
          <input
            outlined
            className="userId inputlogin ms-1"
            name="userId"
            id="id"
            placeholder="아이디를 입력해주세요."
            onChange={handleInputChange}
          />
        </div>

        <div className="column">
          <input
            outlined
            className="userPw inputlogin ms-1"
            name="userPw"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={handleInputChange}
          />
        </div>

        <br/>
        {/* <Link to="/main"> */}
          <button className="btnlogin ms-1 fs-2" label="로그인" raised onClick={handleSubmit}>로그인</button>
        {/* </Link> */}
        <hr/>
        <div className="column">
          <NaverLogin
            clientId="PckNTs2JD903WZgtj1x0"
            callbackUrl="http://192.168.35.115:3000/management-callback"
            render={(props) => 
            <div onClick={props.onClick}>
              <button className="btnnaverlogin ms-1 fs-2" type="submit"><b className="Nv">N </b> 네이버 로그인</button>
            </div>}
            onSuccess={(res) => responseLogin(res, "naver")}
            onFailure={() => console.log("naver login fail")}
          />
        </div>
      </div>
    </>
  );
};

export default Login;
