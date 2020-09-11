module.exports = {
    /** 区分打包环境与开发环境
     * process.env.NODE_ENV==='production'  (打包环境)
     * process.env.NODE_ENV==='development' (开发环境)
     * baseUrl: process.env.NODE_ENV==='production'?"https://cdn.didabisai.com/front/":'front/',
     */
    outputDir: 'dist', // where to put static assets (js/css/img/font/...) // 是否在保存时使用‘eslint-loader’进行检查 // 有效值: true | false | 'error' // 当设置为‘error’时，检查出的错误会触发编译失败
    publicPath: '/vue-spotify-music',
    configureWebpack: {
        devServer: {
            open: true,
            host: "0.0.0.0",
            port: 8080,
            hotOnly: false,
            proxy: {
                '/spotify-api': {
                    target: "http://localhost:9000",
                    pathRewrite: {
                        '^/spotify-api': ''
                    },
                    changeOrigin: true,
                    secure: false
                }
            }
        },
        externals: process.env.NODE_ENV === 'production' ? {
            vue: "Vue",
            'vue-router': "VueRouter",
            vuex: "Vuex",
            axios: 'axios'
        } : {}
    },
    css: {
        loaderOptions: {
            sass: {
                data: `
                @import from '~@/style/variables.scss';
                @import from '~@/style/minx.scss';
                `
            }
        }
    }

}