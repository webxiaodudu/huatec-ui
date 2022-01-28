import { createRouter,createWebHistory,RouteRecordRaw } from 'vue-router'

const routes:RouteRecordRaw[] = [
    {
        path:"/",
        component:()=>import('@/views/index/index.vue')
    },
    {
        path:'/page',
        component:()=>import('@/views/home/index.vue'),
        redirect:'icon',
        children:[
            
            {
                path:"/icon",
                component:()=>import('@/views/icon/index.vue')
            },
            {
                path:"/button",
                component:()=>import('@/views/button/index.vue')
            }
        ]
    }

]

export default createRouter({
    routes,
    history:createWebHistory()
});