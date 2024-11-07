<script setup lang="ts">

import CommentItem from "@/components/articleShow/comment/CommentItem.vue";

defineProps<{list:Page<Comment>}>()

</script>

<template>
    <div class="com-comment-show">
        <div class="header">
            <p>评论</p>
        </div>
        <div class="content">
            <comment-item v-for="item in list.records" :key="item.cid" :comment="item"/>
        </div>
    </div>
</template>

<style scoped>

</style>