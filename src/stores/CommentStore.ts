import {defineStore} from "pinia";
import {commentArticle, getArticleComment} from "@/api/commentApi";


export const useCommentStore = defineStore('comment',() => {



    return {
        getArticleComments: async (aid: number,index: number) => {
            return (await getArticleComment(aid,1)).data
        },
        commentArticle: async (pid:number,text:string) => {
            return (await commentArticle({pid, text})).b
        }
    }
})