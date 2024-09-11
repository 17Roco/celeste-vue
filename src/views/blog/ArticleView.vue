<script setup lang="ts">

import {onMounted, ref} from "vue";
import {useBlogStore} from "@/stores/blogStore";
import ArticleShow from "@/components/articleShow/ArticleShow.vue";

const store = useBlogStore()
let article = ref(null)
const props = defineProps({
    "aid":Number
})

onMounted(()=>{
    store.getArticle(props.aid).then((data)=>article.value=data)
})
</script>

<template>
    <ArticleShow :article="article"/>
</template>

<style scoped>

</style>