// 渲染首屏
import createApp from './app'


// context哪来的？ 工厂函数，会被调用
export default context=>{
    return new Promise((resolve,reject)=>{
        const {app,router}=createApp();
        // 进入首屏去
        router.push(context.url)
        router.onReady(()=>{
            resolve(app);
        },reject)
    })
}