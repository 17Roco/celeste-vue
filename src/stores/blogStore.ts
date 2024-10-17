import {defineStore} from "pinia";
import {getArticleContent, getArticleInfos, getTags} from "@/api/blogApi";
import {reactive} from "vue";


export const useBlogStore = defineStore('blog', () =>{

    let loadTags = async ():Promise<Array<string>> =>{
        let tags:Array = await getTags()
        return tags.map(tag=>tag.title)
    }
    let filter = reactive({
        tags:[],
        order:["最新","高赞","高浏览量"],
        _order:{"最新":"new","高赞":"like","高浏览量":"watch"}
    })

    loadTags().then(data =>filter.tags=data)
    return{
        filter,
        loadTags,
        getArticleList:(f:Filter,self:boolean):Page<Article>=>{
            let ff:Filter = {...f,self}
            if (f.order)
                ff.order = filter._order[f.order]
            return getArticleInfos(ff)
        }
    }
})