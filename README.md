<br>
<br>

# 찾아주는 술집, 찾술

```
찾아주는 술집, 찾술
지도에서 가고 싶은 술집을 찾아 메뉴판을 확인하고, 예약해보세요!
잃어버린 물건도 찾술에서 확인해보세요!
```

🔗 프로젝트 링크 [찾술](https://d2nedo6zm8w85b.cloudfront.net)

📅 개발 기간 : 24.12.28 ~ 25.02.20 (8주)

<br>
<br>

# 💁🏻‍♀팀원 소개💁🏻‍♂

|                                                                김초련                                                                 |                                                             박지현                                                              |                                                                윤미나                                                                |                                                                    이주형                                                                    |
| :-----------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://avatars.githubusercontent.com/Stella-516" height="120" width="120"><br>@Stella-516](https://github.com/Stella-516) | [<img src="https://avatars.githubusercontent.com/wlgusqkr" height="120" width="120"><br>@wlgusqkr](https://github.com/wlgusqkr) | [<img src="https://avatars.githubusercontent.com/u/202110861" height="120" width="120"><br>@202110861](https://github.com/202110861) | [<img src="https://avatars.githubusercontent.com/u/139374266?v=4" height="120" width="120"><br>@mangang0713](https://github.com/mangang0713) |

<br>
<br>

# ⚙️ 기술 스택

#### Front-End

<div style="margin: ; text-align: left;" "text-align: left;">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
  <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white">
  <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=white">
  <img src="https://img.shields.io/badge/Eslint-4B32C3?style=for-the-badge&logo=Eslint&logoColor=white">
  <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white">
 </div>

#### 협업

 <div style="margin: ; text-align: left;" "text-align: left;"> 
   <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white">
   <img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=Github&logoColor=white">
</div>

<br/>
<br/>

# 📋 역할 분담

### 🐻 김초련

- 개발
- 비개발

### 🐰 박지현

- 개발
  - 공용 컴포넌트 : Topbar, Post, Modal
  - 페이지 : 사장님, 유저 에약 정보 리스트, 예약 폼
  - React-calendar을 통한 예약 일시 지정
  - Modal 개발
  - Infinite Scroll을 통한 데이터 반복 출력 수행
- 비개발
  - CI/CD 작업

### 🐤 윤미나

- 개발
  - 공용 컴포넌트 : button
  - 페이지 : 분실물 목록, 분실물 상세 정보, 분실물 글 작성 및 수정 페이지
  - contextAPI 활용
- 비개발

### 🐭 이주형

- 개발
  - 개발 환경 초기 세팅
  - 공통 컴포넌트 : input
  - 페이지 : 로그인, 회원가입, 소셜 로그인, 메뉴판, 가게 메뉴
- 비개발
  - 팀미팅 회의 진행
  - README 작성

<br/>
<br/>

# ⚒️ 주요 기능

> ### 회원가입 페이지

- 이메일, 닉네임, 비밀번호를 입력하여 회원가입 가능
- 중복된 이메일•닉네임으로 가입이 불가

> ### 로그인 페이지

- 로그인 성공 시, 발급된 accessToken를 localStorage에 저장
- - 이메일과 비밀번호를 입력하여 로그인 가능

> ### 소셜 로그인 페이지

> ### 맵 페이지

> ### 가게 화면 (유저용)

- 특정 가게의 대관, 분실물 확인, 메뉴판을 확인할 수 있는 가게 페이지.

  > ### 분실물 찾기 (유저용, 사장님용 공통)

- 무한 스크롤로 전체 목록 확인 가능
- 검색창을 통해 특정 게시글 찾기 가능
- debouncing을 통해 검색창에 입력할 때 한 번만 서버에 요청이 가도록 처리.
- contextAPI 전역상태를 활용하여 OWNER일때만 사장님용 페이지에 들어갈 수 있게 함.

> ### 대관 신청 (유저용)

- React-Calendar을 통한 예약 Form 기능
- 본인이 예약한 가게 리스트를 무한 스크롤을 통해 편리하게 확인 가능
- 현재 예약이 신청 상태인지, 입금 요망 상태인지, 확정 상태인지 확인 가능

> ### 가게 화면 (사장님용)

- 자신의 가게 분실물을 등록하거나, 대관 신청을 확인하고, 메뉴판 사진을 업로드하기 위한 가게 페이지.

> ### 분실물 글 작성 (사장님용)

- 제목, 사진, 분실물에 대한 내용을 입력하여 글을 작성하는 기능
- contextAPI 전역상태를 활용하여 OWNER일때만 사장님용 페이지에 들어갈 수 있게 함.

> ### 대관 신청 (사장님용)

- 고객이 신청한 예약 리스트를 무한 스크롤로 확인 가능.
- 본인의 상황에 맞게 예약 현황 조정 가능.
