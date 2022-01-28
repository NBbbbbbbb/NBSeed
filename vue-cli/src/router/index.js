import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "../pages/Home/index.vue";
import Login from "../pages/Login/index.vue";
import Register from "../pages/Register/index.vue";
import Search from "../pages/Search/index.vue";

const lastPush = VueRouter.prototype.push;
//重写push,把onComplate和onAbort参数设置默认值
VueRouter.prototype.push = function (
  location,
  onComplate = () => {},
  onAbort = () => {}
) {
  // console.log(lastPush);
  //当用户调用push的时候，在我们重写的push内部调用原来的push（注意this指向），传入已经设置好默认值的onComplate和onAbort
  return lastPush.call(this, location).then(onComplate).catch(onAbort);
};

//replace和push同理
//先保存原来的push
const lastReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function (
  location,
  onComplate = () => {},
  onAbort = () => {}
) {
  return lastReplace.call(this, location).then(onComplate).catch(onAbort);
};

export default new VueRouter({
  routes: [
    {
      name: "Home",
      path: "/home",
      component: Home,
    },
    {
      name: "Login",
      path: "/login",
      component: Login,
    },
    {
      name: "Register",
      path: "/register",
      component: Register,
    },
    {
      name: "Search",
      path: "/search",
      component: Search,
    },
    {
      path: "/",
      redirect: "/home", //重定向
    },
  ],
});
