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


    /*

    $('.add-to-cart-btn').click(function () {
        var total = parseInt($('.cart-total').text()) + 1;
        $('.cart-total').show().text(total);
    });
});

    $(".cart").click(this,function) {
        console.log(e.data);
    }
    function(e) {
        let theApp = e.data;
        theApp.shoppingCart.showPopUp(theApp.products);
    }*/




