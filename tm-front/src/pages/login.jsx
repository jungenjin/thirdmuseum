/*네이버 로그인 없는버전*/
import React from "react";
import { useHistory } from "react-router-dom";
import SubVisual from '../common/SubVisual';
import NaverLogin from "react-login-by-naver";
import axios from "axios";
import '../style/login.css'

function Login(){

    const history = useHistory(); // 라우팅을 위한 히스토리 객체
    //네이버로그인성공시 호출되는 함수
    const responseLogin = (res, type) => {
      const id = res.id;    
      const name = res.name;
      const email = res.email;
  
      let form = new FormData();
      form.append("id", id);    
      form.append("name", name);
      form.append("email", email);
  
      axios
        .post("http://localhost:9008/naver.do", form)
        .then(history.push("/main"));
    };

    return(
        <header>
        <div>
          <SubVisual name={'로그인'} imgName={''} />
        </div>
        <form className="loginform">
        <input
              className="inputlogin"
              margin="normal"
              id="id"
              label="id"
              name="id"
              autoComplete="id"
              placeholder="아이디를 입력해주세요." />
              <br></br>
        <input
              className="inputlogin"
              margin="normal"
              id="password"
              label="password"
              name="password"
              autoComplete="password"
              placeholder="비밀번호를 입력해주세요"/>  
        <br></br> 
        <button className="btnlogin" type="submit">로그인</button>
        <hr></hr>

        
        <NaverLogin
      clientId="PckNTs2JD903WZgtj1x0"   // 옆에 네이버 클라이언트 ID 수정 바랍니다
      callbackUrl="http://localhost:3000"
      render={(props) => (
        <div onClick={props.onClick}>
          <button className="btnnaverlogin" type="submit"><b className="Nv">N </b> 네이버 로그인</button>
        </div>
      )}
      onSuccess={(res) => responseLogin(res, "naver")}
      onFailure={() => console.log("naver login fail")}
    />
    </form>
        </header>
    )
}
export default Login;