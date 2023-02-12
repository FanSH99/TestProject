import { createApp } from 'vue'
import App from './coures/11_nextTick的使用.vue'
import oneChild from '@/components/oneChild.vue';
// 全局注册组件
// createApp(App).component("onchild",oneChild).mount('#app')
let app = createApp(App);
// 全局注册vue组件
app.component("oneChild",oneChild);
// 全局自定义指令
app.directive("fontsize",{
    mounted(el,data){
        el.style.fontSize = data.value
    }
})
app.mount("#app")
