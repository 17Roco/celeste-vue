import {defineStore} from "pinia";
import {data,tags} from "@/store/art_data";


export const useArticleStore = defineStore('article',{
    state:() => ({
        articles:data,
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
            let a = this.articles.filter(aa => aa.id==id)
            return a ? a[0] : a;
        },
        filterArticle(filter){
            return this.articles
        }
    }
});





































