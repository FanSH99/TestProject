<template>
  <div>
    <div>
      <p>基础倒计时</p>
      <van-count-down :time="time" />
    </div>
    <div>
      <p>自定义格式</p>
      <van-count-down :time="time" format="DD 天 HH 时 mm 分 ss 秒" />
    </div>
    <div>
      <p>毫秒级渲染</p>
      <van-count-down millisecond :time="time" format="HH:mm:ss:SS" />
    </div>
    <div>
      <p>自定义样式</p>
      <van-count-down :time="time">
        <template #default="timeData">
          <span class="block">{{ timeData.hours }}</span>
          <span class="colon">:</span>
          <span class="block">{{ timeData.minutes }}</span>
          <span class="colon">:</span>
          <span class="block">{{ timeData.seconds }}</span>
        </template>
      </van-count-down>
    </div>
    <div>
      <p>手动计时</p>
      <van-count-down
        ref="countDown"
        millisecond
        :time="3000"
        :auto-start="false"
        format="ss:SSS"
        @finish="finish"
      />
      <van-grid clickable>
        <van-grid-item text="开始" icon="play-circle-o" @click="start" />
        <van-grid-item text="暂停" icon="pause-circle-o" @click="pause" />
        <van-grid-item text="重置" icon="replay" @click="reset" />
      </van-grid>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      time: 30 * 60 * 60 * 1000,
    };
  },
  methods: {
    start() {
      this.$refs.countDown.start();
    },
    pause() {
      this.$refs.countDown.pause();
    },
    reset() {
      this.$refs.countDown.reset();
    },
    finish() {
      Toast("倒计时结束");
    },
  },
};
</script>
<style>
.colon {
  display: inline-block;
  margin: 0 4px;
  color: #ee0a24;
}
.block {
  display: inline-block;
  width: 22px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #ee0a24;
}
</style>