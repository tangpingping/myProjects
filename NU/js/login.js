/**
 * Created by Administrator on 2017-04-26.
 */
$('#top').load('moudle/login-top.html');
$('#footer').load('moudle/login-bottom.html');
$('#login>div').hide();
$('.login').show();
$('.register-link').click(function () {
    $('#login>div').hide();
    $('.register').show();
});
$('.login-a').click(function () {
    $('#login>div').hide();
    $('.login').show();
});
// $('#login').load('moudle/login.html');
// $(document).ready(function () {
//     $(document).on('click','.register-link',function(){
//         $('#login').load('moudle/register.html');
//     });
//     $(document).on('click','.login-a',function(){
//         $('#login').load('moudle/login.html');
//     });
// });

