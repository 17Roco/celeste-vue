<script setup lang="ts">

defineProps<{
    object?: Page<any>
}>()

</script>

<template>
    <div class="com-empty-box">
        <slot name="empty" v-if="object && object.records.length === 0">
            <p class="empty">暂无数据</p>
        </slot>
        <slot name="loading" v-if="!object">
            <p class="loading">加载中...</p>
        </slot>
    </div>
</template>

<style lang="less">
.com-empty-box{
    .loading,.empty {
        text-align: center
    }
}
</style>