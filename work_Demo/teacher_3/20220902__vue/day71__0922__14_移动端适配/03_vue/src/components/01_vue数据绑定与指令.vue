<template>
  <div>
    <h1>{{ msg }}</h1>
    <!-- 数据绑定可以写表达式。 -->
    <h3>{{ isSex ? "女" : "男" }}</h3>
    <p v-text="text"></p>
    <p v-text="html"></p>
    <p v-html="html"></p>
    <ul>
      <li v-for="(item, index) in 10" :key="index">{{ item }}</li>
    </ul>
    <dl>
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </dl>
    <ul>
      <li v-for="(item, index) in user" :key="index">
        {{ item.name }} ---<span v-if="item.age > 18">大于18</span
        ><span v-else>小于18</span>
      </li>
    </ul>
    <p v-if="age > 18">{{ age }}大于18</p>
    <p v-else>{{ age }}小于18</p>
    <p v-show="age < 10">呵呵哈哈哈或</p>
    <a :href="href">百度一下</a>
    <p v-bind:class="classname">v-bind绑定属性</p>
    <div data-id="123">自定义属性</div>
    <button @click="clickMe">点击事件</button
    ><button @click="changeAge">age++</button>
    <input type="text" name="" id="" v-model="msg">
  </div>
</template>
<script>
/* vue中的data必须是一个函数，，data存放的是响应式数据。 */
export default {
  name: "",
  data() {
    return {
      msg: "好好学习天天向上",
      isSex: true,
      age: "15",
      text: "哈哈哈哈",
      href: "https://www.baidu.com",
      html: "<h2>这是一个段落</h2>",
      list: ["首页", "购物车", "我的"],
      classname: "red",
      user: [
        {
          name: "白浅",
          age: "18",
          sex: "女",
        },
        {
          name: "花千骨",
          age: "16",
          sex: "女",
        },
        {
          name: "墨渊",
          age: "20",
          sex: "男",
        },
      ],
    };
  },
  methods: {
    clickMe() {
      alert("你点我了");
    },
    changeAge() {
      this.age++;
    },
  },
};
</script>
<style>
.red {
  color: red;
}
</style>