import axios, {AxiosRequestConfig} from 'axios'

/*curl -u admin:admin -X GET "http://localhost:8080/confluence/rest/api/content?type=blogpost&start=0
&limit=10&expand=space,history,body.view,metadata.labels" | python -mjson.tool*/

const DocRequestService = axios.create({
    baseURL: 'http://192.168.2.219:8090/confluence/rest/api/',
    // headers: {'Authorization': basicAuth},
    auth: {
        username: 'sgw',
        password: '123456'
    }
})


DocRequestService.interceptors.request.use((config: AxiosRequestConfig) => {
    console.log('request url is =====>', config.url)
    return config
}, error => {
    console.log('====>', error)
    return Promise.reject(error)
})


DocRequestService.get("/content", {
    params: {type: 'blogpost', start: 0}
}).then(res => {
    console.log(res.data)
})
