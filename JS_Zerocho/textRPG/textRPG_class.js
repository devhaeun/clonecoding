const $startScreen = document.querySelector('#start-screen');
const $gameMenu = document.querySelector('#game-menu');
const $battleMenu = document.querySelector('#battle-menu');
const $heroName = document.querySelector('#hero-name');
const $heroLevel = document.querySelector('#hero-level');
const $heroHp = document.querySelector('#hero-hp');
const $heroAtt = document.querySelector('#hero-att');
const $heroXp = document.querySelector('#hero-xp');
const $monsterName = document.querySelector('#monster-name');
const $monsterHp = document.querySelector('#monster-hp');
const $monsterAtt = document.querySelector('#monster-att');
const $message = document.querySelector('#message');

class Game {
    constructor(name) {
        this.monster = null;
        this.hero = null;
        this.monsterList = [
            { name: '슬라임', hp: 25, att: 10, xp: 10 },
            { name: '스켈레톤', hp: 50, att: 15, xp: 20 },
            { name: '마왕', hp: 100, att: 35, xp: 50},
        ];
        this.start(name);
    }
    // 게임 시작 메서드
    start(name) {
        $gameMenu.addEventListener('submit', this.onGameMenuInput);
        $battleMenu.addEventListener('submit', this.onBattleMenuInput);
        this.changeScreen('game');
        this.hero = new Hero(this, name);
        this.updateHeroStat();
        this.showMessage('');
    }
    changeScreen(screen) {
        if (screen === 'start') {
            $startScreen.style.display = 'block';
            $gameMenu.style.display = 'none';
            $battleMenu.style.display = 'none';
        } else if (screen === 'game') {
            $startScreen.style.display = 'none';
            $gameMenu.style.display = 'block';
            $battleMenu.style.display = 'none';
        } else if (screen === 'battle') {
            $startScreen.style.display = 'none';
            $gameMenu.style.display = 'none';
            $battleMenu.style.display = 'block';
        }
    }
    onGameMenuInput = (e) => {
        e.preventDefault();
        const input = e.target['menu-input'].value;
        if (input === '1') { // 모험
            this.changeScreen('battle');
            const randomIdx = Math.floor(Math.random()*this.monsterList.length);
            const randomMonster = this.monsterList[randomIdx];
            this.monster = new Monster(
                this,
                randomMonster.name,
                randomMonster.hp,
                randomMonster.att,
                randomMonster.xp,
            );
            this.updateMonsterStat();
            this.showMessage(`야생의 ${this.monster.name}(이)가 나타났다!`);
        } else if (input === '2') { // 휴식
            this.hero.hp = this.hero.maxHp;
            this.showMessage(`HP를 회복했다! 현재 HP: ${this.hero.hp}`);
            this.updateHeroStat();
        } else if (input === '3') { // 종료
            this.showMessage('');
            this.quit();
        }
    }
    onBattleMenuInput = (e) => {
        e.preventDefault();
        const input = e.target['battle-input'].value;
        const { hero, monster } = this;
        if (input === '1') { // 공격
            hero.attack(monster);
            monster.attack(hero);
            if (hero.hp <= 0) {
                this.showMessage(`${hero.lv}Lv에서 전사. 새 주인공을 생성하세요.`);
                this.quit();
            } else if (monster.hp <= 0) {
                this.showMessage(`몬스터를 잡아 ${monster.xp}xp 경험치를 획득했다.`);
                hero.getXp(monster.xp);
                this.monster = null;
                this.changeScreen('game');
            } else {
                this.showMessage(`${hero.att}의 데미지를 주고,
                ${monster.att}의 데미지를 받았다!`);
            }
        } else if (input === '2') { // 회복
            hero.heal();
            monster.attack(hero);
            if (hero.hp <= 0) {
                this.showMessage(`${hero.lv}Lv에서 전사. 새 주인공을 생성하세요.`);
                this.quit();
            } else {
                this.showMessage(`체력을 20 회복하였다!
                ${monster.att}의 데미지를 받았다!`)
            }
        } else if (input === '3') { // 도망
            this.showMessage(`${hero.name}(은)는 도망쳤다!`);
            this.monster = null;
            this.changeScreen('game');
        }
        this.updateHeroStat();
        this.updateMonsterStat();
    }

    // 주인공의 스텟 화면에 표시
    updateHeroStat() {
        const { hero } = this;
        if (hero === null) { // 주인공 사망
            $heroName.textContent = '';
            $heroLevel.textContent = '';
            $heroHp.textContent = '';
            $heroAtt.textContent = '';
            $heroXp.textContent = '';
            return;
        }
        $heroName.textContent = hero.name;
        $heroLevel.textContent = `${hero.lv}Lv`;
        $heroHp.textContent = `HP: ${hero.hp}/${hero.maxHp}`;
        $heroAtt.textContent = `ATT: ${hero.att}`;
        $heroXp.textContent = `XP: ${hero.xp}/${hero.lv*15}`;
    }
    // 몬스터 스텟 화면에 표시
    updateMonsterStat() {
        const { monster } = this;
        if (monster === null) {
            $monsterName.textContent = '';
            $monsterHp.textContent = '';
            $monsterAtt.textContent = '';
            return;
        }
        $monsterName.textContent = monster.name;
        $monsterHp.textContent = `HP: ${monster.hp}/${monster.maxHp}`;
        $monsterAtt.textContent = `ATT: ${monster.att}`;
    }
    // 메시지 화면에 표시
    showMessage(text) {
        $message.textContent = text;
    }
    
    // 종료
    quit() {
        this.hero = null;
        this.monster = null;
        this.updateHeroStat();
        $gameMenu.removeEventListener('submit', this.onGameMenuInput);
        $battleMenu.removeEventListener('submit', this.onBattleMenuInput);
        this.changeScreen('start');
    }
}

// 클래스 상속
class Unit {
    constructor(game, name, hp, att, xp) {
        this.game = game;
        this.name = name;
        this.maxHp = hp;
        this.hp = hp;
        this.att = att;
        this.xp = xp;
    }
    attack(target) {
        target.hp -= this.att;
    }
}

class Hero extends Unit {
    constructor(game, name) {
        super(game, name, 100, 10, 0);
        this.lv = 1;
    }
    attack(target) {
        super.attack(target);
    }
    heal() {
        this.hp = Math.min(this.maxHp, this.hp+20);
    }
    getXp(xp) {
        this.xp += xp;
        if (this.xp >= this.lv*15) {
            this.lv += 1;
            this.xp -= this.lv*15;
            this.maxHp += 5;
            this.att += 5;
            this.hp = this.maxHp;
            this.game.showMessage(`레벨업! 레벨 ${this.lv}`);
        }
    }
}

class Monster extends Unit {
    constructor(game, name, hp, att, xp) {
        super(game, name, hp, att, xp);
    }
    attack(target) {
        target.hp -= this.att;
    }
}

let game = null;
$startScreen.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target['name-input'].value;
    game = new Game(name);
});