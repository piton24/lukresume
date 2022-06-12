$(function () {
    $('.heder__btn-press').on('click', function (e) {
        e.preventDefault()

        $('.heder__btn-press').toggleClass('heder__btn-press--active');
        $('.heder__popup ').slideToggle(450);
    });
});


