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

export const POST   = async <T=any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<Result<T>> => (await request.post(url,data,config)).data
export const PUT    = async <T=any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<Result<T>> => (await request.put(url,data,config)).data
export const DELETE = async <T=any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<Result<T>> => (await request.delete(url,config)).data
export const GET    = async <T=any>(url: string,config?: AxiosRequestConfig)             : Promise<Result<T>> => (await request.get(url,config)).data

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
        let {code} = response.data
        response.data.b = (code === 200)
        return response
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

