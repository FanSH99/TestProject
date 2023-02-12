function animate(obj, target, callback) {
  clearInterval(obj.timer);
  obj.timer = setInterval(function () {
    if (obj.offsetLeft == target) {
      clearInterval(obj.timer);
      if (callback) {
        callback();
      }
      return;
    }
    // 步长 = (目标位置 - 当前位置) / 10;
    var step = (target - obj.offsetLeft) / 10;
    console.log(step);
    // 步长向上取整
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    // 如果是  -0.9, 向上取整是0
    console.log(obj.offsetLeft, step);

    obj.style.left = obj.offsetLeft + step + "px";
  }, 50);
}
