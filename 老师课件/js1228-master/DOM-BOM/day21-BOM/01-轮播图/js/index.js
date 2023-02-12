window.addEventListener("load", function () {
  console.log(123);
  /* 
    轮播图功能：
        1. 自动轮播
        2. 点击按钮，播放下一张
        3. 点击小圆圈，轮播
        4. 鼠标进入，停止轮播，离开，开启轮播
  */
  let arrowL = document.querySelector(".arrow-l");
  let arrowR = document.querySelector(".arrow-r");
  let focus = document.querySelector(".focus");

  // 1. 鼠标接触，按钮显示
  focus.addEventListener("mouseover", function () {
    arrowL.style.display = "block";
    arrowR.style.display = "block";
    // 停止定时器
    clearInterval(timer);
    timer = null;
  });
  // 1. 鼠标离开，按钮隐藏
  focus.addEventListener("mouseleave", function () {
    arrowL.style.display = "none";
    arrowR.style.display = "none";
    // 开启定时器
    timer = setInterval(() => {
      arrowR.click();
    }, 1500);
  });

  // 获取对应的 ul ol
  let ul = focus.querySelector("ul");
  let ol = focus.querySelector("ol");
  let lis = ul.querySelectorAll("li");

  // 2. 根据 lis 的数量，生成对应的小圆圈。
  for (let i = 0; i < lis.length; i++) {
    let li = document.createElement("li");
    // 添加索引号
    li.setAttribute("index", i);
    ol.append(li);

    ol.children[0].className = "current";
  }

  // 3. 点击小圆圈，改变样式
  let lis1 = ol.querySelectorAll("li");
  // 移动的单位
  let width = focus.offsetWidth;
  for (let i = 0; i < lis1.length; i++) {
    // 循环给每个小圆圈添加点击事件
    lis1[i].addEventListener("click", function () {
      // 清除所有的样式
      for (let j = 0; j < lis1.length; j++) {
        lis1[j].className = "";
      }
      // 当前元素添加样式
      this.className = "current";

      /* 
        4. 点击小圆圈，移动图片(移动的是 ul，而不是 li)
          小圆圈    移动距离
            1        0
            2        1 * width
            3        2 * width
            4        3 * width
      */
      let index = this.getAttribute("index");
      // 8. 计数器同步
      num = index;
      circle = index;
      animate(ul, -index * width);
    });
  }

  // 5. 点击右侧按钮，播放下一张图片
  let num = 0; // 点击的计数器
  let circle = 0; // 小圆圈计数器
  let flag = true; // 动画结束的标识符
  arrowR.addEventListener("click", function () {
    if (flag) {
      flag = false;
      console.log(num);
      if (num == 4) {
        num = 0; // 计数器清零
        ul.style.left = 0 + "px"; // ul 回到最初的位置
      }
      num++;
      animate(ul, -num * width, function () {
        flag = true;
      });

      // 7. 点击按钮，小圆圈样式改变
      circle++;
      // 计数器清零
      if (circle == 4) {
        circle = 0;
      }
      // 清除所有的样式
      for (let j = 0; j < lis1.length; j++) {
        lis1[j].className = "";
      }
      // 当前元素添加样式
      lis1[circle].className = "current";
    }
  });

  // 6. 克隆图片
  let first = ul.children[0].cloneNode(true);
  ul.appendChild(first);

  // 9. 自动轮播
  let timer = setInterval(() => {
    arrowR.click(); // 手动点击右侧按钮
  }, 1500);
});
