import {GET, POST} from "@/api/request";

const prefix = "/comment"

// 获取文章评论列表
export const getArticleComment  = (aid:number,index:number)    => GET<Page<Article>>(`${prefix}/article/${aid}/${index}`)
// 发表评论
export const commentArticle = (data:CommentForm)               => POST(`${prefix}/article`,data)