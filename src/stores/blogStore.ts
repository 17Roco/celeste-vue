import {defineStore} from "pinia";
import {deleteArticle, getArticleContent, getArticleInfos, getTags} from "@/api/blogApi";
import {reactive} from "vue";


export const useBlogStore = defineStore('blog', () =>{
    // 过滤条件
    let filter = reactive({
        tags:[],
        order:["最新","高赞","高浏览量"],
        _order:{"最新":"new","高赞":"like","高浏览量":"watch"}
    })

    // 获取标签
    let loadTags = async ():Promise<Array<string>> => (await getTags()).data.map(tag=>tag.title)
    // 获取文章
    let getArticle = async(aid:number)=> (await getArticleContent(aid)).data
    // 获取文章列表
    let getArticleList = async (f:Filter,self:boolean):Page<Article>=>{
        let ff:Filter = { self, index:f.index, tag:f.tag,}
        if (f.beginTime)ff.beginTime = f.beginTime
        if (f.endTime)  ff.endTime   = f.endTime
        if (f.order)    ff.order     = filter._order[f.order]
        return (await getArticleInfos(ff)).data
    }

    // 自动获取标签
    loadTags().then(data =>filter.tags=data)
    return{
        filter,
        loadTags,
        getArticle,
        getArticleList,
        deleteArticle:async (aid:number) => await deleteArticle(aid)
    }
})