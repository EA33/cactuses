import Swiper, { Pagination, Navigation } from 'swiper';
Swiper.use([Pagination, Navigation]);
// import { disablePageScroll, enablePageScroll } from 'scroll-lock';
(() => {

    const swiper3 = new Swiper('.popular__slider', {
        loop: true,
        slidesPerView: 3,
        speed: 400,
        spaceBetween: 130,
        pagination: {
            el: '.popular__pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-prev',
            prevEl: '.swiper-button-next',
        },
        breakpoints: {
            1480: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
            1260: {
                slidesPerView: 2,
                spaceBetween: 50,
            },
            960: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            780: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            640: {
                spaceBetween: 0,
                slidesPerView: 1,
            },
            480: {
                spaceBetween: 0,
                slidesPerView: 1,
            },
            0: {
                spaceBetween: 0,
                slidesPerView: 1,
            }
        }
    });
})();
