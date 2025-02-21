# 패스트캠퍼스 프론트엔드 개발 스쿨 18기 파이널 프로젝트

우연히, 식단 프로젝트입니다.

<br>
<br>

<!-- ## 🦊 데모
[👉데모페이지 이동]TBU
<br>
<br> -->

## 🦊 팀원

[🙋🏻김효성](https://github.com/hyorard-b)<br>
[🙋🏻‍♀️박혜준](https://github.com/margu31)<br>
[🙋🏻이효형](https://github.com/lhhyung91)<br>
[🙋🏻‍♀️장지혜](https://github.com/jjhstoday)<br>
<br>
<br>

## 🦊 스택

![react](https://img.shields.io/badge/react-17.0.2-brightgreen) ![redux](https://img.shields.io/badge/redux-4.0.5-yellowgreen) ![react-redux](https://img.shields.io/badge/react--redux-7.2.3-yellow) ![react-thunk](https://img.shields.io/badge/react--thunk-2.3.0-red) <br>![router](https://img.shields.io/badge/router-1.3.5-%23a0f48d) ![react-router](https://img.shields.io/badge/react--router-5.2.0-%23f6f990) ![firebase](https://img.shields.io/badge/firebase-8.3.3-blue) ![axios](https://img.shields.io/badge/axios-0.21.1-important) ![styled-components](https://img.shields.io/badge/styled--components-5.2.3-blueviolet) <br>![framer-motion](https://img.shields.io/badge/framer--motion-4.1.3-orange) ![prop-types](https://img.shields.io/badge/prop--types-15.7.2-success) ![eslint](https://img.shields.io/badge/eslint-7.23.0-9cf) ![prettier](https://img.shields.io/badge/prettier-2.2.1-critical) <br>![immer](https://img.shields.io/badge/immer-9.0.1-blueviolet) ![polished](https://img.shields.io/badge/polished-4.1.1-%23f9c2fc) ![react-icons](https://img.shields.io/badge/react--icons-4.2.0-%2392fcfc) ![reselect](https://img.shields.io/badge/reselect-4.0.0-%23f7b08f)
<br>
<br>

## 🦊 프로젝트 소개

### 🍽기획 의도

```
✔️ 현대인의 건강한 식습관을 위한 프로젝트!
✔️ 바쁜 일상 속에 잊고 지내기 쉬운 우리의 소중한 한끼를 꼼꼼히 기록하며, 잘못된 식습관을 찾아 고치자!
✔️ 내 몸이 편한 음식을 찾으며 알아가는 소중한 나!
✔️ 좋은 식단을 서로 나누어요!
```

### 🍽구현 기능

```
✔️ 로그인, 회원가입
✔️ 식단 리스트
    🔸 하루 단위로 게시물 확인 가능
    🔸 한끼 당 게시물 확인 가능 : 캐러셀
    🔸 좋아요, 총 칼로리, 물 섭취량 추가 및 표시
    🔸 데일리 리뷰 작성 및 수정 가능
    🔸 끼니별 삭제 또는 날짜 전체 삭제 가능
✔️ 홈(메인 페이지)
    🔸 게시글 인기순, 최신순 정렬
    🔸 게시물 검색
    🔸 좋아요 클릭 및 좋아요 수 확인 가능
    🔸 로그인한 유저 게시물 구별
    🔸 인기순, 최신순, 검색순으로 정렬 가능
    🔸 게시물 클릭 시 끼니 리스트 전부 확인 가능 (캐러셀)
✔️ 캘린더
    🔸 날짜 클릭 시, 해당 날짜 게시물로 이동
    🔸 달력 내 식단 등록된 날짜 표시
    🔸 투데이 버튼 클릭 시, 오늘 날짜로 이동
✔️ 식단 포스팅
    🔸 날짜, 칼로리, 식사 타입, 메뉴 기록
    🔸 사진 드래그 & 드랍 / 썸네일 표시
    🔸 리뷰 작성
    🔸 공개 여부 설정 가능
✔️ 헬스 바
    🔸 최근 3일간의 칼로리, 물 섭취량 표시
✔️ 식단 수정
✔️ 회원 정보 수정

```

### 🍽역할 분배

```
✔️ 김효성 : 환경 구축, 데이터 구조 구성, 메인 페이지, 헤더(네비게이션), 푸터
✔️ 박혜준 : 식단 포스팅, 식단 수정, 회원 정보 수정 페이지
✔️ 이효형 : 로그인, 회원가입, 식단 모달창(캐러셀)
✔️ 장지혜 : 식단 리스트, 캘린더, 헬스바
```

<br>
<br>

## 🦊프로젝트 목표

    🍕 git을 통한 팀원간 협업 연습
    ✔️ git Wiki
    ✔️ git Kanban

    ✔️ 6개월간 여정의 종점을 찍는 마지막 프로젝트
    ✔️ 웹 접근성 학습
    ✔️ firebase 활용한 인증 및 CRUD
    ✔️ react, redux를 활용한 상태관리
    ✔️ redux-thunk, async-await를 활용한 비동기 처리
    ✔️ router를 활용한 SPA 제작

<br>
<br>

## 🦊API

###

    ✔️ 인증 - firebase-authentication
    ✔️ DB - firebase-firestore, firebase-storage, AWS s3

<br>
<br>

## 🦊프로젝트 구조도

```md
├── LICENSE
├── README.md
├── jsconfig.json
├── package-lock.json
├── package.json
├── public
│ ├── favicon.svg
│ ├── home-welcome.jpg
│ ├── index.html
│ ├── login-bg.jpg
│ ├── manifest.json
│ ├── robots.txt
│ └── setting-\_image.jpg
├── src
│ ├── api
│ │ ├── amazon.js
│ │ ├── auth.js
│ │ ├── diets.js
│ │ └── firestore.js
│ ├── app
│ │ ├── App.css
│ │ ├── App.js
│ │ ├── App.styled.js
│ │ └── App.test.js
│ ├── assets
│ │ ├── icons
│ │ │ ├── InputIcons
│ │ │ │ ├── edit.svg
│ │ │ │ ├── edit_black.svg
│ │ │ │ ├── email.svg
│ │ │ │ ├── eye-slash.svg
│ │ │ │ ├── eye.svg
│ │ │ │ ├── framing.svg
│ │ │ │ ├── gender.svg
│ │ │ │ ├── height.svg
│ │ │ │ ├── id.svg
│ │ │ │ ├── lock.svg
│ │ │ │ ├── nickname.svg
│ │ │ │ ├── photo.svg
│ │ │ │ ├── picture.svg
│ │ │ │ └── weight.svg
│ │ │ ├── MenuList
│ │ │ │ ├── donut.svg
│ │ │ │ └── waterDrop.svg
│ │ │ └── dropdown.svg
│ │ └── logos
│ │ └── logo1.svg
│ ├── components
│ │ ├── Board
│ │ │ ├── Board.js
│ │ │ └── Board.styled.js
│ │ ├── BoardNavigation
│ │ │ ├── BoardNavigation.js
│ │ │ └── BoardNavigation.styled.js
│ │ ├── Button
│ │ │ ├── Button.js
│ │ │ └── Button.styled.js
│ │ ├── Calendar
│ │ │ ├── Calendar.js
│ │ │ └── Calendar.styled.js
│ │ ├── DailyReview
│ │ │ ├── DailyReview.js
│ │ │ └── DailyReview.styled.js
│ │ ├── DataGroup
│ │ │ ├── DataGroup.js
│ │ │ └── DataGroup.styled.js
│ │ ├── DietCard
│ │ │ ├── DietCard.js
│ │ │ └── DietCard.styled.js
│ │ ├── DragDrop
│ │ │ ├── DragDrop.js
│ │ │ └── DragDrop.styled.js
│ │ ├── Dropdown
│ │ │ ├── Dropdown.js
│ │ │ └── Dropdown.styled.js
│ │ ├── Footer
│ │ │ ├── Footer.js
│ │ │ └── Footer.styled.js
│ │ ├── Form
│ │ │ ├── Form.js
│ │ │ └── Form.styled.js
│ │ ├── HealthBar
│ │ │ ├── HealthBar.js
│ │ │ └── HealthBar.styled.js
│ │ ├── HomeLink
│ │ │ ├── HomeLink.js
│ │ │ └── HomeLink.styled.js
│ │ ├── Icon
│ │ │ ├── Icons.js
│ │ │ └── Icons.styled.js
│ │ ├── Input
│ │ │ ├── Input.js
│ │ │ └── Input.styled.js
│ │ ├── LoginForm
│ │ │ ├── LoginForm.js
│ │ │ └── LoginForm.styled.js
│ │ ├── MealDialog
│ │ │ ├── MealDialog.js
│ │ │ └── MealDialog.styled.js
│ │ ├── MealList
│ │ │ ├── MealList.js
│ │ │ └── MealList.styled.js
│ │ ├── MealWrapper
│ │ │ ├── MealModalGroup.js
│ │ │ └── MealModalGroup.styled.js
│ │ ├── MenuList
│ │ │ ├── MenuList.js
│ │ │ └── MenuList.styled.js
│ │ ├── MenuListBar
│ │ │ ├── MenuListBar.js
│ │ │ └── MenuListBar.styled.js
│ │ ├── MenuListToPostingButton
│ │ │ ├── MenuListToPosting.js
│ │ │ └── MenuListToPosting.styled.js
│ │ ├── Modal
│ │ │ ├── Modal.js
│ │ │ ├── Modal.styled.js
│ │ │ └── MyPhotoView
│ │ ├── MyPhotoView
│ │ │ ├── MyPhotoView.js
│ │ │ └── MyPhotoView.styled.js
│ │ ├── MyReview
│ │ │ ├── MyReview.js
│ │ │ └── MyReview.styled.js
│ │ ├── MyTitle
│ │ │ ├── MyTitle.js
│ │ │ └── MyTitle.styled.js
│ │ ├── Navigation
│ │ │ ├── Navigation.js
│ │ │ └── Navigation.styled.js
│ │ ├── NotFound
│ │ │ ├── NotFound.js
│ │ │ └── NotFound.styled.js
│ │ ├── Portal
│ │ │ ├── Portal.js
│ │ │ └── Portal.styled.js
│ │ ├── Radio
│ │ │ ├── InputRadio.js
│ │ │ └── InputRadio.styled.js
│ │ ├── RadioGroup
│ │ │ ├── RadioGroup.js
│ │ │ └── RadioGroup.styled.js
│ │ ├── ReviewBox
│ │ │ ├── ReviewBox.js
│ │ │ └── ReviewBox.styled.js
│ │ ├── ScrollTopButton
│ │ │ ├── ScrollTopButton.js
│ │ │ └── ScrollTopButton.styled.js
│ │ ├── Setting
│ │ │ ├── Setting.js
│ │ │ └── Setting.styled.js
│ │ ├── SideBar
│ │ │ ├── SideBar.js
│ │ │ └── SideBar.styled.js
│ │ ├── SignUp
│ │ │ ├── SignUpForm.js
│ │ │ └── SignUpForm.styled.js
│ │ ├── SignUpRadioGroup
│ │ │ ├── SignUpRadioGroup.js
│ │ │ └── SignUpRadioGroup.styled.js
│ │ ├── Title
│ │ │ ├── Title.js
│ │ │ └── Title.styled.js
│ │ ├── Toggle
│ │ │ ├── Toggle.js
│ │ │ └── Toggle.styled.js
│ │ ├── UserNavigation
│ │ │ ├── UserNavigation.js
│ │ │ └── UserNavigation.styled.js
│ │ ├── Welcome
│ │ │ ├── Welcome.js
│ │ │ └── Welcome.styled.js
│ │ └── index.js
│ ├── containers
│ │ ├── BoardContainer
│ │ │ └── BoardContainer.js
│ │ ├── CalendarContainer
│ │ │ └── CalendarContainer.js
│ │ ├── HealthBarContainer
│ │ │ └── HealthBarContainer.js
│ │ ├── LogInContainer
│ │ │ └── LogInContainer.js
│ │ ├── MealModalContainer
│ │ │ └── MealModalContainer.js
│ │ ├── MenuListContainer
│ │ │ └── MenuListContainer.js
│ │ ├── PostEditContainer
│ │ │ └── PostEditContainer.js
│ │ ├── PostingContainer
│ │ │ └── PostingContainer.js
│ │ ├── SettingContainer
│ │ │ └── SettingContainer.js
│ │ ├── SignUpContainer
│ │ │ └── SignUpContainer.js
│ │ ├── UserBar
│ │ │ └── UserBar.js
│ │ └── index.js
│ ├── index.css
│ ├── index.js
│ ├── lib
│ │ └── boardUtils.js
│ ├── logo.svg
│ ├── pages
│ │ ├── Home
│ │ │ ├── Home.js
│ │ │ └── Home.styled.js
│ │ ├── MyPage
│ │ │ ├── MyPage.js
│ │ │ └── MyPage.styled.js
│ │ ├── PostEdit
│ │ │ ├── PostEditPage.js
│ │ │ └── PostEditPage.styled.js
│ │ ├── PostingPage
│ │ │ ├── PostingPage.js
│ │ │ └── PostingPage.styled.js
│ │ ├── SettingPage
│ │ │ ├── SettingPage.js
│ │ │ └── SettingPage.styled.js
│ │ └── index.js
│ ├── redux
│ │ ├── modules
│ │ │ ├── auth
│ │ │ │ └── auth.js
│ │ │ ├── board.js
│ │ │ ├── healthBar.js
│ │ │ ├── index.js
│ │ │ ├── menuList.js
│ │ │ └── postingMenuList.js
│ │ └── store.js
│ ├── reportWebVitals.js
│ ├── setupTests.js
│ ├── styles
│ │ ├── a11y.js
│ │ ├── color.js
│ │ ├── font.js
│ │ ├── index.js
│ │ └── reset.js
│ └── utils
│ └── validation
│ ├── DailyReviewValidation.js
│ ├── LogInValidation.js
│ ├── PostingValidation.js
│ └── SignUpValidation.js
└── yarn.lock
```
