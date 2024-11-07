import {defineStore} from "pinia";
import * as api from "@/api/blogApi";
import {reactive, watchEffect} from "vue";


export const useBlogStore = defineStore('blog', () =>{
    // 过滤条件
    let filter = reactive({
        tags:[],
        order:["new", "like", "watch"],
        _oder:{
            "new":"最新",
            "like":"高赞",
            "watch":"高浏览量"
        }
    })

    // 自动更新标签
    watchEffect(async () => {
        filter.tags = (await api.getTags()).data.map(tag=>tag.title)
    })

    return{
        filter,

        // 获取文章
        getArticle:async (aid:number)=> {
            return (await api.getArticleContent(aid)).data
        },
        // 获取文章列表
        getArticleList:async (f:Filter,self:boolean) => {
            return (await api.getArticleInfos({...f,self})).data
        },

        // 发布文章
        saveArticle:async (data:ArticleForm) => {
            return (await api.saveArticle(data)).data
        },
        // 更新文章
        updateArticle:async (aid:number,data:ArticleForm) => {
            return (await api.updateArticle(data, aid)).b
        },
        // 删除文章
        deleteArticle:async (aid:number) => {
            return (await api.deleteArticle(aid)).b
        },

        // 上传文章图片
        updateArticleImg:async (aid:number,data:ArticleForm) => {
            await api.updateArticleImg(aid, data)
            // todo
        },

        // 点赞文章
        likeArticle:async (aid:number,b:boolean) => {
            return (b ? await api.likeArticle(aid) : await api.unlikeArticle(aid)).b
        }
    }
})