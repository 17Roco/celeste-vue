<script setup lang="ts">
const timeRange = defineModel()
</script>

<template>
    <el-date-picker
        style="max-width: 200px"
        v-model="timeRange"
        type="daterange"
        unlink-panels
        range-separator="到"
        start-placeholder="起始时间"
        end-placeholder="结束时间"
        size="default"
        :disabled-date="t => t > new Date()"
    />
</template>

<style scoped>

</style>