import { createApp } from 'vue'
import App from './course/06_非父子组件通讯.vue'

import oneChild from '@/components/childAll.vue';
import twoChild from '@/components/childAll2.vue';



// createApp(App).mount('#app')
// 方法一，全局注册，挂在createApp上
// createApp(App).component("oneChild", oneChild).mount('#app')

let app = createApp(App);
app.component("oneChild", oneChild);
app.component("twoChild", twoChild);
app.mount("#app");