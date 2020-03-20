export const validationObj = {
    name: {
        regExp: /^[a-zA-Z' ][a-zA-Z-']+[a-zA-Z']+[А-Яа-яЁё' ]?$/,
        isValid: false,
        errorMessage: 'Please enter correct name',
        emptyMessage: 'Please enter your name'
    },
    surname: {
        regExp: /^[a-zA-Z' ][a-zA-Z-']+[a-zA-Z']+[А-Яа-яЁё' ]?$/,
        isValid: false,
        errorMessage: 'Please enter correct surname',
        emptyMessage: 'Please enter your surname'
    },
    age: {
        regExp: /^\d{1,3}$/,
        isValid: false,
        errorMessage: 'Age can be only a number and not more than 3 characters',
        emptyMessage: 'Please enter your age'
    },
    gender: {
        regExp: /^female$|^male$/,
        isValid: false,
        errorMessage: 'Please choose a correct gender',
        emptyMessage: 'Please enter your gender'
    }
};

export function validate ( el, validOb, container ) {
    const validObj = validOb[ el.name ];

    if ( el.value !== '' ) {
        if ( validObj.regExp.exec( el.value ) ) {
            removeError( el, container );
            validObj.isValid = true;
        } else {
            showError( el, validObj.errorMessage, container );
            validObj.isValid = false;
            return validObj.errorMessage
        };
    } else {
        showError( el, validObj.emptyMessage, container );
        validObj.isValid = false;
        return validObj.emptyMessage
    }
};

export function showError( el, text, container ) {
    container.classList.add( 'error' );
    el.classList.add( 'error' );
    container.textContent = text;
    return text
};

export function removeError( el, container ) {
    container.innerText = '';
    el.classList.remove( 'error' );
    container.classList.remove( 'error' );
};