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
        path: '/json',
        component: () => import('../views/json'),
        meta: { title: 'JSON格式化' }
    }
]


const router = createRouter({
    history: createWebHistory(), routes
})

export default router