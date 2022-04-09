$(function () {
    $(window).scroll(function () {
        const scrollTop = $(this).scrollTop();
        $(".pos").text(scrollTop);
    });
});
