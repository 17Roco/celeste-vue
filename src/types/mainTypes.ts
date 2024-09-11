
interface user {
    uid:number,
    username:string
}

interface page<T> {
    pages:number,
    total:number,
    index:number,
    records:Array<T>
}