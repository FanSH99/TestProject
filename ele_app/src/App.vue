<template>
  <div id="app">
    
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<style lang="less">
@h: 40px;
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
    Segoe UI, Arial, Roboto, PingFang SC, miui, Hiragino Sans GB,
    Microsoft Yahei, sans-serif;
}
.page {
  margin-top: @h;
  background: #e4e4e4;
  width: 100%;
  height: 100vh;
}
</style>
