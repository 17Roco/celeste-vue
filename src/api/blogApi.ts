import {DELETE, GET, POST, PUT} from "./request"


const prefix = "/article"

export const getArticleInfos    = (filter:Filter) => GET<Page<Article>>(`${prefix}/filter`, {params:filter})
export const getArticleContent  = (aid:number)    => GET<Article>(`${prefix}/${aid}`)

export const saveArticle        = (article:ChangedArticle)            => POST(`${prefix}/`,article)
export const updateArticle      = (article:ChangedArticle,aid:number) => PUT(`${prefix}/${aid}`,article)
export const deleteArticle      = (aid:number)                        => DELETE(`${prefix}/${aid}`)


// tag
export const getTags        =()                      => GET<Array<any>>(`tag/list`)
export const likeArticle    =(aid:number)            => POST(`${prefix}/like/${aid}`)
export const unlikeArticle  =(aid:number)            => POST(`${prefix}/unlike/${aid}`)
export const addTags        =(aid:number,tag:string) => POST(`${prefix}/add_tag/${aid}/${tag}`)
export const deleteTag      =(aid:number,tag:string) => POST(`${prefix}/del_tag/${aid}/${tag}`)



