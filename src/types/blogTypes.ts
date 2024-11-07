

interface Article {
    aid:number,
    title:string,
    img?:string,
    context:string,
    likee:number,
    watch:number,
    createTime:string,
    updateTime:string,
    tags:Array<string>,
    user:UserInfo,
    idLike:boolean
}

interface Filter{
    index?:number,
    tag?:string,
    order?:string,
    beginTime?:string,
    endTime?:string,
    self?:boolean
}
interface ArticleFilter{
    index?:number,
    tag?:string,
    order?:string,
    beginTime?:string,
    endTime?:string,
    self?:boolean
}

interface ArticleForm {
    img?:string,
    title?:string,
    context?:string
}
interface Tag {
    title:string,
    num:number,
    info:string
}

