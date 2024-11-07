<script setup lang="ts">

defineProps<{comment: Comment}>()
</script>

<template>
    <div class="com-comment-item">
        <span>{{comment.text}}</span>
    </div>
</template>

<style scoped>

</style>