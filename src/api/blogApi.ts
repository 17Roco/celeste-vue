import {request} from "./request"


const prefix = "/article"

export const getArticleInfos = (filter:Filter):Promise<Page<Article>> => request.get(`${prefix}/filter`,{params:filter})

export const getArticleContent = (aid:number):Promise<Article> => request.get(`${prefix}/${aid}`)

export const updateArticle = (article:ChangedArticle,aid?:number):Promise<boolean> => request.post(`${prefix}/${aid || ''}`,article)
export const deleteArticle = (aid:number):Promise<boolean> => request.delete(`${prefix}/${aid}`)

// tag
export const getTags = () => request.get("/tag")



export const likeArticle = (aid:number) => request.post(`${prefix}/like/${aid}`)
export const unlikeArticle = (aid:number) => request.post(`${prefix}/unlike/${aid}`)


export const addTags = () => {}
export const deleteTag = () => {}



