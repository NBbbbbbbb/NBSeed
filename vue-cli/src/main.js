import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import Navtype from "./components/Navtype/index"
Vue.config.productionTip = false;
Vue.component("Navtype",Navtype)

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
