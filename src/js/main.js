import {header, homepage, skills, biography, works, contacts} from "./views";
import {loaderBox} from './components/';
import { onMouseWheel, onSwipe} from "./PageScroll";
import {showOnlyActivePage} from './pages-utils';
import {animatedBg, animateElement } from './animations'

const root = document.getElementById('root');
root.append(loaderBox);

function preloader() {
    return setTimeout(showPage, 1700);
}

function showPage() {
    document.querySelector(".loader_box").classList.add('hideSlow');
    root.append(header, homepage, skills, biography, works, contacts);
    showOnlyActivePage(homepage);
    animatedBg('in');
    animateElement('in');
    document.onmousewheel = onMouseWheel;
    onSwipe();
}

preloader()


