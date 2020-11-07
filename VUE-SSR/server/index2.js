// nodejs的服务器
const express = require('express')
const Vue = require('vue')
const fs = require('fs')

// 创建express实例和vue实例
const app = express();
// 创建渲染器
const {createBundleRenderer} = require('vue-server-renderer');
const serverBundle = require('../dist/server/vue-ssr-server-bundle.json');
// 客户端清单
const clientManifest = require('../dist/client/vue-ssr-client-manifest.json');
const renderer = createBundleRenderer(serverBundle,{
    runInNewContext: false,
    template: fs.readFileSync('../public/index.temp.html','utf-8'), //宿主模板
    clientManifest
})


// 需要中间件处理静态文件的请求
// app.use(express.static("../dist/client",{index:false}))
app.use(express.static("../dist/client",{index:false}))


// 将来用渲染器渲染page可以得到html内容
const page = new Vue({
    data: {title:'标题'},
    template: '<div><h1>{{title}}</h1><div>hello,vue ssr!</div></div>'
})

// 路由处理交给vue
app.get('*',async (req,res)=>{
    try {
        const context = {
            url: req.url,
            title: 'ssr test'
        }
        const html = await renderer.renderToString(context);
        console.log(html);
        res.send(html);
    } catch (error) {
        res.status(500).send('服务器内部从无')
    }    
})


app.listen(4000,()=>{
    console.log('渲染服务器启动成功')
})