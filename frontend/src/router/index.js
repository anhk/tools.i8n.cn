import { createRouter, createWebHistory } from "vue-router";

export const routes = [
    {
        path: '/',
        redirect: '/random',
    },
    {
        path: '/random',
        component: () => import('../views/random'),
        meta: { title: '随机密码' }
    }, {
        path: '/calc',
        component: () => import('../views/calc'),
        meta: { title: '计算器' }
    }
]


const router = createRouter({
    history: createWebHistory(), routes
})

export default router