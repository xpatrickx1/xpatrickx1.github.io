import { getActivePage } from "../pages-utils";

export function animatedBg (direction) {
    const activePage = getActivePage();
    const root = document.getElementById('root');
    const rootHelper = document.getElementById('root__helper');
    let inOut = (direction == 'in') ? 'in' : 'out';
    switch (activePage.id) {
        case 'homepage' :
            root.className = '';
            rootHelper.classList = '';
            root.classList = `home_bg ${inOut}`;
            break;
        case 'skills' :
            root.className = '';
            rootHelper.classList = '';
            root.classList = `skills_bg ${inOut}`;
            rootHelper.classList = `skills_bg_img in`;
            break;
        case 'biography' :
            root.className = '';
            rootHelper.classList = '';
            root.classList = `biography_bg ${inOut}`;
            rootHelper.classList = `biography_bg_img in`;
            break;
        case 'works' :
            root.className = '';
            rootHelper.classList = '';
            root.classList = `works_bg ${inOut}`;
            rootHelper.classList = `works_bg_img in`;
            break;
        case 'contacts' :
            root.className = '';
            rootHelper.classList = '';
            root.classList = `contacts_bg ${inOut}`;
            rootHelper.classList = `contacts_bg_img in`;
            break;
        default :
            root.className = 'home_bg';
    }
}
