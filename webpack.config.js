const path = require('path');

const webpack = require('webpack');

const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'boudle.js'
    },
    devServer:{
        open:true,
        port:3000,
        // contentBase:'src',
        hot:true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),

        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        })
    ],
    module:{
        rules:[
            {test:/\.css/,use:['style-loader','css-loader']},
            {test:/\.less/,use:['style-loader','css-loader','less-loader'],},
            {test:/\.(jpg|pbj|gif|bmp|jpeg|png)$/,use:'url-loader?limit=40000&name=[hash:8]-[name].[ext]'},
            //处理图片路径的loader  limit 给定的值,是图片的大小,单位是byte,如果我们引用的图片，大于
            //或等于给定的limit值，则不会被转为base64的字符串，如果小于给定则会被转换为base64位
            {test:/\.(ttf|svg|woff|woff2|eot)$/,use:'url-loader'},//处理文字的配置项
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.vue$/,use:'vue-loader'}
        ]
    },
    resolve:{
        alias:{ //修改vue被导入时候包的路径
            // "vue$":"vue/dist/vue.js"
        }
    }
}