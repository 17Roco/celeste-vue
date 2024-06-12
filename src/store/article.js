import {defineStore} from "pinia";
import {data,tag} from "@/store/art_data";


export const useArticleStore = defineStore('article',{
    state:() => ({
        articles:data,
        tag
    }),
    actions:{
        getArticle(id){
            let a = this.articles.filter(aa => aa.id==id)
            return a ? a[0] : a;
        }
    }
});