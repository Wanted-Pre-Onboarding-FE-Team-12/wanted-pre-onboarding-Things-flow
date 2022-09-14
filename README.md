# wanted-pre-onboarding-ThingsFlow 과제

### 실행 화면

### 과제 달성 및 해결 방법

1. 무한 스크롤 구현
   Intersection Observer API를 사용하여 구현하였습니다. <br/>
   목록 아래에 `<div ref={ref}>` 를 선언하여 이 요소를 기준으로 margin을 1px로 두어서 api를 재요청하도록 구현했습니다.
   ![infinite-scroll](https://user-images.githubusercontent.com/54847910/190024377-d5b07655-58f1-4347-a092-5c594efaa3df.gif)

   ![issue-detail](https://user-images.githubusercontent.com/54847910/190024399-d9ff5036-5e0d-48ab-a57b-8e373e62f579.gif)

2. 반응형 구현
   데스크탑과 모바일 환경에 맞게 반응형 화면을 구현하였습니다.
   ![responsive](https://user-images.githubusercontent.com/54847910/190024403-fae9fd4a-e664-48a8-b13a-8162886d0cc2.gif)

3. 5번째 목록에 광고 이미지 삽입 구현
