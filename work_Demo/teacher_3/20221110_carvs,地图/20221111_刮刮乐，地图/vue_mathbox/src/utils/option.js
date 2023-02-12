export default {
    color: "#2f89cf",
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    // gird定义表格位置
    grid: {
        left: '0%',
        right: '1%',
        top: "10px",
        bottom: '4%',
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
                show: false,
                lineStyle: {
                    color: 'rgba(255,255,255,0.9)'
                }
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            splitLine: {
                lineStyle: {
                    // 分割线颜色，间隔色
                    // color: ["#aaa", '#ddd']
                    // 分割线颜色，单一颜色
                    color: 'rgba(255,255,255,0.1)'
                }
            },
            // axisLine: {
            //     lineStyle: {
            //         color: 'rgba(255,255,255,0.9)'
            //     }
            // },
            // y轴字体
            axisLabel: {
                color: 'rgba(255,255,255,0.9)',
                fontSize: "12"
            }
        }
    ],

    series: [
        {
            name: '预计招生',
            type: 'bar',
            barWidth: '40%',
            data: [800, 500, 400, 334, 390, 330, 220],
            itemStyle: {
                borderRadius: 5,//设计柱状图圆角
            }
        }
    ]
}