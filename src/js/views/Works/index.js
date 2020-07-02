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
                                        <a class="works__link" href="https://xpatrickx1.github.io/ShopBootstrap/">
                                            <img class="works__img" src="./img/bootstrap-proj.png" alt="bootstrap website screenshot">
                                        </a>
                                    </div>
                                    <div class="works__item" animated>
                                        <a class="works__link" href="https://xpatrickx1.github.io/ArkanoidCanvas/">
                                            <img class="works__img" src="./img/arkanoid.jpg" alt="arkanoid game screenshot">
                                        </a>
                                    </div>
                                    <div class="works__item" animated>
                                        <a class="works__link" href="https://xpatrickx1.github.io/LotteryJs/">
                                            <img class="works__img" src="./img/lottery.jpg" alt="lottery app screenshot">
                                        </a>
                                    </div>
                                    <div class="works__item" animated>
                                        <a class="works__link" href="./sites/Whack-a-Mole/index.html">
                                            <img class="works__img" src="./img/whackamolle.jpg" alt="whackamolle game screenshot">
                                        </a>
                                    </div>
                                    <div class="works__item" animated>
                                        <a class="works__link" href="https://xpatrickx1.github.io/macpaw_test/">
                                            <img class="works__img" src="./img/ChuckNorrisAPI.png" alt="ChuckNorrisAPI app screenshot">
                                        </a>
                                    </div>
                                  </div>
                             </div>`;
        works.append(scrollAniMouse.render());
        return works;
    }
};

export const works = new Works().render();
