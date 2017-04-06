/**
 * Created by Administrator on 2017/3/1.
 */
$(document).ready(function () {
   var $pic_div = $('#pic_play');
    var $pic_play_span = $('#pics');
    var $pic_a = $pic_play_span.children('a');
    var $pic_img = $pic_a.children('img');
    var imgLength = $pic_img.length;
    $pic_img.hide();
    $pic_img.eq(0).show();
    //按钮
    var $left_btn = $('.left_btn');
    var $right_btn = $('.right_btn');
    var $bottom_btn_div = $('.bottom_btn div');

    $bottom_btn_div.eq(0).css('backgroundColor','#f60');
    // console.log($bottom_btn_div.length);
    var interval = 4000;//轮播间隔时间
    var count = 0;
    var time;

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
    //按钮点击
    $left_btn.click(function () {
        toLeft();
    });
    $right_btn.click(function () {
        toRight();
    });
    play();
});
    

















