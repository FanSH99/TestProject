
function animate(obj, end, callback) {
    clearInterval(obj.timer);
    var timer;
    obj.timer = setInterval(function () {
        var header = obj.offsetLeft;
        var speed = (end - header) / 10;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if (header == end) {
            clearInterval(timer);
            callback && callback();
        }
        var newL = speed + header;
        obj.style.left = newL + 'px';
    }, 15)
}

