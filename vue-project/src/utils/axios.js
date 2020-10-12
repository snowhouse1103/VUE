import axios from "axios"
const BASE_URL = 'https://api.mtnhao.com'

// 不带全局loading的请求实例
export const requestWithoutLoading = createBaseInstance()

// 通用的axios实例
function createBaseInstance(){
    const instance = axios.create({
        baseURL: BASE_URL
    })
    instance.interceptors.response.use(function(){},function(){});
    return instance
}