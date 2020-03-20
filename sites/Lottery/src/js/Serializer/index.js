export function generateObject (elements) {
    let obj = {};
    elements.forEach( item => {
        Object.assign( obj, { [ item.name ]: item.value } );
    } );
    return obj
}