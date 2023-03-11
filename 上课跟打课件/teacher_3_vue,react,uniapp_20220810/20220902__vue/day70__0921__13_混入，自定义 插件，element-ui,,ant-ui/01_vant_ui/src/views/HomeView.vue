<template>
  <div class="home">
    <div>
      <p>基础用法</p>
      <van-row>
        <van-col span="8">span: 8</van-col>
        <van-col span="8">span: 8</van-col>
        <van-col span="8">span: 8</van-col>
      </van-row>

      <van-row>
        <van-col span="4">span: 4</van-col>
        <van-col span="10" offset="4">offset: 4, span: 10</van-col>
      </van-row>

      <van-row>
        <van-col offset="12" span="12">offset: 12, span: 12</van-col>
      </van-row>
    </div>
    <br /><br />
    <div>
      <p>设置列间距</p>
      <van-row gutter="20">
        <van-col span="8">span: 8</van-col>
        <van-col span="8">span: 8</van-col>
        <van-col span="8">span: 8</van-col>
      </van-row>
    </div>
    <br /><br />
    <div>
      <p>左对齐</p>
      <van-row type="flex">
        <van-col span="6">span: 6</van-col>
        <van-col span="6">span: 6</van-col>
        <van-col span="6">span: 6</van-col>
      </van-row>

      <p>居中对齐</p>
      <van-row type="flex" justify="center">
        <van-col span="6">span: 6</van-col>
        <van-col span="6">span: 6</van-col>
        <van-col span="6">span: 6</van-col>
      </van-row>

      <p>右对齐</p>
      <van-row type="flex" justify="end">
        <van-col span="6">span: 6</van-col>
        <van-col span="6">span: 6</van-col>
        <van-col span="6">span: 6</van-col>
      </van-row>

      <!-- 两端对齐 -->
      <van-row type="flex" justify="space-between">
        <van-col span="6">span: 6</van-col>
        <van-col span="6">span: 6</van-col>
        <van-col span="6">span: 6</van-col>
      </van-row>

      <!-- 每个元素的两侧间隔相等 -->
      <van-row type="flex" justify="space-around">
        <van-col span="6">span: 6</van-col>
        <van-col span="6">span: 6</van-col>
        <van-col span="6">span: 6</van-col>
      </van-row>
    </div>
    <div>
      <div>
        <p>基础提交订单</p>
        <van-submit-bar
          disabled
          :price="3050"
          button-text="提交订单"
          tip="你的收货地址不支持同城送, 我们已为你推荐快递"
          tip-icon="info-o"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
};
</script>
<style>
</style>
