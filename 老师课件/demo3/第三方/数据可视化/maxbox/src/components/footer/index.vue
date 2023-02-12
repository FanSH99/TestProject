<template>
  <div class="footer">
    <div class="left">
        <div class="title">
            招生计划
        </div>
        <div class="tubiao">
            <dv-border-box-2  :color="['pink', 'green']">
                <div class="tubiao1" ref="chart1">

                </div>
            </dv-border-box-2>
        </div>
    </div>
    <div class="right">
        <dv-border-box-11 title="信息安全">
            <div class="tubiao2" ref="cahrt2">

            </div>
        </dv-border-box-11>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import option from '@/utils/option'
import option1 from '@/utils/option1'
export default {
  data () {
    return {
        option:option,
        option1:option1
    }
  },
  components: {

  },
  mounted() {
    //  初始化图标
    var myChart = echarts.init(this.$refs.chart1);
    // 配置图标
    myChart.setOption(this.option)
    let myChart1 = echarts.init(this.$refs.cahrt2)
    myChart1.setOption(option1)
  },
  methods: {

  },
}

</script>
<style scoped lang='less'>
.footer{
   display: flex;
   .left{
    flex: 8;
    height: 165px;
   }
   .right{
    flex: 5;
    height: 165px;
   }
}
.title {
    width: 100%;
    text-align: center;
    font-size: 15px;
    color: #fff;
    padding: 8px 0;
    // padding-bottom: 0;
}
.tubiao{
    width: 100%;
    height: 130px;
    // border: 1px solid red;
}
.tubiao1{
    width: 100%;
    height: 130px;
    padding:  10px;
}
.tubiao2{
    width: 100%;
    height: 125px;
    margin-top: 40px;
}
</style>