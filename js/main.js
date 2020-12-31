$(function() {
    // переменные
    const dataScrolls = $('[data-scroll]');
    const navToggleBtn = $('#nav-toggle');
    const nav = $('#nav');

    // событие скролла окна
    $(window).on('scroll', function() {
        // получаем отступ сверху
        const header = $('#header');
        const introHeight = $('#intro').innerHeight();
        const scrollOffset = $(this).scrollTop();

        if(scrollOffset >= introHeight) {
            header.addClass('header_fixed');
        } else {
            header.removeClass('header_fixed');
        }
    });

    // нажатие на пункты меню с атрибутом data-scroll
    dataScrolls.on('click', function(event) {
        event.preventDefault();

        const $this = $(this);
        const blockId = $this.data('scroll');
        const blockOffset = $(blockId).offset().top;

        dataScrolls.removeClass('nav__link_active');
        $this.addClass('nav__link_active');

        $('html, body').animate({
            scrollTop: blockOffset
        }, 300);
    });

    // нажатие на переключатель меню в адаптиве
    navToggleBtn.on('click', function(event) {
        event.preventDefault();

        navToggleBtn.toggleClass('nav-toggle_active');
        nav.toggleClass('nav_active');
    });

});