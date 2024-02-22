// 1. 주인공 이름 입력 받고 일반 메뉴 화면으로 전환
const $startScreen = document.querySelector('#start-screen');
const $gameMenu = document.querySelector('#game-menu');
const $battleMenu = document.querySelector('#battle-menu');
const $heroName = document.querySelector('#hero-name');

// 2. 주인공과 몬스터 만들기
// 주인공 스텟
const $heroLevel = document.querySelector('#hero-level');
const $heroHp = document.querySelector('#hero-hp');
const $heroAtt = document.querySelector('#hero-att');
const $heroXp = document.querySelector('#hero-xp');
const hero = {
    name: '',
    lv: 1,
    maxHp: 100,
    hp: 100,
    att: 10,
    xp: 0,
    attack(monster) {
        monster.hp -= this.att;
        this.hp -= monster.att;
    },
    heal(monster) {
        this.hp += 20;
        this.hp -= monster.att;
    },
};

// 몬스터 스텟
const $monsterName = document.querySelector('#monster-name');
const $monsterHp = document.querySelector('#monster-hp');
const $monsterAtt = document.querySelector('#monster-att');
let monster = null;
const monsterList = [
    { name: '슬라임', hp: 25, att: 10, xp: 10 },
    { name: '스켈레톤', hp: 50, att: 15, xp: 20 },
    { name: '마왕', hp: 150, att: 35, xp: 50 },
];

$startScreen.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target['name-input'].value;
    $startScreen.style.display = 'none';
    $gameMenu.style.display = 'block';
    $heroName.textContent = name;
    hero.name = name;
    $heroLevel.textContent = `${hero.lv}Lv`;
    $heroHp.textContent = `${hero.hp}/${hero.maxHp}`;
    $heroAtt.textContent = `${hero.att}`;
    $heroXp.textContent = `${hero.xp}/${hero.lv*15}`;
});

// 1번 모험 선택하여 전투 메뉴로 전환하고 몬스터 불러오기
$gameMenu.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = e.target['menu-input'].value;
    if (input === '1') { // 1번 모험
        $gameMenu.style.display = 'none';
        $battleMenu.style.display = 'block';
        monster = JSON.parse(
            JSON.stringify(monsterList[Math.floor(Math.random()*monsterList.length)])
        ); // 깊은 복사
        monster.maxHp = monster.hp;
        $monsterName.textContent = monster.name;
        $monsterHp.textContent = `HP: ${monster.hp}/${monster.maxHp}`;
        $monsterAtt.textContent = `ATT: ${monster.att}`;
    } else if (input === '2') { // 2번 휴식
    } else if (input === '3') { // 3번 종료
    }
});

// 3. 서로 공격하기
$message = document.querySelector('#message');
$battleMenu.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = e.target['battle-input'].value;
    if (input==='1') { // 1. 공격
        hero.attack(monster);
        $heroHp.textContent = `HP: ${hero.hp}/${hero.maxHp}`;
        $monsterHp.textContent = `HP: ${monster.hp}/${monster.maxHp}`;
        $message.textContent = `${hero.att}의 데미지를 주고,
        ${monster.att}의 데미지를 받았다.`;
    }
})