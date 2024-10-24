import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {viteMockServe} from "vite-plugin-mock";

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
        target: "http://localhost",
        // target:"http://172.21.25.34:80",
        changeOrigin: true, //是否跨域
        rewrite: (path) => path.replace(/^\/api/, ""),
      }
    }
  }
})