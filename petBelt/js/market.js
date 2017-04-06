/**
 * Created by Administrator on 2017/3/27.
 */

var count = 0;
var $pic_play_span = $('#pics');
var $pic_a = $pic_play_span.children('a');
var $pic_img = $pic_a.children('img');
var imgLength = $pic_img.length;
var $pic_div = $('#pic_play');

var $bottom_btn_div = $('.bottom_btn div');
$bottom_btn_div.eq(0).css('backgroundColor','#f60');
$pic_img.hide();
$pic_img.eq(0).show();
//按钮
var $left_btn = $('.left_btn');
var $right_btn = $('.right_btn');
// console.log($bottom_btn_div.length);
var interval = 4000;//轮播间隔时间
var time;

function toLeft() {
    // count = (count > 0) ? (--count) : (imgLength - 1);
    count = (--count + imgLength) % imgLength;
    console.log(count);
    change();
    stop();
    play();
}
function  toRight() {
    count = (++count) % imgLength;
    // console.log(count);
    change();
    stop();
    play();
}

function change() {
    $pic_img.fadeOut();
    $pic_img.eq(count).fadeIn(500);
    $bottom_btn_div.css('backgroundColor','rgba(255,255,255,0.6)');
    $bottom_btn_div.eq(count).css('backgroundColor','#f60');
}
function autoPlay() {
    count = (++count) % imgLength;
    change();
    // console.log('playCount:'+count);
}
function play() {
    time = setInterval(autoPlay, interval);
}
function stop() {
    clearInterval(time);
}


$(document).ready(function () {

    $pic_div.mouseover(function () {
        $left_btn.addClass('display');
        $right_btn.addClass('display');

    });
    $pic_div.mouseout(function () {
        $left_btn.removeClass('display');
        $right_btn.removeClass('display');
    });

    $bottom_btn_div.mouseover(function () {
        count = $(this).index();
        $bottom_btn_div.css('backgroundColor','rgba(255,255,255,0.6)');
        $bottom_btn_div.eq(count).css('backgroundColor','#f60');
        $pic_img.fadeOut();
        $pic_img.eq(count).fadeIn(500);
        stop();

    });
    $bottom_btn_div.mouseout(function () {
        play();
    });
    $bottom_btn_div.mouseout(function () {

    });
    //按钮点击
    $left_btn.click(function () {
        toLeft();
    });
    $right_btn.click(function () {
        toRight();
    });
    play();
});

$(document).on("pagecreate","#pageone",function(){
    $("#pics img").on("swipeleft",function(){
        toRight();
    });
    $("#pics img").on("swiperight",function(){
        toLeft();
    });
});

// $(document).on("scrollstart",function(){
//     // alert("开始滚动!");
//     var height = document.body.scrollTop;
//     console.log(height);
//     if(height>40){
//         console.log('ssss');
//         $('.input-group').addClass('fix_top').css('background','rgba(180,90,52,0.6)');
//     }else {
//         $('.input-group').removeClass('fix_top').css('background','rgba(0,0,0,0.2)');
//     }
// });
$(document).on("scrollstop",function(){
    // alert("开始滚动!");
    var height = document.body.scrollTop;
    // console.log(height);
    if(height>40){
        // console.log('ssss');
        $('.input-group').addClass('fix_top').css('background','rgba(129,196,226,0.6)');
    }else {
        $('.input-group').removeClass('fix_top').css('background','rgba(0,0,0,0.2)');
    }
});

















