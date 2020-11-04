// 创建vue实例
import Vue from 'vue'
import App from './App.vue'
import createRouter from './router'

// 工厂
export default function createApp(){
    const router = createRouter();
    const app = new Vue({
        router,
        router: h=>h(App)
    })
    return {
        app,
        router
    }
}