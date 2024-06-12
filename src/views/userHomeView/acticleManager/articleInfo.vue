<template>
    <div class="com-article-info">
        <articleItem v-for="a in store.articles" :v-key="a.title" :article="a"></articleItem>
    </div>
</template>

<script setup>
import { defineProps } from "vue";
import articleItem from "@/components/articleItem.vue";
import { useArticleStore } from "@/store/article";

const props = defineProps['data']
const store = useArticleStore()

</script>

<style>

</style>