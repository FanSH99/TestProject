<template>
  <div>
    <div>
      <p>默认菜单</p>
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>
    </div>
    <div>
      <p>自定义菜单</p>
      <van-dropdown-menu>
        <van-dropdown-item v-model="value" :options="option" />
        <van-dropdown-item title="筛选" ref="item">
          <van-cell center title="包邮">
            <template #right-icon>
              <van-switch v-model="switch1" size="24" active-color="#ee0a24" />
            </template>
          </van-cell>
          <van-cell center title="团购">
            <template #right-icon>
              <van-switch v-model="switch2" size="24" active-color="#ee0a24" />
            </template>
          </van-cell>
          <div style="padding: 5px 16px">
            <van-button type="danger" block round @click="onConfirm">
              确认
            </van-button>
          </div>
        </van-dropdown-item>
      </van-dropdown-menu>
    </div>
    <div>
      <p>自定义选中状态颜色</p>
      <van-dropdown-menu active-color="#1989fa">
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>
    </div>
    <div>
      <p>向上展开</p>
      <van-dropdown-menu direction="up">
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>
    </div>
    <div>
      <p>禁用菜单</p>
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" disabled :options="option1" />
        <van-dropdown-item v-model="value2" disabled :options="option2" />
      </van-dropdown-menu>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      value1: 0,
      value2: "a",
      option1: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 },
      ],
      option2: [
        { text: "默认排序", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" },
      ],
      value: 0,
      switch1: false,
      switch2: false,
      option: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 },
      ],
    };
  },
  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    },
  },
};
</script>
<style>
</style>