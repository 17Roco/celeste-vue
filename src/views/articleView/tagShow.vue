<template>
    <div class="com-tag-show">
        <el-tag v-for="t in tags" :key="t" round type="info" class="tag">{{ t }}</el-tag>
    </div>
</template>

<script setup>

const props = defineProps(['tags'])

</script>

<style>
.com-tag-show {
    >.tag{
        margin: 10px;
    }
}
</style>