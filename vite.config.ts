import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Inspect from 'vite-plugin-inspect'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Inspect(),
    AutoImport({
      imports: ['vue', '@vueuse/core'],
      resolvers: [NaiveUiResolver()],
      dirs: ['./composables/**'],
      vueTemplate: true
    })
  ],
  // 静态资源基础路径 base: './' : '',
  base: process.env.NODE_ENV === 'production' ? './' : '',
  resolve: {
    alias: {
      // 配置目录别名
      '@': resolve(__dirname, 'src'),
      views: resolve(__dirname, 'src/views'),
      utils: resolve(__dirname, 'src/utils')
    }
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        additionalData: '@import "./src/styles/variable.scss";'
      }
    }
  }
})
