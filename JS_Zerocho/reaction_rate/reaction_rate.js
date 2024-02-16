const $screen = document.querySelector('#screen');
const $result = document.querySelector('#result');
const $rank = document.querySelector('#rank');
let startTime;
let endTime;
let timeoutId;
const records = [];

// 1. 클릭할 때 화면 전환하기
$screen.addEventListener('click', () => {
    if ($screen.classList.contains('waiting')) {// 대기 화면일 때
        $screen.classList.replace('waiting', 'ready');
        $screen.textContent = "초록색이 되면 클릭하세요";
        // 2. 반응 속도 측정하기
        timeoutId = setTimeout(()=>{
            startTime = new Date();
            $screen.classList.replace('ready', 'now');
            $screen.textContent = "클릭하세요!";
        }, Math.floor(Math.random()*1000)+2000);
    } else if ($screen.classList.contains('ready')) {// 준비 화면일 때
        // 4. 성급한 클릭 막기
        clearTimeout(timeoutId);
        $screen.classList.replace('ready', 'waiting');
        $screen.textContent = "너무 성급하시군요! 다시 시작합니다"
    } else if ($screen.classList.contains('now')) {// 시작 화면일 때
        endTime = new Date();
        // 3. 평균 반응속도 구하기
        const current = endTime - startTime;
        records.push(current);
        const avg = records.reduce((a,c)=>a+c)/records.length;
        $result.textContent = `현재: ${current}ms, 평균: ${avg}`;
        // 5. 속도 순으로 상위 5개 기록 보여주기
        const topFive = records.sort((a,c)=>a-c).slice(0,5);
        topFive.forEach((top, index) => {
            $result.append(
                document.createElement('br'),
                `${index+1}위: ${top}ms`,
            );
        });
        // 대기 화면으로 돌아가기
        $screen.classList.replace('now', 'waiting');
        $screen.textContent = "클릭해서 시작하세요";
    }
})