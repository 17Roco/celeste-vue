import axios from "axios";
import {useUserStore} from "@/store/user";

const store =  useUserStore()

const request = axios.create({
    baseURL: 'http://localhost/',
    timeout:5000
})


request.interceptors.request.use(
    config => {
        if (store.user.token && store.user.token !== '') {
            config.headers['token'] = store.user.token
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
        return res
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
