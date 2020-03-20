export function animateElement (direction) {
    let inOut = (direction == 'in') ? 'in' : 'out';
    const animatedElements = [].slice.call(document.querySelectorAll('[animated]'));
    if (inOut == 'in') {
        animatedElements.forEach( item => {
            item.classList.add('animIn');
            if ( item.classList.contains('animOut')) {
                item.classList.remove('animOut');
            };
        });
    } else {
        animatedElements.forEach( item => {
            item.classList.add('animOut');
            if (item.classList.contains('animIn')) {
                item.classList.remove('animIn');
            }
        });
    }
}
