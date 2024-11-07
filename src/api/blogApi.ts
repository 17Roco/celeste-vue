import {DELETE, GET, POST, PUT} from "./request"


const prefix = "/article"

// 获取文章内容、列表
export const getArticleContent  = (aid:number)              => GET<Article>(`${prefix}/${aid}`)
export const getArticleInfos    = (filter:ArticleFilter)    => GET<Page<Article>>(`${prefix}/filter`, {params:filter})

// 新增、修改、删除文章
export const saveArticle        = (article:ArticleForm)               => POST<{aid:number}>(`${prefix}/context`,article)
export const updateArticle      = (article:ArticleForm,aid:number)    => PUT(`${prefix}/context/${aid}`,article)
export const deleteArticle      = (aid:number)                        => DELETE(`${prefix}/${aid}`)
// 上传图片 todo
export const updateArticleImg   = (file:any,aid:number)               => PUT(`${prefix}/img/${aid}`,file)

// tag
export const getTags        =()                      => GET<Array<Tag>>(`tag/list`)
export const likeArticle    =(aid:number)            => POST(`${prefix}/like/${aid}`)
export const unlikeArticle  =(aid:number)            => POST(`${prefix}/unlike/${aid}`)
export const addTags        =(aid:number,tag:string) => POST(`${prefix}/add_tag/${aid}/${tag}`)
export const deleteTag      =(aid:number,tag:string) => POST(`${prefix}/del_tag/${aid}/${tag}`)



