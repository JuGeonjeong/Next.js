# Next.js
Next.js 시작
# [0915]
## [인프런]React로 NodeBird SNS만들기(1일차)
### 1. 쭉쭉쭉 코드 따라하기
### 2. 의문점
#### React와 Next.js의 차이
#### Next.js를 사용하는 이유?
       브라우저 <-> 프론트서버 <-> 백엔드서버 <-> 데이터베이스와 같은 전통적인 방식은 양에 따라 페이지의 로딩속도가 달라진다.
       우리나라사람들은 화면창이 띄어지고 3초안에 화면이 로딩되지 않으면 닫아버리는 경우가 많다고 한다.
       이러한 속도적인 개선으로 single page app을 사용한다.
       single page란?
       브라우저 <-> 프론트서버로 먼저 html,css와 같은 화면만 먼저 띄어준다. 그리고 브라우저 <-> 백엔드로 데이터를 받아온다.
       화면을 먼저 띄어주고 시간을 벌 수 있다.
       
       React, View, Angular 같은 single page는 사용자가 빠르게 인터렉션이 필요할때 강하다. B2C와같은 페이지는 적절하다.
       
       google 외 사이트의 검색엔진에서는 리액트로 만든 사이트는 데이터 로딩만보고 미완성이라 판단하고 나가버린다.
       이에 해결법으로 ServerSideRendering(SSR), CodeSpliting이 있고 [Next JS]는 사용에 용이하게 만들어졌다.
       또 미리 클릭할 만한 링크의 데이터를 받아주는 FreeFetching기능도 있다.
        
        
         
#### FreeRendering이란?, ServerSide Rendering이란?
       SSR방식도 두가지로 나뉜다.
       FreeRender, ServerSideRendering    
       [FreeRender] 는 검색엔진일때만 서버에서 데이터를 전통방식으로 받아온다.
       [ServerSideRendering] 은 첫 방문만 전통적인 방법으로 받아오고 그다음 페이지 전환할땐 리액트방식으로 받아온다.(하이브리드)
        
       Next JS를 굳이 안써도 될때 : 어드민페이지처럼 반응속도가 중요하지 않을 경우 React JS를 써도 상관없다.
       
       하지만 ServerSideRendering, CodeSpliting는 Nect JS뿐 아니라 React JS도 구현 가능하다.

### 3. 메모
#### pages 폴더
       1. pages 폴더는 무조건 이름이 pages이어야 한다. 
       Next JS가 이름을 인식하고 개별적인 페이지로 CodeSpliting된 PageComponent로 만들어 준다.
       2. 에러메세지 무조건 번역해보기
       3. npm run dev : dev의 value실행
       4. 서버가 돌아가고 있을때 페이지를 새로 만들었으면 서버 재시작
       5. npm trends 사이트에서 사용량 비교 후 사용
       6. 모든페이지에서 공통적인 부분은 _app.js같은 파일을 만들어 준다. pages의 공통 부모
       7. 디자인은 모바일 -> 태블릿 -> 데스크탑 순으로 만든다. 
       xs:모바일, sm:태블릿, md:작은데스크탑 ex) <Col xs={24} md={6}> 24등분 중 얼마
       8. style에 객체 넣으면 안됨! 최적화에 문제가 생김
       {} === {} : false
       이유는 React JS는 virtual Dom으로 달라진 부분을 리랜더링을 한다.
       객체를 넣게 되는 경우 false로 판단하여 계속 리랜더링 된다.
       방법 1. style-component를 사용하여
           2.
       9. useCallback 함수콜백 - useMeno 값콜백       
       
       
       
       
       
       
       
       
       
