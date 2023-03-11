<template>
  <div class="form">
    <div>
      <div>
        <van-radio-group
          v-model="makesel"
          direction="horizontal"
          checked-color="yellow"
        >
          <van-radio name="1" shape="square" checked-color="purple">
            自定义选项1
          </van-radio>
          <van-radio name="2" shape="square" label-disabled
            >自定义选项2</van-radio
          >
          <van-radio name="3" shape="square" label-disabled
            >自定义选项3</van-radio
          >
          <van-radio name="4" shape="square" disabled label-position="left">
            <span>自定义选项4</span>
            <template #icon>
              <van-icon name="chat-o" color="#1989fa" />
            </template>
          </van-radio>
          <van-radio name="5" shape="square" disabled label-position="left">
            <template #default>
              <span>自定义选项5</span>
            </template>
          </van-radio>
        </van-radio-group>
      </div>
      <p>以下为官网复制.....</p>
      <div>
        <p>基础排列</p>
        <van-radio-group v-model="radio">
          <van-radio name="1">单选框 1</van-radio>
          <van-radio name="2">单选框 2</van-radio>
        </van-radio-group>
      </div>
      <div>
        <p>水平排列</p>
        <van-radio-group v-model="sex" direction="horizontal">
          <van-radio name="1">man</van-radio>
          <van-radio name="2">woman</van-radio>
        </van-radio-group>
      </div>
      <div>
        <p>禁用按钮</p>
        <van-radio-group v-model="city" disabled>
          <van-radio name="1">河南</van-radio>
          <van-radio name="2">河北</van-radio>
        </van-radio-group>
      </div>
      <div>
        <p>方形按钮</p>
        <van-radio-group v-model="sel">
          <van-radio name="1" shape="square">单选框 1</van-radio>
          <van-radio name="2" shape="square">单选框 2</van-radio>
        </van-radio-group>
      </div>
      <div>
        <p>自定义颜色</p>
        <van-radio-group v-model="color">
          <van-radio name="1" checked-color="#ee0a24">红色</van-radio>
          <van-radio name="2" checked-color="#ee0a24">蓝色</van-radio>
        </van-radio-group>
      </div>
      <div>
        <p>自定义图标</p>
        <van-radio-group v-model="icon">
          <van-radio name="1">
            单选框 1
            <template #icon="props">
              <img
                class="img-icon"
                :src="props.checked ? activeIcon : inactiveIcon"
              />
            </template>
          </van-radio>
          <van-radio name="2">
            单选框 2
            <template #icon="props">
              <img
                class="img-icon"
                :src="props.checked ? activeIcon : inactiveIcon"
              />
            </template>
          </van-radio>
        </van-radio-group>
      </div>
      <div>
        <p>禁用文本点击</p>
        <van-radio-group v-model="radio">
          <van-radio name="1" label-disabled>单选框 1</van-radio>
          <van-radio name="2" label-disabled>单选框 2</van-radio>
        </van-radio-group>
      </div>
      <div>
        <p>用于table中</p>
        <van-radio-group v-model="radio">
          <van-cell-group>
            <van-cell title="单选框 1" clickable @click="radio = '1'">
              <template #right-icon>
                <van-radio name="1" />
              </template>
            </van-cell>
            <van-cell title="单选框 2" clickable @click="radio = '2'">
              <template #right-icon>
                <van-radio name="2" />
              </template>
            </van-cell>
          </van-cell-group>
        </van-radio-group>
      </div>
    </div>
    <div class="right">
      <div>
        <p>方形</p>
        <van-checkbox v-model="checked" shape="square">复选框</van-checkbox>
      </div>
      <div>
        <p>复选框组</p>
        <van-checkbox-group v-model="result">
          <van-checkbox name="a">复选框 a</van-checkbox>
          <van-checkbox name="b">复选框 b</van-checkbox>
        </van-checkbox-group>
      </div>
      <div>
        <p>水平排列</p>
        <van-checkbox-group v-model="check" direction="horizontal">
          <van-checkbox name="a">复选框 a</van-checkbox>
          <van-checkbox name="b">复选框 b</van-checkbox>
        </van-checkbox-group>
      </div>
      <div>
        <p>限制最大可选数量</p>
        <van-checkbox-group v-model="max" :max="3">
          <van-checkbox name="a">复选框 a</van-checkbox>
          <van-checkbox name="b">复选框 b</van-checkbox>
          <van-checkbox name="c">复选框 c</van-checkbox>
          <van-checkbox name="d">复选框 d</van-checkbox>
          <van-checkbox name="e">复选框 e</van-checkbox>
        </van-checkbox-group>
      </div>
      <div>
        <p>全选与反选</p>
        <van-checkbox-group v-model="selall" ref="checkboxGroup">
          <van-checkbox name="a">复选框 a</van-checkbox>
          <van-checkbox name="b">复选框 b</van-checkbox>
          <van-checkbox name="c">复选框 c</van-checkbox>
        </van-checkbox-group>
        <van-button type="primary" @click="checkAll">全选</van-button>
        <van-button type="info" @click="toggleAll">反选</van-button>
      </div>
    </div>
    <div>
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit"
            >提交</van-button
          >
        </div>
      </van-form>
      <van-form validate-first @failed="onFailed">
        <!-- 通过 pattern 进行正则校验 -->
        <van-field
          v-model="value1"
          name="pattern"
          placeholder="正则校验"
          :rules="[{ pattern, message: '请输入正确内容' }]"
        />
        <!-- 通过 validator 进行函数校验 -->
        <van-field
          v-model="value2"
          name="validator"
          placeholder="函数校验"
          :rules="[{ validator, message: '请输入正确内容' }]"
        />
        <!-- 通过 validator 进行异步函数校验 -->
        <van-field
          v-model="value3"
          name="asyncValidator"
          placeholder="异步函数校验"
          :rules="[{ validator: asyncValidator, message: '请输入正确内容' }]"
        />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit"
            >提交</van-button
          >
        </div>
      </van-form>
      <van-form>
        <van-field name="switch" label="开关">
          <template #input>
            <van-switch v-model="switchChecked" size="20" />
          </template>
        </van-field>
        <van-field name="checkbox" label="复选框">
          <template #input>
            <van-checkbox v-model="checkbox" shape="square" />
          </template>
        </van-field>
        <van-field name="checkboxGroup" label="复选框组">
          <template #input>
            <van-checkbox-group v-model="checkboxGroup" direction="horizontal">
              <van-checkbox name="1" shape="square">复选框 1</van-checkbox>
              <van-checkbox name="2" shape="square">复选框 2</van-checkbox>
            </van-checkbox-group>
          </template>
        </van-field>
        <van-field name="radio" label="单选框">
          <template #input>
            <van-radio-group v-model="radio" direction="horizontal">
              <van-radio name="1">单选框 1</van-radio>
              <van-radio name="2">单选框 2</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <van-field name="stepper" label="步进器">
          <template #input>
            <van-stepper v-model="stepper" />
          </template>
        </van-field>
        <van-field name="rate" label="评分">
          <template #input>
            <van-rate v-model="rate" />
          </template>
        </van-field>
        <van-field name="slider" label="滑块">
          <template #input>
            <van-slider v-model="slider" />
          </template>
        </van-field>
        <van-field name="uploader" label="文件上传">
          <template #input>
            <van-uploader v-model="uploader" />
          </template>
        </van-field>
        <van-field
          readonly
          clickable
          name="picker"
          :value="value"
          label="选择器"
          placeholder="点击选择城市"
          @click="showPicker = true"
        />
        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @confirm="onConfirm"
            @cancel="showPicker = false"
          />
        </van-popup>
        <van-field
          readonly
          clickable
          name="datetimePicker"
          :value="valuen"
          label="时间选择"
          placeholder="点击选择时间"
          @click="showPickern = true"
        />
        <van-popup v-model="showPickern" position="bottom">
          <van-datetime-picker
            type="time"
            @confirm="onConfirmn"
            @cancel="showPickern = false"
          />
        </van-popup>

        <van-field
          readonly
          clickable
          name="area"
          :value="valuecity"
          label="地区选择"
          placeholder="点击选择省市区"
          @click="showArea = true"
        />
        <van-popup v-model="showArea" position="bottom">
          <van-area
            :area-list="areaList"
            @confirm="onConfirmcity"
            @cancel="showArea = false"
          />
        </van-popup>

        <van-field
          readonly
          clickable
          name="calendar"
          :value="valuecal"
          label="日历"
          placeholder="点击选择日期"
          @click="showCalendar = true"
        />
        <van-calendar v-model="showCalendar" @confirm="onConfirmcal" />
      </van-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      checked: "",
      makesel: "1",
      radio: "1",
      sex: "1",
      city: "1",
      sel: "1",
      color: "1",
      icon: "1",
      activeIcon: "https://img01.yzcdn.cn/vant/user-active.png",
      inactiveIcon: "https://img01.yzcdn.cn/vant/user-inactive.png",
      result: ["a"],
      check: ["a"],
      max: ["a"],
      selall: ["a"],
      username: "",
      password: "",
      value1: "",
      value2: "",
      value3: "",
      pattern: /\d{6}/,
      switchChecked: false,
      checkbox: false,
      checkboxGroup: [],
      stepper: 1,
      rate: 3,
      slider: 50,
      uploader: [{ url: "https://img01.yzcdn.cn/vant/leaf.jpg" }],
      value: "",
      columns: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
      showPicker: false,
      valuen: "",
      showPickern: false,
      valuecity: "",
      showArea: false,
      areaList: {}, // 数据格式见 Area 组件文档
      valuecal: "",
      showCalendar: false,
    };
  },
  methods: {
    checkAll() {
      console.log(this.$refs);
      this.$refs.checkboxGroup.toggleAll(true);
    },
    toggleAll() {
      this.$refs.checkboxGroup.toggleAll();
    },
    onSubmit(values) {
      console.log("submit", values);
    },
    // 校验函数返回 true 表示校验通过，false 表示不通过
    validator(val) {
      return /1\d{10}/.test(val);
    },
    // 异步校验函数返回 Promise
    asyncValidator(val) {
      return new Promise((resolve) => {
        Toast.loading("验证中...");

        setTimeout(() => {
          Toast.clear();
          resolve(/\d{6}/.test(val));
        }, 1000);
      });
    },
    onFailed(errorInfo) {
      console.log("failed", errorInfo);
    },
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
    onConfirmn(time) {
      this.valuen = time;
      this.showPickern = false;
    },
    onConfirmcity(values) {
      this.valuecity = values
        .filter((item) => !!item)
        .map((item) => item.name)
        .join("/");
      this.showArea = false;
    },
    onConfirmcal(date) {
      this.value = `${date.getMonth() + 1}/${date.getDate()}`;
      this.showCalendar = false;
    },
  },
};
</script>
<style>
.img-icon {
  height: 20px;
}
.form {
  display: flex;
}
</style>