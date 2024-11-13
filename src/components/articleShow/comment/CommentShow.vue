<script setup lang="ts">

import CommentItem from "@/components/articleShow/comment/CommentItem.vue";
import Pagination from "@/components/common/Pagination.vue";

defineEmits<{
    (event:'change',index:number):void
}>()
defineProps<{
    list:Page<Comment>,
    children?:boolean
}>()

</script>

<template>
    <!-- 评论列表 -->
    <div class="com-comment-show">
        <!-- 标题 -->
        <div class="header">
            <p v-if="list.total === 0">暂无评论</p>
            <p v-else-if="!children">评论</p>
        </div>
        <!-- 评论列表 -->
        <div class="content">
            <comment-item v-for="item in list.records" :key="item.cid" :comment="item" :children="children"/>
        </div>
        <Pagination :list="list" :children="children" @change="$emit('change',$event)"/>
    </div>
</template>

<style scoped>

</style>