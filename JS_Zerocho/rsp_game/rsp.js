const $computer = document.querySelector('#computer');
const $rock = document.querySelector('#rock');
const $scissors = document.querySelector('#scissors');
const $paper = document.querySelector('#paper');
const IMG_URL = './rsp.png';
const $score = document.querySelector('#score');

const rspX = {
    scissors: '0',
    rock: '-220px',
    paper: '-440px',
}

// 가위 바위 보 그림 바꾸는 변수 만들기
let computerChoice = 'scissors'; // 기본 컴퓨터 값
const changeComputerHand = () => { // 가위 바위 보 그림 바꾸는 함수
    if (computerChoice === 'scissors') computerChoice = 'rock';
    else if (computerChoice === 'rock') computerChoice = 'paper';
    else computerChoice = 'scissors';
    $computer.style.background = `url(${IMG_URL}) ${rspX[computerChoice]} 0`;
    $computer.style.backgroundSize = 'auto 200px'
}
// 0.5초 주기로 그림 바꾸기
let interval = setInterval(changeComputerHand, 50);
let isvalid = true;
const rspscore = {
    scissors: '-1',
    rock: '0',
    paper: '1',
}
let score = 0;
let computerScore = 0;

// 클릭하면 타이머 멈췄다 다시 실행하도록 만들기
const clickButton = (e) => {
    if (isvalid) {
        // 타이머 멈추기
        clearInterval(interval);
        // 그림이 멈춘 동안 클릭 함수 호출해도 아무 일도 일어나지 않게 만들기
        isvalid = false;
        // 가위바위보 승패 판단
        // 1. 컴퓨터와 나의 패 확인: rspscore[computerChoice], rspscore[myChoice]
        const myChoice = e.target.textContent === '가위'
        ? 'scissors'
        : e.target.textContent === '바위'
        ? 'rock'
        : 'paper';
        // 2. 컴퓨터-나 저장
        let tempscore = rspscore[computerChoice] - rspscore[myChoice];
        // 3. 승패 결정
        let message;
        if (tempscore === 2 || tempscore === -1) {
            // 나 승리
            score += 1;
            message = '승리';
        } else if (tempscore === 1 || tempscore === -2) {
            // 나 패배
            computerScore += 1;
            message = '패배';
        } else {
            // 무승부
            message = '무승부';
        }

        // 5판 3선승제
        if (score === 3) {
            $score.textContent = `나의 승리! ${score}:${computerScore}`;
        } else if (computerScore === 3) {
            $score.textContent = `컴퓨터의 승리! ${score}:${computerScore}`;
        } else {
            $score.textContent = `${message}! ${score}:${computerScore}`;
            // 타이머 다시 실행
            setTimeout(() => {
                interval = setInterval(changeComputerHand, 50);
                isvalid = true;
            }, 1000);
        }
    }
};

// 클릭 이벤트
$scissors.addEventListener('click', clickButton);
$rock.addEventListener('click', clickButton);
$paper.addEventListener('click', clickButton);