import {GET, POST, PUT} from "./request";

export const login          = (form:LoginForm)  => POST<Token>("/login", form)
export const logout         = ()                => POST<boolean>("/logout")
export const register       = (form:LoginForm)  => POST<boolean>("/register",form)
export const getSelfInfo    = ()                => GET<UserInfo>("/self")


const prefix = "/user"
// 获取用户信息
export const getUser        = (uid?:number)             => GET<UserInfo>(uid ? `${prefix}/${uid}` : "/self")
// 更新用户信息
export const updateInfo     = (info:UserInfoForm)       => PUT<boolean>(`${prefix}/info`, info)
// 更新密码
export const updatePw       = (form:changePasswordForm) => PUT(`${prefix}/pw`,form)
// 更新头像 todo 上传图片
export const updateImg     = (file:any)                 => PUT<string>(`${prefix}/img`, file)


// 获取关注列表
export const getFollow      = (id:number,index:number)  => GET<Page<UserInfo>>(`${prefix}/follow/${id}` + (index ? `/${index}` : ""))

// 关注/取消关注
export const follow         = (id:number)               => POST<boolean>(`${prefix}/follow/${id}`)
export const unfollow       = (id:number)               => POST<boolean>(`${prefix}/unfollow/${id}`)