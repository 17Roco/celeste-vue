import axios, {type AxiosInstance} from "axios";
import {ElMessage} from 'element-plus'


let getToken = () => localStorage.getItem("token");

export const request:AxiosInstance = axios.create({
    // baseURL: 'http://localhost',
    baseURL:"/api",
    timeout:5000
})


request.interceptors.request.use(
    config => {
        let token = getToken();
        if (token && token !== '') {
            config.headers['token'] = token
        }
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
        if (!response.data.data)
            return response.data.msg
        return response.data.data
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

