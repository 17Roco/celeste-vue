<template>
    <div class="com-article-list">
        <!--    tag    -->
        <tag-select v-model="filter.tag"/>
        <!-- 过滤条 -->
        <filter-bar>
            <!--    排序    -->
            <el-segmented
                :options="store.option"
                size="large"
                v-model="filter.order"/>
            <!--    顶部分页    -->
            <div class="page-bar">
                <el-pagination
                    background layout="prev, pager, next"
                    @change="toTop"
                    v-show="articleList.pages > 1"
                    :total="articleList.total"
                    :page-count="articleList.pages"
                    v-model:current-page="filter.index"
                />
            </div>
            <!--    时间范围    -->
            <el-date-picker
                style="max-width: 200px"
                v-model="timeRange"
                type="daterange"
                unlink-panels
                range-separator="到"
                start-placeholder="起始时间"
                end-placeholder="结束时间"
                size="default"
                :disabled-date="t => t > new Date()"
            />
        </filter-bar>
        <!--    文章列表    -->
        <div v-if="load" style="text-align: center">加载中</div>
        <template v-else><article-item v-for="a in articleList.records" :v-key="a.title" :article="a" :edit="props.self"/></template>
        <!--    底部分页    -->
        <div class="page-bar">
            <el-pagination
                background layout="prev, pager, next"
                @change="toTop"
                v-show="!load && articleList.pages > 1"
                :total="articleList.total"
                :page-count="articleList.pages"
                v-model:current-page="filter.index"
            />
        </div>
    </div>
</template>

<script setup>
import {reactive, ref,watch,onMounted,computed} from "vue";
import {getDefaultArticles, getDefaultFilter, useArticleStore} from "@/store/article";
import FilterBar from "./filterBar.vue";
import ArticleItem from "./articleItem.vue";
import TagSelect from "@/components/articleList/tagSelect.vue";
import {onBeforeRouteUpdate, useRoute} from "vue-router";
import {formatDate} from "@/util/dateUtil";
import router from "@/router";

const store = useArticleStore();
const props = defineProps({
    self:{
        type: Boolean,
        default:false
    }
})

let load = ref(false);
let articleList = ref(getDefaultArticles())
let filter = reactive({
    ...getDefaultFilter(),
    ...useRoute().query
})
let timeRange = computed({
    get:()=> [
        filter.beginTime ? new Date(filter.beginTime) : undefined,
        filter.endTime ? new Date(filter.endTime) : undefined
    ],
    set:(val)=> {
        filter.beginTime = (val && val.length > 0) ? formatDate(val[0]) :undefined
        filter.endTime = (val && val.length > 1) ? formatDate(val[1]) :undefined
    }
})


let toTop = () => window.scrollTo(0,0)
let updateList = () => {
    load.value = true;
    store.getArticleList(filter,props.self).then(data => {
        articleList.value = data
        load.value =false
    })
}

onMounted(updateList)

watch(filter,()=>{
    if (router.currentRoute.value.query.index && router.currentRoute.value.query.index == filter.index)
        filter.index = 1
    //
    router.push({query:filter})
    // updateList()
},{deep:true})

onBeforeRouteUpdate((to, from)=>{
    updateList()
})

</script>

<style>
.com-article-list {
    /*width: 900px;*/

    > .page-bar {
        display: flex;
        justify-content: center;
    }
}
</style>

