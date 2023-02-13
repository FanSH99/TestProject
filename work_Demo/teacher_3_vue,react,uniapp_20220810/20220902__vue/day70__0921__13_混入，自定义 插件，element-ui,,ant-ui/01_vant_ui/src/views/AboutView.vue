<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <p>关闭图标</p>
      <button @click="showPopup">底部展示弹出层</button>
    <van-popup v-model="show" closeable position="bottom" close-icon-position="top-right" :style="{height: '30%' }">
      <p>内容</p>
    </van-popup>
    
    </div><br>
    <div>
      <button @click="showPopup2">右侧展示弹出层</button>
      <van-popup v-model="show2" closeable position="right" close-icon-position="top-right" :style="{width:'150px',height: '100%' }">
        <p>内容</p>
      </van-popup>
    </div><br>
    <div>
    <p>关闭图标</p>
    <button @click="showPopup3">顶部展示弹出层</button>
    <van-popup v-model="show3" closeable position="top" close-icon-position="top-right" :style="{height: '30%' }" round="true">
      <p>内容</p>
    </van-popup>
    
    </div><br>
    <div>
      <button @click="showPopup4">左侧展示弹出层</button>
      <van-popup v-model="show4" closeable position="left" close-icon-position="top-right"
        :style="{width:'150px',height: '100%' }">
        <p>内容</p>
      </van-popup>
    </div><br>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      show2: false,
      show3: false,
      show4: false,
    };
  },

  methods: {
    showPopup() {
      this.show = true;
    },
    showPopup2() {
      this.show2 = true;
    },
    showPopup3() {
      this.show3 = true;
    },
    showPopup4() {
      this.show4 = true;
    },
  },
};
</script>
<style>
.van-popup{
  box-sizing: border-box;
  padding:50px 10px;

}
</style>
