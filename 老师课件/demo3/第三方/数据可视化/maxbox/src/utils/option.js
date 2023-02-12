export default {
    color:"#2f89cf",
    tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
    grid: {
        left: '0%',
        top:"10px",
        right: '0%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['web前端开发', 'java开发', 'ui设计', '软件测试', '大数据开发', 'php开发', 'ios开发'],
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                show: false
              },
            axisLabel:{
                color:"#919191",
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            lineStyle:{
                color:"rgba(255,255,255,0,6)"
            },
            splitLine: {
                lineStyle: {
                    // 使用深浅的间隔色
                    color:"rgba(255,255,255,0.1)"
                }
            },
            axisLine:{
                lineStyle:{
                    color:"rgba(255,255,255,0.1)"
                }
            },
            axisLabel:{
                color:"#919191",
                fontSize:"12"
            }
        }
    ],
    series: [
        {
            name: '预计招生',
            type: 'bar',
            barWidth: '40%',
            data: [800, 500, 400, 200, 300, 150, 350],
            itemStyle:{
                // 设置柱状图圆角
                borderRadius: 5, 
            }
        }
    ]
};