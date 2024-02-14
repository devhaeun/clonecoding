// 1. 무작위 공 뽑기
const numbers = Array(45).fill().map((v,i)=>i+1);
const shuffle = [];
for (let i=0; i<7; i++) {
    const randidx = Math.floor(Math.random()*numbers.length)
    const spliceArr = numbers.splice(randidx,1);
    shuffle.push(spliceArr[0]);
}

// 2. 공 정렬하기
const winballs = shuffle.slice(0,6).sort((a,b)=>a-b);
const bonus = shuffle[6];

// 3. 타이머와 반복문 사용해 일정 시간 후 실행하기
const $result = document.querySelector('#result');
function ballstyle($ball, color1, color2) {
    $ball.style.backgroundColor = color1;
    $ball.style.color = color2;
}
function createball(value, $parent) {
    const $ball = document.createElement('div');
    $ball.className = 'ball';
    $ball.textContent = value;
    if (value<10) ballstyle($ball, 'red', 'white');
    else if (value<20) ballstyle($ball, 'orange', 'black');
    else if (value<30) ballstyle($ball, 'yellow', 'black');
    else if (value<40) ballstyle($ball, 'blue', 'white');
    else ballstyle($ball, 'green', 'white');
    $parent.appendChild($ball);
}

for (let i=0; i<winballs.length; i++) {
    setTimeout(() => {
        createball(winballs[i], $result);
    }, 1000*(i+1));
}

const $bonus = document.querySelector('#bonus');
setTimeout(() => {
    createball(bonus, $bonus);
}, 7000);