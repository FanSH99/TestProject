import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 解决vite 打包空白问题
  base:"./",
  mode:"development",
  resolve:{
    // 配置开发目录别名
    alias:[
      {
        find:"@",
        replacement:path.resolve("src")
      }
    ]
  },
  server:{
    host:true,
    port:8080,
    open:true,
    //  跨域处理
    proxy:{
      "/douyu":{
        target:"https://open.douyucdn.cn",
        changeOrigin:true,
        rewrite:(path)=>path.replace(/^\/douyu/,"")
      }
    }
  }
})
