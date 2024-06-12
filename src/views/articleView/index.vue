<template>
    <div class="view-article">
        <h1> {{ article.title }}</h1>
        <p class="info">作者：{{ article.user }} 2024-6-1</p>
        <span>{{ article.context }}</span>
    </div>
</template>

<script setup>
import {defineProps} from 'vue'
import {useArticleStore} from "@/store/article";

const props = defineProps(['id'])
const store = useArticleStore();
const article = store.getArticle(props.id)
</script>

<style>
.view-article {
    line-height: 1.5;
    text-indent: 2em;
    padding: 10px 30px 50px;
    width: 1000px;
    >.info{
        text-align: center;
        color: #b7b7bc;
    }
}
</style>