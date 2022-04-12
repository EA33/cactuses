import Swiper, { Pagination, Parallax } from 'swiper';
Swiper.use([Pagination, Parallax]);
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
(() => {
    const swiper2 = new Swiper('.cactuses__swiper', {
        loop: true,
        parallax: true,
        speed: 600,
        pagination: {
            el: '.swiper-bullets',
            clickable: true,
        },
    });
})();
