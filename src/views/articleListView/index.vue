<template>
    <div class="view-article-list">
        <article-item v-for="a in store.articles" :v-key="a.title" :article="a"/>

    </div>
</template>

<script setup>
import {useArticleStore} from "@/store/article";
import ArticleItem from "@/components/articleItem.vue";

const store = useArticleStore();
</script>

<style>
.view-article-list{
    width: 900px;
}
</style>