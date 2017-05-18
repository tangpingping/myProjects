/**
 * Created by Administrator on 2017-05-04.
 */
function fade_01() {
    $('.content-center-01').fadeOut();
    $('.content-center-next').fadeIn();
}
function play() {
    setTimeout(fade_01, 2000);
}

$(document).ready(function () {
    var img_src = ['../images/skin-data/icon.jpg', '../images/img-01/icon.jpg',
        '../images/img-02/icon.jpg', '../images/img-03/icon.jpg', '../images/img-04/icon.jpg'
        , '../images/img-05/icon.jpg', '../images/img-06/icon.jpg', '../images/img-07/icon.jpg'
        , '../images/img-08/icon.jpg', '../images/img-09/icon.jpg', '../images/img-10/icon.jpg'
        , '../images/img-11/icon.jpg', '../images/img-12/icon.jpg', '../images/img-13/icon.jpg'
        , '../images/img-14/icon.jpg', '../images/img-15/icon.jpg', '../images/img-19-end/icon.jpg'
        , '../images/img-20/icon.jpg', '../images/img-21/icon.jpg', '../images/img-22/icon.jpg'
        , '../images/img-23/icon.jpg', '../images/img-37/icon.jpg'
        , '../images/img-38/icon.jpg', '../images/img-40/icon.jpg'
        , '../images/img-41/icon.jpg', '../images/img-02/icon.jpg', '../images/skin-data/icon.jpg','../images/img-02/icon.jpg'];
    var _index;
    var width = $(window).innerWidth();
    var height = $(document.body).innerHeight();
    console.log(width);
    console.log(height);
    $('.auto-size').css('width',width);
    // $('.content').css('margin-top',height/2-400).css('height',height);
    // $('.all>div').css('width',width).css('height',height);
    $('.content-head').css('height',height);
    $(window).resize(function () {
           console.log('111');

        var width = $(window).innerWidth();
        var height = $(document.body).innerHeight();
    //     // $('.content').css('margin-top',height/2-300).css('height',height);
    //     $('.all>div').css('width',width).css('height',height);
        $('.auto-size').css('width',width);
        $('.content-head').css('height',height);
    });
    $('.footer-only').hover(function () {
        $('.extra-container').css('height', '209px');
    }, function () {
        // $('.extra-container').css('height','0');
        $('.extra-container').hover(function () {
            $('.close').unbind().click(function () {
                $('.extra-container').css('height', '0');
            });
        }, function () {
            $('.extra-container').css('height', '0');
        });
    });

    $('.button .icon').hover(function () {
        $(this).parent().next().css('opacity', '1');
    }, function () {
        $(this).parent().next().css('opacity', '0');
        $('.point-container li .label').css('opacity', '0');
        $('.point-container li').eq(_index).find('.label').css('opacity', '1');
    });
//    底部动态移动
    $('.all>div').hide();
    $('.all>div').eq(0).fadeIn();
    $('.point-container li').unbind().click(function () {
        _index = $(this).index();
        console.log(_index);
        if(_index == 0 || _index < 3){
            $('.footer-only li a').css('color','#a08450');
            $('.footer-only li').eq(0).find('a').css('color','black');
        }
        else if(_index == 3 || _index<17){
            $('.footer-only li a').css('color','#a08450');
            $('.footer-only li').eq(1).find('a').css('color','black');
        }
        else if(_index == 17 || _index<23){
            $('.footer-only li a').css('color','#a08450');
            $('.footer-only li').eq(2).find('a').css('color','black');
        }
        else if(_index == 23 || _index<26){
            $('.footer-only li a').css('color','#a08450');
            $('.footer-only li').eq(3).find('a').css('color','black');
        }
        else if(_index == 26){
            $('.footer-only li a').css('color','#a08450');
            $('.footer-only li').eq(4).find('a').css('color','black');
        }
       div_show();
       show_footer();
    });

    $('#pre').click(function () {
        _index = 0;
        $('.footer-only li a').css('color','#a08450');
        $(this).css('color','black');
        div_show();
       show_footer();
    });
    $('#hero').click(function () {
        _index = 3;
        $('.footer-only li a').css('color','#a08450');
        $(this).css('color','black');
        div_show();
        show_footer();
    });
    $('#hero-envior').click(function () {
        _index = 17;
        $('.footer-only li a').css('color','#a08450');
        $(this).css('color','black');
        div_show();
        show_footer();
    });
    $('#heros').click(function () {
        _index = 23;
        $('.footer-only li a').css('color','#a08450');
        $(this).css('color','black');
        div_show();
        show_footer();
    });
    $('#thanks').click(function () {
        _index = 26;
        $('.footer-only li a').css('color','#a08450');
        $(this).css('color','black');
        div_show();
        show_footer();
    });

    //箭头定时器

    $('.back-top img').each(function (k,elem) {
        new JumpObj(elem,10);
    });

    $('.back-top').hide();
    $(window).scroll(function () {
        if($(window).scrollTop()>500){
            $('.back-top').show();
        }else {
            $('.back-top').hide();
        }
    });
    $('.back-top').click(function () {
        $('html body').animate({scrollTop:0},300);
    });
    function show_footer() {
        $('.point-container').css('transform', 'matrix(1, 0, 0, 1, ' + (851.5 - 80 * _index) + ', 0)');
        $('.point-container li .label').css('opacity', '0').css('color', '#937341');
        $('.point-container li').eq(_index).find('.label').css('opacity', '1').css('color', '#0f0f0f');
        $('.thumb.front .icon').css('background-image', 'url("' + img_src[_index] + '")');
        if (_index == 42) {
            $('.thumb.front .icon').css('background-color', '#f2f2f2');
        }
    }
    function div_show() {
        $('.all>div').fadeOut();
        // console.log($('.all>div'));
        $('.all>div').eq(_index).fadeIn();
        if (_index == 1) {
            $('.content-center-01').fadeIn();
            $('.content-center-next').hide();
            play();
            console.log('111');
        }
    }

});