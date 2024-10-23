import axios, {type AxiosInstance} from "axios";
import {ElMessage} from 'element-plus'
import NProgress from 'nprogress'


let getToken = () => localStorage.getItem("token");

export const request:AxiosInstance = axios.create({
    // baseURL: 'http://localhost',
    baseURL:"/api",
    timeout:5000
})

request.interceptors.request.use(
    config => {
        NProgress.start()
        let token = getToken();
        if (token && token !== '')
            config.headers['token'] = token
        return config
    },
    error => {
        console.log('req err' + error)
        ElMessage({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return null
    }
)
request.interceptors.response.use(
    response => {
        NProgress.done()
        let {code,msg,data} = response.data
        if (!data){
            if(code == 200 && msg === "ok")
                return true
            if(code == 400)
                return false
        }
        if (code != 200)
            ElMessage(msg)
        return data
    },
    error => {
        console.log('response err' + error)
        ElMessage({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return null
    }
)

