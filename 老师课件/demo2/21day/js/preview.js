window.addEventListener('load', function () {

    //1.查找对象
    var preview_wrap = document.querySelector('.preview_wrap');
    var mask = document.querySelector('.mask');
    var preview_big = document.querySelector('.preview_big');
    var pic_big = document.querySelector('.pic_big');
    var preview = document.querySelector('.preview');


    //2.获取鼠标在小盒子内的坐标 鼠标并在盒子内不断移动

    preview.onmousemove = function (e) {
        e = e || window.event;
        // 2.1 获取鼠标在小盒子内的坐标
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        console.log(x,y);

       //2.2 黄色盒子跟随鼠标在移动,鼠标指针在盒子正中心 mask.offsetWidth/2
    //    mask.style.left=x-mask.offsetWidth/2+'px';
    //    mask.style.top=y-mask.offsetHeight/2+'px';

         var maskx=x-mask.offsetWidth/2;
         var masky=y-mask.offsetHeight/2;
    //    2.3   不想让mask 跑出 小图片的盒子  最小距离和最大移动距离
    // 最小移动距0       最大移动距离  preview.offsetWidth-mask.offsetWidth 
         var  maskMax=preview.offsetWidth-mask.offsetWidth
         console.log(maskMax);
           if(maskx<=0){
            maskx=0

           }else if(maskx>=maskMax){
             maskx=maskMax
           }

           if(masky<=0){
            masky=0

           }else if(masky>=maskMax){
             masky=maskMax
           }

           mask.style.left=maskx+'px';
           mask.style.top=masky+'px';

           //2.4 如何大图跟着mask在移动   比例关系  
        //    最小移距离 0    最大移动距离   大图的宽度-大图所在框的宽度
        // 大图片 移动的最大距离           mask 移动的最大距离
        // -------------------------------=--------------------------
        //    ？                           mask移动的位置 （不断在变化知道）

//  pic_big.style.left=?
//  pic_big.style.top=?
        // 计算大图移动的最大距离
      var bigMax= pic_big.offsetWidth-preview_big.offsetWidth;
      console.log(bigMax,pic_big.offsetWidth,preview_big.offsetWidth);

      // 公式   正方式的图   ，水平和垂直一样的值
     var bigx= (maskx*bigMax)/maskMax;
     var bigy= (masky*bigMax)/maskMax;
      // 赋值
       pic_big.style.left=-bigx+'px';
       pic_big.style.top=-bigy+'px';

    }

















});