// Burger menu

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const button = document.querySelector('.button');
const about = document.querySelector('.section__about');

if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
};


function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
};

button.addEventListener ('click', () => {
    scrollTo(about);
})