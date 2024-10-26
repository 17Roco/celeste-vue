<template>
    <div v-if="articleList == null" class="com-article-list" style="text-align: center">
        加载中
    </div>
    <div v-else class="com-article-list">
        <!-- 过滤条 -->
        <filter-bar :articleList="articleList"/>
        <!--    文章列表    -->
        <div v-if="(articleList as Page<Article>).records.length === 0" style="text-align: center">空</div>
        <article-item v-else v-for="a in articleList.records" :v-key="a.title" :article="a" :edit="edit"/>
    </div>
</template>

<script setup lang="ts">
import FilterBar from "./filterBar/FilterBar.vue";
import ArticleItem from "./ArticleItem.vue";
import {ref, watchEffect} from "vue";
import {useRoute} from "vue-router";
import {useBlogStore} from "@/stores/blogStore";

const props = defineProps<{edit?:boolean}>()
const store = useBlogStore()
const route = useRoute()
// 加载文章列表
let articleList = ref<Page<Article>|null>(null)

// 更新文章列表
watchEffect(async ()=>{
    articleList.value = await store.getArticleList(route.query as Filter,props.edit)
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

