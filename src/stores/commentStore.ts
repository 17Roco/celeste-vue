import {defineStore} from "pinia";
import {
    commentArticle,
    deleteComment,
    getArticleComment,
    getChildComment,
    likeComment,
    unlikeComment
} from "@/api/commentApi";


export const useCommentStore = defineStore('comment',() => {



    return {
        // 获取子评论
        getChildComments: async (cid: number) => {
            return (await getChildComment(cid,1)).data
        },
        // 获取文章评论
        getArticleComments: async (aid: number,index: number) => {
            return (await getArticleComment(aid,1)).data
        },

        // 发表评论
        commentArticle: async (pid:number,text:string) => {
            return (await commentArticle({pid, text})).b
        },
        // 删除评论
        deleteComment: async (cid: number) => {
            return (await deleteComment(cid)).b
        },

        // 点赞评论
        likeComment: async (cid: number,b: boolean) => {
            return b ? (await likeComment(cid)).b : (await unlikeComment(cid)).b
        }
    }
})