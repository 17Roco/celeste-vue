<script setup lang="ts">

import ArticleShow from "@/components/articleShow/ArticleShow.vue";
defineProps<{
    aid:string
}>()

</script>

<template>
    <ArticleShow :aid="parseInt(aid)"/>
</template>

<style scoped>

</style>