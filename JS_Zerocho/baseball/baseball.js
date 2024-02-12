const $form = document.querySelector("#form");
const $input = document.querySelector('#input');
const $logs = document.querySelector('#logs');

// 무작위로 4자리 숫자 배열 생성
const numbers = [];
for (let n=0; n<=9; n+=1){
    numbers.push(n);
}
const answer = [];
for (let n=0; n<4; n+=1){
    // 0~8 사이 랜덤 인덱스 값 생성 후 저장
    let randidx = Math.floor(Math.random()*numbers.length);
    // 인덱스 값 이용해서 numbers에서 숫자 뽑아 answer에 넣기
    answer.push(numbers[randidx]);
    numbers.splice(randidx, 1);
}

// 입력값 확인
const tries = [];
let out = 0;
function checkInput(input){
    // 형식: 4자리 숫자인지 확인
    if (input.length!=4) {
        return alert("4자리 숫자를 입력해 주세요.");
    }
    // 중복된 숫자는 없는지 검사
    if (new Set(input).size != 4){
        return alert("중복되지 않게 입력해 주세요.");
    }
    // 이미 시도한 값인지 검사
    if (tries.includes(input)){
        return alert("이미 시도한 값입니다.");
    }
    return true;
};
$form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const value = $input.value;
    $input.value='';
    const valid = checkInput(value);
    // 검사 결과 올바르지 않다면 에러 표시
    if (!valid) return;
    // 검사 결과 올바르다면 홈런인지 검사
    if (value == answer.join('')) {
        $logs.append(`${value}: 홈런!`);
        return;
    }
    // 검사 결과 올바르지만 홈런이 아니라면 시도횟수 검사
    tries.push(value);
    if (tries.length >= 10) {
        $logs.append(`패배! 정답은 ${answer.join('')}`);
        return;
    }

    // *볼 *스트라이크 검사
    let strike = 0;
    let ball = 0;
    for (let i=0; i < answer.length; i++) {
        const index = value.indexOf(answer[i]);
        if (index > -1) { // 일치하는 숫자 존재
            if (i === index) { // 자릿수도 일치
                strike += 1;
            } else {
                ball += 1;
            }
        }
    }
    // 아웃 검사
    if (strike === 0 && ball === 0) {
        out += 1;
        $logs.append(`${value}: 아웃`, document.createElement('br'));
        if (out >= 3) {
            $logs.append(`삼진아웃! 정답은 ${answer.join('')}`);
            return;
        }
    } else {
        $logs.append(`${value}: ${strike} 스트라이크 ${ball} 볼`,
        document.createElement('br'));
    }
})