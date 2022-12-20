import { createApp } from 'vue'

import App from './App.vue'
import './style.css'

import router from './router'
import store from './store'

createApp(App).use(router).use(store).mount('#app')

/* 

C:\WINDOWS\system32>ipconfig /flushdns

Windows IP 配置

已成功刷新 DNS 解析缓存。


按需引入：
1.vite.config.ts中

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
2.
//按需引入element plus组件
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
//按需引入an tdesign vue组件
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
3.
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver(), AntDesignVueResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver(), AntDesignVueResolver()],

    }),
  ],
  server: {
    port: 8080,
    open: true,
    host: true,
  },

})
4.imort {Button} from 'ant-design-vue'等

*/