$(function () {
    $(".top .right span").on('mouseenter', function () {
        $(this).addClass('active');
        $('.top .right .cart-menu').slideDown('fast')
        $('.top .right .cart-menu').addClass('active');
    });
    $('.top .right .cart-menu').on('mouseleave', function () {
        $('.top .right span').removeClass('active');
        $(this).slideUp('fast')
        $(this).removeClass('active');
    })

    var playIndex = 0;
    function play() {
        playIndex++;
        if (playIndex >= 4) {
            playIndex = 0;
        }
        var imgOn = $('.swiper .slide img').eq(playIndex);
        imgOn.fadeIn(2000).siblings().fadeOut(2000)
    }
    function autoPlay() {
        setInterval(play, 2000);
    }
    autoPlay();

    $('.header .nav-list a').on('mouseenter', function () {
        $(this).addClass('on').siblings().removeClass('on');
        var idx = $(this).index();
        $('.header-item').addClass('active');
        $('.header-item .children').eq(idx).addClass('on').siblings().removeClass('on');
    });
    $('.header-item').on('mouseleave', function () {
        $('.header .nav-list a').removeClass('on');
        $(this).removeClass('active');
    });
    $('.header .nav-list').on('mouseleave', function () {
        $('.header .nav-list a').removeClass('on');
        $('.header-item').removeClass('active');
    });
    $('.swiper .category ul li').on('mouseenter', function () {
        $(this).addClass('on').siblings().removeClass('on');
        var idx = $(this).index();
        $('.category-item').eq(idx).addClass('active').siblings().removeClass('active');
    });
    $('.swiper').on('mouseleave', function () {
        $('.swiper .category ul li').removeClass('on');
        $('.category-item').removeClass('active');
    });
    $('.category-item').on('mouseleave', function () {
        $('.swiper .category ul li').removeClass('on');
        $(this).removeClass('active');
    });
    $('.goods .watch p.link a span').on('mouseenter', function () {
        $(this).addClass('on').siblings().removeClass('on');
    })

})