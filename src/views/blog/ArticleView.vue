<script setup lang="ts">

import ArticleShow from "@/components/articleShow/ArticleShow.vue";

defineProps<{
    aid:number
}>()

</script>

<template>
    <ArticleShow :aid="aid"/>
</template>