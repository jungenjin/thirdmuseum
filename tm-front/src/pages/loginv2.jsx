/*네이버 로그인 없는버전*/
import React from "react";
import { useHistory } from "react-router-dom";
import '../style/login.css'

function login(){
    return(
        <>
        <header/>
        <div>
            <h1 className="loginh1">로그인</h1>
        </div>
        <div className="v2login" style={{background: 'url(/resource/common/login_v2.png)'}}></div>
        <form className="loginform">
        <input
              margin="normal"
              id="id"
              label="id"
              name="id"
              autoComplete="id"
              placeholder="아이디를 입력해주세요."/>
              <br></br>
        <input
        inputlogin
              margin="normal"
              id="password"
              label="password"
              name="password"
              autoComplete="password"
              placeholder="비밀번호를 입력해주세요"/>  
        <br></br> 
        <button className="btnlogin" type="submit">로그인</button>
        <hr></hr>
        </form>
        <footer />
        </>
    )
}
export default login;