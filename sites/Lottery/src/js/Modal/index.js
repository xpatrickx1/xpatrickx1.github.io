import { form } from "../Form/Form";

export class Modal {
    constructor( btn, ...args ) {
        this.args = args;
        this.btn = btn;
        this.modal = null;
    }

    open() {
        this.btn.addEventListener('click', ()=> {this.modal.classList.add( 'active' )});
    };

    close() {
        this.modal.querySelector( '.close' )
            .addEventListener( 'click', () =>
                this.modal.classList.remove( 'active' )
            );

        this.modal.addEventListener('click', (e) => {
            if ( e.target === document.querySelector('.modal__wrapper')) {
                this.modal.classList.remove( 'active' )
            }
        });
    }

    render() {
        this.modal = document.createElement( 'div' );
        this.modal.className = 'modal';
        this.modal.innerHTML = `<div class="modal__wrapper">
                                    <div class="modal__content">
                                        <span class="close">&times;</span>
                                    </div>
                                </div>`;
        const container = this.modal.querySelector( '.modal__content' );
        this.args.forEach( elem => container.append(elem));
        document.body.append( this.modal );
        this.open();
        this.close();
        return this.modal
    };
};

export const modal = new Modal( form );

