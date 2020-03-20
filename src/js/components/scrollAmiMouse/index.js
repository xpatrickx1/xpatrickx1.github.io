class ScrollAniMouse {

    render() {
        const loaderBox = document.createElement( 'div' );
        loaderBox.id = 'scrollMouse';
        loaderBox.className = 'scrollMouse';
        loaderBox.innerHTML = `
                            <div class="scroll-downs" animated>
                              <div class="mousey">
                                <div class="scroller"></div>
                              </div>
                            </div>`;
        return loaderBox
    }
}

export const scrollAniMouse = new ScrollAniMouse();