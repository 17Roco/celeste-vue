import {request} from "./request"


export const createArticleFilter = (filter) => {
    let f = {...filter}
    delete f.timeRange
    if (filter.timeRange && filter.timeRange.length === 2) {
        f.beginTime = filter.timeRange[0]
        f.endTime = filter.timeRange[1]
    }
    return f
}


export const getArticleInfos = (filter) => {
    return request({
        url: "/api/blog/articles/filter",
        method:"get",
        params:createArticleFilter(filter)
    })
}

export const getArticleContent = (aid) => {
    return request({
        url:'/api/blog/article/'+aid,
    })
}

export const updateArticle = () => {}

export const deleteArticle = (id) => {}

export const createArticles = () => {}


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
export const deleteTag = (aid,tid) => {
    return request({
        url:`/api/article/tag/${aid}/${tag}`,
        method:"put",
    })
}



