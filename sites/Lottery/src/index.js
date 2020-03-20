import "./styles.scss";
import {form} from './js/Form/Form'
import { Modal } from "./js/Modal";
import {Button} from "./js/Button";
import {usersTable} from "./js/Users-list";
import { Winner } from "./js/Winner";
import {winnerObserver} from "./js/Observer";

const root = document.getElementById('root');

const btnWrapper = document.createElement('div');
btnWrapper.className = 'btnWrapper';
const btnForm = new Button('Add player', 'btn-addPlayer', btnWrapper).render();
const chooseWinner = new Button('Choose winner', 'chooseWinnerBtn', btnWrapper ).render();
root.append(btnWrapper);

const winner = new Winner(root);
winnerObserver.subscribe( () => {
    console.log(winner)
    console.log('subscribe')
    winner.chooseWinner();
});

chooseWinner.addEventListener('click', () => {
    winnerObserver.broadcast()
});
usersTable.render();

winner.render();
root.append(winner);

new Modal( btnForm, form ).render();
