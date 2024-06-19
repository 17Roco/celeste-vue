import { createApp } from 'vue'

// pinia
import {createPinia} from "pinia";
// router
import router from "@/router";
// element-plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
// vueMarkdownEditor
import '@wangeditor/editor/dist/css/style.css' // 引入 css


import App from './App.vue'

createApp(App)
    .use(createPinia())
    .use(router)
    .use(ElementPlus)
    .mount('#app')
