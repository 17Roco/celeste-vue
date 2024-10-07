<template>
    <div v-if="articleList == null" class="com-article-list" style="text-align: center">
        加载中
    </div>
    <div v-else class="com-article-list">
        <!-- 过滤条 -->
<!--        <filter-bar :articleList="articleList"/>-->
        <!--    文章列表    -->
        <div v-if="articleList.records.length === 0" style="text-align: center">空</div>
        <article-item v-else v-for="a in articleList.records" :v-key="a.title" :article="a" :edit="edit"/>
    </div>
</template>

<script setup lang="ts">
import {onBeforeUpdate, onMounted, reactive, ref, watch} from "vue";
import FilterBar from "./filterBar/FilterBar.vue";
import ArticleItem from "./ArticleItem.vue";
import Pagination from "./filterBar/Pagination.vue";
import {useBlogStore} from "@/stores/blogStore";
import {useRoute} from "vue-router";
import router from "@/router";

const store = useBlogStore()
const route = useRoute()
defineProps({
    "edit":{type:Boolean,default:false}
})


let articleList = ref<Page<Article>|null>(null)
onMounted(()=> {
    store.getArticles(route.query as Filter).then( data => articleList.value=data )
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

