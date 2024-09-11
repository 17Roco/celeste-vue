import {request} from "./request"



export const getArticleInfos = (filter:Filter) => {
    return request({
        url: "/api/article/filter",
        method:"get",
        params:filter
    })
}

export const getArticleContent = (aid:number) => {
    return request({
        url:'/api/article/'+aid,
    })
}

export const updateArticle = (article:Article) => {
    return request({
        url:'/api/article/content',
        method:"PUT",
        data:article
    })
}

export const deleteArticle = (aid:number) => {
    return request({
        url:'/api/article/'+id,
        method:"DELETE"
    })
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



