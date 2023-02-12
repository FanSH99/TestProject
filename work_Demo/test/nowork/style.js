/*思路：第一步：当页面加载完后，获取所要操作的节对象第二步：为document添加一个滚轮滚动事件第三步：滚轮滚动切换获取当前浏览器可视区域的高度var viewHeight = document.body.clientHeight滚轮切换的目的：就是更改bigBox的top值top:最大0top:最小 viewHeight*-4从上到下或从下到上：最多走4次(5个页面) 每一次走viewHeight控制的关键点：索引 定一个索引 2滚轮↓索引+1滚轮↑索引-1bigBox.style.top = -索引*viewHeihgt 
*/
var bigBox = document.getElementById("bigBox");//获取bigBox节点对象
var lis = document.querySelectorAll(".controls li");//获取所有的li节点对象
var viewHeight = document.body.clientHeight;//获取当前页面高度
var flag = true;//设置开关
var index = 0;//设置索引
//封装事件,兼容浏览器
function on(obj, eventType, fn) {
    if (obj.addEventListener) { obj.addEventListener(eventType, fn); } else { obj.attachEvent("on" + eventType, fn); }
}
//鼠标滚动事件处理函数
function handler(e) {
    var _e = window.event || e; if (flag) {
        flag = false; if (_e.wheelDelta == 120 || _e.detail == -3) {//如果鼠标滚轮向上滚动，detail为火狐判断条件index--;if(index<0){index = 0;}}else{//向下滚动index++;if(index>lis.length-1){//如果索引大于页面数，就是滚到最后一张页面时，再滚动鼠标页面不再滚动index = lis.length-1;}}bigBox.style.top = -index*viewHeight + "px";//bigBox整体上移index个页面for(var i=0; i<lis.length; i++){lis[i].className = "";//重置全部li的类}lis[index].className = "active";//设置当前li的类名setTimeout(function(){//页面滚动间隔一秒，防止滚动太快flag = true;//重新开启开关},1000);}
        }
        on(document, "mousewheel", handler);//滚轮滚动事件
        on(document, "DOMMouseScroll", handler);//滚轮滚动事件，适配火狐浏览器
        //数字标签点击处理
        for (var i = 0; i < lis.length; i++) {
            lis[i].tag = i; lis[i].onclick = function () { for (var j = 0; j < lis.length; j++) { lis[j].className = ""; } lis[this.tag].className = "active"; bigBox.style.top = -this.tag * viewHeight + "px"; }
        }
    }
}