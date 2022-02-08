import {bannerAxios,floorAxios} from "@/api"

const actions = {
    async getBanner(ministore){
        const bannerval=  await bannerAxios();
        if(bannerval.code===200){
            ministore.commit("SET_BANNER_STATE",bannerval.data)
        }
    },
    async getFloor(ministore){
        const floorval=  await floorAxios();
        if(floorval.code===200){
            ministore.commit("SET_FLOOR_STATE",floorval.data)
        }
    }
}

const mutations = {
    SET_BANNER_STATE(state,value){
        state.banner=value;
    },
    SET_FLOOR_STATE(state,value){
        state.floor=value
    }
}


const state = {
    banner: [],
    floor: []
}


export default {
    actions,
    mutations,
    state
}