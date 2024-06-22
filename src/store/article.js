import {defineStore} from "pinia";

import {
    getArticleInfos,
    getArticleContent,
    getTags,
    updateArticle,
    deleteArticle,
    createArticles, addTags, deleteTag
} from "@/api/articleApi"
export const getDefaultArticles = ()=>({
    records:[],
    current:0,
    total:0,
    size:20,
    pages:0
})
export const getDefaultArticle = () => ({
    "aid":null,
    "title": "请输入标题",
    "context": "",
    "tags": []
})

export const getDefaultFilter = ()=>({
    index:1,
    order:'new',
    beginTime:null,
    endTime:null,
    tag:undefined,
    search:undefined
})


export const useArticleStore = defineStore('article',{
    state:() => ({
        articles:getDefaultArticles(),
        curArticle:null,
        tags:[],
        option:[
            {"value":'new','label':'最新'},
            {"value":'like','label':'高赞'},
            {"value":'watch','label':'高浏览量'}
        ],
        index:1,
        filter:{
            tag:undefined,
            order:"new",
            timeRange:[],
            search:undefined,
            user:null
        }
    }),
    actions:{
        loadTags(){
            return getTags().then(data => {
                this.tags = data
            })
        },
        getArticle(id){
            return  getArticleContent(id)
        },
        getArticleList(filter,self){
            return getArticleInfos({...filter,self})
        },
        updateArticle(article){
            return updateArticle(article).then(data => {
                if (data) return data
                return Promise.reject()
            })
        },
        deleteArticle(aid){
            return deleteArticle(aid)
        },
        addArticle(article){
            return createArticles(article)
        },
        // 修改标签
        addTag(aid,tag){
            return addTags(aid,tag)
        },
        deleteTag(aid,tag){
            return deleteTag(aid,tag)
        },
    }
});




































