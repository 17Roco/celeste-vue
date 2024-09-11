import {request} from "@/api/request.js";

export const login = (user:UserLogin) => {
    return request({
        url:'/api/login',
        method:'POST',
        data:user
    })
}
export const logout = (token:string) => {
    return request({
        url:'/api/logout',
        method:"POST",
        data:{token:token}
    })
}
export const signup = (user) => {
    return request({
        url:'/api/user/signup',
        method:'POST',
        data:user
    })
}

export const updateUserInfo = (user) => {
    return request({
        url:'/api/user',
        method:"put",
        data:user,
    })
}

export const getUserInfo = (uid) => {
    return request({
        url:'/api/user/'+(uid ? uid : ''),
        method:"get",
    })
}
