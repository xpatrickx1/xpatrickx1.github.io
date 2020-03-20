const emptyArr = [];

export const getLocalStorage = () => {
    if ( localStorage.users == null) {
        localStorage.setItem('users', JSON.stringify(emptyArr))
    }
    const users = localStorage.getItem('users');
    const usersArr = JSON.parse(users);
    return usersArr
};

export function postToLocalStore( obj ) {
    if ( !localStorage.users) {
        localStorage.setItem('users', JSON.stringify(emptyArr) || obj)
    }
    const usersArr = JSON.parse(localStorage.getItem('users'));
    usersArr.push(obj);
    localStorage.setItem('users', JSON.stringify(usersArr));
    return localStorage
};

export function updateLocalStore (obj) {
    localStorage.setItem('users', JSON.stringify(obj));
}
