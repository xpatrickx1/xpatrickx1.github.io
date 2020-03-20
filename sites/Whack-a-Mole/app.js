
class renderGame {

    constructor() {
        this.moles = document.getElementById('moles');
    }


    /** Create table */

    createTable (row = 10, cell = 10) {
        const moles = document.getElementById('moles');
        const table = document.createElement('table');
        for (let i = 0; i < row; i++) {
            let row = table.insertRow();
            row.classList.add('row');
            for (let j = 0; j < cell; j++) {
                let cell = row.insertCell();
                cell.classList.add('cell');
                cell.style.width = "50px";
                cell.style.height = "50px";
                cell.style.background = "gray";
                row.append(cell)
            }
            table.append(row);
        }
        moles.append(table);
    }


    /** Create buttons */

    createBtns () {

        function Btn(text, id) {
            const bod = document.getElementById('moles');
            const btn = document.createElement('button');
            btn.innerText = text;
            btn.id = id;
            bod.append(btn);
        }

        const btnStart = new Btn('Start', 'start');
        const btnLvlEasy = new Btn('Easy', 'easy');
        const btnLvlMedium = new Btn('Medium', 'medium');
        const btnLvlHard = new Btn('Hard', 'hard');
    }

    /** Отрисовать счет */

    renderScore () {
        const scoreTab = document.createElement('div');
        this.scores = document.createElement('p');
        this.scores.id = 'score';
        scoreTab.append(this.scores);
        this.moles.append(scoreTab);
    }

    render () {
        this.createTable();
        this.createBtns();
        this.renderScore();
    }
}





class Moles extends renderGame{

    constructor () {
        super();
        this.timerId = false;
        this.moles = document.getElementById('moles');
        this.cells = document.querySelectorAll('td');
        this.start = false;
        this.blinkSpeed = 1500;
        this.cellsArr = [1, 2];
        this.winCells = 0;
        this.looseCells = 0;
        this.winner = 'Human';
        this.score = 0;
        this.start = null;
    }


    /** Запустить - остановить игру */

    startStopBtn () {
        this.start = document.getElementById('start');
        this.start.addEventListener('click', () => {

            if ( this.start.textContent === 'Start' ) {
                this.start.textContent = 'Stop';
                this.blinkCell();
            } else {
                this.endGame();
                this.start.textContent = 'Start';
                clearInterval(this.timerId);
            }
        });
    }


    /** Выбор уровня сложности */

    setLevel () {

        const easy = document.getElementById('easy');
        easy.addEventListener('click', () => { this.blinkSpeed});

        const medium = document.getElementById('medium');
        medium.addEventListener('click', () => { return this.blinkSpeed = 1000});

        const hard = document.getElementById('hard');
        hard.addEventListener('click', () => { return this.blinkSpeed = 500});
    }


    /** Выбрать рандомную ячейку */

    randomNumber () {

        let randomNum = function checkNumber(arr) {
            let number = Math.floor(Math.random() * 100);
            for (let i = 0; i < arr.length; i++) {

                if ( arr[i] == number) {
                   return checkNumber(arr);
                }
            }
            arr.push(number);
            return number;
        };

        let num = randomNum(this.cellsArr);
        return num
    }


    /** Подсветить рандомную ячейку и обработать клик */

    blinkCell () {
        const cells = document.querySelectorAll('td');
        let randomNum = this.randomNumber();
        let cell = cells[randomNum];

        cell.classList.add('active');
        cell.style.background = 'blue';

        cell.onclick = () => {
            if (cell.classList.contains('active') ) {
                cell.classList.add('winCell');
                cell.style.background = 'green';
                this.winCells++
            }
        };

        this.timerId = setTimeout ( () => {

            cell.classList.remove('active');

            if (!cell.classList.contains('winCell')) {
                cell.classList.add('looseCell');
                this.looseCells++;
                cell.style.background = 'red';
            }

            this.blinkCell();

        } , this.blinkSpeed);

            this.showScore();
            this.checkWinner();
            this.endGame();
    }


    /** Закончить игру */

    endGame () {
        this.cells = document.querySelectorAll('td');
        if ( this.winCells >= (this.cells.length / 2) || this.looseCells >= (this.cells.length / 2) ) {
            console.log('game over');
            clearTimeout(this.timerId);
            this.checkWinner();
            this.renderWinner();
            this.start.textContent = 'Start';
            this.clearTable();
        }
    }


    /** Проверить победителя */

    checkWinner () {

        if ( this.winCells > this.looseCells) {
            this.winner;
        } else { this.winner = "Ai"; }
    }

    /** Отрисовать финальный счет и победителя */

    renderWinner () {
        this.winnerContainer = document.createElement('h1');
        this.winnerContainer.innerText = `Score: Human - ${this.winCells} : Ai - ${this.looseCells} Winner - ${this.winner}`;
        this.moles.append(this.winnerContainer);
    }


    /** Отрисовать счет */

    showScore () {
        this.score = document.getElementById('score');
        this.score.textContent = `Human - ${this.winCells} : Ai - ${this.looseCells}`;
    }


    /** Очистить игровое поле */

    clearTable () {
        this.cells.forEach( (item) => { item.classList.remove('winCell', 'active', 'looseCell'); item.style.background = 'gray'});
        this.looseCells = 0;
        this.winCells = 0;
        this.score.textContent = `Human - ${this.winCells} : Ai - ${this.looseCells}`;
    }


    init () {
        super.render();
        this.startStopBtn();
        this.setLevel();
        this.showScore ();
    }
}



let mol = new Moles();

mol.init();

