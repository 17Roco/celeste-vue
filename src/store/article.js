import {defineStore} from "pinia";
import {data,tags} from "@/store/art_data";
import {ElMessage} from "element-plus";

import {getArticleInfos, getArticleContent, getTags} from "@/api/articleApi"

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
            this.curArticle = null
            return  getArticleContent(id).then((data)=>{
                this.curArticle = data
            })
        },
        updateList(){
            ElMessage({message:"加载中"})
            getArticleInfos({...this.filter,...this.index}).then((data)=>{
                this.articles = data
                ElMessage({message:"加载完成"})
            }).catch(()=>this.articles = getDefaultArticles())
        }
    }
});




































