import {request} from "@/api/request";
// import type {LoginForm,changePasswordForm} from "@/types/mainTypes"

export const login          = (form:LoginForm)          :Promise<Token>     => request.post("/login",form)
export const logout         = ()                        :Promise<boolean>   => request.post("/logout")
export const register       = (form:LoginForm)          :Promise<boolean>   => request.post("/register",form)
export const changePassword = (form:changePasswordForm) :Promise<boolean>   => request.post("/changePassword",form)
export const getSelfInfo    = ()                        :Promise<UserInfo>  => request.get("/self")


const prefix = "/user"
export const getUser        = (id:number)       :Promise<UserInfo>          => request.get(`${prefix}/${id}`)
export const getFollow      = (id:number)       :Promise<Array<UserInfo>>   => request.get(`/${prefix}/${id}/follow}`)
export const updateUserInfo = (info:UserInfo)   :Promise<boolean>           => request.post(`${prefix}/info`,info)

export const follow         = (id:number)       :Promise<boolean>           => request.post(`${prefix}/follow/${id}`)
export const unfollow       = (id:number)       :Promise<boolean>           => request.post(`${prefix}/unfollow/${id}`)