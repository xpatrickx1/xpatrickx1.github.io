import {postToLocalStore} from "../StoreAPI/storeAPI";
import {formSendObserver} from '../Observer';
import {validate, validationObj} from "../Validation";
import {generateObject} from "../Serializer";

export function closeModal(  ) {
    document.querySelector('.modal').classList.remove('active');
};

export class Form {

    onSubmit() {
        this.inputs.forEach( item => {
            validate( item, validationObj, item.nextElementSibling );
        } );

        Object.values( validationObj )
            .forEach( item => {
                if ( !item.isValid ) {
                    throw new Error('Incorrect form');
                }
            } );
        this.inputsData = this.form.querySelectorAll( 'input[data-field], input[type=radio]:checked' );
        postToLocalStore(generateObject(this.inputsData));
        formSendObserver.broadcast();
        this.form.querySelectorAll( 'input[data-field]').forEach( item => item.value = '');
        closeModal();
    };


    render() {
        this.form = document.createElement( 'div' );
        this.form.innerHTML = `<form class="form">
                        <div class="form__input-wrapper">
                            <label for="name">
                                <span class="form__label-name">First name</span>
                                <input class="form__input" required data-field id="name" type="text" name="name" placeholder="first name">
                                <span class="error"></span>
                            </label>
                        </div>
                        <div class="form__input-wrapper">
                            <label for="surname">
                                <span class="form__label-name">Last name</span>
                                <input required data-field id="surname" type="text" name="surname" placeholder="last name" class="form__input">
                                <span class="error"></span>
                            </label>
                        </div>
                        <div class="form__input-wrapper form__input-wrapper--age">
                            <label for="age">
                                <span class="form__label-name">Age</span>
                                <input required data-field id="age" type="number" name="age" placeholder="age" class="form__input form__input--age" >
                                <span class="error"></span>
                            </label>
                        </div>
                        <div class="form__input-wrapper form__input-wrapper--gender">
                            <span class="form__label-name">Gender</span>
                            <label for="male">
                                <span class="form__label-name">Male</span>
                                <input checked type="radio" id="male" name="gender" value="male" class="form__input">
                                <span class="error"></span>
                            </label>
                            <label for="female">
                                <span class="form__label-name">Female</span>
                                <input type="radio" id="female" name="gender" value="female" class="form__input">
                                <span class="error"></span>
                            </label>
                        </div>
                        <input id="formSubmit" type="submit" value="Send" class="form__submit" />
                     </form>`;

        this.form.addEventListener( 'submit', ( e ) => {
            e.preventDefault();
            this.onSubmit()
        } );

        this.inputs = this.form.querySelectorAll( 'input[data-field], input[type=radio]:checked' );
        this.inputs.forEach( item => item.addEventListener( 'input', () => {
            validate( item, validationObj, item.nextElementSibling )
        }));

        return this.form;
    }
}

export const form = new Form().render();