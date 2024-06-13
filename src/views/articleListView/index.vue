<template>
    <div class="view-article-list">
        <ArticleList v-bind="props"/>
    </div>
</template>

<script setup>
import {useArticleStore} from "@/store/article";
import ArticleList from "@/components/articleList"

const props = defineProps(['tag','order','beginTime','endTime','index'])

const store = useArticleStore();

</script>

<style>

</style>