
interface User {
    uid:number,
    username?:string,
    img?:string,
    sex?:number,
    phone?:string,
    email?:string
}
interface Token {
    token:string,
}

interface LoginForm{
    username:string,
    password:string
}
interface changePasswordForm{
    username:string,
    password:string
}

interface Page<T> {
    pages:number,
    total:number,
    index:number,
    records:Array<T>
}