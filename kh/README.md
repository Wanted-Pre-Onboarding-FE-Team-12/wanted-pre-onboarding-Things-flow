# wanted-pre-onboarding-ThingsFlow 과제

# 목차

- [실행](#1-실행)
- [폴더구조](#2-폴더구조)
- [과제 달성 사항 및 해결 방법](#3과제-달성-사항-및-해결-방법)

<br />
<br />

## 팀원

- [김재훈](https://github.com/rmawogns)
- [노기훈](https://github.com/ch4md0m)
- [정진우](https://github.com/jinux127) (팀장)
- [유지예](https://github.com/jiye-7)
- [이우윤](https://github.com/EEOOOO)
- [백광현](https://github.com/ghbaekdev)

<br/>
<br/>

## Tech Stack

<div>
    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white">
    <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
    <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
</div>

<br/>
<br/>
## 1. 실행
### 실행 방법

```sh
npm install

npm run start
```

<br/>

### 데모 링크

### [🚀🚀 데모 보러가기](http://wanted-team-12-imlab.s3-website.ap-northeast-2.amazonaws.com/)

<br/>
<br/>

## 2. 폴더구조

```sh
src
 ┣ api
 ┃ ┣ index.js
 ┃ ┗ issueApi.js
 ┣ assets
 ┃ ┗ tf-logo.png
 ┣ components
 ┃ ┗ Header
 ┃ ┃ ┣ index.jsx
 ┃ ┃ ┗ style.js
 ┣ context
 ┃ ┗ IssueContext.js
 ┣ hooks
 ┃ ┗ useIntersect.js
 ┣ layouts
 ┃ ┣ index.jsx
 ┃ ┗ style.js
 ┣ pages
 ┃ ┣ Home
 ┃ ┃ ┣ components
 ┃ ┃ ┃ ┣ IssueLists
 ┃ ┃ ┃ ┃ ┣ index.jsx
 ┃ ┃ ┃ ┃ ┗ style.js
 ┃ ┃ ┃ ┣ IssuePreview
 ┃ ┃ ┃ ┃ ┣ index.jsx
 ┃ ┃ ┃ ┃ ┗ style.js
 ┃ ┃ ┃ ┗ IssueThumbnail
 ┃ ┃ ┃ ┃ ┣ index.jsx
 ┃ ┃ ┃ ┃ ┗ style.js
 ┃ ┃ ┗ index.jsx
 ┃ ┗ IssueDetail
 ┃ ┃ ┣ components
 ┃ ┃ ┃ ┣ Bio
 ┃ ┃ ┃ ┃ ┣ index.jsx
 ┃ ┃ ┃ ┃ ┗ style.js
 ┃ ┃ ┃ ┗ Markdown
 ┃ ┃ ┃ ┃ ┣ index.jsx
 ┃ ┃ ┃ ┃ ┗ style.js
 ┃ ┃ ┗ index.jsx
 ┣ styles
 ┃ ┣ globalStyle.js
 ┃ ┗ theme.js
 ┣ utils
 ┃ ┗ asyncActionUtils.js
 ┣ .DS_Store
 ┣ App.js
 ┗ index.js
```

<br/>
<br/>

## 3.과제 달성 사항 및 해결 방법

#### 1. 무한 스크롤 구현

Intersection Observer API를 사용하여 구현하였습니다. <br/>
목록 아래에 `<div ref={ref}>` 를 선언하여 이 요소를 기준으로 margin을 1px로 두어서 api를 재요청하도록 구현했습니다.

![infinite-scroll](/kh/public/img/infinite-scroll.gif)

<br/>

![issue-detail](/kh/public/img/issue-detail.gif)

<br/>

### 2. 반응형 구현

데스크탑과 모바일 환경에 맞게 반응형 화면을 구현하였습니다.
![responsive](/kh/public/img/responsive.gif)

<br/>

### 3. 5번째 목록에 광고 이미지 삽입 구현

<img src='https://user-images.githubusercontent.com/54847910/190101872-b0a410db-c9b5-4b77-bed5-8bee08f08ba0.png' width='600'/>

<br/>

### 4. 지정된 조건(open 상태, 코멘트 많은 순)에 맞게 데이터 요청 및 표시

open상태인 issue에 대해서 api를 호출하고 코멘트 순의 조회를 위해 url parameter에 제공하여 표시했습니다.

<br/>

### 5. 데이터 요청 중 로딩 표시

데이터 요청 중 로딩의 상태를 Context Api를 통해 제공받아 구현하였습니다.

<br/>

### 6. Context API를 활용한 API 연동

```js
// src/context/IssueContext.js
// 위에서 만든 객체 / 유틸 함수들을 사용하여 리듀서 작성
function issuesReducer(state, action) {
  ...
}

export function IssuesProvider({ children }) {
  const [state, dispatch] = useReducer(issuesReducer, initialState);
  return (
    <IssuesStateContext.Provider value={state}>
      <IssuesDispatchContext.Provider value={dispatch}>{children}</IssuesDispatchContext.Provider>
    </IssuesStateContext.Provider>
  );
}

}
```

useReducer를 사용하여 state와 dispatch를 Context API에 제공하여 사용하였습니다. 해당 타입일 경우 dispatch를 통하여 해당 state를 갱신하고 loading과 error의 핸들링을 하였습니다.

```js
// src/utils/asyncActionUtils


export function createAsyncDispatcher(type, promiseFn) {
  ...
  async function actionHandler(dispatch, ...rest) {
    dispatch({ type }); // 요청 시작됨
    try {
      const data = await promiseFn(...rest);
      dispatch({
        type: SUCCESS,
        data,
      }); // 성공함
    } catch (e) {
      dispatch({
        type: ERROR,
        error: e,
      }); // 실패함
    }
  }

  return actionHandler;
}


export function createAsyncHandler(type, key) {
  ...
  // 함수를 새로 만들어서
  function handler(state, action) {
    switch (action.type) {
      case type:
        ...
      default:
        return state;
    }
  }

  return handler;
}

```

코드의 중복을 줄이고자 utils폴더에 asyncActionUitls를 작성하여 액션과 리듀서를 만드는 함수를 생성하였습니다.

<br/>
<br/>

---

### 추가 기능

- 다른 github 저장소도 `/{OWNER}/{REPO}` 형태로 불러올 수 있습니다.

![url 추가 기능](/kh/public/img/url-function.gif)

<br/>

### 기능 개선이 필요하다고 생각된는 점

- api 호출 시 쓰로틀링 하여 여러번 호출을 방지할 수 있을 것 같습니다.
