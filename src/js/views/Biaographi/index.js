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
                                            <p class="biography__year">2013 – 2015 <strong class="biography__organisation">Kyivoblenergo</strong></p>
                                            <p class="biography__position">Engineer 1 category.</p>
                                              <ul class="biography__list">
                                                <li class="biography__item_responsibilities">development of tender documentation;</li>
                                                <li class="biography__item_responsibilities">conducting tenders (for purchasing goods);</li>
                                                <li class="biography__item_responsibilities">development of a supplier selection strategy, supplier search and selection;</li>
                                                <li class="biography__item_responsibilities">contractual biography: agreement and conclusion of contracts, evaluation of the supplier's biography in accordance with the concluded contracts;</li>
                                                <li class="biography__item_responsibilities">analysis of the needs of the company, price planning;</li>
                                              </ul>
                                         </div>
                                         <div class="biography__item" animated>
                                            <p class="biography__year">2010 – 2012   <strong class="biography__organisation"> Universal Bank</strong></p>
                                            <p class="biography__position">IT specialist</p>
                                            <ul class="biography__list">
                                                <li class="biography__item_responsibilities">technical support of users;</li>
                                                <li class="biography__item_responsibilities">server infrastructure support;</li>
                                                <li class="biography__item_responsibilities">computer maintenance;</li>
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
