import axios, {type AxiosInstance} from "axios";
import {ElMessage} from 'element-plus'


let getToken = () => localStorage.getItem("token");

export const request:AxiosInstance = axios.create({
    baseURL: 'http://localhost',
    timeout:5000
})


request.interceptors.request.use(
    config => {
        // if (store.user.token && store.user.token !== '') {
        //     config.headers['token'] = store.user.token
        // }
        let token = getToken();
        console.log(config)
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
        return async () => null
    }
)
request.interceptors.response.use(
    response => {
        const res = response.data
        if (response.status===200 && res.code === 200) {
            return res.data
        }else if (response.status===200) {
            // if(res.msg.indexOf('token 失效')!==-1){
            //     ElMessage({message:'登录失效'})
            //     const store =  useUserStore()
            //     store.logout()
            //     return Promise.reject(res)
            // }else {
            //     ElMessage(res.msg)
            //     return null
            // }
            return null
        }


    },
    error => {
        console.log('resq err' + error)
        ElMessage({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return async()=> null
    }
)

