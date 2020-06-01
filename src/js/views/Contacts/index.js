import { scrollAniMouse } from "../../components";

class Contacts {

    constructor () {
        this.validOb = {
            email: {
                regExp: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                emptyMessage: 'Please write your email',
                errorMessage: 'Incorrect email',
                isValid: false
            },
            text: {
                regExp: /^.{6,}$/,
                emptyMessage: 'Please write some message',
                errorMessage: 'Message should be at least 6 characters long',
                isValid: false
            }
        };
    }

    validate (el, container) {

        const validObj = this.validOb[ el.getAttribute('input') ];

        if ( el.value !== '' ) {
            if ( validObj.regExp.exec( el.value ) ) {
                removeError( el, container );
                validObj.isValid = true;
            } else {
                showError( el, validObj.errorMessage, container );
                validObj.isValid = false;
                return validObj.errorMessage
            };
        } else {
            showError( el, validObj.emptyMessage, container );
            validObj.isValid = false;
            return validObj.emptyMessage
        }

        function showError( el, text, container ) {
            container.classList.add( 'error' );
            el.classList.add( 'error' );
            container.textContent = text;
            return text
        };

        function removeError( el, container ) {
            container.innerText = '';
            el.classList.remove( 'error' );
            container.classList.remove( 'error' );
        };
    }

    inputValidate (inp) {
        const input = inp.getAttribute('input');
        contacts.querySelectorAll('[error]').forEach(container => {
            if ( container.getAttribute('error') == input) {
                this.validate(inp, container)
            }
        });
    }

    render () {
        const contacts = document.createElement('section');
        contacts.id = 'contacts';
        contacts.className = 'contacts__section';
        contacts.setAttribute('page', '');
        contacts.innerHTML = `<div class="contacts">
                                  <div class="contacts__wrapper">
                                      <div class="contacts__title_wrapper" animated>
                                        <h4 class="contacts__title">let's talk!</h4>
                                      </div>
                                      <div class="form__wrapper">
                                          <form class="form" action="mailto:xpatrickx1@gmail.com" method="get" enctype="text/plain"> 
                                              <div class="form__input_wrapper form__input_wrapper--email" animated>
                                                  <label class="form__label" for="inputEmail">email</label>
                                                  <input class="form__input" input="email" id="inputEmail" type="email" name="email" required/>
                                                  <span class="form__input_underline"></span>
                                                  <span class="form__error" error="email"></span>
                                              </div>
                                              <div class="form__input_wrapper form__input_wrapper--message" animated>
                                                  <label class="form__label" for="inputMessage">message</label>
                                                  <textarea class="form__input" input="text" id="inputMessage" type="text" rows="1" name="message" required></textarea>
                                                  <span class="form__input_underline"></span>
                                                  <span class="form__error" error="text"></span>
                                              </div>
                                              <input class="form__submit" id="submit" type="submit" value="send" animated/>
                                          </form>
                                      </div>
                                  </div>
                                  <div class="footer">
                                      <div class="contact">
                                          <p class="contact__phone" animated>+38 093 810 60 69</p>
                                          <p class="contact__email" animated>xpatrickx1@gmail.com</p>
                                      </div>
                                      <div class="social">
                                          <ul class="social__list">
                                            <li class="social__item" animated>
                                                <div class="social__img social__img--faceb">
                                                    <a class="social__link social__link--faceb" href="https://www.facebook.com/profile.php?id=100004749393965" ></a>
                                                </div>
                                            </li>
                                            <li class="social__item" animated>
                                                <div class="social__img social__img--insta">
                                                    <a class="social__link social__link--insta" href="https://www.instagram.com/xpatrickx75/"></a>
                                                </div>
                                            </li>
                                            <li class="social__item" animated>
                                                <div class="social__img social__img--yout">
                                                    <a class="social__link social__link--yout" href="https://www.youtube.com/channel/UCVvlLrdi5R2yOfuve0rNP9A?view_as=subscriber"></a>
                                                </div>
                                            </li>
                                            <li class="social__item" animated>
                                                <div class="social__img social__img--linked">
                                                    <a class="social__link social__link--linked" href="https://www.linkedin.com/in/evgeniy-sonin-00b627161/"></a>
                                                </div>
                                            </li>
                                            <li class="social__item" animated>
                                                <div class="social__img social__img--github">
                                                    <a class="social__link social__link--github" href="https://github.com/xpatrickx1"></a>
                                                </div>
                                            </li>
                                          </ul>
                                      </div>
                                  </div>
                             </div>`;

        const inputs = contacts.querySelectorAll('.form__input');

        inputs.forEach( item => {
            item.addEventListener('blur', () => {
                this.inputValidate(item)
            })
        });

        contacts.querySelector('#submit').addEventListener('click', () => {
            inputs.forEach( item => {
                this.inputValidate( item )
            });
        });

        contacts.querySelector('.form').addEventListener('submit', () => {
            Object.values(this.validOb).forEach( item => {
                if ( !item.isValid ) {
                    throw new Error('Incorrect form')
                }
            })
        });

        contacts.append(scrollAniMouse.render());
        return contacts;
    }
};

export const contacts = new Contacts().render();
