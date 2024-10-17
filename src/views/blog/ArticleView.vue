<script setup lang="ts">

import ArticleShow from "@/components/articleShow/ArticleShow.vue";
import {onMounted} from "vue";
import {onBeforeRouteUpdate} from "vue-router";
defineProps<{
    aid:number
}>()

</script>

<template>
    <ArticleShow :aid="aid"/>
</template>

<style scoped>

</style>