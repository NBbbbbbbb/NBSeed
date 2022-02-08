module.exports = {
    // 配置关闭eslint配置
    lintOnSave: false,
    devServer: {
        port: "8800",
        proxy: "http://39.98.123.211"


        /* proxy: {
            "/api1": {
                target: "http://39.98.123.211",
                changeOrigin: true,
                pathRewrite: {
                    "^/api1": ""
                }
            }
        } */
    }
}