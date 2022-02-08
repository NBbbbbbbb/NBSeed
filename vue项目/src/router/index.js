import Vue from "vue"
import VueRouter from "vue-router"
import Home from "@/pages/Home/Home.vue"
import Register from "@/pages/Register/Register.vue"
import Login from "@/pages/Login/Login.vue"
import Search from "@/pages/Search/Search.vue"

// 重写push
const lastPush = VueRouter.prototype.push
VueRouter.prototype.push = function (location, onComplate = () => {}, onAbort = () => {}) {
    return lastPush.call(this, location, onComplate, onAbort)
}
// 重写replace
const lastReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function (location, onComplate = () => {}, onAbort = () => {}) {
    return lastReplace.call(this, location).then(onComplate).catch(onAbort)
}

Vue.use(VueRouter)
export default new VueRouter({
    routes: [{
            name: "home",
            path: "/home",
            component: Home,

        },
        {
            name: "login",
            path: "/login",
            component: Login,
            meta: {
                FooterIsShow: true
            }

        },
        {
            name: "register",
            path: "/register",
            component: Register,
            meta: {
                FooterIsShow: true
            }
        },
        {
            name: "search",
            path: "/search/:searchKey？",
            component: Search,

        },
        {
            path: "/",
            redirect: "/home"
        }
    ]
})