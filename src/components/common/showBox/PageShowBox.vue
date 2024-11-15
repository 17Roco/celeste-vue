<script setup lang="ts">

defineProps<{
    object: Page<any>|null
}>()


</script>

<template>
    <div class="com-show-box">
        <!-- 显示内容 -->
        <div class="context" v-if="object && object.records.length > 0">
            <slot></slot>
        </div>
        <!-- 无内容 -->
        <div class="empty" v-else-if="object && object.records.length === 0">
            <slot name="empty">
                <p>暂无内容</p>
            </slot>
        </div>
        <!-- 加载中 -->
        <div class="loading" v-else>
            <slot name="loading">
                <p>加载中...</p>
            </slot>
        </div>
    </div>
</template>

<style>
.com-show-box{
    >.context,>.loading{
        >p{
            text-align: center
        }
    }
}

</style>