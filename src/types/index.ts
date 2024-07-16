
// 分页查询的结果集
interface resultPage<T>{
    records:Array<T>,
    current:number,
    total:number,
    size:number,
    pages:number
}

// article文章
interface article {
    aid?:number,
    title:string,
    context:string,
    tags:string[]
}

interface articleFilter {

}








export {
    resultPage,
    article,
    articleFilter
}