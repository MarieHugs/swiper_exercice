var mySwiper = new Swiper('.swiper-1', {
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
})

var mySwiper = new Swiper('.swiper-2', {

    loop:true,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

var mySwiper = new Swiper('.swiper-3', {
    direction: 'vertical',
    loop: true,
    simulateTouch: false,

    autoplay: {
        delay: 2000,
    },

})

var mySwiper = new Swiper('.swiper-4', {


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
})

var mySwiper = new Swiper('.swiper-5', {

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 780px
        780: {
            slidesPerView: 3,
        },
        // when window width is >= 1000px
        1000: {
            slidesPerView: 4,
        },
        // when window width is >= 1000px
        1200: {
            slidesPerView: 5,
        },
    }

})

var mySwiper = new Swiper('.swiper-6', {
    effect: 'flip',
    loop: true,
})