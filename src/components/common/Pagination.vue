<script setup lang="ts">

defineProps<{
    list:Page<any>
}>()
const index = defineModel()

</script>

<template>
    <el-pagination
        background layout="prev, pager, next"
        v-show="list.pages > 1"
        :total="list.total"
        :page-count="list.pages"
        v-model:current-page="index"
    />
</template>

<style>
</style>