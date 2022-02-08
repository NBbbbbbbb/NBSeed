import {
    NevtypeAxios
} from "@/api/index"

const actions = {
    async getNevValue(miniStore) {
        //发送请求 获取Newtype的数据
        const re = await NevtypeAxios();
        //若请求成功
        console.log(re.data)
        if (re.code === 200) {
            miniStore.commit("SET_NEVTYPE_TO_STATE", re.data)
        }
    }
};
const mutations = {
    SET_NEVTYPE_TO_STATE(state, val) {
        state.NevTypeValue = val;
    }
};
const state = {
    NevTypeValue: []
};



export default {
    actions,
    mutations,
    state
}