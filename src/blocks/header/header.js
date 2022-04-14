import { disablePageScroll, enablePageScroll } from 'scroll-lock';

(() => {
    $('.rightside__search, .rightside__search_top').on('click', 'input[type="submit"]', function (e) {
        let $self = $(this);
        let $text = $self.prev('input[type="text"]');
        let width = parseInt($self.css('width') + 10);
        let width_text = parseInt($text.css('width'));

        $text.trigger('focus');

        if (e.target.type == 'submit' && width_text <= width) {
            return false;
        }
    });

    let $menu = $('.leftside');
    let $toggle = $('.header__top-menu');
    $('.menu').on('click', 'a[href^="#"]', function (e) {
        e.preventDefault();
        let $element = $($(this).attr('href'));

        $('html, body').animate({ scrollTop: $element.offset().top }, "slow", function () {
            $toggle.removeClass('opened');
            $menu.removeClass('opened');
            enablePageScroll();
        });
    });

    $('.header__top-menu').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).toggleClass('opened');
        $menu.toggleClass('opened');

        if ($menu.hasClass('opened')) {
            disablePageScroll();
            return;
        }
        enablePageScroll();
    });

    $(window).on('click', function (e) {
        if ($menu.hasClass('opened') && !e.target.closest('.leftside')) {
            e.preventDefault();
            $toggle.removeClass('opened');
            $menu.removeClass('opened');
            enablePageScroll();
        }
    });

    $('a[href^="#form"]').on('click', function (e) {
        e.preventDefault();
        let $element = $($(this).attr('href'));

        $("html, body").animate({ scrollTop: $element.offset().top }, "slow");
    });

    $("a[href='#header']").on('click', function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });

    $(window).on('scroll', function () {
        let $element = $('.leftside');
        $element['fade' + ($(this).scrollTop() < $element.parent().height() * 4.6 ? 'In' : 'Out')](500);
    });

})();

