import {request} from "./request"
import type {AxiosResponse} from "axios";



export const getArticleInfos = (filter:Filter):Promise<Page<Article>> => {
    return request({
        url: "/api/article/filter",
        method:"get",
        params:filter
    })
}

export const getArticleContent = (aid:number):Promise<Article> => {
    return request({
        url:'/api/article/'+aid,
    })
}

export const updateArticle = (article:ChangedArticle):Promise<boolean> => {
    return request({
        url:'/api/article/content',
        method:"PUT",
        data:article
    })
}

export const deleteArticle = (aid:number):Promise<boolean> => {
    // return request({
    //     url:'/api/article/'+id,
    //     method:"DELETE"
    // })
    return request.delete('/api/article/'+id)
}
export const createArticles = (article:Article) => {
    return request({
        url:'/api/article/',
        method:"POST",
        data:article
    })
}









export const likeArticle = () => {}
export const unlikeArticle = () => {}



// tag
export const getTags = () => {
    return request({
        url:'/api/tag/list',
    })
}

export const addTags = (aid,tag) => {
    return request({
        url:`/api/article/tag/${aid}/${tag}`,
        method:"put",
    })
}
export const deleteTag = (aid,tag) => {
    return request({
        url:`/api/article/tag/${aid}/${tag}`,
        method:"delete",
    })
}



