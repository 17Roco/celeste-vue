<script setup lang="ts">

defineProps<{
    list:Page<any>,
    children?:boolean
}>()
defineEmits<{
    (event:'change',index:number):void
}>()

</script>

<template>
    <el-pagination
        layout="prev, pager, next"
        v-show="list.pages > 1"
        :page-count="list.pages"
        :current-page="list.current"
        :background="!children"
        @current-change="$emit('change',$event as number)"
    />
</template>

<style>
</style>