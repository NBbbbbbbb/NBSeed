## react 项目构建

####  1、创建项目

###### 下载react脚手架：

命令： npx create-react-app  文件夹名  

如：npx create-react-app app

###### 启动项目：

命令 npm start 

###### 配置redux

src下创建redux文件夹

actions:根据请求生成指令

reducers:根据指令处理请求操作

store：

###### 

















































创建react脚手架
npm i  antd   引入UI组件库
配置less支持和按需加载样式  (
1、npm i @craco/craco craco-less babel-plugin-import
2、在根目录创建 carco.config.js(在文件中配置
const CracoLessPlugin = require("craco-less");

module.exports = {
    babel: { //支持装饰器
        plugins: [
            [
                "import",
                {
                    "libraryName": "antd",//对哪一个库进行按需引入
                    "libraryDirectory": "es",//样式模块作为ES6模块处理 
                    // "style": 'css' //设置为true即是less 这里用的是css
                    "style": true //设置为true即是less 这里用的是css
                }
            ]
        ]
    },
    plugins: [{
        plugin: CracoLessPlugin,
        options: {
            lessLoaderOptions: {
                lessOptions: {
                    modifyVars: {
                        "@primary-color":"green"
                    },
                    javascriptEnabled: true
                }
            }
        }
    }]
})
)

修改启动命令配置"start": "craco start",