import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import { createPinia } from 'pinia'
import App from './App.vue';
import router from "./router.ts";
import { createI18n, type I18nOptions } from 'vue-i18n'

/**
 * import locale messages resource from json for global scope
 */
import enUS from './i18n/locales/en-US.json'
import zhCN from './i18n/locales/zh-CN.json'

const options: I18nOptions = {
    legacy: false,
    locale: 'zh-CN',
    fallbackLocale: 'en-US',
    messages: {
        'en-US': enUS,
        'zh-CN': zhCN
    },
    datetimeFormats: {
        'zh-CN': {
            short: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZoneName: 'short',
                timezone: 'Asia/Shanghai'
            }
        }
    },
    numberFormats: {
        'zh-CN': {
            currency: {
                style: 'currency',
                currencyDisplay: 'symbol',
                currency: 'CNY'
            }
        }
    }
}

const i18n = createI18n<false, typeof options>(options)

createApp(App)
    .use(i18n)
    .use(ArcoVue)
    .use(router)
    .use(createPinia())
    .mount('#app')
