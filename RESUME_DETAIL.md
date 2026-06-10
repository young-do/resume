---
name: 조영도
role: 웹 프론트엔드 개발자
updated: 2024.06.30
---

# 안녕하세요. 조영도입니다.

웹 프론트엔드 개발자로 일하고 있습니다.  
제가 만든 제품이 누군가에게든 도움이 되었을 때 가장 보람을 느끼며, 버그를 마주하면 해결에 최선을 다합니다.  
스타트업에서 일한 경험을 바탕으로 주도적으로 일해야 하는 환경에도 어려워하지 않을 자신이 있습니다.  
시대를 앞서가거나 이끌어가는 회사에서 일하고 싶습니다.

## Contact

- Email: [yd199323@gmail.com](mailto:yd199323@gmail.com)
- GitHub: [https://github.com/young-do](https://github.com/young-do)
- Blog: [https://velog.io/@racoon](https://velog.io/@racoon)
- LinkedIn: [https://www.linkedin.com/in/young-do](https://www.linkedin.com/in/young-do)

## Work Experiences

### 네이버클라우드

웹 프론트엔드 개발자  
2023.10 ~ 현재

#### CLOVA Studio

2023.10 ~ 현재

**Description**

비즈니스에 최적화된 하이퍼스케일 AI 개발도구 입니다. 사용자는 이 도구를 통해 AI 모델을 쉽게 튜닝하거나 이용할 수 있습니다.

**What did I do**

- 팀원들과 함께 신규 기능을 개발하고 있습니다. 또한 기존 페이지를 하드코딩에서 서버 데이터에 따라 자동화할 수 있도록 개선하고 있습니다.
- 부드러운 사용자 경험을 위해 [React Transition Group](https://reactcommunity.org/react-transition-group/)을 활용하여 Collapse 컴포넌트를 만들어 아코디언 메뉴들에 적용하였습니다.
- jest로 테스트 실행 중 Jenkins 프로세스가 중단되는 경우 수동 재시작하던 부분을 pm2를 사용하여 자동화하였습니다.

**Tech Stack**

React, TS, SCSS, webpack, recoil, Storybook, jest

**URL**

- [ncloud](https://www.ncloud.com/product/aiService/clovaStudio) 콘솔에서 서비스 신청 후 접근 가능합니다.

### 카카오엔터프라이즈

웹 프론트엔드 개발자  
2020.03 ~ 2023.08

#### 교육현장 화상회의 서비스(가칭)

2022.10 ~ 2023.03

**Description**

학교와 같은 교육현장에서 활용할 수 있는 화상회의 서비스를 개발했습니다. MVP는 개발되었으나 아쉽게 출시되진 않았습니다.

**What did I do**

- 카카오워크 화상회의의 핵심 기능(영상 송수신, 화면공유)을 이 프로젝트에도 이식하는 것을 담당했습니다.
- 다른 사람의 영상을 pin할 수 있는 기능을 추가했습니다.
- Figma 처럼 화면공유 시 회의 참여자가 해당 영상에 그림을 그리고 마우스 포인터 위치를 공유하는 기능을 firebase와 svg를 이용해 추가했습니다.

**Tech Stack**

React, TS, SCSS, webpack, zustand, RxJS, firebase, radash, Nx

**URL**

- 출시되지 않아 아쉽게도 공개할 수 있는 url이 없습니다.

#### 카카오워크 화상회의 FE

2021.01 ~ 2023.08

**Description**

카카오워크 사용자들이 화상회의를 진행할 수 있는 웹페이지(PC, MOBILE)를 개선 및 유지보수했습니다.

**What did I do**

**화상회의 2.0 (2022.05 ~ 2023.08)**

- 기존엔 각 phase마다 도커 이미지 빌드가 필요했으나, SvelteKit으로 전환하여 하나의 이미지로 여러 phase에 배포할 수 있도록 간편화하였습니다.
- 상태관리 라이브러리를 RxJS 기반 라이브러리로 전환하여 레거시 코드의 위험도를 줄였습니다.
- functional css를 도입 및 적극 사용하여 번들된 css의 크기를 48%(85KB 👉 45KB)로 줄였습니다.
- 화상회의의 핵심인 WebRTC sdk 설계부터 참여하여 높은 이해도를 가지고 [화상회의 2.0](https://blog.kakaowork.com/134)을 성공적으로 개발할 수 있었습니다.
- 화상회의 2.0 배포 후 더 나은 유저 경험 제공을 위해, 오픈 전 후로 제보된 버그를 수정하여 120건 이상의 지라 티켓을 해결했습니다.
- AI 조직과 협업, tensorflow-js 기반 오픈소스를 활용하여 [배경블러 효과기능](https://blog.kakaowork.com/148)을 개발 및 배포하고 성능 최적화를 진행했습니다.
- 화상회의 개발을 위해 존재하던 여러 저장소들을 [Turborepo](https://turbo.build/)를 사용해 모노레포로 전환하여 불필요한 사내 npm 배포를 제거하고 효율적으로 코드 관리를 할 수 있었습니다.

**화상회의 1.0 (2021.01 ~ 2022.05)**

- 기존에 api와 정적 파일을 하나의 nodejs 서버로 운영하던 형태를 api 서버와 웹 서버로 분리를 요청하고, 웹 서버를 담당하여 코드 정리 및 typescript로 전환했습니다.
- 기존 firebase를 사용하고 있던 부분을 사내 sdk로 전환하며, 해당 sdk의 유지보수도 진행하고 있습니다.
- 미디어 스트림과 web picture-in-picture api를 활용하여 신규 기능을 구현했습니다.
- 이모지, 손들기처럼 애니메이션이 포함된 [리액션 기능](https://blog.kakaowork.com/95?category=989831)을 구현했습니다.
- 기존 git branch 전략이 phase 별로 이루어져 있던 것을 git-flow에 맞추어 변경했습니다.
- 개발 환경을 rollup에서 vite로 변경하여 개발 편의성을 높였습니다.
- 기존 소스에서 [공교육용 화상회의 버전](https://news.mt.co.kr/mtview.php?no=2021110810303426810) 개발 및 배포했습니다.

**Tech Stack**

**2.0:** Svelte, TS, unocss, Vite, SvelteKit, RxJS

**1.0:** Svelte, TS, Stylus, Vite, express, rxjs-like lib

**URL**

- [https://www.ncloud.com/product/aiService/clovaStudio](https://www.ncloud.com/product/aiService/clovaStudio)

#### 카카오워크 서비스 연결 진단 FE

2020.10 ~ 2021.08

**Description**

외부 기업이 카카오워크 서비스를 도입하기 위해 필수로 열어두어야 하는 도메인들을 웹에서 테스트 할 수 있는 페이지를 개발했습니다.

**What did I do**

- 웹에선 테스트 방식이 제한적이기에, 이를 기반으로 배포하기까지 기획자과 긴밀히 소통하며 개발했습니다.
- 각 도메인 별 테스트 api 리스트를 취합하기 위해 각 도메인 담당 개발자분들과 소통하며 개발했습니다.
- http, websocket, turn server에도 접근 가능 여부를 확인할 수 있도록 개발했습니다.

**Tech Stack**

React, TS, Styled-components, Webpack

**URL**

- [https://connection-test.kakaowork.com/](https://connection-test.kakaowork.com/)

#### 카카오워크 관리자 서비스 FE

2020.05 ~ 2020.12

**Description**

카카오워크 서비스를 도입한 기업의 관리자들을 위한 웹페이지에서 일부 기능 및 공통 모듈을 개발했습니다.

**What did I do**

- 일부 메뉴 페이지(직위직책관리, 관리자 설정) 구현했습니다.
- 유저는 메뉴마다 접근 권한 개별적으로 부여될 수 있는 기획 요구 사항에 맞추고자, dynamic import를 활용하여 권한이 없는 유저는 해당 페이지가 로드되지도 않도록 공통 모듈을 만들고 적용했습니다.
- 페이지 전환 시 스켈레톤 스크린을 추가하는 것을 기획에 건의하고 구현 및 반영했습니다.
- custom dialog로 alert, confirm을 사용하듯이 할 수 있도록 구현했습니다.

**Tech Stack**

React, TS, Relay, GraphQL, Styled-components, Webpack, Storybook

**URL**

- [https://admin.kakaowork.com/](https://admin.kakaowork.com/)

#### 카카오워크 블록 킷 빌더 FE

2020.03 ~ 2021.12

**Description**

카카오워크 오픈 api에 사용되는 조합형 메시지를 웹페이지에서 미리 확인할 수 있는 서비스를 단독 개발 및 유지보수 했습니다.

**What did I do**

- 인턴십 과제로 시작한 개인 프로젝트였고 PoC 단계에서 실 서비스 배포까지 이뤄질 수 있도록 주도적으로 개발했습니다.
- 초기 설계 단계부터 구조 개선까지 필요한 시점마다 팀원분들에게 리뷰를 요청하면서 개발했습니다.
- 서버 api 스펙이 변경되면 그에 맞춰 반영되도록 지금까지 유지보수 했습니다.

**Tech Stack**

React, TS, Styled-components, Webpack, monaco-editor, ajv

**URL**

- [https://blockkit.kakaowork.com/](https://blockkit.kakaowork.com/)

### 학생독립만세 (비개발)

서비스 운영 및 기획자  
2018.05 ~ 2019.04

#### 후불제 과외 서비스 운영

- 2017년 초 후불제 과외 서비스라는 아이템이 구상 단계에 있었을 때, 해당 아이템의 사회적 가치(social impact)를 부여하고 구체화하는 역할을 맡았습니다.
- 이후 팀에 합류하게 되어, 정식 서비스로 시작되었을 때, 서비스 운영 업무를 담당했습니다.

#### HEXACO 기반 자체 심리검사 개발 및 운영

- 위의 서비스 이용을 위해 학생들은 온라인상에서 지원을 합니다.
- 그 뒤에 진정성 확인을 위해 1:1대면평가를 진행했지만, 시간 및 비용관계로 비대면 평가로 변경했습니다.
- 그러나 비대면 평가는 어려운 점이 많았고, 이를 해결하기 위한 자체 심리검사 문항 및 평가 척도를 개발했습니다.
- 저의 전문분야가 아니었기에 어려운 점과 부족한 점은 있었지만, 꽤 유의미한 결과를 얻어낼 수 있었습니다.

## Other Experiences

### 부스트캠프 웹모바일 8기 멤버십 멘토

프론트엔드 멘토  
2023.11 ~ 2023.12 (6주)

- SEF2023 연사로 참여하면서 이번에도 개발자 선순환 문화에 기여하고 싶었고, 최근에 이직을 했기 때문에 취업을 준비하는 멘티들에게도 도움이 될 수 있을 것 같아 멘토로 지원했습니다.
- 멘토 활동은 서버 멘토 한 분과 함께 2팀을 주 1회 온라인 미팅을 진행했습니다.
- 주로 프로젝트 진행 상황을 체크하고 프로젝트 전반적인 코드 퀄리티를 확인하고 조언을 주거나 궁금한 점에 대한 답변을 하는 식으로 진행했습니다.
- 이번 활동에선 20년+ 연차의 서버 멘토 분과 함께 해서 그런지 멘토로서 어떤 자세로 임해야 하는가를 더욱 생각해 보게 되는 계기가 되었습니다.

### 네이버 커넥트재단 SEF2023 연사

연사  
2023.09

- 네이버 부스트캠프 멘티에서 멘토로 활동하면서 운영진분들과 연이 닿아 개발자들의 선순환에 대한 주제로 영상에 참여했습니다.
- Q&A 형식으로 진행되었으며, 주로 어떻게 개발자가 되었는지에 대해 이야기를 나누었습니다.
- 개발자를 꿈꾸는 분들에게 응원의 메시지를 전달하기 위해 참여했습니다.
- 처음 경험하는 큰 자리에서 제 역할을 못한 것 같아 아쉬운 점이 많지만 어디서도 하지 못할 값진 경험을 얻을 수 있었습니다.
- 또한 연사로 초대해 주신 분들에게 너무나도 감사했습니다.
- 발표 영상은 [여기서](https://www.youtube.com/watch?v=tJzRa-IB524) 확인하실 수 있습니다.

### 넥스터즈 22기, 23기 개발자

프론트엔드 개발자  
2023.01 ~ 2023.02(22기) / 2023.07 ~ 2023.08(23기)

- 사이드 프로젝트에 대한 갈망을 풀고자 넥스터즈에 참여했습니다.
- 제 아이디어를 발제하고 팀원을 모아 PM의 역할도 함께하며 프로젝트를 진행했습니다.
- 프로젝트 중간에 [새로 학습하게 된 기술 스택(Supabase)](https://velog.io/@racoon/supabase-%ED%8F%BC-%EB%AF%B8%EC%B3%A4%EB%8B%A4)에 대해 공유하고자 발표도 진행했습니다.
- 각 기수별 진행했던 해당 프로젝트에 대한 세부사항은 [이 링크(22기)](https://github.com/Nexters/ditto)와 [이 링크(23기)](https://github.com/Nexters/moyeo-moyeo-FE)에서 확인하실 수 있습니다.
- 그리고 후기에 대한 글은 [여기서](https://velog.io/@racoon/230305-%EB%84%A5%EC%8A%A4%ED%84%B0%EC%A6%88-%EC%B2%AB-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EB%A5%BC-%EB%A7%88%EC%B9%98%EB%A9%B0) 확인하실 수 있습니다.
- 새로운 사람들과 재미난 프로젝트를 하며 잃는 것 없이 좋은 것만 얻어간 유익한 활동이었습니다.

### 부스트캠프 웹모바일 7기 멤버십 코드 리뷰어, 멘토

프론트엔드 코드 리뷰어, 멘토  
2022.09 ~ 2022.12 (12주)

- 성장에 기여하고 싶은 마음과 저또한 성장했는지 확인하고 싶은 마음으로 참여했습니다.
- 코드 리뷰어 활동은 매주 4명의 코드 리뷰를 했습니다.
- 주로 코드 일관성 및 개발 방향에 대한 피드백과, 학습하면서 궁금한 점에 대한 질의응답을 했습니다.
- 피드백을 줄 때 어떻게 해야 효율적이고 긍정적인 영향을 줄 수 있을지 고민해볼 수 있었습니다.
- 멘토는 2팀을 맡아서 매주 1회 미팅을 진행했습니다.
- 주로 프로젝트 진행상황을 체크하고 특정 코드 및 방법론에 대한 질문과 심리적으로 위축되어 있지 않도록 격려하곤 했습니다.
- 멘토 후기를 글로 작성했는데 [여기서](https://velog.io/@racoon/%EB%B6%80%EC%8A%A4%ED%8A%B8%EC%BA%A0%ED%94%84-%EB%A9%A4%EB%B2%84%EC%8B%AD-%EB%A9%98%ED%86%A0-%ED%9B%84%EA%B8%B0) 확인하실 수 있습니다.

### 부스트캠프 웹모바일 6기 멤버십 코드 리뷰어

프론트엔드 코드 리뷰어  
2021.09 ~ 2021.10 (6주)

- 도움을 얻은 만큼 드리고 싶었고, 다시 초심으로 돌아가는 마음도 갖고자 참여했습니다.
- 매주 5, 6명의 코드 리뷰를 했습니다.
- 해당 내용은 비공개 레포이기에 [1-2주차](https://github.com/young-do/resume/blob/master/public/images/week1-2.png), [3-4주차](https://github.com/young-do/resume/blob/master/public/images/week3-4.png), [5-6주차](https://github.com/young-do/resume/blob/master/public/images/week5-6.png) 관련 스크린샷을 남깁니다.
- 주로 코드 일관성 및 개발 방향에 대한 피드백과, 학습하면서 궁금한 점에 대한 질의응답을 했습니다.
- 피드백을 주는 과정에서 오히려 저도 성장하고 학습할 수 있는 기회였습니다.

### 부스트캠프 2019(웹 4기) 챌린지/멤버십 수료

첼린지/멤버십 과정 수료생  
2019.07 ~ 2019.12

- 웹 개발 전반에 대해 이해를 넓힐 수 있었습니다.
- 2개월 동안 팀 프로젝트를 스프린트 방식으로 진행하다 보니 현업에 빠르게 적응할 수 있었습니다.

#### 팀 프로젝트(Boolean Avengers)

2019.11 ~ 2019.12

**Description**

[GatherTown](https://www.gather.town/)처럼 한 방에서 여러 사용자들이 캐릭터를 이동시키며 개발 상식 OX 퀴즈를 푸는 게임을 개발했습니다.

**What did I do**

- socket 연결을 위한 NGINX 설정, 서버 Dockerize, Travis CI를 활용한 CI/CD 구성 등 배포를 위한 인프라 설정을 했습니다.
- 클라이언트와 서버 간의 Socket api 문서를 작성했습니다.
- Canvas api를 이용한 캐릭터 이동 로직을 구현했습니다.
- 유저 정보 조회 및 수정을 위한 관리자 페이지를 개발했습니다.

**Tech Stack**

React, JS, Styled-components, Socket.IO, express, NGINX, docker, MySQL

**URL**

- github: [https://github.com/connect-foundation/2019-01](https://github.com/connect-foundation/2019-01)
- demo: [https://www.youtube.com/watch?v=ByhvS6dEXKk](https://www.youtube.com/watch?v=ByhvS6dEXKk)

### 성균관대학교

컴퓨터공학과, 경영학과 학사  
2012.03 ~ 2020.02

- 컴퓨터공학에 대한 기본 소양을 익혔습니다.
- 경영학과를 복수전공을 하여 회계, 비즈니스 모델 등 경영학 기본 소양을 배우면서 더욱 유연한 시각을 가질 수 있었습니다.
- 그러나, 재미있는 사실은 복수전공을 하면서 저의 천직이 개발자임을 느낄 수 있었습니다.

## Skills

**Frontend**

- HTML/CSS
- JavaScript, TypeScript
- React, Relay, GraphQL, Next.js
- Svelte, SvelteKit, RxJS
- Styled-components, emotion.js, Stylus, unocss
- npm, yarn, Turborepo
- Webpack, Babel, rollup, Vite
- jest, Vitest, Storybook
- Puppeteer

**Backend**

- Node.js, Express
- Phoenix Framework (Elixir)

**Database**

- MySQL, PostgreSQL

**DevOps & Etc**

- Docker, Docker-compose
- NCP(Naver Cloud Platform) Server, Object Storage, Cloudflare Pages, Vercel
- Firebase, Supabase
- Travis CI, Github Actions
