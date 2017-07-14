$(document).ready(function () {

    var headerHeight = $('nav').outerHeight();
    $('.slide-section').click(function (e) {
        var linkHref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - headerHeight
        }, 1000);
        e.preventDefault();
    });

});

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 150) {
            $("#back-top").addClass("visible");
        } else {
            $("#back-top").removeClass("visible");
        }
    });
});