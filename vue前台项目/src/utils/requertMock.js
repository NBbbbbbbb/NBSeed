import axios from "axios"

import NProgress from "nprogress"
import "nprogress/nprogress.css"
//配置自己的axios

const myAxios = axios.create({
    baseURL: "/mock",
    timeout: 5000
})

//配置拦截器

//请求拦截器
myAxios.interceptors.request.use((config) => {
    //整个请求的配置对象， 1、data发送的数据，2、headers：请求头，3、method：请求方式，4，url：请求地址
    //拦截器必须把config对象return出去，继续请求

    NProgress.start()
    return config
}, (err) => {
    //拦截请求出错， 返回一个失败的promise实例，供axios请求的catch处理
    return Promise.reject(err)
    //当拦截器主动处理这个错误时，就不需要再次传递给axios的catch处理
    //return new Promise(()=>{})
})





//响应拦截器
myAxios.interceptors.response.use((response) => {
    NProgress.done()

    return response.data

}, (err) => {
    return Promise.reject(err)
})

export default myAxios