<template>
    <div class="footer">
        <div class="left">
            <div class="title">招生计划</div>
            <div class="echart">
                <dv-border-box-2 :color="['pink', 'green']">
                    <div ref="chart1" class="chart"></div>
                </dv-border-box-2>
            </div>
        </div>
        <div class="right">
            <dv-border-box-11 title="信息安全">
                <div ref="chart2" class="chart chart2"></div>
            </dv-border-box-11>
        </div>
    </div>
</template>
<script>
import * as echarts from 'echarts'
import option from '@/utils/option'
import option2 from '@/utils/option2'
export default {
    data() {
        return {
            option,
            option2
        }
    },
    mounted() {
        // 初始化echarts,渲染后
        // let myChart=echarts.init(document.getElementById("chart"))
        let myChart = echarts.init(this.$refs.chart1)
        myChart.setOption(this.option);
        let myChart2 = echarts.init(this.$refs.chart2);
        myChart2.setOption(this.option2)
    }
}
</script>

<style lang="less">
.footer {
    display: flex;
    height: 175px;
    color: #fff;
    background-color: #000;

    .left {
        flex: 8;
        height: 175px;
    }

    .right {
        flex: 5;
        height: 175px;
    }

}

.title {
    color: #fff;
    width: 100%;
    font-size: 15px;
    text-align: center;
    padding: 8px 0;
}

// .echart {
//     width: 100%;
//     height: 140px;
// }

.chart {
    width: 100%;
    height: 140px;
    padding: 10px;
    box-sizing: border-box;
}

.chart2 {
    height: 125px;
    margin-top: 40px;
}
</style>
