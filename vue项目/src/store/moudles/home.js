import {
    requestCategoryList,
    requestBanner,
    requestFloor
} from "@/api"
const actions = {
    async getCategoryList(miniStore) {

        const re = await requestCategoryList()
        console.log(re, 22222);


        // if (re.status === 200)
        // if (re.data.code === 200)
        if (re.code === 200)

            miniStore.commit("SET_CATEGORYLIST_STATE", re.data)

    },
    async getBanner(miniStore) {
        const re = await requestBanner()
        if (re.code === 200)
        miniStore.commit("SET_BANNER_STATE", re.data)
    },
    async getFloor(miniStore) {
        const re = await requestFloor()
        if (re.code === 200)
        miniStore.commit("SET_FLOOR_STATE", re.data)
    }

};
const mutations = {
    // 把得到的数据设置给state
    SET_CATEGORYLIST_STATE(state, value) {
        console.log(value, 33333);
        state.categoryList = value
    },
    SET_BANNER_STATE(state, value) {
        state.banner = value
    },
    SET_FLOOR_STATE(state, value) {
        state.floor = value
    },
}

const state = {
    // 初始化三级列表
    categoryList: [],
    banner: [],
    floor: []
};

const getters = {

};

export default {
    actions,
    mutations,
    state,
    getters

};