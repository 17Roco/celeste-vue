<template>
    <div class="view-article-list">
        <filter-bar/>
        <article-item v-for="a in store.articles" :v-key="a.title" :article="a"/>
        <div class="page-bar">
            <el-pagination background layout="prev, pager, next" :total="1000" />
        </div>
    </div>
</template>

<script setup>
import {useArticleStore} from "@/store/article";
import FilterBar from "@/views/articleListView/filterBar.vue";
import ArticleItem from "@/views/articleListView/articleItem.vue";

const props = defineProps({"edit":Boolean})
const store = useArticleStore();
</script>

<style>
.view-article-list{
    /*width: 900px;*/
    >.page-bar{
        display: flex;
        justify-content: center;
    }
}
</style>