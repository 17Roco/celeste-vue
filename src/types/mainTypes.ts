

interface Result<T = any> {
    b:boolean,
    msg:string,
    data:T,
}

interface Page<T> {
    pages:number,
    total:number,
    current:number,
    size?:number,
    records:Array<T>
}

interface Token {
    token:string,
}

interface LoginStatus {
    loginMode:boolean,
    token:string|null,
}

interface UserInfo {
    uid:number,
    username:string,
    img:string,
    sex:number,
    birthday:Date,
    sign:string,
    phone:string,
    email:string,
    follow:number
    followed:number,
    isFollow?:boolean,
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
    sex:number,
    birthday:String,
    sign:string,
}
