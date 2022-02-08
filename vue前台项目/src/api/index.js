//配置不同访问的api地址

import myAxios from "@/utils/request";
import mockAxios from "@/utils/requertMock";


export const NevtypeAxios = ()=>{
   return myAxios.get("/product/getBaseCategoryList")
}



export const bannerAxios = ()=>{
   return mockAxios.get("/banner")
}


export const floorAxios = ()=>{
   return mockAxios.get("/floor")
}


