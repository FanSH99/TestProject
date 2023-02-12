<template>
  <div class="home">
    <h1>首页</h1>
    <van-button type="danger" :text="'哈哈哈'" color="#b4b4b4" icon="arrow-left" block @touchstart="start" @click="isShow=true"></van-button>
    <van-button loading type="info" loading-text="加载中..." :disabled='true' />
    <van-button type="warning" loading>
       <template #icon>
           <van-icon name="fire-o" />
       </template>
       <template #loading>
          加载中哈哈哈...
       </template>
    </van-button>
    <van-cell title="单元格" is-link />
<van-cell title="单元格" is-link value="内容" />
<van-cell title="单元格" is-link arrow-direction="down" value="内容" />

<van-cell-group title="第一组" :border="false">
  <van-cell title="哈哈哈" value="更多" label='嘿嘿嘿'/>
  <van-cell title="单元格" value="内容">
    <template #icon>
      <van-icon name="setting-o" />
    </template>
  </van-cell>
</van-cell-group>
<van-popup  :style="{ height: '100%' }" v-model="isShow" position="right" @close="hanldeClose">
  我是弹出层
</van-popup>
<van-button @click="show">Toast</van-button>
  </div>
</template>

<script>
import {Toast,ImagePreview} from 'vant'
export default {
  name: "HomeView",
  data(){
    return{
      isShow:false
    }
  },
  methods:{
    start(){
      ImagePreview(['https://img01.yzcdn.cn/vant/apple-1.jpg']);
      console.log("开始触摸")
    },
    hanldeClose(){
      console.log("我要关闭弹出层")
    },
    show(){
      // Toast.loading("加载中...")
      // Toast.success("成功")
      Toast({
        type:"loading",
        message:"loading...",
        overlay:true,
        forbidClick:true,
        duration:0
      })
      setTimeout(()=>{
        Toast.clear();
      },2000)
    }
  }
};
</script>
