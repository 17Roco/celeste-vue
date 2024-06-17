import {request} from "@/api/request";

export const login = () => {
    return request({
        // url:'/api/login',
        url:'api/user/get/1',
    })
}
export const logout = () => {}

export const updateUserInfo = (user) => {
    return request({
        url:'/api/user',
        method:"put",
        data:user,
    })
}

export const getUserInfo = (uid) => {
    return request({
        url:'/api/user/'+uid,
        method:"get",
    })
}
