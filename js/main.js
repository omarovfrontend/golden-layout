$(function() {
    function toggleHeaderClass(scrollOffset) {
        const header = $('#header');
        const introHeight = $('#intro').innerHeight();

        if(scrollOffset >= introHeight) {
            header.addClass('header_fixed');
        }
        else {
            header.removeClass('header_fixed');
        }
    }

    $(window).on('scroll', function() {
        const scrollOffset = $(this).scrollTop();

        toggleHeaderClass(scrollOffset);
    });

    /* Smooth scroll */
    $('[data-scroll]').on('click', function(event) {
        event.preventDefault();

        const $this = $(this);
        const blockId = $this.data('scroll');
        const blockOffset = $(blockId).offset().top;

        $('[data-scroll]').removeClass('nav__link_active');
        $this.addClass('nav__link_active');

        $('html, body').animate({
            scrollTop: blockOffset
        }, 300);
    });

    /* Menu nav toggle */
    $('#nav-toggle').on('click', function(event) {
        event.preventDefault();

        $(this).toggleClass('nav-toggle_active');
        $('#nav').toggleClass('nav_active');
    });

});