import {defineStore} from "pinia";
import {getArticleContent, getArticleInfos} from "@/api/blogApi";


export const useBlogStore = defineStore
('blog', () =>({

    getArticles: async(filter:Filter) => getArticleInfos(filter),
    getArticle: async(aid:number)=> getArticleContent(aid)
}))