import Vue from 'vue'
import App from '@/App.vue'
import router from "@/routers"
import store from "@/store/index"

import NevType from "@/components/NevType"

import "@/mock/ServerMock"

Vue.config.productionTip = false

Vue.component("NevType",NevType)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
