import {GET, POST} from "@/api/request";

export const login          = (form:LoginForm)          => POST<Token>("/login", form)
export const logout         = ()                        => POST("/logout")
export const register       = (form:LoginForm)          => POST("/register",form)
export const changePassword = (form:changePasswordForm) => POST("/changePassword",form)
export const getSelfInfo    = ()                        => GET<UserInfo>("/self")


const prefix = "/user"
export const getUser        = (id?:number)    => GET<UserInfo>(id ? `/${prefix}/${id}` : "/self")
export const getFollow      = (id:number)     => GET<UserInfo>(`/${prefix}/${id}/follow}`)
export const updateUserInfo = (info:UserInfo) => POST(`/${prefix}/info`,info)

export const follow         = (id:number)     => POST(`/${prefix}/follow/${id}`)
export const unfollow       = (id:number)     => POST(`/${prefix}/unfollow/${id}`)