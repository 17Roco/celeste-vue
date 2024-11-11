<script setup lang="ts">

import CommentItem from "@/components/articleShow/comment/CommentItem.vue";

defineProps<{
    list:Page<Comment>,
    children?:boolean
}>()

</script>

<template>
    <div class="com-comment-show">
        <div class="header">
            <p v-if="list.total === 0">暂无评论</p>
            <p v-else-if="!children">评论</p>
        </div>
        <div class="content">
            <comment-item v-for="item in list.records" :key="item.cid" :comment="item" :children="children" />
        </div>
    </div>
</template>

<style scoped>

</style>