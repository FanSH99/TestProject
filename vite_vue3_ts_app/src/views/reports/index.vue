<template>
  <div>
    <div class="echart" ref="echart"></div>
  </div>
</template>
<script lang='ts' setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
import { showMessage } from '../../utils/showMessage';
import { getTableList } from '../../api/table'
import chartData from '../../utils/chartData'
let echart = ref();

let getTable = async () => {

  let res = await getTableList();
  if (res.data.meta.status != 200) {
    showMessage(res.data.meta.msg, "error");
    return chartData;
  }
  else {
    return res.data.data
  }
}

onMounted(async () => {
  let myChart = echarts.init(echart.value);
  let options = await getTable();
  console.log(options);
  myChart.setOption(options)
})


</script>
<style scoped>
.echart {
  width: 100%;
  height: 500px;
}
</style>