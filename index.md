# 안녕하세요. 조영도입니다.

웹 프론트엔드 개발자로 일하고 있습니다.
제가 만든 제품이 누군가에게든 도움이 되었을 때 가장 보람을 느끼며, 버그를 마주하면 해결에 최선을 다합니다.
스타트업에서 일한 경험을 바탕으로 주도적으로 일해야 하는 환경에도 어려워하지 않을 자신이 있습니다.
시대를 앞서가거나 이끌어가는 회사에서 일하고 싶습니다.

---

## Work Experiences

### 카카오엔터프라이즈

웹 프론트엔드 개발자
2020.03 ~ 현재

#### 카카오워크 화상회의 FE

2021.01 ~ 현재

##### Description

카카오워크 사용자들이 화상회의를 진행할 수 있는 웹페이지(PC, MOBILE)를 개선 및 유지보수하고 있습니다.

##### What did I do

- 기존에 api와 정적 파일을 하나의 nodejs 서버로 운영하던 형태를 api 서버와 웹 서버로 분리를 요청하고, 웹 서버를 담당하여 코드 정리 및 typescript로 전환했습니다.
- 기존 firebase를 사용하고 있던 부분을 사내 sdk로 전환하며, 해당 sdk의 유지보수도 진행하고 있습니다.
- 미디어 스트림과 web picture-in-picture api를 활용하여 신규 기능을 구현했습니다.
- 이모지, 손들기처럼 애니메이션이 포함된 [리액션 기능](https://blog.kakaowork.com/95?category=989831)을 구현했습니다.
- 기존 git branch 전략이 phase 별로 이루어져 있던 것을 git-flow에 맞추어 변경했습니다.
- 개발 환경을 rollup에서 vite로 변경하여 개발 편의성을 높였습니다.
- 기존 소스에서 [공교육용 화상회의 버전](https://news.mt.co.kr/mtview.php?no=2021110810303426810) 개발 및 배포했습니다.

##### Tech Stack

Svelte, TS, Stylus, Vite, express, rxjs-like lib

##### URL

- https://meeting.kakaowork.com

#### 카카오워크 서비스 연결 진단 FE

2020.10 ~ 2021.08

##### Description

외부 기업이 카카오워크 서비스를 도입하기 위해 필수로 열어두어야 하는 도메인들을 웹에서 테스트 할 수 있는 페이지를 개발했습니다.

##### What did I do

- 웹에선 테스트 방식이 제한적이기에, 이를 기반으로 배포하기까지 기획자과 긴밀히 소통하며 개발했습니다.
- 각 도메인 별 테스트 api 리스트를 취합하기 위해 각 도메인 담당 개발자분들과 소통하며 개발했습니다.
- http, websocket, turn server에도 접근 가능 여부를 확인할 수 있도록 개발했습니다.

##### Tech Stack

React, TS, Styled-component, Webpack

##### URL

- https://www.kakaowork.com/connection-test

#### 카카오워크 관리자 서비스 FE

2020.05 ~ 2020.12

##### Description

카카오워크 서비스를 도입한 기업의 관리자들을 위한 웹페이지에서 일부 기능 및 공통 모듈을 개발했습니다.

##### What did I do

- 일부 메뉴 페이지(직위직책관리, 관리자 설정) 구현했습니다.
- 유저는 메뉴마다 접근 권한 개별적으로 부여될 수 있는 기획 요구 사항에 맞추고자, dynamic import를 활용하여 권한이 없는 유저는 해당 페이지가 로드되지도 않도록 공통 모듈을 만들고 적용했습니다.
- 페이지 전환 시 스켈레톤 스크린을 추가하는 것을 기획에 건의하고 구현 및 반영했습니다.
- custom dialog로 alert, confirm을 사용하듯이 할 수 있도록 구현했습니다.

##### Tech Stack

React, TS, Relay, GraphQL, Styled-component, Webpack, Storybook

##### URL

- https://admin.kakaowork.com/

#### 카카오워크 블록 킷 빌더 FE

2020.03 ~ 현재

##### Description

카카오워크 오픈 api에 사용되는 조합형 메시지를 웹페이지에서 미리 확인할 수 있는 웹페이지를 단독 개발 및 유지보수 하고 있습니다.

##### What did I do

- 인턴십 과제로 시작한 개인 프로젝트였고 PoC 단계에서 실 서비스 배포까지 이뤄질 수 있도록 주도적으로 개발했습니다.
- 초기 설계 단계부터 구조 개선까지 필요한 시점마다 팀원분들에게 리뷰를 요청하면서 개발했습니다.
- 서버 api 스펙이 변경되면 그에 맞춰 반영되도록 지금까지 유지보수하고 있습니다.

##### Tech Stack

React, TS, Styled-component, Webpack, monaco-editor, ajv

##### URL

- https://www.kakaowork.com/block-kit-builder

---

### 학생독립만세 (비개발)

서비스 운영 및 기획자
2018.05 ~ 2019.04

### 후불제 과외 서비스 운영

- 2017년 초 후불제 과외 서비스라는 아이템이 구상 단계에 있었을 때, 해당 아이템의 사회적 가치(social impact)를 부여하고 구체화하는 역할을 맡았습니다.
- 이후 팀에 합류하게 되어, 정식 서비스로 시작되었을 때, 서비스 운영 업무를 담당했습니다.

### HEXACO 기반 자체 심리검사 개발 및 운영

- 위의 서비스 이용을 위해 학생들은 온라인상에서 지원을 합니다.
- 그 뒤에 진정성 확인을 위해 1:1대면평가를 진행했지만, 시간 및 비용관계로 비대면 평가로 변경했습니다.
- 그러나 비대면 평가는 어려운 점이 많았고, 이를 해결하기 위한 자체 심리검사 문항 및 평가 척도를 개발했습니다.
- 저의 전문분야가 아니었기에 어려운 점과 부족한 점은 있었지만, 꽤 유의미한 결과를 얻어낼 수 있었습니다.

---

## Other Experiences

### 부스트캠프 웹모바일 6기 코드 리뷰어

프론트엔드 코드 리뷰어
2021.09 ~ 2021.10 (6주)

- 도움을 얻은 만큼 드리고 싶었고, 다시 초심으로 돌아가는 마음도 갖고자 참여했습니다.
- 매주 5, 6명의 코드 리뷰를 했습니다.
- 주로 코드 일관성 및 개발 방향에 대한 피드백과, 학습하면서 궁금한 점에 대한 질의응답을 했습니다.
- 피드백을 주는 과정에서 오히려 저도 성장하고 학습할 수 있는 기회였습니다.

### 부스트캠프 2019(웹 4기) 챌린지/멤버십 수료

첼린지/멤버십 과정 수료생
2019.07 ~ 2019.12

- 웹 개발 전반에 대해 이해를 넓힐 수 있었습니다.
- 2개월 동안 팀 프로젝트를 스프린트 방식으로 진행하다 보니 현업에 빠르게 적응할 수 있었습니다.

#### 팀 프로젝트(Boolean Avengers)

2019.11 ~ 2019.12

##### Description

[GatherTown](https://www.gather.town/)처럼 한 방에서 여러 사용자들이 캐릭터를 이동시키며 개발 상식 OX 퀴즈를 푸는 게임을 개발했습니다.

##### What did I do

- socket 연결을 위한 NGINX 설정, 서버 Dockerize, Travis CI를 활용한 CI/CD 구성 등 배포를 위한 인프라 설정을 했습니다.
- 클라이언트와 서버 간의 Socket api 문서를 작성했습니다.
- Canvas api를 이용한 캐릭터 이동 로직을 구현했습니다.
- 유저 정보 조회 및 수정을 위한 관리자 페이지를 개발했습니다.

##### Tech Stack

React, JS, Styled-component, Socket.IO, express, NGINX, docker, MySQL

##### URL

- github: https://github.com/connect-foundation/2019-01
- demo: https://www.youtube.com/watch?v=ByhvS6dEXKk

### 성균관대학교

컴퓨터공학과, 경영학과 학사
2012.03 ~ 2020.02

- 컴퓨터공학에 대한 기본 소양을 익혔습니다.
- 경영학과를 복수전공을 하여 회계, 비즈니스 모델 등 경영학 기본 소양을 배우면서 더욱 유연한 시각을 가질 수 있었습니다.
- 그러나, 재미있는 사실은 복수전공을 하면서 저의 천직이 개발자임을 느낄 수 있었습니다.

---

## Skills

### Frontend

- HTML/CSS
- JavaScript, TypeScript
- React, Relay, GraphQL
- Svelte
- Styled-component, Stylus, functional-css
- npm, yarn
- Webpack, Babel, rollup, Vite
- jest, Storybook
- Puppeteer

### Backend

- Node.js, Express
- Phoenix Framework (Elixir)

### Database

- MySQL

### DevOps & Etc

- Docker, Docker-compose
- NCP(Naver Cloud Platform) Server, Object Storage
- Travis CI

---

## Contact

- Email: yd199323@gmail.com
- GitHub: https://github.com/young-do

<span class="sr-only">본 이력서는, 이현섭님의 [이력서](https://hyunseob.github.io/resume/)에서 양식을 참고하였습니다.</span>
