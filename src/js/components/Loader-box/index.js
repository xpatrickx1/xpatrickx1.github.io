class LoaderBox {
    render() {
        const loaderBox = document.createElement( 'div' );
        loaderBox.id = 'loaderBox';
        loaderBox.className = 'loaderBox';
        loaderBox.innerHTML = `
                            <div class="loader_box">
                                <div class="loader">
                                    <p class="line-1 anim-typewriter">made by sonin</p>
                                </div>  
                            </div>`;
        return loaderBox
    }
}

export const loaderBox = new LoaderBox().render();