import axios from "@/utils/request.js"

export const requestCategoryList = () => {
    return axios.get("/product/getBaseCategoryList")
}