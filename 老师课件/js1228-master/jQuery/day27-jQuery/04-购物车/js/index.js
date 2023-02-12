$(function () {
  //   console.log(123);
  /* 
    1. 需求：
        1. 全选(背景颜色-自己完成)
        2. 单选
        3. 选中商品添加背景颜色
        4. 删除当个商品
        5. 删除选中商品
        6. 清空购物车
        7. 更改商品数量
        8. 更加商品价格
    2. 引入 jQuery 和 js    
  */
  // 3. 全选 ：j-checkbox 的状态和 checkall 状态保持一致。
  $(".checkall").change(function () {
    let flag = $(this).prop("checked");
    // console.log(flag);
    // 并集选择器
    $(".j-checkbox, .checkall").prop("checked", flag);

    // 背景色
    if (flag) {
      $(".cart-item").addClass("check-cart-item");
    } else {
      $(".cart-item").removeClass("check-cart-item");
    }

    // 商品总价
    getSum();
  });
  // 4. 单选 ：给每个绑定事件(判断当前被选中商品数量和总数量对比)
  // 商品总数
  let total = $(".j-checkbox").length;
  $(".j-checkbox").change(function () {
    // 选中商品的数量
    let length = $(".j-checkbox:checked").length;
    // 判断
    if (length == total) {
      $(".checkall").prop("checked", true);
    } else {
      $(".checkall").prop("checked", false);
    }

    // 5. 选中商品添加背景色
    // .cart-item 商品的 div    check-cart-item
    if ($(this).prop("checked")) {
      $(this).parents(".cart-item").addClass("check-cart-item");
    } else {
      $(this).parents(".cart-item").removeClass("check-cart-item");
    }

    getSum();
  });

  // 6. 商品加减(绑定点击事件：获取商品当前数量，自加1/自减1,给表单重新赋值)
  $(".increment").click(function () {
    let num = $(this).siblings(".itxt").val();
    num++;
    $(this).siblings(".itxt").val(num);

    count(this, num);
  });
  $(".decrement").click(function () {
    let num = $(this).siblings(".itxt").val();
    if (num == 1) {
      return;
    }
    num--;
    $(this).siblings(".itxt").val(num);

    count(this, num);
  });

  // 8. 修改商品的数量(价格 * 数量 =  小计)
  $(".itxt").blur(function () {
    let num = $(this).val();
    // 数量大于 1
    num = parseInt(num);
    if (num <= 0) {
      num = 1;
      $(this).val(num);
    }
    count(this, num);
  });

  // 7. 修改商品价格(小计模块)
  function count(obj, num) {
    let price = $(obj).parents(".p-num").siblings(".p-price").html();
    price = price.substr(1); // 切割字符串
    price = parseFloat(price); // 转化为 number
    let total = price * num; // 商品总价
    total = total.toFixed(2); // 保留两位小数
    total = "￥" + total; // 字符串拼接
    // 商品小计
    $(obj).parents(".p-num").siblings(".p-sum").html(total);

    getSum();
  }

  getSum();
  // 9. 商品总计
  function getSum() {
    let sum = 0; // 商品总数
    let money = 0; // 商品总价

    // 求商品数量
    $(".check-cart-item")
      .find(".itxt")
      .each(function (index, ele) {
        sum = sum + parseInt($(ele).val());
      });
    // 求商品总价
    $(".check-cart-item")
      .find(".p-sum")
      .each(function (index, ele) {
        //   money = money + parseInt($(ele).val());
        let temp = $(ele).html();
        temp = temp.substr(1);
        temp = parseFloat(temp);
        money = money + temp;
      });
    money = money.toFixed(2);
    // 数量赋值
    $(".amount-sum").children("em").html(sum);
    $(".price-sum")
      .children("em")
      .html("￥" + money);
  }

  // 10. 单个商品的删除
  $(".p-action").click(function () {
    $(this).parent().remove();
    getSum();
  });
  // 删除选中的商品
  $(".remove-batch").click(function () {
    $(".check-cart-item").remove();
    getSum();
  });
  // 清空购物车
  $(".clear-all").click(function () {
    $(".cart-item-list").empty();
    getSum();
  });
});
