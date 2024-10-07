

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
    user?:User
}

interface Filter{
    index?:number,
    tag?:string,
    order?:string,
    timeRange?:[string,string]|null
}

interface ChangedArticle {
    img?:string,
    title?:string,
    context?:string,
    tags?:Array<ChangeTag>
}
interface ChangeTag {
    tag:string,
    check:boolean
}