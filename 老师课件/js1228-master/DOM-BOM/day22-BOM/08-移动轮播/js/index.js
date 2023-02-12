window.addEventListener("load", function () {
  console.log("加载成功");
  let focus = document.querySelector(".focus");
  let ul = focus.querySelector("ul");
  let ol = focus.querySelector("ol");
  let width = focus.offsetWidth; // 轮播图的宽度

  let index = 0; // 自动轮播的计数器
  // 1. 自动轮播
  let timer = setInterval(function () {
    // console.log(index);
    index++;
    let translatex = -index * width; //每次移动距离
    // 过渡的样式
    ul.style.transition = "all 0.5s";
    // 滚动函数
    ul.style.transform = `translateX(${translatex}px)`;
  }, 1500);

  // 2. 无缝轮播
  // transitionend 滚动函数结束的时候，进行监听执行
  ul.addEventListener("transitionend", function () {
    // console.log(index);
    if (index >= 3) {
      index = 0;
      let translatex = -index * width; //每次移动距离
      // 过渡的样式
      ul.style.transition = "none";
      // 滚动函数
      ul.style.transform = `translateX(${translatex}px)`;
    } else if (index < 0) {
      index = 2;
      let translatex = -index * width; //每次移动距离
      // 过渡的样式
      ul.style.transition = "none";
      // 滚动函数
      ul.style.transform = `translateX(${translatex}px)`;
    }

    // 3. 小圆圈样式变化
    //  原理：请清除 class 样式，给当前的 li 添加样式。
    let li = ol.querySelector(".current");
    li.classList.remove("current");
    ol.children[index].classList.add("current");
  });

  /* 
    4. 手动拖动轮播图
           元素的当前位置 = 元素的初始位置 + 手指的移动距离
           手指的移动距离 = 手指移动时坐标 -  手指触摸时的坐标
  */
  // 手指的起始坐标
  let startX = null;
  // 触点移动距离
  let moveX = null;
  ul.addEventListener("touchstart", function (e) {
    // 停止定时器
    clearInterval(timer);
    // 触点的起始坐标
    startX = e.targetTouches[0].pageX;
    console.log(startX);
  });

  // 手指移动的时候触发
  ul.addEventListener("touchmove", function (e) {
    // 触点移动时当前坐标
    let currentX = e.targetTouches[0].pageX;

    //  触点移动的距离  =  触点当前坐标 -  触点的起始坐标
    moveX = currentX - startX;

    let translatex = -index * width + moveX; //每次移动距离
    // 过渡的样式
    ul.style.transition = "none";
    // 滚动函数
    ul.style.transform = `translateX(${translatex}px)`;
  });

  // 5. 手指离开，播放上一张、下一张图片
  //  手指离开屏幕，判断拖动的距离，
  //  如果大于某个值，则播放下一张(上一张)
  //  如果小于某个值，则回弹。
  ul.addEventListener("touchend", function () {
    // 往右拖动
    if (moveX > 100) {
      index--;
    } // 往左拖动
    else if (moveX < -100) {
      index++;
    } else {
      // 6.回弹(不需要动作)
    }
    let translatex = -index * width; //每次移动距离
    // 过渡的样式
    ul.style.transition = "all 0.5s";
    // 滚动函数
    ul.style.transform = `translateX(${translatex}px)`;

    // 7. 开启自动轮播
    timer = setInterval(function () {
      index++;
      let translatex = -index * width; //每次移动距离
      // 过渡的样式
      ul.style.transition = "all 0.5s";
      // 滚动函数
      ul.style.transform = `translateX(${translatex}px)`;
    }, 1500);
  });

  // 8. 返回顶部
  let goBack = document.querySelector(".goBack");
  window.addEventListener("scroll", function () {
    //  页面滚动的距离
    // console.log(window.pageYOffset);
    if (window.pageYOffset > 100) {
      goBack.style.display = "block";
    } else {
      goBack.style.display = "none";
    }
  });
  // 点击返回顶部
  goBack.addEventListener("click", function () {
    window.scroll(0, 0);
  });
});
