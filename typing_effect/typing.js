// JS로 움직일 부분 querySelector로 붙잡기
let target = document.querySelector("#dynamic");

// 타이핑 위한 배열 생성 함수
function randomString(){
    let strings = ["Learn to HTML", "Learn to CSS", "Learn to JavaScript",
    "Learn to React", "Learn to TypeScript"];
    let selectString = strings[Math.floor(Math.random()*strings.length)];
    let selectStringArr = selectString.split("");

    return selectStringArr;
}

// 타이핑 리셋 함수
function resetTyping(){
    target.textContent="";
    dynamic(randomString());
}

// 텍스트 출력 함수
function dynamic(randomArr){
    if(randomArr.length>0) {
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr)
        }, 80);
    } else{
        setTimeout(resetTyping, 5000);
    }
}

// 배열 받아서 출력 및 리셋 실행
dynamic(randomString());

// 커서 깜빡임 효과
function blink(){
    target.classList.toggle("active");
}
setInterval(blink, 500);