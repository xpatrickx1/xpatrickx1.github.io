import { scrollAniMouse } from "../../components";

class Works {
    render () {
        const works = document.createElement('section');
        works.id = 'works';
        works.className = 'works__section';
        works.setAttribute('page', '');
        works.innerHTML = `<div class="works">
                                  <div class="works__about_this_site" animated>
                                    <h4 class="works__about_title">A little bit about this site</h4>
                                    <p class="works__about_text">This site was build on a SSA (Single Screen Application) idea.
                                    </br>You can see all information without reloading pages or physical scroll, like in SPA websites.
                                    </br>I think this idea of sites building may become popular in the near future.
                                    </p>
                                  </div>
                                  <div class="works__my_works">
                                    <div class="works__item" animated>
                                        <a class="works__link" href="./sites/AkseonovOpener/index.html">
                                            <img class="works__img" src="./img/siteAO.jpg" alt="AO website screenshot">
                                        </a>
                                    </div>
                                    <div class="works__item" animated>
                                        <a class="works__link" href="./sites/Landing1/index.html">
                                            <img class="works__img" src="./img/sitevideopro.jpg" alt="videopro website screenshot">
                                        </a>
                                    </div>
                                    <div class="works__item" animated>
                                        <a class="works__link" href="./sites/stepbootstrap/dist/index.html">
                                            <img class="works__img" src="./img/bootstrap-proj.png" alt="bootstrap website screenshot">
                                        </a>
                                    </div>
                                    <div class="works__item" animated>
                                        <a class="works__link" href="./sites/Lottery/dist/index.html">
                                            <img class="works__img" src="./img/lottery.jpg" alt="lottery app screenshot">
                                        </a>
                                    </div>
                                    <div class="works__item" animated>
                                        <a class="works__link" href="./sites/Whack-a-Mole/index.html">
                                            <img class="works__img" src="./img/whackamolle.jpg" alt="whackamolle game screenshot">
                                        </a>
                                    </div>
                                  </div>
                             </div>`;
        works.append(scrollAniMouse.render());
        return works;
    }
};

export const works = new Works().render();
