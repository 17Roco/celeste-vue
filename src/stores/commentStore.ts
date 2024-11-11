import {defineStore} from "pinia";
import * as api from "@/api/commentApi";
import {commentChildren} from "@/api/commentApi";


export const useCommentStore = defineStore('comment',() => {



    return {
        // 获取子评论
        getChildComments: async (cid: number) => {
            return (await api.getChildComment(cid,1)).data
        },
        // 获取文章评论
        getArticleComments: async (aid: number,index: number) => {
            return (await api.getArticleComment(aid,1)).data
        },

        // 发表评论
        commentArticle: async (pid:number,text:string) => {
            return (await api.commentArticle({pid, text})).b
        },
        // 发表子评论
        commentChildren: async (pid:number,text:string) => {
            return (await api.commentChildren({pid, text})).b
        },
        // 删除评论
        deleteComment: async (cid: number) => {
            return (await api.deleteComment(cid)).b
        },

        // 点赞评论
        likeComment: async (cid: number,b: boolean) => {
            return b ? (await api.likeComment(cid)).b : (await api.unlikeComment(cid)).b
        }
    }
})