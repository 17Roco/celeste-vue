import {defineStore} from "pinia";
import {data,tags} from "@/store/art_data";

import {getArticleInfos,getArticleContent} from "@/api/articleApi"

const getDefaultArticles = ()=>({
    records:[],
    current:0,
    total:0,
    size:20,
    pages:0
})


export const useArticleStore = defineStore('article',{
    state:() => ({
        articles:getDefaultArticles(),
        curArticle:null,
        tags,
        option:[
            {"value":'new','label':'最新'},
            {"value":'like','label':'高赞'},
            {"value":'watch','label':'高浏览量'}
        ],
        filter:{
            tag:undefined,
            index:1,
            order:"new",
            timeRange:[],
            search:undefined,
            user:null
        }
    }),
    actions:{

        getArticle(id){
            this.curArticle = null
            return  getArticleContent(id).then((data)=>{
                this.curArticle = data
            })
        },
        updateList(){
            // this.articles = getDefaultArticles()
            getArticleInfos(this.filter).then((data)=>{
                console.log(data)
                this.articles = data
            })
        }
    }
});




































