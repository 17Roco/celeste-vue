import {request} from "@/api/request";
// import type {LoginForm,changePasswordForm} from "@/types/mainTypes"

export const login = (form:LoginForm) => request.post("/login",form)
export const logout = (token:string) => request.post("/logout")
export const register = (form:LoginForm) => request.post("/register",form)
export const changePassword = (form:changePasswordForm) => request.post("/changePassword",form)





const prefix = "/user"
export const getById = (id:number) => request.get(`${prefix}/${id}`)
export const getFollow = (id:number) => request.get(`/${prefix}/${id}/follow}`)
export const updateUserInfo = (info:User) => request.post(`${prefix}/info`,info)

export const follow = (id:number) => request.post(`${prefix}/follow/${id}`)
export const unfollow = (id:number) => request.post(`${prefix}/unfollow/${id}`)