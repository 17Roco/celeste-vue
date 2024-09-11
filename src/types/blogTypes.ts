

interface Article {
    aid:number,
    title:string,
    img:string,
    context:string,
    likee:number,
    watch:number,
    createTime:string,
    updateTime:string,
    tags:Array<String>,
    user:UserLogin
}

interface Filter{
    index?:number,
    tag?:string,
    order?:string,
    timeRange?:[string,string]
}