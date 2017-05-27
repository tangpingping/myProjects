/**
 * Created by Administrator on 2017-04-27.
 */
$(document).ready(function () {
   // $('.slide-left ul').hide();
   // console.log($('.slide-left ul:gt(0)'));
    $('.hover-div li').hover(function () {
        var count = $(this).index();
        if(count>0 && count<5){
            $('.hover-div-01').slideDown(400);
            // console.log($('.slide-nav li'));
            // console.log(count);
            $('.slide-left ul').hide();
            $('.slide-left ul').eq(count-1).show();
            $('.hover-div-01').hover(function () {
                $('.slide-nav li').hover(function () {
                    var index = $(this).index();
                    if(index>0 && index<5){
                        $('.slide-left ul').hide();
                        $('.slide-left ul').eq(index-1).show();
                    }else {
                        $('.hover-div-01').hide();
                    }
                });
                $('.slide-left li').hover(function () {
                    $('.slide-left li').css('opacity','.6');
                    $(this).css('opacity','1');
                });
            },function () {
                $('.hover-div-01').slideUp('fast');
            });
        }
    });
    $('.list').hide();
    $('.last-one').hover(function () {
        $('.list').show();
        $('.list').hover(function () {

        },function () {
            $('.list').hide();
        });
        $('.hover-div').hover(function () {
            // $('.list').hide();
        });
    },function () {
        // $('.list').hide();
    });
});