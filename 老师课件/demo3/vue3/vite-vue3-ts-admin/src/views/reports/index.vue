<template>
  <div>
    <div id="reports" ref="reports">

    </div>
  </div>
</template>
<script lang='ts' setup>
// 引入echarts
import * as echarts from 'echarts';
import { onMounted, reactive, ref } from 'vue';
import {getReportsList} from '../../api/user'
let reports = ref();

onMounted(async ()=>{
  let res = await getReportsList();
  console.log(res)
  // 初始化echarts
  let myreports = echarts.init(reports.value);
  let option = {
  title: {
    text: '数据统计'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      areaStyle: {
        color:"rgb(11,11,111)"
      },
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      label: {
        show: true,
        position: 'top'
      },
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
};
option.legend = res.data.data.legend
option.series = res.data.data.series;
option.xAxis  = res.data.data.xAxis;
option.yAxis =res.data.data.yAxis
  myreports.setOption(option)
  // echarts适配
  // 当浏览器窗口大小改变时调用
  window.onresize = function(){
    // 自动适配
    myreports.resize();
  }
})
</script>
<style scoped>
#reports{
  width: 100%;
  height: 400px;
  margin: 10px 0;
}
</style>