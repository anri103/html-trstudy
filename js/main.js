$(document).ready(function(){
    $('#btnTopMenu').click(function(){
        $('.main-menu').toggleClass('show');
        $('.header__mobile-close-btn').addClass('active-close-btn');
    });

    $('#btnClose').click(function(){
        $('.main-menu').removeClass('show');
        $('.header__mobile-close-btn').removeClass('active-close-btn');
    });

    $(".courses-slider").slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1201,
              settings: {
                slidesToShow: 4
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 551,
              settings: {
                infinite: false,
                centerMode: true,
                centerPadding: '30px',
                slidesToShow: 1
              }
            }
          ]
    });

});