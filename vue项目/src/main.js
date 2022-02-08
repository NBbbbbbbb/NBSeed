import Vue from 'vue'
import App from './App.vue'
import store from "@/store/store"
import router from "@/router/index"
import NavType from "@/components/NavType"
import {requestCategoryList} from "@/api/index.js"
import "@/mock/mock"

Vue.config.productionTip = false
Vue.component("NavType", NavType)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

requestCategoryList()