import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import '@arco-design/web-vue/es/icon';
import { createPinia } from 'pinia'
import App from './App.vue';
import router from "./router.ts";
import { createI18n } from 'vue-i18n'
import enUS from './locales/en-US.json'
import zhCN from './locales/zh-CN.json'
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.headers.post['Content-Type'] = 'application/json';
type MessageSchema = typeof enUS

const i18n = createI18n<[MessageSchema], 'en-US' | 'zh-CN'>({
    legacy: false,
    locale: 'zh-CN',
    messages: {
        'en-US': enUS,
        'zh-CN': zhCN
    }
})

createApp(App)
    .use(i18n)
    .use(ArcoVue)
    .use(router)
    .use(createPinia())
    .mount('#app')
