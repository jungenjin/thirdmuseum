/*네이버 로그인 없는버전*/
import { useHistory } from "react-router-dom";
import { useEffect, useRef } from 'react'
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
        .then(history.push("/SuccessInfo"));
    };

    return(
        <header>
        <div>
            <h1 className="loginh1">로그인</h1>
        </div>
        <form>
        <input
              margin="normal"
              id="id"
              label="id"
              name="id"
              autoComplete="id"
              placeholder="아이디를 입력해주세요."/>
              <br></br>
        <input
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
      clientId="******"   // 옆에 네이버 클라이언트 ID 수정 바랍니다
      callbackUrl="http://192.168.0.81:3000"
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