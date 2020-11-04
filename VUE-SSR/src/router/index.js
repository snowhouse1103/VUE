import Vue from "vue"
import Router from 'vue-router'

import Index from "@/components/Index"
import Detail from "@/components/Detail"

Vue.use(Router)

// export default new Router 
// 为什么不导出一个router实例呢
// 工厂函数，每次用户请求，都需要创建路由器实例。污染问题。用户A和用户B请求时，每次请求都应该是vue和路由器实例。
export default function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {
                path:'/',
                component: Index
            },
            {
                path:'/detail',
                component: Detail
            }
        ]
    })
}