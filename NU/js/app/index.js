/**
 * Created by Administrator on 2017-05-09.
 */
$(document).ready(function () {
    $('.add_01_content').hide();
    $('.add_02_content').hide();
    $('.add_03_content').hide();
    var _status = false;
    var _status_01 = false;
    var _status_02 = false;
    $('.add_01').unbind().click(function () {
        if(_status){
            $(this).css('transform','rotate(0deg)');
            $('.add_01_content').hide();
            // $('.add_01_content li').animate({left:'.4rem'},300).animate({opactiy:1},300);
            _status = !_status;
        }else {
            $(this).css('transform','rotate(45deg)');
            $('.add_01_content').show();
            for(var i =0;i<$('.add_01_content li').length;i++){
                setTimeout(function (i) {
                    $('.add_01_content li').eq(i).animate({left:'.4rem'},300);
                },500);
            }
            _status = !_status;
        }
    });

    $('.add_03').unbind().click(function () {
        if(_status_01){
            $(this).css('transform','rotate(0deg)');
            $('.add_03_content').hide();
            // $('.add_01_content li').animate({left:'.4rem'},300).animate({opactiy:1},300);
            _status_01 = !_status_01;
        }else {
            $(this).css('transform','rotate(45deg)');
            $('.add_03_content').show();
            for(var i =0;i<$('.add_03_content li').length;i++){
                setTimeout(function (i) {
                    $('.add_03_content li').eq(i).animate({left:'.4rem'},300);
                },500);
            }
            _status_01 = !_status_01;
        }
    });

    $('.add_02').unbind().click(function () {
        if(_status_02){
            $(this).css('transform','rotate(0deg)');
            $('.add_02_content').hide();
            // $('.add_01_content li').animate({left:'.4rem'},300).animate({opactiy:1},300);
            _status_02 = !_status_02;
        }else {
            $(this).css('transform','rotate(45deg)');
            $('.add_02_content').show();
            for(var i =0;i<$('.add_02_content li').length;i++){
                setTimeout(function (i) {
                    $('.add_02_content li').eq(i).animate({left:'.4rem'},300);
                },500);
            }
            _status_02 = !_status_02;
        }
    });

    $('.fix-top').hide();
    $(window).scroll(function () {
        console.log();
        if($(window).scrollTop()>700){
            $('.fix-top').show();
        }else {
            $('.fix-top').hide();
        }
    });

    $('.fix-top').click(function () {
        $('html body').animate({scrollTop:'0'},300);
    });
    $('.back-top>span').click(function () {
        $('html body').animate({scrollTop:'0'},300);
    });
    $('.nav-list').hide();
    $('.nav-panel').hide();
    $('.nav_right img').unbind().click(function () {
        $('.nav-panel').show();
        $('.nav-list').slideDown();
        $('html body').addClass('no_scroll');
    });
    $('.list-right img').click(function () {
        $('.nav-list').hide();
        $('html body').removeClass('no_scroll');
        $('.nav-panel').hide();
    });
    $('.nav-panel').click(function () {
        $('.nav-list').hide();
        $('html body').removeClass('no_scroll');
        $('.nav-panel').hide();
    });

});