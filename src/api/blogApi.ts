import {request} from "./request"


// export const createArticleFilter = (filter) => {
//     let f = {...filter}
//     delete f.timeRange
//     if (filter.timeRange && filter.timeRange.length === 2) {
//         f.beginTime = filter.timeRange[0]
//         f.endTime = filter.timeRange[1]
//     }
//     return f
// }


export const getArticleInfos = (filter) => {
    return request({
        url: "/api/article/filter",
        method:"get",
        params:filter
    })
}

export const getArticleContent = (aid) => {
    return request({
        url:'/api/article/'+aid,
    })
}

export const updateArticle = (article) => {
    return request({
        url:'/api/article/content',
        method:"PUT",
        data:article
    })
}

export const deleteArticle = (id) => {
    return request({
        url:'/api/article/'+id,
        method:"DELETE"
    })
}
export const createArticles = (article) => {
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



