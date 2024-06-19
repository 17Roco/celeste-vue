import {defineStore} from "pinia";
import {data,tags} from "@/store/art_data";
import {ElMessage} from "element-plus";

import {getArticleInfos, getArticleContent, getTags} from "@/api/articleApi"
export const getDefaultArticles = ()=>({
    records:[],
    current:0,
    total:0,
    size:20,
    pages:0
})
export const getDefaultArticle = () => ({
    "aid": 22,
    "uid": 89,
    "title": "test title 11",
    "context": "test article 11",
    "createTime": "2024-06-11 22:00:47",
    "updateTime": "2024-04-03 16:52:01",
    "watch": 431,
    "likee": 215,
    "status": 1,
    "defFlag": 0,
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
        updateArticle(aid,title,context){},
        deleteArticle(aid){},
        // 修改标签
        addTag(aid,tag){},
        deleteTag(aid,tag){},
    }
});




































