import Vue from "vue";
import Vuex from "vuex"
import  Nav from "@/store/modules/Home/NavType"
import  Mock from "@/store/modules/Mock/Mock"

Vue.use(Vuex);

const actions = {
    
}

const mutations = {

}

const state = {

}


export default new Vuex.Store({
    actions,
    mutations,
    state,
    modules:{
        Nav,
        Mock
    }
})