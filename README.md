# 세번째미술관

저장소 복제 후 프로젝트 설정하는 방법입니다.

    git clone https://github.com/jungenjin/thirdmuseum.git

---

## :snowflake: front-end 설정 (react)

### 1. npm install 하는 방법

저장소 복제 후 vscode 터미널 - git bash에서 다음 명령어를 실행합니다.

+ 경로이동

      cd thirdmuseum/tm-front

+ 해당폴더로 이동이 제대로 됐다면 설치 후 실행 확인

      npm install
      
      npm start

### 2. 패키지 설치

+ 부트스트랩 설치 

      npm install bootstrap@5.2.3
  
+ router dom 설치

      npm install react-router-dom@5.3.4
  
+ axios 설치

      npm install axios@1.3.3
      
+ naver login 설치

      npm add react-login-by-naver@0.1.8
  
---

## :leaves: back-end 설정 (springboot)

1. Oracle db에 system 계정으로 접속하여 admin_third 유저 생성 및 권한 추가

      create user admin_thirdidentified by admin_third;
      
      grant resource, connect, dba to admin_third;
      
2. 프로젝트 import, properties 설정 후 실행

    console에서 '세번째미술관 start' 메세지 확인


---
 작성 : 김은주, 2023-02-23
