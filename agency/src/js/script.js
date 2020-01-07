const scrollMenu = function () {
    let menu = document.querySelector('nav');
    if (window.scrollY > 90) {

        console.log('scroll');
        menu.classList.add('menu__scroll');
    } else {
        menu.classList.remove('menu__scroll');
    }
    console.log(scrollY)
}
window.addEventListener('scroll', scrollMenu);