<template>
    <div class="com-tag-show">
        <el-tag v-for="tag in tags" :key="tag" round type="primary" effect="dark" class="tag">
            {{ tag }}
        </el-tag>
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
        margin: 0 10px;
    }
}
</style>