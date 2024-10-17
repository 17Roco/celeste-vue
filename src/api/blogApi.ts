import {request} from "./request"


const prefix = "/article"

export const getArticleInfos    = (filter:Filter)   :Promise<Page<Article>> => request.get(`${prefix}/filter`, {params:filter})
export const getArticleContent  = (aid:number)      :Promise<Article>       => request.get(`${prefix}/${aid}`)

export const saveArticle        = (article:ChangedArticle)              :Promise<boolean>   => request.post(`${prefix}/`,article)
export const updateArticle      = (article:ChangedArticle,aid:number)   :Promise<boolean>   => request.put(`${prefix}/${aid}`,article)
export const deleteArticle      = (aid:number)                          :Promise<boolean>   => request.delete(`${prefix}/${aid}`)


// tag
export const getTags        =()             :Promise<Array<any>> => request.get(`tag/list`)

export const likeArticle    =(aid:number)              :Promise<boolean>    => request.post(`${prefix}/like/${aid}`)
export const unlikeArticle  =(aid:number)              :Promise<boolean>    => request.post(`${prefix}/unlike/${aid}`)
// export const addTags        =(aid:number,tag:string)   :Promise<boolean>    => request.post(`${prefix}/addTags`)
// export const deleteTag      =(aid:number,tag:string)   :Promise<boolean>    => request.post(`${prefix}/delTags`)



