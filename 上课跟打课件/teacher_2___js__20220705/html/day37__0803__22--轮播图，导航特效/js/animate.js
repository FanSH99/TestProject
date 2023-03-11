function animate(obj,end,callback){
    clearInterval(obj.timer);
   obj.timer= setInterval(function () {
        // (end-header)/10   速度 或者偏移量
        var speed = (end - obj.offsetLeft) / 10;
       speed= speed>0?Math.ceil(speed):Math.floor(speed)
    
        if(obj.offsetLeft==end){
            clearInterval(obj.timer);
            callback&&callback()
        }

        var newL = obj.offsetLeft + speed;
        obj.style.left = newL + 'px';
    },15)
}
