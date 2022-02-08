module.exports={
    /* 配置eslint规则流程 
          package.js中或eslint.config.js中寻找配置
          去eslint官网查找详细规则 0-关闭 1-警告 2-报错
          规则配置在配置项中
    */

    /* 
    关闭eslint检测      
          直接在vue.config.js中书写lintOnSave:false
          书写注释 ： // eslint-disable-next-line 忽略下一行
          书写注释 ： /*eslint-disable////忽略下面所有
    */
    lintOnSave:false,


    //配置跨域代理服务器
    devServer:{
          proxy:{
              "/agency":{
                    target:"http://39.98.123.211",
                    changeOrigin:true,
                    pathRewrite:{
                          "^/agency":""
                    }
              }  
          }
    }
}