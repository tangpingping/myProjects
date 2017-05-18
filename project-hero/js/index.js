/**
 * Created by Administrator on 2017-04-24.
 */


$(document).ready(function () {

    // var width =  $(document.body).width();
    // // var height = $(document).height();
    // $('.all').css({'width':width});
    // $(window).resize(function () {
    //    var width1 =  $(document.body).width();
    //    // var height1 = $(document).height();
    //     $('.all').css({'width':width1});
    // });
    $('.nav-center li').hover(function () {
        console.log($(this).index());
        var index = $(this).index();
        $('.bottom-line').css('transform', 'translateX(' + 126 * index + 'px)');
    }, function () {

    });
    var width = $(document).width();
    console.log(width);
    $('.content-pics').css('width', width);
    $(window).resize(function () {
        var width = $(document).width();
        console.log(width);
        $('.content-pics').css('width', width);
    });

//登录注册js
    var _status = false;
    $('.login-all').hide();
    $('.register-all').hide();
    $('.login').click(function () {
        $('.login-all').show();
        _status = !_status;
        if(_status){
            $('html body').addClass('no_scroll');
        }else {
            $('html body').removeClass('no_scroll');
        }
    });
    $('.register').click(function () {
        $('.register-all').show();
        _status = !_status;
        if(_status){
            $('html body').addClass('no_scroll');
        }else {
            $('html body').removeClass('no_scroll');
        }
    });
    $('.login-div-content').click(function () {
        $('.login-all').fadeOut();
        _status = !_status;
        if(_status){
            $('html body').addClass('no_scroll');
        }else {
            $('html body').removeClass('no_scroll');
        }
    });
    $('.register-div').click(function () {
        $('.register-all').fadeOut();
        _status = !_status;
        if(_status){
            $('html body').addClass('no_scroll');
        }else {
            $('html body').removeClass('no_scroll');
        }
    });
    $('.close').click(function () {
        $('.register-all').fadeOut();
        $('.login-all').fadeOut();
        _status = !_status;
        if(_status){
            $('html body').addClass('no_scroll');
        }else {
            $('html body').removeClass('no_scroll');
        }
    });

    $('.login-register-btn').click(function () {
        $('.login-all').fadeOut();
        $('.register-all').fadeIn();
    });
    $('.back-to-login').click(function () {
        $('.login-all').fadeIn();
        $('.register-all').fadeOut();
    });
    $('.success-login').hide();
    $('.login-success').hide();

    $('.logoOut').click(function () {
        $('.login-success').hide();
        $('.login-div').show();
    });
//    js本地数据库 连接以及创建
//    初始化数据库

    function initDatabase() {
        var db = getCurrentDb();
        if(!db){
            alert('您的浏览器不支持HTML5');
            return;
        }
        db.transaction(function (trans) {
            trans.executeSql("create table if not exists userInfo(userName text null,passWord text null)",[],function (trans,result) {
            },function (trans,message) {
                alert(message);
            });
        },function (trans,result) {
        },function (trans,message) {
        });
    }
    var userName;
    var passWord;
    $(function () {
        initDatabase();
        //    插入数据
        $('.login-login-btn').click(function () {
            //登录读取数据
            userName = $('.login-userName').val();
            passWord = $('.login-passWord').val();
            if(userName == "" && passWord == ""){
                alert('用户名或密码不能为空！');
            }else {
                readTheData(0);
            }
        });
        //插入数据
        $('.register-register-btn').click(function () {
            //注册插入数据
            userName = $('.register-userName').val();
            passWord = $('.register-passWord').val();
            if(userName == "" && passWord == ""){
                alert('用户名或密码不能为空！');
            }else {
                readTheData(1);
            }

        });
    });

    function getCurrentDb() {
        //    打开数据库
        var db = openDatabase("user","1.0","it's to save user data!",1024 * 1024);
        return db
    }

//    从数据库中读取数据
    function readTheData(k) {
        var db = getCurrentDb();
        db.transaction(function (trans) {
            trans.executeSql("select * from userInfo",[],function (ts,data) {
                if(data){
                    //登录判断
                    if(k == 0){
                        for(var i = 0;i<data.rows.length;i++){
                            if(userName == data.rows.item(i).userName && passWord == data.rows.item(i).passWord){
                                console.log('登录成功');
                                loginSuccess(data.rows.item(i));
                                break;
                            }
                            else if( userName == data.rows.item(i).userName && passWord !== data.rows.item(i).passWord){
                                console.log("密码错误");
                                $('#login-user-tips').text("");
                                $('#login-password-tips').text("密码错误");
                                break;
                            }else if((i+1) == data.rows.length){
                                console.log('用户不存在请注册！');
                                $('#login-user-tips').text("用户不存在，请注册！")
                                $('#login-password-tips').text('');
                            }
                        }
                    }else {
                        //注册判断
                        if(data.rows.length == 0){
                            insertData();
                            console.log('注册成功');
                            alert('注册成功，请返回登录');
                        }
                        for(var j = 0;j<data.rows.length;j++){
                            if(userName == data.rows.item(j).userName){
                                console.log('用户已存在！');
                                $('#resgister-user-tips').text("用户已存在");
                                break;
                            }
                            else if( (j+1) == data.rows.length){
                                insertData();
                                console.log('注册成功');
                                alert('注册成功，请返回登录');
                            }
                        }
                    }
                    //    注册判断
                }
            },function (ts,message) {
                alert(message);
                var tst = message;
            })
        })
    }

    //登录数据处理
    function insertData() {
        var db = getCurrentDb();
        db.transaction(function (trans) {
            trans.executeSql("insert into userInfo(userName,passWord) values(?,?)",[userName,passWord],function (ts,data) {
            },function (ts,message) {
                alert(message);
            });
        });
    }

    function loginSuccess(data) {
        _status = !_status;
        if(_status){
            $('html body').addClass('no_scroll');
        }else {
            $('html body').removeClass('no_scroll');
        }
        $('.login-all').hide();
        $('.success-login').show();
        setTimeout(function () {
            $('.success-login').fadeOut();
        },300);
        $('.login-div').hide();
        $('.login-success').show();
        $('#userName').text(data.userName);
    }

});