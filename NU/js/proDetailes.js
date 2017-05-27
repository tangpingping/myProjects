/**
 * Created by Administrator on 2017-04-27.
 */
$(document).ready(function () {
    var _val = parseInt($('.num').val());
    console.log(_val);
    $('.add').click(function () {
        _val +=1;
        console.log(_val);
        $('.num').val(_val);
    });
    $('.reduce').click(function () {
        _val -=1;
        if(_val == 0){
            _val = 1;
        }else {
            $('.num').val(_val);
        }
    });
//    滚动条下滑效果
    $('.slide-head').hide();
    $('.slide-bottom-right').hide();
    var distance = $(document).scrollTop();
    if(distance > 270){
        $('.slide-head').slideDown('300');
        $('.slide-bottom-right').fadeIn('slow');
    }else {
        $('.slide-head').slideUp('300');
        $('.slide-bottom-right').hide();
    }
    if(distance > 600){
        $('.word').css('right','130px');
        $('.btn-buy').css('right','-80px');
    }else {
        $('.word').css('right','12px');
        $('.btn-buy').css('right','-200px');
    }
    $(document).scroll(function () {
        // console.log($(document).scrollTop());
        var distance = $(document).scrollTop();
        if(distance > 270){
            $('.slide-head').slideDown('300');
            $('.slide-bottom-right').fadeIn('slow');
        }else {
            $('.slide-head').slideUp('300');
            $('.slide-bottom-right').hide();
        }
        if(distance > 600){
            $('.word').css('right','130px');
            $('.btn-buy').css('right','-80px');
        }else {
            $('.word').css('right','12px');
            $('.btn-buy').css('right','-200px');
        }
    });
    
    $('.slide-bottom-top').click(function () {
        $('html,body').animate({scrollTop: '0px'}, 300);
        return false;
    });
});



//手机详情效果

$('.version-mutual span').click(function () {
    $('.version-mutual span').removeClass('bor-blue');
    $(this).addClass('bor-blue');
    var index = $(this).index();
    var str = $(this).text();
    $('.iphone-h1').text('魅蓝5s '+str);
    switch (index){
        case 0: $('.iphone-price').text('￥1099.00');break;
        case 1:$('.iphone-price').text('￥999.00');break;
        case 2:$('.iphone-price').text('￥2999.00');break;
        case 3:$('.iphone-price').text('￥599.00');break;
    }
});
$('#content-right').load('moudle/pro-img-gold.html');
$('.color-classfiy a').click(function () {
    $('.color-classfiy a').removeClass('bor-blue');
    $(this).addClass('bor-blue');
    var count = $(this).index();
    switch(count){
        case 0:
            $('#content-right').load('moudle/rose-gold-img.html');
            break;
        case 1:
            $('#content-right').load('moudle/pro-img-gold.html');
            break;
        case 2:
            $('#content-right').load('moudle/sliver-img.html');
            break;
        case 3:
            $('#content-right').load('moudle/Gray-img.html');
            break;
    }
});

$('.memory span').click(function () {
    $('.memory span').removeClass('bor-blue');
    $(this).addClass('bor-blue');
});
$('.combo span').click(function () {

    $('.combo span').removeClass('bor-blue');
    $(this).addClass('bor-blue');
    var index = $(this).index();
    switch(index){
        case 0:
            $('.combo-01').show();
            $('.combo-02').hide();
            break;
        case 1:
            $('.combo-01').hide();
            $('.combo-02').show();
            break;
    }
});

$('.close').click(function () {
    $('.tips').hide();
});


