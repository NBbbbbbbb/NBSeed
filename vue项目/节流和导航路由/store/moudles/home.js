import {
    requestCategoryList
} from "@/api"
const actions = {
    async getCategoryList(miniStore) {

        const re = await requestCategoryList()
        console.log(re, 22222);


        // if (re.status === 200)
        // if (re.data.code === 200)
            if (re.code === 200)

            miniStore.commit("SET_CATEGORYLIST_STATE", re.data)

    }

};
const mutations = {
    // 把得到的数据设置给state
    SET_CATEGORYLIST_STATE(state, value) {
        console.log(value, 33333);
        state.categoryList = value
    }
};
const state = {
    // 初始化三级列表
    categoryList: []
};

const getters = {

};

export default {
    actions,
    mutations,
    state,
    getters

};