import {createRouter, createWebHistory} from "vue-router";
// import {loadLocaleMessages, setI18nLanguage, SUPPORT_LOCALES} from "./i18n/index.ts";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Index",
            component: () => import("./pages/Index.vue"),
        },
        {
            path: "/register",
            name: "Register",
            component: () => import("./pages/Register.vue"),
        },
        {
            path: "/login",
            name: "Login",
            component: () => import("./pages/Login.vue"),
        },
    ],
})
// navigation guards
// router.beforeEach(async (to, from, next) => {
//     const paramsLocale = to.params.locale.toString();
//
//     // use locale if paramsLocale is not in SUPPORT_LOCALES
//     if (!SUPPORT_LOCALES.includes(paramsLocale)) {
//         return next(`/${locale}`)
//     }
//
//     // load locale messages
//     if (!i18n.global.availableLocales.includes(paramsLocale)) {
//         await loadLocaleMessages(i18n, paramsLocale)
//     }
//
//     // set i18n language
//     setI18nLanguage(i18n, paramsLocale)
//
//     return next()
// })
export default router;