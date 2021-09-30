# Next.js
Next.js 시작

# [0915]
## [인프런]React로 NodeBird SNS만들기(1일차)
### 1. 쭉쭉쭉 코드 따라하기
### 2. 의문점
#### React와 Next.js의 차이
#### Next.js를 사용하는 이유?
>       브라우저 <-> 프론트서버 <-> 백엔드서버 <-> 데이터베이스와 같은 전통적인 방식은 양에 따라 페이지의 로딩속도가 달라진다.
>       우리나라사람들은 화면창이 띄어지고 3초안에 화면이 로딩되지 않으면 닫아버리는 경우가 많다고 한다.
>       이러한 속도적인 개선으로 single page app을 사용한다.
>       single page란?
>       브라우저 <-> 프론트서버로 먼저 html,css와 같은 화면만 먼저 띄어준다. 그리고 브라우저 <-> 백엔드로 데이터를 받아온다.
>       화면을 먼저 띄어주고 시간을 벌 수 있다.
>       
>       React, View, Angular 같은 single page는 사용자가 빠르게 인터렉션이 필요할때 강하다. B2C와같은 페이지는 적절하다.
>       
>       google 외 사이트의 검색엔진에서는 리액트로 만든 사이트는 데이터 로딩만보고 미완성이라 판단하고 나가버린다.
>       이에 해결법으로 ServerSideRendering(SSR), CodeSpliting이 있고 [Next JS]는 사용에 용이하게 만들어졌다.
>       또 미리 클릭할 만한 링크의 데이터를 받아주는 FreeFetching기능도 있다.
        
        
         
#### FreeRendering이란?, ServerSide Rendering이란?
>       SSR방식도 두가지로 나뉜다.
>       FreeRender, ServerSideRendering    
>       [FreeRender] 는 검색엔진일때만 서버에서 데이터를 전통방식으로 받아온다.
>       [ServerSideRendering] 은 첫 방문만 전통적인 방법으로 받아오고 그다음 페이지 전환할땐 리액트방식으로 받아온다.(하이브리드)
>        
>       Next JS를 굳이 안써도 될때 : 어드민페이지처럼 반응속도가 중요하지 않을 경우 React JS를 써도 상관없다.
>       
>       하지만 ServerSideRendering, CodeSpliting는 Nect JS뿐 아니라 React JS도 구현 가능하다.

### 3. 메모
>       1. pages 폴더는 무조건 이름이 pages이어야 한다. 
>       Next JS가 이름을 인식하고 개별적인 페이지로 CodeSpliting된 PageComponent로 만들어 준다.
>       
>       2. 에러메세지 무조건 번역해보기
>       
>       3. npm run dev : dev의 value실행
>       
>       4. 서버가 돌아가고 있을때 페이지를 새로 만들었으면 서버 재시작
>       
>       5. npm trends 사이트에서 사용량 비교 후 사용
>       
>       6. 모든페이지에서 공통적인 부분은 _app.js같은 파일을 만들어 준다. pages의 공통 부모
>       
>       7. 디자인은 모바일 -> 태블릿 -> 데스크탑 순으로 만든다. 
>       xs:모바일, sm:태블릿, md:작은데스크탑 ex) <Col xs={24} md={6}> 24등분 중 얼마
>       
>       8. style에 객체 넣으면 안됨! 최적화에 문제가 생김
>       {} === {} : false
>       이유는 React JS는 virtual Dom으로 달라진 부분을 리랜더링을 한다.
>       객체를 넣게 되는 경우 계속 리랜더링 된다.
>       방법 1. style-component를 사용
>           2. useMemo를 사용
>           
>       9. [useCallback 함수콜백], [useMemo 값콜백]
>       
>       10. return 부분을 최소화하여 virtual Dom 역할을 최소화하는것이 맞다고 생각하는데 맞나??
>           최소화 하기위해 component로 나누는거고 스타일객체도 사용안하는거 같은데...
>           리액트의 장점을 살리기 위해...
>           더 공부
           
---           
       
# [0916]
## [인프런]React로 NodeBird SNS만들기(2일차)
### 1. 쭉쭉쭉 코드 따라하기
### 2. 의문점
#### ServerSideRendering, ClientSideRendering - 동작원리
#### Next JS 고유동작원리
#### CodeSpliting 순서도와 흐름
### 3. 메모
>       1. 배열로 JSX 사용시 key 값을 넣어야 됨.
>          ... target="_blank" rel="noreferrer noopener" />
>              noreferrer: 이전, nopener: 누가 열었는지 -> 이 둘을 정보를 없애줌/정보의 위협이 됨
>              
>       2. E-CHART, ANT-D
>       
>       3. Next JS에 Redux 붙이기 npx i redux, npx i next-redux-wrapper 오류시 + --force/ @6(version)
>          Redux란? 중앙저장소역할
>          - 회원정보처럼 여러 컴포넌트에서 공통으로 쓰는 데이터가 있고 컴포넌트가 분리되어 있으면 데이터들도 흩어져 있다.
>          이 흩어진 데이터들을 하나의 부모컴포넌트로 만들고 자식컴포넌트로 매번 수동으로 뿌려주는 귀찮은 과정을 거치기 때문에
>          중앙에서 하나로 관리를하여 컴포넌트에 뿌려주는 역할.
>          
>          종류: React 3가지 
>          context.api : Redux와 Mobex랑 비동기시 차이가 있다. 실패시 성공 실패 모든경우를 다 봐야한다. 실패시 코드가 Redux와 비슷하다고 한다.
>          Redux : 코드의 원리가 간단하다. 보기좋고 추적 가능하기 때문에 안정적이다. 코드가 길어진다. -> 입문자가 사용하기 좋다.
>          Mobex : 비교적 어려운 코드 -> 코드량은 줄지만 실수시 추적어려움 -> Redux가 능숙해진 후 사용, 경험자가 사용하기 좋다고 한다.
>          
>       4. 중앙저장소 데이터 수정원리
>          중앙저장소 -> ACTION ->REDUCER
>          action 가상저장소, ACTION의 type과 data를 Dispath해서 reducer에 넘겨준다. 
>          reducer에서 변경 후 중앙저장소로 넘겨준다.'
>        
>        https://github.com/kirill-konshin/next-redux-wrapper
       
---       

# 0917~0921
#### 추석&복습
        
---
# 0923
## [인프런]React로 NodeBird SNS만들기(3일차)
### 1. 쭉쭉쭉 코드 따라하기
### 2. 의문점
#### npm 명령어
### 3. 메모
        1. reducer쪼개기
           export파일 불러오고 combineReducers
        2. react-slick 사용
           여러이미지 더보기, ...
        3. 글로벌 스타일과 컴포넌트 파일구조
           import styled, { createGlobalStyle } from "styled-components";
        
                export const Global = createGlobalStyle`
                     .slick-slide {
                             display: inline-block;
                     }
                `;
           JSX부분에 <Global /> 전체에 작용.
           스타일파일 분류 후 export후 다중사용가능
        
---
        
# 0924
## [인프런]React로 NodeBird SNS만들기(4일차)
### 1. 쭉쭉쭉 코드 따라하기
### 2. 의문점
#### 
### 3. 메모
        1. npm rm ~ 제거
        2. reducer - 이전상태를 액션을 통해 다음상태로 만들어줌 (불변성은 지키면서...)
        
---
        
# 0926
## [인프런]React로 NodeBird SNS만들기(5일차)
### 1. 쭉쭉쭉 코드 따라하기
### 2. 의문점
#### 
### 3. 메모
        1. 강의 한번 쭉 듣고 흐름파악하기
        
---
        
# 0927
## [인프런]React로 NodeBird SNS만들기(6일차)
### 1. 쭉쭉쭉 코드 따라하기
### 2. 의문점
#### 
### 3. 메모
        1. reducers, sagas 관계
        2. 바뀐상태 적용하고 eslint점검하기 까지 수정완료
        
---
        
# 0928
## [인프런]React로 NodeBird SNS만들기(7일차)
### 1. 쭉쭉쭉 코드 따라하기
### 2. 의문점
#### 
### 3. 메모
        1. 오류가 너무 많음..
        2. faker렁 등등...
        3. 4강까지 - 무한스크롤,댓글삭제 안됨...
        
---
        
# 0929
## [인프런]React로 NodeBird SNS만들기(7일차)
### 1. 쭉쭉쭉 코드 따라하기
### 2. 의문점
#### 
### 3. 메모
        1. MySQL 다운 중 mac OS 버전미달로 설치 실패
        2. 노드서버구축하기
        3.
      
---
        
# 0930
## [인프런]React로 NodeBird SNS만들기(7일차)
### 1. 쭉쭉쭉 코드 따라하기
### 2. 의문점
#### 
### 3. 메모
        1. MySQL 다운 중 mac OS 버전미달로 설치 실패 -> 해결
        2. 예기치 않은 오류로 mySQL 종료현상 -> 버전 8.22버전으로 다운 후 정상실행
        3. npm i sequelize-cli mysql2 : node와 mysql 연결해주는 드라이버 설치
        4. 테이블 관계
        n : 1 = hasMany : belongsTo
        n : n = hasMany : hasMany -> 테이블 간의 테이블이 하나생김
        1 : 1 = hasOne : hasOne
        ex) 유저정보 : 유저 = hasOne : belongsTo
        같은 테이블에서도 중간 테이블 생성 가능 -> Foreignkey로 중간테이블의 이름을 지어줘야함.(안헷깔리게)
        id.  content.  RetweetId
        1                 null
        2                  1
        3                  1
        4                  1
        
        5. 왜 mysql에 연결이 
        
        
