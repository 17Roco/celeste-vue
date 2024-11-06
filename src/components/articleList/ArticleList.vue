<template>
    <!-- todo  -->
    <div v-if="articleList == null" class="com-article-list" style="text-align: center">
        加载中
    </div>
    <!--  文章列表  -->
    <div v-else class="com-article-list">
        <!-- 过滤条 -->
        <filter-bar :articleList="articleList"/>
        <!--    文章列表 为空   -->
        <div v-if="(articleList as Page<Article>).records.length === 0" style="text-align: center">空</div>
        <!--    文章列表 -->
        <article-item v-else v-for="a in articleList.records" :v-key="a.title" :article="a" :edit="edit"/>
    </div>
</template>

<script setup lang="ts">
import FilterBar from "./filterBar/FilterBar.vue";
import ArticleItem from "./ArticleItem.vue";
import {computed, inject, provide, ref, watchEffect} from "vue";
import {useRoute} from "vue-router";
import {useBlogStore} from "@/stores/blogStore";
import {NP} from "@/util/NP";
import {SymbolArticleFilter} from "@/types/symbol";

const props = defineProps<{edit:boolean}>()
const store = useBlogStore()
const route = useRoute()

// 过滤器
let filter = computed(() => ({
    index:      route.query.index     || 1,
    tag:        route.query.tag       || null,
    order:      route.query.order     || "最新",
    beginTime:  route.query.beginTime || null,
    endTime:    route.query.endTime   || null,
}))

// 提供文章过滤器
provide(SymbolArticleFilter,filter)

// 文章列表
let articleList = ref<Page<Article>|null>(null)

// 更新文章列表
watchEffect(()=>{
    NP(async()=>articleList.value = await store.getArticleList(filter?.value,props.edit))
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

