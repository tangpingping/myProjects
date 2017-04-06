/**
 * Created by Administrator on 2017/3/28.
 */
var _index = 0;
var _key ;
$(document).ready(function () {
    $('.dialog_bg').hide();
    $('.list-group li').click(function () {
        console.log( $(this).index());
        _index = $(this).index();
        // _count[0] = $(this).index();
        $('.col-xs-1').removeClass('tick');
        $('.name').css('color','black');

        $('.name').eq(_index).css('color','#b92c28');
        $('.col-xs-1').eq(_index).addClass('tick');
        sessionStorage.setItem(_key, _index);

    });
    _index = sessionStorage.getItem(_key);
    // console.log(_index);
    $('.name').eq(_index).css('color','#b92c28');
    $('.col-xs-1').eq(_index).addClass('tick');
});

$(document).on("pageinit","#pageone",function(){
    $(".list-group-item").on("taphold",function(){
        $('.dialog_bg').show();
        var this_list = $(this);
        $('.sure').click(function () {
           this_list.remove();
            $('.dialog_bg').hide();
        });
        $('.cancel').click(function () {
            $('.dialog_bg').hide();
        });
    });


});