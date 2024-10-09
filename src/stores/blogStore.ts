import {defineStore} from "pinia";
import {getArticleContent, getArticleInfos, getTags} from "@/api/blogApi";
import {reactive} from "vue";


export const useBlogStore = defineStore('blog', () =>{

    let updateTags = async ()=>{
        let tags:Array = await getTags()
        return tags.map(tag=>tag.title)
    }

    let filter = reactive({
        tags:[],
        order:["最新","高赞","高浏览量"]
    })
    updateTags().then(data=>filter.tags=data)
    return{
        filter,
        updateTags,
    }
})