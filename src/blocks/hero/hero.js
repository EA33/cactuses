import Swiper, { Navigation, Pagination, Parallax } from 'swiper';
Swiper.use([Navigation, Pagination, Parallax]);
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
(() => {
    const swiper = new Swiper('.swiper', {
        loop: true,
        parallax: true,
        speed: 600,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    $('a.header__left-scroll[href^="#"]').on('click', function (e) {
        e.stopPropagation();
        e.preventDefault();
        var $element = $($(this).attr('href'));

        $('html, body').animate({ scrollTop: $element.offset().top }, 'slow');
    });

})();
