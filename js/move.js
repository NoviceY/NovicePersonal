function getStyle(obj, attr) { //获得真正的宽，而不是加了边框的宽offsetWidth
    if (obj.currentStyle) { //当获得的是加了边框的宽的时候，在有边框的时候是有问题的
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, false)[attr];
    }
}
function move(obj, json, fn) {
    clearInterval(obj.timer); //停止当前这个对象的定时器
    obj.timer = setInterval(function() {
        var Bstop = true;
        for (var attr in json) { //循环json才能几个属性一起变
            var Icur = 0;
            if (attr == 'opacity') {
                Icur = parseInt(parseFloat(getStyle(obj, attr)) * 100);
                //干掉小数，小数会出问题,二进制小数都有这样的问题，js小数是双精度的，最多位，无限制的小数是会出问题的
            } else {
                Icur = parseInt(getStyle(obj, attr));
            }
            var speed = (json[attr] - Icur) / 9;
            //最主要的是将speed每次都重新赋值，让其速度变化
            speed = speed > 0 ? speed = Math.ceil(speed) : Math.floor(speed); //速度取整不然最后小数的时候不跑
            if (Icur != json[attr]) {//检测，当有属性没有到的时候就将Bstop设置为false，当都到了Bstop不会变化是开始的true
                Bstop = false;
            }
            if (attr == 'opacity') {
                obj.style.filter = 'alpha(opacity:' + (Icur + speed) + ')'
                obj.style.opacity = (Icur + speed) / 100;
            } else {
                obj.style[attr] = Icur + speed + 'px'; //对left进行变化
            }
            if (Bstop) {//所有值都到了才停止
                clearInterval(obj.timer);
                if (fn) {
                    fn();
                }
            }
        }
    }, 30)
}