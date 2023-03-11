import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 这句一定要写
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  mode: "development",
  resolve: {
    alias: [
      {
        find: "@",
        // 需要npm i path
        replacement: path.resolve("src")
      }
    ]
  },
  server: {
    // 主机地址
    host: true,
    // 默认端口是5173
    port: 8080,
    // strictPort为true时直接退出，否则尝试下一个端口号。
    strictPort: false,
    // 自动打开浏览器
    open: true,

  }
})
