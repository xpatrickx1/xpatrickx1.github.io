import {scrollAniMouse} from '../../components/';

class Homepage {
//// <img src="./img/me.png" class="homepage__image" alt="my-photo" animated>
    render () {
        this.homepage = document.createElement('section');
        this.homepage.id = 'homepage';
        this.homepage.className = 'homepage__section';
        this.homepage.setAttribute('page', '');
        this.homepage.innerHTML = `<div class="homepage">
                                     <div class="homepage__description">
                                         <h1 class="homepage__title" animated>About me</h1>
                                         <p class="homepage__subtitle" animated>
                                             Hi, my name is Evgeniy Sonin. </br>
                                             I am front-end developer, </br>
                                             kitesurfer and snowboarder.</p>
                                     </div>
                                     <div class="homepage__image_wrapper">
                                        
                                        <picture class="lazy" >
                                            <source data-srcset="./img/me-mob.png" media="(max-width: 767px)">
                                            <img 
                                                src="./img/me.png"
                                                width="450"
                                                height="730"
                                                class="homepage__image"
                                                animated
                                            >
                                        </picture>
                                     </div>
                                   </div>`;
        this.homepage.append(scrollAniMouse.render());
        return this.homepage;
    }
};

export const homepage = new Homepage().render();
