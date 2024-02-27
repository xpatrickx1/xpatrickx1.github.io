import { scrollAniMouse } from "../../components";

class Biography {
    render () {
        const biography = document.createElement('section');
        biography.id = 'biography';
        biography.className = 'biography__section';
        biography.setAttribute('page', '');
        biography.innerHTML = `<div class="biography">
                                  <div class="biography__part">
                                     <div class="biography__title_wrapper">
                                         <h1 class="biography__title" animated>Work Experience</h1>
                                     </div>
                                     <div class="biography__wrapper">
                                      <div class="biography__item" animated>
                                        <p class="biography__year">2020 – 2024 <strong class="biography__organisation">Govitall / Qollabe</strong></p>
                                        <p class="biography__position">Front end developer</p>
                                          <ul class="biography__list">
                                            <li class="biography__item_responsibilities">Developed and supported more than 100 company websites;</li>
                                            <li class="biography__item_responsibilities">Speed up websites, SEO optimization and improving Google Page Speed metrics, making our websites more attractive to Google and user-friendly;</li>
                                            <li class="biography__item_responsibilities">Increased the Performance metric of more than 20 top sites by improving the LСP CLS and FСP parameters;</li>
                                            <li class="biography__item_responsibilities">Moved order forms and calculators from JS to React.js;</li>
                                          </ul>
                                      </div>
                                      <div class="biography__item" animated>
                                        <p class="biography__year">2018 – 2020 <strong class="biography__organisation">Digital Pirates</strong></p>
                                        <p class="biography__position">Front end developer</p>
                                          <p class="biography__list">
                                          Website development for customers.
                                          </p>
                                      </div>
                                         <div class="biography__item" animated>
                                            <p class="biography__year">2013 – 2015 <strong class="biography__organisation">Kyivoblenergo</strong></p>
                                            <p class="biography__position">Engineer 1 category.</p>
                                              <ul class="biography__list">
                                                <li class="biography__item_responsibilities">Development of tender documentation and supplier selection strategy;</li>
                                                <li class="biography__item_responsibilities">Conducting tenders;</li>
                                                <li class="biography__item_responsibilities">Supplier search and selection;</li>
                                                <li class="biography__item_responsibilities">Monitoring compliance with delivery deadlines and product quality;</li>
                                                <li class="biography__item_responsibilities">Analysis of the needs of the company, price planning.</li>
                                              </ul>
                                         </div>
                                        
                                    </div>
                                  </div> 
                                  
                                  <div class="biography__part">
                                 
                                      <div class="biography__title_wrapper" animated>
                                        <h1 class="biography__title">Education</h1>
                                      </div>
                                      <div class="biography__wrapper">
                                          <div class="biography__item" animated>
                                            <p class="biography__year">2019 - 2020<strong class="university__name"> DAN.IT education</strong>
                                            <p class="biography__speciality">Front End</p>
                                          </div>
                                          <div class="biography__item" animated>
                                            <p class="biography__year">2006 - 2011
                                            <strong class="biography__name"> National Transport University</strong></p> 
                                            <p class="biography__speciality">Automechanical Faculty </br>Specialty: Automobiles</p>
                                          </div>
                                      </div>
                                  </div>
                             </div>`;
        biography.append(scrollAniMouse.render());
        return biography;
    }
};

export const biography = new Biography().render();
