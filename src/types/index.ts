
// 分页查询的结果集
interface ResultPage<T>{
    records:Array<T>,
    current:number,
    total:number,
    size:number,
    pages:number
}

// article文章
interface Article {
    aid?:number,
    title:string,
    context:string,
    tags:string[]
}

interface User{
    token:string,
    uid:number,
    username:string
}


interface ArticleFilter {
    index:number
}








export {
    ResultPage,
    Article,
    ArticleFilter,
    User
}