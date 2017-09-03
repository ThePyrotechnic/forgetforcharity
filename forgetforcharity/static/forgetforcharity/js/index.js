var button_pos;
var nav_bar;

$(document).ready(function () {
    var leaves = $(".svg-leaf");
    var sign_in = $('#sign-in');
    nav_bar = $('#nav-bar');
    button_pos = sign_in.offset().top + sign_in.outerHeight(true);

    TweenMax.to(leaves, 0, {scale: 0.1});
    TweenMax.to(leaves, 0.3, {scale: 1.5, opacity: 1, delay: 0.5, ease: Power1.easeOut});
    TweenMax.to(leaves, 0.1, {scale: 1, delay: 0.8});

    TweenMax.to("#scroll-label", 1, {opacity: 1, delay: 2, ease: Power1.easeOut});

    $(window).scroll(function () {
        if ($(this).scrollTop() > button_pos) {
            nav_bar.css('display', 'flex');
            TweenMax.to(nav_bar, 0.5, {opacity: 1});
        } else {
            TweenMax.to(nav_bar, 0.5, {
                opacity: 0, onComplete: function () {
                    nav_bar.css('display', 'none');
                }
            });
        }
    });
});