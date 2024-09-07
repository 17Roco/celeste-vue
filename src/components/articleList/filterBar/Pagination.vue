<script setup lang="ts">


defineProps(["articleList"])
const index = defineModel()

</script>

<template>
    <el-pagination
        background layout="prev, pager, next"
        @change="toTop"
        v-show="articleList.pages > 1"
        :total="articleList.total"
        :page-count="articleList.pages"
        v-model:current-page="index"
    />
</template>

<style scoped>

</style>