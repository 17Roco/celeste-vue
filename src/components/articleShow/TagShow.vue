<template>
    <div class="com-tag-show">
        <el-tag v-for="tag in tags" :key="tag" round type="info" class="tag">{{ tag }}</el-tag>
    </div>
</template>

<script setup lang="ts">

defineProps<{
    tags:Array<string>
}>()
</script>

<style>
.com-tag-show {
    >.tag{
        margin: 10px;
    }
}
</style>