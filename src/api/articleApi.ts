import {request} from "./request"
import {Article, ArticleFilter, ResultPage} from "../types";

// export const createArticleFilter = (filter:articleFilter) => filter

/**
 * 文章的增删改查
 * getArticleInfos
 * getArticleContent
 * updateArticle
 * deleteArticle
 * createArticles
 * */
export const getArticleInfos = async(filter:ArticleFilter):Promise<any> =>
    await request.get("/api/article/filter",{params:filter})

export const getArticleContent = async(aid:number):Promise<any> =>
    await request.get('/api/article/'+aid)

export const updateArticle = async(article:Article):Promise<any> =>
    await request.put("/api/article/content",article)

export const deleteArticle = async(id:number):Promise<any> =>
    await request.delete('/api/article/'+id)

export const createArticles = async(article:Article):Promise<any> =>
    await request.post("/api/article/",article)


/**
 * like
 * unlike
 * */
export const likeArticle = () => {}
export const unlikeArticle = () => {}



/**
 * getTags
 * addTag
 * removeTag
 * */
export const getTags = async():Promise<any> =>
    await request.get('/api/tag/list')

export const addTag = async(aid:number,tag:number):Promise<any> =>
    await request.put(`/api/article/tag/${aid}/${tag}`)

export const removeTag = async(aid:number,tag:number):Promise<any> =>
    await request.delete(`/api/article/tag/${aid}/${tag}`)



