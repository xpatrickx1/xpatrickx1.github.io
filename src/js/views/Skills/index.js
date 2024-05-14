import {scrollAniMouse} from '../../components/';

class Skills {
    render () {
        const skills = document.createElement('div');
        skills.id = 'skills';
        skills.className = 'skills';
        skills.setAttribute('page', '');
        skills.innerHTML = `<div class="skills__wrap">
                                <div class="skills__title-wrap" animated>

                                    <h1 class="skills__title">Skills</h1>
                                    <span class="skills__level"></span>
                                </div>
                                <div class="level">
                                    <div class="level__ruler">
                                        <span class="level__measure"></span>
                                        <span class="level__mark"></span>
                                        <span class="level__mark"></span>
                                        <span class="level__mark"></span>
                                        <span class="level__mark"></span>
                                    </div>
                                </div>
                                <div class="skills__list-wrap">
                                    <ul class="skills__list" animated>
                                        <li class="skills__items-wrapper">
                                            <ul class="skills__level-list skills__level-list--high">
                                                <li class="skills__item" animated>
                                                    <div class="skills__img skills__img--javas" ></div>
                                                </li>
                                                <li class="skills__item" animated>
                                                    <div class="skills__img skills__img--react"></div>
                                                </li>
                                                <li class="skills__item" animated>
                                                    <div class="skills__img skills__img--redux"></div>
                                                </li>
                                                <li class="skills__item" animated>
                                                    <div class="skills__img skills__img--html" ></div>
                                                </li>
                                                <li class="skills__item" animated>
                                                    <div class="skills__img skills__img--css"></div>
                                                </li>
                                                <li class="skills__item" animated>
                                                    <div class="skills__img skills__img--jquery"></div>
                                                </li>
                                            </ul>    
                                     </li>
                                        <li class="skills__items-wrapper">
                                            <ul class="skills__level-list skills__level-list--medium">
                                                <li class="skills__item" animated>
                                                    <div class="skills__img skills__img--php" ></div>
                                                </li>
                                                <li class="skills__item" animated>
                                                    <div class="skills__img skills__img--less" ></div>
                                                </li>
                                                <li class="skills__item" animated>
                                                    <div class="skills__img skills__img--sass" ></div>
                                                </li>
                                                <li class="skills__item" animated>
                                                    <div class="skills__img skills__img--wp"></div>
                                                </li>
                                                <li class="skills__item" animated>
                                                    <div class="skills__img skills__img--bem"></div>
                                                </li>
                                                <li class="skills__item" animated>
                                                    <div class="skills__img skills__img--redux-saga"></div>
                                                </li>
                                            
                                            </ul>
                                        </li>
                                        <li class="skills__items-wrapper">
                                            <ul class="skills__level-list skills__level-list--low">
                                                <li class="skills__item" animated>
                                                    <div class="skills__img skills__img--git" ></div>
                                                </li>
                                                <li class="skills__item" animated>
                                                    <div class="skills__img skills__img--gulp" ></div>
                                                </li>
                                                <li class="skills__item" animated>
                                                    <div class="skills__img skills__img--webpack" ></div>
                                                </li>
                                                <li class="skills__item" animated>
                                                    <div class="skills__img skills__img--npm" ></div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="skills__items-wrapper">
                                            <ul class="skills__level-list skills__level-list--basic">
                                                <li class="skills__item" animated >
                                                    <div class="skills__img skills__img--node"></div>
                                                </li>
                                                <li class="skills__item" animated>
                                                    <div class="skills__img skills__img--express"></div>
                                                </li>
                                                <li class="skills__item" animated>
                                                    <div class="skills__img skills__img--mongo"></div>
                                                </li>
                                                <li class="skills__item" animated>
                                                    <div class="skills__img skills__img--twig"></div>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>`;
        skills.append(scrollAniMouse.render());
        return skills;
    }
};

export const skills = new Skills().render();