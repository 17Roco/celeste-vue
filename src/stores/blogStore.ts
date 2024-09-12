import {defineStore} from "pinia";
import {getArticleContent, getArticleInfos} from "@/api/blogApi";
import {reactive} from "vue";


export const useBlogStore = defineStore
('blog', () =>({


    filter:reactive({
        tags:['tag_1','tag_2','tag_3','tag_4','tag_5','tag_6','tag_7','tag_8','tag_9','tag_10','tag_11','tag_12'],
        order:["最新","高赞","高浏览量"]
    }),

    getArticles: async(filter:Filter) => getArticleInfos(filter),
    getArticle: async(aid:number)=> getArticleContent(aid)
}))