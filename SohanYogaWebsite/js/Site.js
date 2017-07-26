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

// ===== Scroll to Top ==== 
$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function () {      // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0                       // Scroll to top of body
    }, 500);
});