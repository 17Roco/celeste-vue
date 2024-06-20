import axios from "axios";
// import {useUserStore} from "@/store/user";
import {ElMessage} from 'element-plus'

// const store =  useUserStore()

let getToken = () => localStorage.getItem("token");

export const request = axios.create({
    // baseURL: 'http://localhost',
    timeout:5000
})


request.interceptors.request.use(
    config => {
        // if (store.user.token && store.user.token !== '') {
        //     config.headers['token'] = store.user.token
        // }
        let token = getToken();
        if (token && token !== '') {
            config.headers['token'] = token
        }
        return config
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)
request.interceptors.response.use(
    response => {
        const res = response.data
        if (response.status===200 && res.code === 200) {
            return res.data
        }else {
            ElMessage({message:'获取失败'})
            return Promise.reject(new Error(res.msg || 'Error'))
        }

    },
    error => {
        console.log('err' + error)
        // Message({
        //     message: error.message,
        //     type: 'error',
        //     duration: 5 * 1000
        // })
        return Promise.reject(error)
    }
)

