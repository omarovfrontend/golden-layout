$(function() {
    const header = $("#header");
    const introHeight = $("#intro").innerHeight();
    let scrollOffset = $(window).scrollTop();

    function toggleHeaderClass(scrollOffset) {
        if(scrollOffset >= introHeight) {
            header.addClass("header_fixed");
        }
        else {
            header.removeClass("header_fixed");
        }
    }

    /* Fixed Header */
    toggleHeaderClass(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        toggleHeaderClass(scrollOffset);
    });

    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        const $this = $(this);
        const blockId = $this.data('scroll');
        const blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 300);
    });

    /* Menu nav toggle */
    $("#nav-toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

});