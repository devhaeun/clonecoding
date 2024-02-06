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

## 참고
[HTML+CSS+JS 미니 프로젝트 실습](https://www.youtube.com/playlist?list=PL-eeIUD86IjSyxTbGT7wY3Hie_HA5bKvg)
