import {request} from "@/api/request";
import {User} from "@/types"


/**
 * login
 * logout
 * signup
 * */
export const login = async(user:User):Promise<any> =>
    await request.post("/api/login",user)

export const logout = (token:string):Promise<any> =>
    request.post("/api/logout",token)

export const signup = async(user:User):Promise<any> =>
    await request.post('/api/user/signup',user)

export const updateUserInfo = async(user:User):Promise<any> =>
    await request.put('/api/user',user)

export const getUserInfo = async (uid:number):Promise<any> =>
    await request.get('/api/user/'+(uid ? uid : ''))
