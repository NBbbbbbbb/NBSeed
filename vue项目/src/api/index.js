import axios from "@/utils/request.js"
import mockAxios from "@/utils/requestMock"

export const requestCategoryList = () => {
    return axios.get("/product/getBaseCategoryList")
}

export const requestBanner = () => {
    return mockAxios.get("/banner")
}

export const requestFloor = () => {
    return mockAxios.get("/floor")
}