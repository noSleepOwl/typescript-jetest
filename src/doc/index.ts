import axios, {AxiosRequestConfig} from 'axios'
import {log} from "@M/utils";

const DocRequestService = axios.create({
    baseURL: 'http://192.168.2.219:8090/rest/api',
    auth: {
        username: 'sgw',
        password: '123456'
    }
})


DocRequestService.interceptors.request.use((config: AxiosRequestConfig) => {
    log.info('request url is =====>', config.url)
    return config
}, error => {
    log.error("请求异常", error)
    return Promise.reject(error)
})


export default DocRequestService
