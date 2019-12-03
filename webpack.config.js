//由于 webpack 是基于node 进行构建的 所有 webpack 配置文件中，任何合法的node代码都是支持的
var path = require('path')

//在内存中，根据指定的模板页面，生成一份内存中的首页，同时将打包好的bundle 注入到页面底部
//如果要配置插件，需要挂载一个节点
var htmlWebpackPlugin = require('html-webpack-plugin')

//vue 版本 "vue-loader": "^15.7.2", 15之后需要指定节点
var VueLoaderPlugin = require('vue-loader/lib/plugin')

//当以命令行形式运行 webpack 和 webpack-dev-server 的时候，工具会发现，我们并没有提供要打包
//的文件入口和出口文件，它会检查项目根目录中的配置文件，并读取这个文件，就拿到了导出的这个配置对象
//然后 根据这个对象，进行打包
module.exports = {
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path: path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    plugins:[       //所有 webpack 插件配置节点
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),   //指定模板文件路径
            filename:'index.html'   // 设置生成的内存页面名称
        }),

        new VueLoaderPlugin()   //vue版本指定
        
    ],
    module:{    //配置所有第三方 loader 模块
        rules: [
            { test: /\.css$/ , use:['style-loader','css-loader']},   //处理css文件的

            { test:/\.less$/ , use:['style-loader','css-loader','less-loader']}, //处理less 文件

            { test:/\.scss$/ , use:['style-loader','css-loader','sass-loader']}, //处理 sass 文件

            { test:/\.(jpg|png|gif|bmp|jpeg)$/ , use:'url-loader?limit=10000&name=[hash:8]-[name].[ext]'},  //处理图片
            //limit 给的值是图片大小 单位是byte 如果给定的值小于或等于图片的值则不会转化为base64,否则就会转为base64,
            //name=[name].[ext] 按原文件名称和格式输出
            //[hash:8] 防止图片重名
            { test:/\.(ttf|eot|svg|woff|woff2)$/, use:'url-loader'}, //处理字体
            { test:/\.js$/,use:'babel-loader',exclude:/node_modules/},//配置 Bable 转换高级语法
            { test:/\.vue$/, use:'vue-loader'}      //处理vue 文件
        ]
    },
    resolve:{
        alias:{     //修改vue导入时候的包的路径
            "vue$":"vue/dist/vue.js"
        }
    }
}