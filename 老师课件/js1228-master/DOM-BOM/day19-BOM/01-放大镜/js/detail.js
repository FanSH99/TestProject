window.addEventListener("load", function () {
  console.log(123);

  let preview_img = this.document.querySelector(".preview_img");
  let mask = this.document.querySelector(".mask");
  let big = this.document.querySelector(".big");
  let bigImg = this.document.querySelector(".bigImg");

  // 鼠标进入，显示
  preview_img.addEventListener("mouseenter", function () {
    mask.style.display = "block";
    big.style.display = "block";
  });
  // 鼠标离开，隐藏
  preview_img.addEventListener("mouseleave", function () {
    mask.style.display = "none";
    big.style.display = "none";
  });

  // mask 跟随鼠标移动。
  preview_img.addEventListener("mousemove", function (e) {
    // 鼠标在盒子内的坐标
    let x = e.pageX - this.offsetLeft;
    let y = e.pageY - this.offsetTop;

    // 遮挡层的坐标
    let maskX = x - mask.offsetWidth / 2;
    let maskY = y - mask.offsetHeight / 2;

    // 遮挡层的最大移动距离
    let moveMax = preview_img.offsetWidth - mask.offsetWidth;
    // 遮挡层的移动限制
    if (maskX <= 0) {
      maskX = 0;
    } else if (maskX >= moveMax) {
      maskX = moveMax;
    }
    if (maskY <= 0) {
      maskY = 0;
    } else if (maskY >= moveMax) {
      maskY = moveMax;
    }
    // 给 mask 重新赋值
    mask.style.left = maskX + "px";
    mask.style.top = maskY + "px";

    /* 
        小图的移动距离 / 小图最大移动距离 = 大图的移动距离 / 大图的最大移动距离
        大图的移动距离 = 小图的移动距离 * 大图的最大移动距离 / 小图最大移动距离
    */
    // 大图的最大移动距离
    let bigMax = bigImg.offsetWidth - big.offsetWidth;
    // 大图的移动距离
    let bigMaxX = (maskX * bigMax) / moveMax;
    let bigMaxY = (maskY * bigMax) / moveMax;
    bigImg.style.left = -bigMaxX + "px";
    bigImg.style.top = -bigMaxY + "px";
  });
});
