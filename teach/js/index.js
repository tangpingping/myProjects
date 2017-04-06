/**
 * Created by Administrator on 2017/3/20.
 */
$(document).ready(function () {
    var bdColor = 'border-color';
var count = 0;

    $('.animation .circle').hover(function () {
        $(this).css(bdColor,'#950f1c');
        console.log($(this).index());
        count = $(this).index();
        $('.animation .circle_copy').hover(function () {
            $(this).eq(count).css(bdColor,'#950f1c');
        },function () {
            $(this).eq(count).css(bdColor,'#2aabd2');
        });
    },function () {
        $(this).css(bdColor,'#2aabd2');
        $('.animation .circle_copy').css(bdColor,'#2aabd2');
    });


    var config = {
        after: '0s',
        origin:'bottom',
        //  enter: 'bottom',
        // rotate   : { z: 10 },
        move: '24px',
        over: '0.66s',
        easing: 'ease-in-out',
        viewportFactor: 0.33,
        reset: false,
        init: true,
        mobile:true
    };
    window.scrollReveal = new scrollReveal(config);
});
