<template>
    <div class="view-test">
<!--        <h1 v-for="i in 30">404 {{ i }}</h1>-->
        <p>{{ f.index }}</p>
        <el-button @click="console.log(createArticleFilter(f))">createArticleFilter</el-button>
    </div>
</template>

<script setup>
import {reactive} from "vue";
import {createArticleFilter} from '@/api/articleApi'

let f = reactive({
    index:1,
    // timeRange:undefined
})

</script>

<style>
.view-test{
    padding: 100px;
    background: #7f7171;
}
</style>