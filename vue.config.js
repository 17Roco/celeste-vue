const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave:false,
    devServer:{
        port:8080,
        open: true,
        // overlay: {
        //     warnings: false,
        //     errors: true
        // },
        // before: require('./mock/mock-server.js')
        proxy: {
            '/api':{
                pathRewrite:{'^/api':''},
                target:'http://172.18.249.49',
                host:'172.18.249.49',
                changeOrigin:true,

            }
        }
    }
})
