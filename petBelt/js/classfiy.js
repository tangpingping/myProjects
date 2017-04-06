/**
 * Created by Administrator on 2017/3/28.
 */
$(document).ready(function () {
    var height = window.screen.height;
    console.log(height);
     $('.list-group').css('height',height+'px').css('overflow','scroll');
});
