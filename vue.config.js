const path = require('path')
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
    outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devdist',
    lintOnSave: true,
    chainWebpack: (config) => {
    },
    configureWebpack: (config) => {
    },

    css: {
        extract: true,
        sourceMap: false,
        loaderOptions: {
            sass: {
                prependData:``
            }
        },
        requireModuleExtension: true
    },



}


// css: {
//     // 是否使用css分离插件 ExtractTextPlugin
//     extract: true,
//     // 开启 CSS source maps?
//     sourceMap: false,
//     // css预设器配置项
//     loaderOptions: {
//         scss: { 
//           prependData: `@import "./src/styles/main.scss";`
//         }
//     },
//     requireModuleExtension: true
//   }