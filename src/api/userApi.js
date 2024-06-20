import {request} from "@/api/request";

export const login = (user) => {
    return request({
        url:'/api/login',
        method:'POST',
        data:user
    })
}
export const logout = (token) => {
    return request({
        url:'/api/logout',
        data:{token:token}
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
        url:'/api/user/'+uid,
        method:"get",
    })
}
