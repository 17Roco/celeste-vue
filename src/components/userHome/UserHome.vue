<script setup lang="ts">

import ArticleList from "@/components/articleList/ArticleList.vue";
import {useMainStore} from "@/stores/mainStore";
import {onMounted} from "vue";

const store = useMainStore()

onMounted(()=>{

})

</script>

<template>
    <h1>user Home</h1>
    <article-list :edit="true"/>
</template>

<style>

</style>