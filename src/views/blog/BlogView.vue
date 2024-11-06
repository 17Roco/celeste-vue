<script setup lang="ts">
import {computed, provide, reactive, watchEffect} from "vue";
import {SymbolArticleFilter} from "@/types/symbol";
import ArticleList from "@/components/articleList/ArticleList.vue"
import {useRoute} from "vue-router";

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

</script>

<template>
    <ArticleList :edit="false"/>
</template>