<template>
  <div>
    <div>
      <p>基础卡片</p>
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
      />
    </div>
    <div>
      <p>标签卡片</p>
      <van-card
        num="3"
        tag="标签"
        price="199.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
      />
    </div>
    <div>
      <p>自定义内容</p>
      <van-card
        thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
        title="商品标题"
        desc="描述信息"
        tag="特价"
        num="4"
        currency="$"
        price="89.00"
        origin-price="100.00"
        thumb-link="https://www.baidu.com"
      >
        <template #tags>
          <van-tag plain type="danger">标签</van-tag>
          <van-tag plain type="danger">标签</van-tag>
        </template>
        <template #footer>
          <van-button size="mini">按钮</van-button>
          <van-button size="mini">按钮</van-button>
        </template>
      </van-card>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {};
  },
};
</script>
<style>
</style>