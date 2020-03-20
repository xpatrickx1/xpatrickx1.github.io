export class Button {
    constructor (text, className, container, func) {
        this.text = text;
        this.className = className;
        this.container = container;
        this.func = func;
    }

    render () {
        const button = document.createElement( 'button' );
        button.innerText = this.text;
        button.className = this.className;
        button.addEventListener( 'click', this.func );
        this.container.append(button);
        return button;
    }
}