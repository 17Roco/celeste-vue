import axios from "axios";
import {ElMessage} from 'element-plus'
import NProgress from 'nprogress'
import type {AxiosRequestConfig} from "axios";


let getToken = () => localStorage.getItem("token");

const request = axios.create({
    // baseURL: 'http://localhost',
    baseURL:"/api",
    timeout:5000
})

export const POST   = <T=any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<Result<T>> => request.post(url,data,config)
export const PUT    = <T=any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<Result<T>> => request.put(url,data,config)
export const DELETE = <T=any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<Result<T>> => request.delete(url,config)
export const GET    = <T=any>(url: string,config?: AxiosRequestConfig)             : Promise<Result<T>> => request.get(url,config)

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
    (response) => {
        NProgress.done()
        let {code,msg,data} = response.data
        return {
            b:code===200,
            msg,
            data
        }
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

