import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // 插件
  plugins: [vue()],
  // 解决vite打包空白问题
  base: "./",
  mode: "development",
  // 给src配置一个别名
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
    // 跨域处理，
    proxy: {
      '/douyu': {
        // 域名
        target: "https://open.douyucdn.cn",
        // 是否开启跨域
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/douyu/, "")
      }
    }
  }
})
