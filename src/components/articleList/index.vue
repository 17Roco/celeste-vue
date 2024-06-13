<template>
    <div class="com-article-list">
        <tag-select :tags="tags" v-model="props.tag"/>
        <!-- 过滤条 -->
        <filter-bar>
            <el-segmented v-model="order" :options="options" size="large"/>
            <el-pagination background layout="prev, pager, next" :total="pageInfo.total" :page-size="pageInfo.size"/>
            <el-date-picker
                style="max-width: 200px"
                v-model="timeRange"
                type="daterange"
                unlink-panels
                range-separator="到"
                start-placeholder="起始时间"
                end-placeholder="结束时间"
                size="default"
                :disabled-date="disDate"
            />
        </filter-bar>

        <article-item v-for="a in arts" :v-key="a.title" :article="a" :edit="true"/>

        <div class="page-bar">
            <el-pagination background layout="prev, pager, next" :total="pageInfo.total" :page-size="pageInfo.size" />
        </div>
    </div>
</template>

<script setup>
import {computed,onMounted, reactive, ref} from "vue";
import {useArticleStore} from "@/store/article";
import FilterBar from "./filterBar.vue";
import ArticleItem from "./articleItem.vue";
import TagSelect from "@/components/articleList/tagSelect.vue";


const store = useArticleStore();
const props = defineProps({
    tag:        {type:String,default:null},
    order:      {type:String,default:null},
    beginTime:  {type:Date,  default:null},
    endTime:    {type:Date,  default:null},
    index:      {type:Number,default:1},
})

onMounted(()=>console.log(props))

const arts =  computed(() => store.articles)
const pageInfo = reactive({
    "total": store.articles.length,
    "page": store.articles.length/10,
    "size":10
})
let order = ref("new")
let timeRange = ref()
let options = reactive([
    {"value":'new','label':'最新'},
    {"value":'like','label':'高赞'},
    {"value":'watch','label':'高浏览量'}
])
let tags = reactive([
    {"value":"后端","label":"后端"},
    {"value":"前端","label":"前端"},
    {"value":"移动开发","label":"移动开发"},
    {"value":"编程语言","label":"编程语言"},
    {"value":"Java","label":"Java"},
    {"value":"Python","label":"Python"},
    {"value":"人工智能","label":"人工智能"},
    {"value":"AIGC","label":"AIGC"},
    {"value":"大数据","label":"大数据"},
    {"value":"数据库","label":"数据库"},
    {"value":"数据结构与算法","label":"数据结构与算法"},
    {"value":"音视频","label":"音视频"},
    {"value":"小程序","label":"小程序"},
    {"value":"运维","label":"运维"},
    {"value":"操作系统","label":"操作系统"},
    {"value":"硬件开发","label":"硬件开发"}
])

let disDate = (t)=> t > new Date()




</script>

<style>
.com-article-list {
    /*width: 900px;*/

    > .page-bar {
        display: flex;
        justify-content: center;
    }
    >.el-radio-group{
        padding: 10px 50px;
        >.el-radio-button{
            >span{
                border: none;
            }
        }
    }
}
</style>

