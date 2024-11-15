<script setup lang="ts">

defineProps<{
    object: any
}>()


</script>

<template>
    <div class="com-box">
        <!-- 显示内容 -->
        <div class="context" v-if="object">
            <slot></slot>
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
.com-box{
    >.context,>.loading{
        >p{
            text-align: center
        }
    }
}
</style>