

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
    user:UserInfo
}

interface Filter{
    index?:number,
    tag?:string,
    order?:string,
    beginTime?:string,
    endTime?:string,
    self:boolean
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