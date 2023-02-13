<template>
  <div>
    <p>带右侧栏键盘</p>
    <van-number-keyboard
      :show="show"
      theme="custom"
      extra-key="."
      close-button-text="完成"
      @blur="show = false"
      @input="onInput"
      @delete="onDelete"
    />
    <div>
      <van-cell plain type="primary" @touchstart.native.stop="show = true">
        弹出身份证号键盘
      </van-cell>
      <van-number-keyboard
        :show="show"
        extra-key="X"
        close-button-text="完成"
        @blur="show = false"
        @input="onInput"
        @delete="onDelete"
      />
    </div>
    <div>
      <van-cell plain type="primary" @touchstart.native.stop="show = true">
        弹出配置多个按键的键盘
      </van-cell>
      <van-number-keyboard
        :show="show"
        theme="custom"
        :extra-key="['00', '.']"
        close-button-text="完成"
        @blur="show = false"
        @input="onInput"
        @delete="onDelete"
      />
    </div>
    <div>
      <van-cell @touchstart.native.stop="show = true">
        弹出配置随机数字的键盘
      </van-cell>
      <van-number-keyboard
        :show="show"
        random-key-order
        @blur="show = false"
        @input="onInput"
        @delete="onDelete"
      />
    </div>
    <div>
      <van-field
        readonly
        clickable
        :value="value"
        @touchstart.native.stop="show = true"
      />
      <van-number-keyboard
        v-model="value"
        :show="show"
        :maxlength="6"
        @blur="show = false"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      value: "",
    };
  },
};
</script>
<style>
</style>
