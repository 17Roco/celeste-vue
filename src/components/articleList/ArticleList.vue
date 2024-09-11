<template>
    <div v-if="articleList == null" class="com-article-list" style="text-align: center">
        加载中
    </div>
    <div v-else class="com-article-list">
        <!-- 过滤条 -->
        <filter-bar :articleList="articleList" :filter="filter"/>
        <!--    文章列表    -->
        <div v-if="articleList.records.length === 0" style="text-align: center">空</div>
        <article-item v-else v-for="a in articleList.records" :v-key="a.title" :article="a" :edit="edit"/>
        <!--    底部分页    -->
        <Pagination style="align-self: center" :article-list="articleList" v-model="filter.index"/>
    </div>
</template>

<script setup lang="ts">
import {onMounted, reactive, ref} from "vue";
import FilterBar from "./filterBar/FilterBar.vue";
import ArticleItem from "./articleItem.vue";
import Pagination from "./filterBar/Pagination.vue";
import {useBlogStore} from "@/stores/blogStore";

const store = useBlogStore()
defineProps({
    "edit":{type:Boolean,default:false}
})


let filter = reactive({
    tag:"tag_1",
    order:"最新",
    index:1,
    timeRange:[null,null]
})
// Reactive<page<article>>
let articleList = ref(null)

onMounted(()=>{
    store.getArticles(null).then((data)=>articleList.value=data)
})
</script>

<style>
.com-article-list {
    width: 900px;


    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>

