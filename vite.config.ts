import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // viteMockServe({// 更多配置见最下方
    //   supportTs: true,
    //   logger: false,
    //   mockPath: "./mock/" // 文件位置
    // })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 81,
    open: true,
    proxy: {
      "/api": {
        // target: "http://localhost",
        target:"http://110.40.143.143",
        changeOrigin: true, //是否跨域
        // rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/static":{
        target:"http://110.40.143.143",
        changeOrigin: true, //是否跨域
      }
    }
  }
})