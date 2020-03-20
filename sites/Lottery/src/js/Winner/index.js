import {getLocalStorage} from "../StoreAPI/storeAPI";
import { winner } from "../../index";

export class Winner {

    constructor (container) {
        this.container = container;
    }

    chooseWinner () {
        this.winner.querySelector('.winner__tbody').innerHTML = '';
        const users = getLocalStorage();
        const randomNumber = Math.floor(Math.random() * users.length);
        console.log(randomNumber)
        const winner = users[randomNumber];
        const tr = document.createElement( 'tr' );
        tr.className = 'table__row';

        for (let value of Object.values(winner)) {
            const td = document.createElement( 'td' );
            td.className = `table__data` ;
            td.textContent = value;
            tr.append( td );
        }

        console.log(tr);
        this.winner.querySelector('tbody').append(tr);
    }

    render () {
        this.winner = document.createElement('div');
        this.winner.className = 'winner';
        this.winner.innerHTML = `
            <table class="table" id="table">
                <caption class="winner__caption">Winner</caption>
                <thead class="table__thead">
                    <tr class="table__header" id="tHeader">
                        <th class="table__header">Name</th>
                        <th class="table__header">Surname</th>
                        <th class="table__header">Age</th>
                        <th class="table__header">Gender</th> 
                    </tr>
                    <tbody class="winner__tbody"></tbody>
                </thead>
            </table>
            `;
        this.container.append(this.winner);
        return this.winner
    }
}