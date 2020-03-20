import {swipedetect} from './touchEvent';
import {animateElement, animatedBg} from '../animations';
import {getPages, getCurrentPageIndex} from '../pages-utils';

export function detectScrollDirection( e ) {
    let delta = null,
        direction = false;

    if ( e.wheelDelta ) {
        delta = e.wheelDelta;
    }
    if ( delta !== null ) {
        direction = delta > 0 ? 'up' : 'down';
    }
    return direction;
}

function setNextPrevPage (direction) {
    let page;
    const pages = getPages();
    const curretnIndex = getCurrentPageIndex(pages);
    if ( direction == 'down' ) {
        if ( curretnIndex == pages.length - 1) {
            page = 0;
        } else { page = curretnIndex + 1}
    } else {
        if ( curretnIndex == 0) {
            page = pages.length - 1;
        } else { page = curretnIndex - 1}
    }
    pages[curretnIndex].classList.remove('active');
    pages[curretnIndex].classList.add('hidden');
    pages[page].classList.add('active');
    pages[page].classList.remove('hidden');
};

export function handleScrollDirection( direction ) {
    const delay = 700;
    if ( direction !== 'none' )  {
        if ( direction == 'down' ) {
            document.onmousewheel = false;
            animatedBg ('out');
            animateElement('out');
            setTimeout( () => {setNextPrevPage (direction); animateElement('in')}, delay);
            setTimeout( () => {animatedBg ('in'); }, delay);
            setTimeout( () => {document.onmousewheel = onMouseWheel}, 1000);
        } else {
            document.onmousewheel = false;
            animatedBg ('out');
            animateElement('out');
            setTimeout( () => {setNextPrevPage (direction); animateElement('in')},delay);
            setTimeout( () => {animatedBg ('in'); }, delay);
            setTimeout( () => {document.onmousewheel = onMouseWheel}, 1000);
        }
    }
};

export function onMouseWheel( e ) {
    handleScrollDirection( detectScrollDirection( e ));
};

export function onSwipe() {
    swipedetect(handleScrollDirection);
};
