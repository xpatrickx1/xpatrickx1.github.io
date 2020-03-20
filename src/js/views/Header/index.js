import { getPages, showOnlyActivePage } from '../../pages-utils';
import {animatedBg, animateElement} from '../../animations'
import { homepage } from "../Homepage";

class Header {

    render () {
        const header = document.createElement('div');
        header.id = 'header';
        header.className = 'header__wrapper';
        header.innerHTML = `
                        <div class="container">
                         <header class="header">
                             <div class="header__logo">
                                 <a class="header__logo-link" href="#">
                                     <span class="header__logo-image"></span>
                                 </a>
                             </div>
                             <div class="nav-toggle">
                                 <div class="nav-toggle-bar"></div>
                             </div>
                             <nav class="header__navbar">
                                 <ul class="header__nav-list">
                                     <li class="header__nav-item">
                                         <a class="header__nav-link" nav="skills" href="#">skills</a>
                                     </li>
                                     <li class="header__nav-item">
                                         <a class="header__nav-link" nav="biography" href="">biography</a>
                                     </li>
                                     <li class="header__nav-item">
                                         <a class="header__nav-link" nav="works" href="">works</a>
                                     </li>
                                     <li class="header__nav-item">
                                         <a class="header__nav-link" nav="contacts" href="">contacts</a>
                                     </li>
                                 </ul>
                             </nav>
                         </header>
                        </div>
                     `;

        [].slice.call(header.querySelectorAll('[nav]'))
            .forEach( item => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    let clickedBtn = item.getAttribute('nav');
                    const allPages = getPages();
                    allPages.forEach( page => {
                        if ( page.id == clickedBtn ) {
                            animatedBg ('out');
                            animateElement('out');
                            setTimeout( () => {showOnlyActivePage(page); animateElement('in')}, 1000);
                            setTimeout( () => {animatedBg ('in'); }, 1200);
                        }
                    })
                }
            )
        });

        header.querySelector('.header__logo').addEventListener('click', () => {
            animatedBg ('out');
            animateElement('out');
            setTimeout( () => {showOnlyActivePage(homepage); animateElement('in')}, 1000);
            setTimeout( () => {animatedBg ('in'); }, 1200);
        });

        const hamburger = {
            navToggle: header.querySelector('.nav-toggle'),
            nav: header.querySelector('nav'),

            doToggle: function(e) {
                e.preventDefault();
                this.navToggle.classList.toggle('expanded');
                this.nav.classList.toggle('expanded');
            }
        };
        hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
        return header;
    }
};

export const header = new Header().render();

