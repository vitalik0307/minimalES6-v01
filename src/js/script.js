$(document).ready(function() {
    $('#overlay').css({opacity: 0.5});

	 $('.cart').click(function() {
        $('.popup-cart, #overlay').fadeIn(300);
        });

    $('.close').click(function () {
        $('.popup-cart, #overlay').fadeOut(300);
    });

    $('.quick-view-btn').click(function() {
        $('.popup, #overlay').fadeIn(300);
    });

    $('.close-popup').click(function() {
        $('.popup, #overlay').fadeOut(300);
    });

});





