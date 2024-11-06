<script setup lang="ts">

defineProps<{ list:Page<any> }>()
defineEmits<{ change: (index:number)=>void }>()

</script>

<template>
    <el-pagination
        background layout="prev, pager, next"
        v-show="list.pages > 1"
        :page-count="list.pages"
        :current-page="list.current"
        @current-change="$emit('change',$event as number)"
    />
</template>

<style>
</style>