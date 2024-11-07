import {DELETE, GET, POST} from "@/api/request";

const prefix = "/comment"

// 获取子评论
export const getChildComment    = (cid:number,index:number)    => GET<Page<Article>>(`${prefix}/children/${cid}/${index}`)
// 获取文章评论列表
export const getArticleComment  = (aid:number,index:number)    => GET<Page<Article>>(`${prefix}/article/${aid}/${index}`)


// 发表评论
export const commentArticle = (data:CommentForm)               => POST(`${prefix}/article`,data)
// 删除评论
export const deleteComment  = (cid:number)                     => DELETE(`${prefix}/${cid}`)


// 点赞评论
export const likeComment    = (cid:number)                     => POST(`${prefix}/like/${cid}`)
// 取消点赞评论
export const unlikeComment  = (cid:number)                     => DELETE(`${prefix}/unlike/${cid}`)