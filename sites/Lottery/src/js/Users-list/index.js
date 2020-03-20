import {getLocalStorage, updateLocalStore} from "../StoreAPI/storeAPI";
import {Button} from "../Button/index";
import {Modal} from "../Modal";
import {formSendObserver} from '../Observer';
import {validate, removeError, validationObj} from "../Validation";
import {generateObject} from "../Serializer";

export class UsersTable {
    constructor () {
        this.tableRows = null;
    }

    createList () {
        this.users = getLocalStorage();
        const tbody = document.createElement('tbody');
        this.users.map( item => {
            const tr = document.createElement( 'tr' );
            tr.className = 'table__row';

            for (let [key, value] of Object.entries(item)) {
                const td = document.createElement( 'td' );
                const input = document.createElement('input');

                td.className = `table__data` ;
                input.className = 'table__input';
                input.name = key;
                input.setAttribute('readonly', '');
                input.value = value;
                td.append(input);
                tr.append( td );
            }

            const errorSpan = document.createElement('span');
            errorSpan.className = 'table__error';

            const trError = document.createElement( 'tr' );
            trError.className = 'table__rowError';

            const btnContainer = document.createElement('div');
            btnContainer.className = 'btnContainer';


            new Button('Save', 'btn-savePlayer hidden', btnContainer, this.saveChanges.bind(this)).render();
            const editBtn = new Button('Edit', 'btn-editPlayer', btnContainer).render();
            editBtn.addEventListener('click', () => {if  (editBtn.textContent == 'Edit') {
                this.editUser();
            } else {
                this.cancelChanges(tr);
            }});
            new Button('Delete', 'btn-delPlayer', btnContainer, this.deleteUser.bind(this)).render();
            trError.append(errorSpan)
            tr.append(btnContainer);
            tr.after (trError);
            tbody.append(tr)
        });

        this.table.querySelector('thead').after(tbody);
    }

    updateList () {
        document.querySelector('tbody').remove();
        setTimeout(()=> this.createList(), 0);
    }

    editUser ( ) {
        const tr = event.target.closest('tr');
        const tableData = tr.querySelectorAll('input');
        const cancelBtn = tr.querySelector('.btn-editPlayer');
        const saveBtn = tr.querySelector('.btn-savePlayer');
        this.errorPlaceholder = document.createElement('div');
        generateObject(tableData);
        cancelBtn.innerText = 'Cancel';
        saveBtn.classList.remove('hidden');
        tableData.forEach( item => {
            item.removeAttribute('readonly');
            item.classList.add('editing')
        });

        const activeText = tr.firstChild.querySelector('input');
        activeText.focus();
        activeText.setSelectionRange(activeText.value.length, activeText.value.length);
    }

    cancelChanges (tr) {
        const cancelBtn = tr.querySelector('.btn-editPlayer');
        const saveBtn = tr.querySelector('.btn-savePlayer');
        const tableData = tr.querySelectorAll('input');
        cancelBtn.innerText = 'Edit';
        saveBtn.classList.add('hidden');
        tableData.forEach( item => {
            console.log(item)
            item.setAttribute('readonly', '');
            item.classList.remove('editing');
            if ( item.classList.contains('error') ) {
                removeError(item, this.errorPlaceholder);
            }
        });
        this.updateList();
    }

    saveChanges () {
        const tr = event.target.closest('tr');
        const tableRows = [].slice.call(document.querySelectorAll('.table__row'));
        const newData = tr.querySelectorAll('input');
        const cancelBtn = tr.querySelector('.btn-editPlayer');
        const saveBtn = tr.querySelector('.btn-savePlayer');
        const errorModal = this.errorModal = document.getElementById('errorModal');
        if ( errorModal != null ) {
            errorModal.remove();
        }
        this.errorPlaceholder.innerHTML = '';
        newData.forEach( item => {
            const errorText = document.createElement('p');
            validate(item, validationObj, errorText);
            if ( errorText.innerText != '' ) {
                this.errorPlaceholder.append(errorText);
            }
        });

        if  (this.errorPlaceholder.children.length != 0) {
            const errorModal = new Modal(saveBtn, this.errorPlaceholder).render();
            errorModal.id = 'errorModal';
            this.errorModal = document.getElementById('errorModal');
            this.errorModal.classList.add( 'active' );
        }

        Object.values( validationObj )
            .forEach( item => {
                if ( !item.isValid ) {
                    throw new Error('Incorrect form');
                }
        });

        newData.forEach( item => {
            item.setAttribute('readonly', '');
            item.classList.remove('editing');
        });

        cancelBtn.innerText = 'Edit';
        saveBtn.classList.add('hidden');

        const newDataObj = generateObject(newData);
        this.users.splice(tableRows.indexOf(tr),  1, newDataObj);
        localStorage.setItem('users', JSON.stringify(this.users));
    }

    deleteUser () {
        this.tableRows = [].slice.call(document.querySelectorAll('.table__row'));
        const deleteElement = event.target.closest('tr');
        const deleteElementIndex = this.tableRows.indexOf(deleteElement);
        this.users.splice(deleteElementIndex, 1);
        updateLocalStore(this.users);
        this.updateList();
    };



    render () {
        this.table = document.createElement( 'div' );
        this.table.id = 'usrTbl';
        this.table.innerHTML = `
            <table class="table" id="table">
                <thead class="table__thead">
                    <tr class="table__header" id="tHeader">
                        <th class="table__header">Name</th>
                        <th class="table__header">Surname</th>
                        <th class="table__header">Age</th>
                        <th class="table__header">Gender</th> 
                    </tr>
                </thead>
            </table>
            `;

        this.createList();
        document.querySelector( '#root' ).append( this.table );
        return this.table
    }
};

export const usersTable = new UsersTable();

formSendObserver.subscribe(() => {
    usersTable.updateList();
    }
);




