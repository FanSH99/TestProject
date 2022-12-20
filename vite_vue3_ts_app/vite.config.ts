import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
// element plus组件
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
//ant desisn vue组件
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  // 解决打包空白问题
  base: "./",
  plugins: [
    vue(),
    // ...按需引入element plus 和 ant design vue，用逗号分开，
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
