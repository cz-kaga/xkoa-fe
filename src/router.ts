import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Index",
            component: () => import("./views/index/index.vue"),
        },
        {
            path: "/register",
            name: "UserRegister",
            component: () => import("./views/authentic/register/index.vue"),
        },
        {
            path: "/login",
            name: "UserLogin",
            component: () => import("./views/authentic/login/index.vue"),
        },
        {
            path: "/admin",
            name: "Admin",
            component: () => import("@/views/admin/organization/category/index.vue"),
            children:[
                {
                    path: "category",
                    name: "AdminOrgCate",
                    component: () => import("@/views/admin/organization/category/index.vue"),
                },
            ]
        },
    ],
})
router.beforeEach((to)=>{
    if (to.meta.name != null){
        document.title = to.meta.name.toString()
    }
})
export default router;