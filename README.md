# clonecoding
- clone coding for FE (HTML/CSS/JS/React)
- 클론코딩 복습용 레포지토리
- 스터디 기록 목적으로 만들었으며, 스터디 종료 후 privacy로 전환 예정
<br/>

## 1. 타이핑 효과 랜딩 페이지
JavaScript를 이용해 텍스트가 화면에서 타이핑 되는 것 같은 효과를 연출한다.
### 순서
> 1. JavaScript로 움직일 부분 `querySelector`로 가져오기(`target`)
> 2. 타이핑 효과 연출
>    - 타이핑 위한 배열 생성: 한 단어씩 분해해서 배열에 넣을 때 split 사용
>    - 타이핑 리셋 함수(`resetTyping()`)
>    - 타이핑을 위한 배열 생성 함수(`randomString()`)
>    - 한 글자씩 텍스트 출력하는 함수 (`dynamic()`)
>    - 함수들 연결해서 타이핑 기능 완성 (`dynamic(randomString());`)
> 4. `::after` 가상요소 깜빡임
<br/>

## 2. 3D Flip Button
HTML과 CSS를 이용해 3D 버튼을 만든다.
### 순서
> 1. front, back 모양 주기
> 2. 3D 효과: `preserve-3d` + transform 속성 조정
> 3. 클릭했을 때 효과: `:hover` 이용
<br/>

## 3. 웹 페이지
HTML과 CSS를 이용해 하나의 웹 페이지를 만든다.
<br/>

## 4. 계산기
HTML과 CSS, 그리고 간단한 JS를 이용해 계산기를 만든다.
<br/>

## 5. 3D 버튼 아이콘
HTML과 CSS를 이용해 3D 버튼을 만든다. 유튜브, 트위터, 인스타그램,
페이스북 아이콘이 돌아가며 나타난다.
<br/>

## 6. 버튼 디자인 UI
HTML과 CSS를 이용해 애니메이션이 들어간 버튼을 만든다.
마우스를 올리면 색이 변하며 다른 글자가 나타난다.
<br/>

## 7. 카드UI
HTML과 CSS를 이용해 간단한 카드 UI를 만든다.
마우스를 올리면 카드 색이 변하며 아이콘이 바뀌는 애니메이션 효과를 준다.
<br/>

## 8. Full Screen Landing Page
HTML과 CSS를 이용해 하나의 웹 페이지를 만든다.
구글 폰트와 imgur 이미지를 이용해 페이지를 꾸민다.
<br/>

## 9. 할로윈데이 유령
HTML과 CSS, 간단한 JavaScript를 이용해 마우스 포인터를 따라 다니는 유령을 만든다.
<br/>

## 10. 크리스마스 눈 내리는 효과
HTML과 CSS, 간단한 JavaScript를 이용해 화면에서 눈이 내리는 효과를 만든다.
<br/>

## 11. 텍스트 타이핑 효과
HTML과 CSS만을 이용해 텍스트 타이핑 효과를 만든다.
### 타이핑 효과: animation으로 width를 조절
> 1. p 태그의 width를 0으로 설정
> 2. 한 줄로 나타내기 위해 `white-space: nowrap`
> 3. 부모 요소 밖으로 빠져나오는 텍스트 숨기기 위해 `overflow: hidden`
> 4. `@keyframes`를 이용해 만든 애니메이션을 p 태그에 적용
>    - 이때 width를 0에서 전체 p 태그가 차지해야 하는 너비 만큼으로 늘어나도록 `from {} to {}` 문법을 이용한다.
<br/>

## 12. 그림판
HTML과 CSS, JavaScript를 이용해 그림판을 만든다.
그림판에는 4가지 색깔을 선택할 수 있고, 지우개 기능과 다운로드 기능이 포함되어 있다.
### 그림판(`<canvas>`) 관련 JavaScript
> 1. `var ctx = canvas.getContext('2d')`: 그림을 그리는 그래픽 기능을 제공하는 객체
>    - `<canvas>` 엘리먼트는 고정 크기의 드로잉 영역을 생성하고 하나 이상의 렌더링 컨텍스트를 노출하여, 출력할 컨텐츠를 생성하고 다루게 된다. 캔버스는 처음에 비어 있다. 무언가를 표시하기 위해, 어떤 스크립트가 렌더링 컨텍스트에 접근하여 그리도록 할 필요가 있다.
>    - **`getContext()`** 메서드를 이용해서 **렌더링 컨텍스트와 (렌더링 컨텍스트의) 그리기 함수들을 사용**할 수 있다.
>    - `getContext()` 메서드는 렌더링 컨텍스트 타입을 지정하는 하나의 파라메터를 가진다. 2D 그래픽의 경우, `CanvasRenderingContext2D`를 얻기 위해 `"2d"`로 지정한다.
> 2. `ctx.beginPath()` → 새로운 경로를 만든다.
> 3. `ctx.moveTo()` vs `ctx.lineTo()`
>    - `ctx.moveTo(x,y)` → 펜을 x와 y로 지정된 좌표로 옮기는 메소드
>        - 캔버스가 초기화 되었거나 `beginPath()` 메소드가 호출되었을 때, 특정 시작점 설정을 위해 `moveTo()` 함수를 사용하는 것이 좋다.
>        - 또한 `moveTo()` 함수는 연결되지 않은 경로를 그리는 데에도 사용할 수 있다.
>    - `ctx.lineTo(x,y)` → 직선을 그리는 메소드
>        - 현재의 드로잉 위치에서 x와 y로 지정된 위치까지 선을 그린다.
>        - 선의 끝점의 좌표가 되는 x와 y, 두 개의 인자가 필요하다. 시작점은 이전에 그려진 경로에 의해 결정되며, 이전 경로의 끝점이 다음 그려지는 경로의 시작점이 된다. 또한 시작점은 `moveTo()` 메소드를 통해 변경될 수 있다.
>    - 새로운 경로를 지정하기 위해 `beginPath()` 메소드를 먼저 실행한다. 그 다음 `moveTo()` 메소드를 가지고 시작점을 원하는 위치로 새롭게 지정해 준다. 다음으로 `lineTo()` 함수를 이용해 선을 그려준다.
> 4. `ctx.stroke()` → Path 메소드 중 하나로 윤곽선을 이용하여 도형을 그린다.
> 5. `ctx.clearRect(x, y, width, height)` → 특정 부분을 지우는 직사각형. 이 지워진 부분은 완전히 투명해진다.
> 6. **마우스 위치 안 맞는 문제**: 렌더링이 왜곡된 것처럼 보이는 경우 CSS를 사용하지 않고 **`<canvas>` 속성에서 `width` 및 `height` 속성을 명시적으로 지정하여야 한다.**
>    - `<canvas>` 요소는 CSS에 의해 임의로 크기를 정할 수 있지만, 렌더링하는 동안 이미지가 레이아웃 크기에 맞게 크기가 조정된다. CSS 크기 지정이 초기 캔버스 비율을 고려하지 않으면 왜곡되어 나타난다.

### 다운로드 구현 방법
> 1. 캔버스 요소에 `.toDataURL` 메소드를 이용해 URL을 만든다.
> 2. a 태그를 만든다.
> 3. a 태그에 href 주소를 앞서 만든 URL로 연결한다.
> 4. `.download` 메소드를 이용해 저장되는 기본 파일 이름을 지정한다.
> 5. `.click()` 함수를 이용해 링크가 연결된 a 태그를 클릭한 것과 같은 효과를 낸다.
<br/>


## 참고
- [HTML+CSS+JS 미니 프로젝트 실습](https://www.youtube.com/playlist?list=PL-eeIUD86IjSyxTbGT7wY3Hie_HA5bKvg)
- JS 실습: <Let's Get IT 자바 스크립트> 교재
- `<canvas>` 사용법 MDN 문서: https://developer.mozilla.org/ko/docs/Web/API/Canvas_API/Tutorial/Basic_usage
