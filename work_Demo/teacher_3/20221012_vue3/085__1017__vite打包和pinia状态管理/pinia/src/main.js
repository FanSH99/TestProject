import { createApp } from 'vue'

import App from './App.vue'

import router from './router'
import { createPinia } from 'pinia'

let pinia = createPinia();
createApp(App).use(router).use(pinia).mount('#app')


// npm create vite@latest my-vue-app -- --template vue