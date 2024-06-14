<template>
    <div class="com-article-list">
        <!--    tag    -->
        <tag-select/>
        <!-- 过滤条 -->
        <filter-bar>
            <!--    排序    -->
            <el-segmented :options="store.option" size="large" v-model="store.filter.order"/>
            <!--    顶部分页    -->
            <el-pagination
                background layout="prev, pager, next"
                :total="pageInfo.total" :page-size="pageInfo.size"  v-model:current-page="store.filter.index"
            />
            <!--    时间范围    -->
            <el-date-picker
                style="max-width: 200px"
                v-model="store.filter.timeRange"
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
        <article-item v-for="a in store.filterArticle({})" :v-key="a.title" :article="a" :edit="props.edit"/>
        <!--    底部分页    -->
        <div class="page-bar">
            <el-pagination
                background layout="prev, pager, next"
                :total="pageInfo.total" :page-size="pageInfo.size"  v-model:current-page="store.filter.index"
            />
        </div>
    </div>
</template>

<script setup>
import {reactive, ref,watch} from "vue";
import {useArticleStore} from "@/store/article";
import FilterBar from "./filterBar.vue";
import ArticleItem from "./articleItem.vue";
import TagSelect from "@/components/articleList/tagSelect.vue";

const store = useArticleStore();
const props = defineProps({
    edit:{type:Boolean,default:false},
})

const pageInfo = reactive({
    "total": store.articles.length,
    "page": store.articles.length/10,
    "size":10
})


watch(()=>store.filter,(n,o)=>{
    // console.log(store.filter)
    //
    //
    //
    //
    //
},{deep:true})

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

