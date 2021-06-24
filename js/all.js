$(document).ready(function () {
    $('.header .contain .menu-list').on('click', function (e) {
        e.preventDefault();
        $('.header .contain').toggleClass('showdmenu');
    });
});


$(document).ready(function () {
    $('.cart .m-pro').on('click', function (e) {
        e.preventDefault();
        $('.cart .cart-content').toggleClass('showdmenu');
    });
});