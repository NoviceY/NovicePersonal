// 购物车
$('.topbar-car').hover(function() {
    $(this).addClass('bgfff');
    $('.topbar-car .car').css('color', '#FF6700');
    $('.topbar-car .carin').stop().slideDown(300);
}, function() {
    $(this).removeClass('bgfff');
    $('.topbar-car .car').css('color', '#FFF');
    $('.topbar-car .carin').stop().slideUp(300);
});
$('.car-list li').hover(function() {
    $('.car-list li .colse').fadeIn(100);
}, function() {
    $('.car-list li .colse').fadeOut(100);
});
$('.car-list li .colse').click(function() {
    $(this).parents('li').remove();
});
// 选择城市弹出
$('.select').click(function() {
    $('.mask').slideDown(500);
});
$('.city .colse').click(function() {
    $('.mask').slideUp(500);
});
// 搜索
$('.search-form .searchtext').focus(function() {
    $(this).css('borderColor', '#FF6700').siblings().css('borderColor', '#FF6700');
    $('.search-box').stop().show(100);
}).blur(function() {
    $(this).css('borderColor', '#ccc').siblings().css('borderColor', '#ccc');
    $('.search-box').stop().hide();
});
// 导航菜单
$('.nav-main li').hover(function() {
    $(this).find('.container').stop().slideDown();
}, function() {
    $(this).find('.container').stop().slideUp();
});
//banner淡入淡出
var $length = $('#banner .img li').length;
for (var i = 0; i < $length; i++) {
    var li = "<li><div></div></li>";
    $('#banner .num').append(li);
}
$('#banner .img li').eq(0).show();
$('#banner .num li').eq(0).addClass('active');
var i = 0;
var timer = null;

function moveR() {
    i++;
    if (i == $length) {
        i = 0;
    }
    $('.num li').eq(i).addClass('active').siblings().removeClass('active');
    $('.img li').eq(i).fadeIn(300).siblings().fadeOut(300);
}

function moveL() {
    i--;
    if (i == 0) {
        i = $length;
    }
    $('.num li').eq(i).addClass('active').siblings().removeClass('active');
    $('.img li').eq(i).fadeIn(300).siblings().fadeOut(300);
}
$('#banner').hover(function() { clearInterval(timer); }, function() {
    timer = setInterval(moveR, 3000);
}).trigger('mouseleave');

$('#banner .num li').mouseover(function() {
    var index = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $('.img li').eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);
    i = index;
});
$('#banner .leftbtn').click(function() {
    moveL();
});
$('#banner .rightbtn').click(function() {
    moveR();
});
//侧边栏导航
$('.site-category ul li').hover(function() {
    var length = $(this).find('div.children ul').length;
    var w = parseInt($(this).find('div.children ul').css('width'));
    $(this).find('div.children').css('width', length * w);
    $(this).find('div.children').toggle();
}, function() { $(this).find('div.children').toggle(); });
$(window).scroll(function() {
    if ($(window).scrollTop() > 200) {
        $('.scroll').show();
    } else {
        $('.scroll').hide();
    }
});
$('.scroll').click(function() {
    $('html,body').animate({
        'scrollTop': 0
    }, 300);
});
