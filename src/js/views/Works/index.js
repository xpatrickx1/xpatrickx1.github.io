import { scrollAniMouse } from "../../components";

class Works {
    render () {
        const works = document.createElement('section');
        works.id = 'works';
        works.className = 'works__section';
        works.setAttribute('page', '');
        works.innerHTML = `<div class="works">
                                  <div class="works__my_works">
                                    <div class="works__item" animated>
                                        <a class="works__link" href="https://sferafilm.com/">
                                            <img class="works__img" src="./img/sfera.jpg" alt="sfera website screenshot">
                                        </a>
                                    </div>
                                    <div class="works__item" animated>
                                        <a class="works__link" href="https://dontpanic.team/">
                                            <img class="works__img" src="./img/dontpanic.png" alt="dontpanic website screenshot">
                                        </a>
                                    </div>
                                    <div class="works__item" animated>
                                        <a class="works__link" href="https://xpatrickx1.github.io/AkseonovOpener/">
                                            <img class="works__img" src="./img/siteAO.jpg" alt="AO website screenshot">
                                        </a>
                                    </div>
                                    <div class="works__item" animated>
                                        <a class="works__link" href="https://xpatrickx1.github.io/Landing-VideoProductionCo/">
                                            <img class="works__img" src="./img/sitevideopro.jpg" alt="videopro website screenshot">
                                        </a>
                                    </div>
                                    <div class="works__item" animated>
                                        <a class="works__link" href="https://xpatrickx1.github.io/giko.meme/">
                                            <img class="works__img" src="./img/sitevideopro.jpg" alt="videopro website screenshot">
                                        </a>
                                    </div>
                                    <div class="works__item" animated>
                                        <a class="works__link" href="https://xpatrickx1.github.io/cwat.meme/">
                                            <img class="works__img" src="./img/sitevideopro.jpg" alt="videopro website screenshot">
                                        </a>
                                    </div>
                                  </div>
                             </div>`;
        works.append(scrollAniMouse.render());
        return works;
    }
};

export const works = new Works().render();
