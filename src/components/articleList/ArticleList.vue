<template>
    <div v-if="articleList == null" class="com-article-list" style="text-align: center">
        加载中
    </div>
    <div v-else class="com-article-list">
        <!-- 过滤条 -->
        <filter-bar :articleList="articleList"/>
        <!--    文章列表    -->
        <div v-if="articleList.records.length === 0" style="text-align: center">空</div>
        <article-item v-else v-for="a in articleList.records" :v-key="a.title" :article="a" :edit="edit"/>
    </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import FilterBar from "./filterBar/FilterBar.vue";
import ArticleItem from "./ArticleItem.vue";
import {useBlogStore} from "@/stores/blogStore";
import {onBeforeRouteUpdate, useRoute} from "vue-router";
import {getArticleInfos} from "@/api/blogApi";
const store = useBlogStore()
const route = useRoute()

const props = defineProps({
    "edit":{type:Boolean,default:false}
})


// 加载文章列表
let articleList = ref<Page<Article>|null>(null)

onMounted(async ()=> {
    articleList.value = await store.getArticleList(route.query as Filter,props.edit)
})
onBeforeRouteUpdate((to, from, next)=>{
    store.getArticleList(to.query as Filter,props.edit).then( data => articleList.value=data )
    next()
})


</script>

<style>
.com-article-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>

