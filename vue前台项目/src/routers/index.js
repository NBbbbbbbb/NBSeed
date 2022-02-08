import Vue from "vue";
import VueRouter from "vue-router";

//主页
import Home from "@/pages/Home"
//登录
import Logins from "@/pages/Logins"
import Scan from "@/pages/Logins/pages/Scan"
import Account from "@/pages/Logins/pages/Account"

//注册
import Register from "@/pages/Register"

//搜索
import Search from "@/pages/Search"

Vue.use(VueRouter)
export default new VueRouter({
    routes: [{
        //主页
        name: "home",
        path: "/home",
        component: Home,
    }, {
        path: "/",
        redirect: "/home",
    }, {
        //登录
        name: "login",
        path: "/login",
        component: Logins,
        redirect: "/login/scan",
        meta: {
            isShow: true
        },
        children: [{
                name: "scan",
                path: "scan",
                component: Scan,
                meta: {
                    isShow: true
                }
            },
            {
                name: "account",
                path: "account",
                component: Account,
                meta: {
                    isShow: true
                }
            }
        ]
    }, {
        //注册
        name:"register",
        path: "/register",
        component: Register,
        meta: {
            isShow: true
        }
    }, {
        //搜索
        name:"Search",
        path: "/Search/:val?",
        component: Search,
        props(route){
            return{
                ...route.query
            }
        }
    }]
})