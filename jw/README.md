# wanted-pre-onboarding-ThingsFlow 과제

## 구현사항

### 이슈 목록 및 상세 화면 기능 구현

(사진)

### Context API를 활용한 API 연동

`/src/context/IssueContext`
useReducer를 사용하여 state와 dispatch를 Context API에 제공하여 사용하였습니다. 해당 타입일 경우 dispatch를 통하여 해당 state를 갱신하고 loading과 error의 핸들링을 하였습니다.

`/src/utils/asyncActionUtils`
코드의 중복을 줄이고자 utils폴더에 asyncActionUitls를 작성하여 액션과 리듀서를 만드는 함수를 생성하였습니다.

### 지정된 조건(open 상태, 코멘트 많은 순)에 맞게 데이터 요청 및 표시

open상태인 issue에 대해서 api를 호출하고 코멘트 순의 조회를 위해 url parameter에 제공하여 표시했습니다.

### 데이터 요청 중 로딩 표시

데이터 요청 중 로딩의 상태를 Context Api를 통해 제공받아 구현하였습니다.

### UI는 데스크톱, 모바일에서 보았을 때 모두 읽기 편하게 구현

### 추가 기능

1. 다른 github 저장소도 OWNER/REPO 형태로 불러올 수 있음

### 기능 개선이 필요하다고 생각된는 점

1. api 호출 시 쓰로틀링을하여 여러번 호출을 방지할 수 있을 것 같다.
