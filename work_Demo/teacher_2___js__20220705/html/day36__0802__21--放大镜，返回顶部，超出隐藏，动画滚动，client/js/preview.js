window.addEventListener('load', function () {
    var preview_wrap = document.querySelector('.preview_wrap');
    var mask = document.querySelector('.preview_wrap .preview .mask ');
    var preview_big = document.querySelector('.preview_big');
    var pic_big = document.querySelector('.pic_big');
    var preview = document.querySelector('.preview');

    // 获取鼠标在盒子内的坐标，鼠标在盒子内不断移动。

    preview.onmousemove = function (e) {
        e = e || window.event;
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        // mask.style.left = x - mask.offsetWidth / 2 + 'px';
        // mask.style.top = y - mask.offsetHeight / 2 + 'px';
        // 遮罩层不能出图片框
        var maskX = x - mask.offsetWidth / 2
        var maskY = y - mask.offsetHeight / 2;
        var maskXMax = preview.offsetWidth - mask.offsetWidth;
        var maskYMax = preview.offsetHeight - mask.offsetHeight;
        if (maskX <= 0) {
            maskX = 0;
        } else if (maskX >= maskXMax) {
            maskX = maskXMax;
        }
        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY >= maskYMax) {
            maskY = maskYMax;
        }
        // 2022年8月2日11:06:38
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        var bigMax = pic_big.offsetWidth - preview_big.offsetWidth;
        var bigX = (maskX * bigMax) / maskXMax;
        var bigY = (maskY * bigMax) / maskYMax;
        pic_big.style.left = -bigX + 'px';
        pic_big.style.top = -bigY + 'px';
    }


})