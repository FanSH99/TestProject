import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


/* 
2022年9月15日18:09:21

1.下载vue vue-loader vue-router webpack webpack-cli webpack-dev-server @vue/cli
注意 @vue/cli全局安装 打开终端cmd,执行命令npm install -g @vue/cli

Vue CLI 4.x 需要 Node.js v8.9 或更高版本 (推荐 v10 以上)。你可以使用 n，nvm 或 nvm-windows 在同一台电脑中管理多个 Node 版本。
如果npm 和node版本不够高，可以升级版本
安装npm命令。

安装成功之后找到终端执行vue --version 或者 vue -V 注意必须大写V 中间是空格隔开。
如果vue不能安装，查看环境变量是否配置成功，先node -v npm -v看是否有版本号。如果有配置环境变量，注意将npm所在的目录添加进去
node配置环境变量如下
找到环境变量--系统变量--变量名：NODE_PATH --变量值：node.exe所在的目录。
点击path --编辑--新建%NODE_PATH% %NODE_PaTH%\node_modules\npm 
如果环境变量配置成功且下载成功但是查看版本还是报错，查看@vue存在的目录是否与提示查找的目录匹配，不匹配的话只需要将所在目录下@vue/cli移动到报错提示的目录下即可。

想要更改npm全局安装的默认下载位置，需要npm config set prefix "上面查看版本时提示的位置"即可

如果终端能够查看vue -V，则可以进行构建了，cd 要构建的跟文件夹 或者直接点击该文件夹上方的目录框全选改为cmd即可打开该文件夹。下面就是具体构建vue-cli项目的步骤
vue create 文件夹名称  ---enter回车--- 点击上下箭头选择想要构建的vue-cli版本 enter回车 全部加载完成即可进入该文件夹查看了。

之后更改App.use中的配置，默认<template>标签中很多内容，全部删除即可，#app的style样式也可删除，component删除，
在component中新建vue页面 ---component文件夹存放组件
src下新建文件夹views ---views文件夹存放页面--一级路由
src下新建文件夹router ---这个文件夹存放路由
views下新建页面。注意script中导出 export default{}，在导出里面写原先写的信息即可，例如data(){return{}},create(){}等，在template中写模板，可以不加id 导出的里面可以不加template:"#id"
在style中写样式。
其他vue页面均同样写法

router中先引入vue 和vue-router 在引入所有vue页面，之后就编写路由
例如import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../views/home.vue';
Vue.use(VueRouter);
let router = new VueRouter({
    routes: [
        {
            name: "home",
            path: "/",
            component: home,
        }
      ])}
在main.js中引入路由router文件
全部搭建好之后 npm run serve之后便可预览，默认不会自动打开浏览器，需要点击
如果报错，
在vue.config.js中添加lintOnSave: false,
报错的原因是vue校验文件名需要全部大驼峰
如果想要自动打开浏览器再添加入
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080
  }

如果template那里有蓝色波浪线警示，需要在jsconfig.json里的  "compilerOptions":里添加一句"jsx":"preserve"，之后就不会报错了。


*/