/* swiper */

const swiper = new Swiper('.swiper',{

    loop:true,
    pagination:{
        el:'.swiper-pagination',
        clickable: true,
    },
    //breakpoints 
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
        320: {
            slidesPerView:1
        },
        960: {
            slidesPerView:2
        },
        1200: {
            slidesPerView:3
        },
    },
});

// Scroll reveal animation

const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 3000,
    delay: 600,
    // reset: true,
});

//hero
sr.reveal('.hero__text', {origin: 'top'});