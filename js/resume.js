$(function() {
    $('#menu').hover(function() {
        $('#menu .contact').show(500);
    }, function() {
        $('#menu .contact').hide(500);
    });
    $('.contact').on('click', function() {
        $('.Mongolia').show(500);
    });
    $('#closeBtn').on('click', function() {
        $('.Mongolia').hide(500);
    });
    $('.Mongolia').click(function() {
        $('.Mongolia').hide(500);
    });
    //阻止冒泡，有问题ff不支持
    $('.contactBox').on('click', function() {
        if (e && e.stopPropagation) { //非IE  
            e.stopPropagation();
        } else { //IE  
            window.event.cancelBubble = true;
        }
         return false
    });
    $(window).scroll(function(){
        if ($(window).scrollTop() > 200) {
            $('.sideTop').fadeIn(300);
        }else{
             $('.sideTop').hide();
        }
    });
    $('.sideTop').click(function(){
         $('html,body').animate({
                'scrollTop': 0
            }, 300);
    });


});
