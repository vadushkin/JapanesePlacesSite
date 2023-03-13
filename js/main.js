(function () {
    const header = document.querySelector('.header');
    window.onscroll = function () {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    }
}());

(function () {
    const burger = document.querySelector('.burger');
    const header_nav = document.querySelector('.header__nav');
    const header_nav_close = document.querySelector('.header__nav-close');

    burger.addEventListener('click', () => {
        header_nav.classList.add('header__nav_active');
    });

    header_nav_close.addEventListener('click', () => {
        header_nav.classList.remove('header__nav_active');
    });
}());
