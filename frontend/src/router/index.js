import {createRouter, createWebHistory} from "vue-router";

export const routes = [
    {
        path: '/',
        redirect: '/clock',
    },
    {
        path: '/clock',
        component:()=>import('../views/clock'),
        meta: {title:'Clock'}
    },
    {
        path: '/random',
        component: () => import('../views/random'),
        meta: {title: '随机密码'}
    }, {
        path: '/json',
        component: () => import('../views/json'),
        meta: {title: 'JSON格式化'}
    }, {
        path: '/calculator',
        component: () => import('../views/calculator'),
        meta: {title: '计算器'}
    }
]


const router = createRouter({
    history: createWebHistory(), routes
})

export default router