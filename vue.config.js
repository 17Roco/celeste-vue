const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave:false,
    publicPath: './',
    outputDir: 'dist',
    devServer:{
        port:8080,
        proxy: {
            '/api':{
                // pathRewrite:{'^/api':'/api'},
                target:'http://localhost',
                host:'172.18.249.49',
                changeOrigin:true,

            }
        }
    }
})
