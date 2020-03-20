//Burger botton open/close

function menu() {
    var wrap = document.getElementById('navbar-nav__wrapper'),
        btn = document.getElementById('navbar-nav__btn');

    wrap.onclick = function () {

        if (btn.classList.contains('animate')) {
            btn.classList.remove('animate');
        } else if (btn.classList.add('animate'));

    };
}
