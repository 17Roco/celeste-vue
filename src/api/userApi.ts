import {request} from "@/api/request";
// import type {LoginForm,changePasswordForm} from "@/types/mainTypes"

export const login          = (form:LoginForm):Promise<Token>   => request.post("/login",form)
export const logout         = ()                                => request.post("/logout")
export const register       = (form:LoginForm)                  => request.post("/register",form)
export const changePassword = (form:changePasswordForm)         => request.post("/changePassword",form)

export const getSelfInfo    = ()                                => request.get("/self")



const prefix = "/user"
export const getUser        = (id:number) => request.get(`${prefix}/${id}`)
export const getFollow      = (id:number) => request.get(`/${prefix}/${id}/follow}`)
export const updateUserInfo = (info:UserInfo) => request.post(`${prefix}/info`,info)

export const follow         = (id:number) => request.post(`${prefix}/follow/${id}`)
export const unfollow       = (id:number) => request.post(`${prefix}/unfollow/${id}`)