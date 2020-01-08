$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ['<img src="img/arrow_left.png" alt="">', ' <img src="img/arrow_right.png" alt="">'],
    dots: false,
    margin: 0,
    item: 6,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})