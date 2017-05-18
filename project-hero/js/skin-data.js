/**
 * Created by Administrator on 2017-05-03.
 */
$(document).ready(function () {
    var img_src = ['../images/skin-data/icon.jpg','../images/img-01/icon.jpg',
        '../images/img-02/icon.jpg','../images/img-03/icon.jpg','../images/img-04/icon.jpg'
        ,'../images/img-05/icon.jpg','../images/img-06/icon.jpg','../images/img-07/icon.jpg'
        ,'../images/img-08/icon.jpg','../images/img-09/icon.jpg','../images/img-10/icon.jpg'
        ,'../images/img-11/icon.jpg','../images/img-12/icon.jpg','../images/img-13/icon.jpg'
        ,'../images/img-14/icon.jpg','../images/img-15/icon.jpg','../images/img-16/icon.jpg'
        ,'../images/img-17/icon.jpg','../images/img-18/icon.jpg','../images/img-19-end/icon.jpg'
        ,'../images/img-20/icon.jpg','../images/img-21/icon.jpg','../images/img-22/icon.jpg'
        ,'../images/img-23/icon.jpg','../images/img-24/icon.jpg','../images/img-25/icon.jpg'
        ,'../images/img-26/icon.jpg','../images/img-27/icon.jpg','../images/img-28/icon.jpg'
        ,'../images/img-29/icon.jpg','../images/img-30/icon.jpg','../images/img-31/icon.jpg'
        ,'../images/img-32/icon.jpg','../images/img-33/icon.jpg','../images/img-34/icon.jpg'
        ,'../images/img-35/icon.jpg','../images/img-36/icon.jpg','../images/img-37/icon.jpg'
        ,'../images/img-38/icon.jpg','../images/img-39/icon.jpg','../images/img-40/icon.jpg'
        ,'../images/img-41/icon.jpg','../images/img-02/icon.jpg','../images/skin-data/icon.jpg'];
    var _index;
    var width = $(document).width();
    var height = $(document).height();
    console.log(width);
    $('.bg-all').css('width', width).css('height', height);
    $('.all').css('width', width).css('height', height);
    $('.content-center').css('width', width - 50).css('height', height - 220);
    $('.bg-all img').css('width', width - 200).css('height', height - 200);
    $(window).resize(function () {
        width = $(document).width();
        height = $(document).height();
        $('.all').css('width', width).css('height', height);
        $('.bg-all').css('width', width).css('height', height);
        $('.content-center').css('width', width - 50).css('height', height - 220);
        $('.bg-all img').css('width', width - 200).css('height', height - 200);
    });
    $('.footer-only').hover(function () {
        $('.extra-container').css('height','209px');
    },function () {
        $('.extra-container').hover(function () {
            $('.close').unbind().click(function () {
                $('.extra-container').css('height','0');
            });
        },function () {
            $('.extra-container').css('height','0');
        });
    });

    $('.button .icon').hover(function () {
        $(this).parent().next().css('opacity','1');
    },function () {
        $(this).parent().next().css('opacity','0');
        $('.point-container li .label').css('opacity','0');
        $('.point-container li').eq(_index).find('.label').css('opacity','1');
    });
//    底部动态移动
    $('.point-container li').unbind().click(function () {
       _index = $(this).index();
      console.log(_index);
      $('#all').load('img-0'+_index+'.html');
      $('.point-container').css('transform','matrix(1, 0, 0, 1, '+(851.5-80*_index)+', 0)');
        $('.point-container li .label').css('opacity','0').css('color','#937341');
        $('.point-container li').eq(_index).find('.label').css('opacity','1').css('color','#0f0f0f');
      $('.thumb.front .icon').css('background-image','url("'+img_src[_index]+'")');
      if(_index == 42){
          $('.thumb.front .icon').css('background-color','#f2f2f2');
      }
    });



});