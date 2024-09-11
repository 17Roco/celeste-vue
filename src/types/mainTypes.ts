
interface User {
    uid:number,
    username:string,
    img:string
}
interface UserLogin{
    username:string,
    password:string
}

interface Page<T> {
    pages:number,
    total:number,
    index:number,
    records:Array<T>
}