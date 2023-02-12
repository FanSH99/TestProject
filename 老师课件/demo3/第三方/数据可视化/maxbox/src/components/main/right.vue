<template>
    <div>
       <div class="box">
        <dv-border-box-13>
            <div class="title">
            生源信息
        </div>
        <div class="tubiao">
            <dv-scroll-ranking-board :config="config" style="width:100%;height:150px" />
        </div>
        </dv-border-box-13>
       </div>
       <div class="box">
          <dv-border-box-10>
            <div class="title">
            高薪榜单
        </div>
        <div class="tubiao">
            <dv-scroll-board :config="config1" style="width:100%;height:150px" />
        </div>
          </dv-border-box-10>
       </div>
       <div class="box">
        <dv-border-box-8 :reverse="true">
            <div class="title">
            就业区域
        </div>
        <div class="tubiao">
            <dv-active-ring-chart :config="config2" style="width:100%;height:150px" />
        </div>
        </dv-border-box-8>
       </div>
    </div>
  </template>
  
  <script>
  import config from '@/utils/tubiao3'
  import config1 from "@/utils/tubao4"
  import config2 from '@/utils/tubiao5'
  export default {
    data () {
      return {
        config:config,
        config1:config1,
        config2:config2
      }
    },
    components: {
  
    },
    mounted() {
  
    },
    methods: {
  
    },
  }
  
  </script>
  <style scoped lang='less'>
  .box{
      width: 100%;
      height: 210px;
      margin-bottom: 10px;
      padding:0 5px;
  }

.title{
    width: 100%;
    text-align: center;
    font-size: 15px;
    color: #fff;
    padding: 14px 0;
    padding-bottom: 5px;
}
.tubiao {
    width: 100%;
    padding: 0 10px;
}
  </style>