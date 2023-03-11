<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/button">Button</router-link> |
      <router-link to="/icon">Icon</router-link> |
      <router-link to="/table">Table</router-link> |
      <router-link to="/key">Key</router-link> |
      <router-link to="/form">Form</router-link> |
      <router-link to="/menu">Menu</router-link> |
      <router-link to="/time">Time</router-link> |
      <router-link to="/skeleton">Skeleton</router-link> |
      <router-link to="/step">Step</router-link> |
      <router-link to="/tab">Tab</router-link> |
      <router-link to="/card">Card</router-link> |
      <router-link to="/free">Free</router-link> |
      <router-link to="/goods">Goods</router-link> |
    </nav>
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  width: 90%;
  margin: auto;
  color: #2c3e50;
}

nav {
  padding: 30px;
  width: 100%;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
