

interface Result<T = any> {
    b:boolean,
    msg:string,
    data:T,
}
interface UserInfo {
    uid:number,
    username:string,
    img:string,
    sex:number,
    phone:string,
    email:string,
    isFollow?:boolean,
    follow:number
    follower:number,
    article:number,
}
interface Token {
    token:string,
}
interface LoginStatus {
    loginMode:boolean,
    token:string,
    userInfo?:UserInfo,
}




interface LoginForm{
    username:string,
    password:string
}
interface changePasswordForm{
    username:string,
    password:string
}
interface UserInfoForm{
    username:string,
    img:string,
    sex:number,
    birthdate:Date,
    sign:string,
}

interface Page<T> {
    pages:number,
    total:number,
    current:number,
    size?:number,
    records:Array<T>
}