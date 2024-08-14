import { createApp } from 'vue'
import '@/styles/reset.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
// 预览组件以及样式
import VMdPreview from '@kangc/v-md-editor/lib/preview'
import '@kangc/v-md-editor/lib/style/preview.css'
// VuePress主题以及样式（这里也可以选择github主题）
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'

// Prism
import Prism from 'prismjs'
// 代码高亮
import 'prismjs/components/prism-json'
// 选择使用主题
VMdPreview.use(vuepressTheme, {
  Prism
})

createApp(App).use(createPinia()).use(VMdPreview).use(router).mount('#app')
