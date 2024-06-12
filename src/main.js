import { createApp } from 'vue'
import App from './App.vue'

// router
import router from "@/router";
// pinia
import {createPinia} from "pinia";
// element-plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
// vueMarkdownEditor
import '@wangeditor/editor/dist/css/style.css' // 引入 css


createApp(App)
    .use(router)
    .use(createPinia())
    .use(ElementPlus)
    .mount('#app')
