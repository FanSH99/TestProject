<template>
  <div>
    <div id="box" ref="box">

    </div>
  </div>
</template>
<script>
export default{
    mounted(){
          // 创建百度地图实例
    let map = new BMapGL.Map(this.$refs.box);
    console.log(map)
    // 设置地图坐标
    var point = new BMapGL.Point(116.404, 39.915);
    //  初始化地图
    map.centerAndZoom(point, 15); 
    map.enableScrollWheelZoom(true);  
   // map.setMapType(BMAP_EARTH_MAP);      // 设置地图类型为地球模式
//     map.setHeading(90);   //设置地图旋转角度
// map.setTilt(90);  
var scaleCtrl = new BMapGL.ScaleControl();  // 添加比例尺控件
map.addControl(scaleCtrl);
var zoomCtrl = new BMapGL.ZoomControl();  // 添加缩放控件
map.addControl(zoomCtrl);
var cityCtrl = new BMapGL.CityListControl();  // 添加城市列表控件
map.addControl(cityCtrl);  
var p1 = new BMapGL.Point(116.301934,39.977552);
        var p2 = new BMapGL.Point(116.508328,39.919141);
        var driving = new BMapGL.DrivingRoute(map, {renderOptions:{map: map, autoViewport: true}});
        driving.search(p1, p2);
    }
}
</script>
<style>
#box{
  width: 800px;
  height: 400px;
  margin: 0 auto;
}
</style>