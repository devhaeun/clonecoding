const { body } = document;
const $table = document.createElement('table')
const $result = document.createElement('div');
const rows = [];

// 1. 표 그리기
for (let i=0; i<3; i++) {
    // rows
    const $tr = document.createElement('tr');
    const cells = [];
    for (let j=0; j<3; j++) {
        // columns
        const $td = document.createElement('td');
        cells.push($td);
        $tr.appendChild($td);
    }
    rows.push(cells);
    $table.appendChild($tr);
}
body.appendChild($table);
body.appendChild($result);

// 이겼는지 확인하는 함수
const checkWinner = (target) => {
    // 현재 클릭한 칸 찾기
    const rowIdx = target.parentNode.rowIndex;
    const cellIdx = target.cellIndex;
    // 세 칸 다 채워졌나?
    let hasWinner = false;
    // 가로줄 검사
    if (
        rows[rowIdx][0].textContent === turn &&
        rows[rowIdx][1].textContent === turn &&
        rows[rowIdx][2].textContent === turn
    ) hasWinner = true;
    // 세로줄 검사
    if (
        rows[0][cellIdx].textContent === turn &&
        rows[1][cellIdx].textContent === turn &&
        rows[2][cellIdx].textContent === turn
    ) hasWinner = true;
    // 대각선 검사
    if (
        rows[0][0].textContent === turn &&
        rows[1][1].textContent === turn &&
        rows[2][2].textContent === turn
    ) hasWinner = true;
    if (
        rows[0][2].textContent === turn &&
        rows[1][1].textContent === turn &&
        rows[2][0].textContent === turn
    ) hasWinner = true;
    return hasWinner;
}

// 승부가 났는지, 무승부인지 확인하는 함수
const checkWinnerAndDraw = (target) => {
    const hasWinner = checkWinner(target);
    if (hasWinner) {
        $result.textContent = `${turn}님의 승리!`
        $table.removeEventListener('click', clicktable);
        return;
    }
    // 승자가 없으면
    const draw = rows.flat().every((cell)=>cell.textContent);
    if (draw) {
        $result.textContent = '무승부';
        return;
    }
    // 2.2. O와 X 번갈아 그리도록
    turn = turn === 'O' ? 'X' : 'O';
}

// 2. 차례 전환하기
let turn = 'O';
let clickable = true;
const clicktable = (e) => {
    if (!clickable) {
        return;
    }
    // 2.1. 클릭한 칸에 turn 표시
    if (e.target.textContent !== '') {
        console.log('비어있지 않습니다');
        return;
    }
    console.log('비어있는 칸입니다');
    e.target.textContent = turn;
    // 3. 승부 판단하기
    checkWinnerAndDraw(e.target);
    // 5. 컴퓨터의 차례 구현하기
    if (turn === 'X') {
        const emptyCells = rows.flat().filter((v) => !v.textContent);
        const randomCell = emptyCells[Math.floor(Math.random()*emptyCells.length)];
        clickable = false;
        setTimeout(() => {
            randomCell.textContent = 'X';
            checkWinnerAndDraw(randomCell);
            clickable = true;
        }, 1000);
    }
}
$table.addEventListener('click', clicktable)