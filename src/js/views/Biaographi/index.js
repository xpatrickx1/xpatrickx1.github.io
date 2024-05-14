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
                                        <p class="biography__year"><strong class="biography__organisation">Govitall / Qollabe</strong> (2020 – 2024)</p>
                                        <p class="biography__position">Front end developer</p>
                                          <p class="biography__list">
                                          Developed and supported more than 100 company websites. Speed up websites, SEO optimization and improving Google Page Speed metrics, making our websites more attractive to Google and user-friendly. Increased the Performance metric of more than 20 top sites by improving the LСP CLS and FСP parameters, moving them from the red zone to the yellow and green. Moved order forms and calculators from JS to React.js
                                          </p>
                                      </div>
                                      <div class="biography__item" animated>
                                        <p class="biography__year"><strong class="biography__organisation">Digital Pirates</strong> (2018 – 2020)</p>
                                        <p class="biography__position">Front end developer</p>
                                          <p class="biography__list">
                                          Website development for customers.
                                          </p>
                                      </div>
                                         <div class="biography__item" animated>
                                            <p class="biography__year"><strong class="biography__organisation">Kyivoblenergo</strong> (2013 – 2015)</p>
                                            <p class="biography__position">Engineer 1 category.</p>
                                            <p class="biography__list">
                                            Development of tender documentation and supplier selection strategy. Conducting tenders. Supplier search and selection. Monitoring compliance with delivery deadlines and product quality. Analysis of the needs of the company, price planning.
                                            </p>
                                              
                                         </div>
                                        
                                    </div>
                                  </div> 
                                  
                                  <div class="biography__part">
                                 
                                      <div class="biography__title_wrapper" animated>
                                        <h1 class="biography__title">Education</h1>
                                      </div>
                                      <div class="biography__wrapper">
                                          <div class="biography__item" animated>
                                            <p class="biography__year"><strong class="university__name"> DAN.IT education</strong> (2019 - 2020)
                                            <p class="biography__speciality">Front End</p>
                                          </div>
                                          <div class="biography__item" animated>
                                            <p class="biography__year">
                                            <strong class="biography__name"> National Transport University</strong> (2006 - 2011)</p> 
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
