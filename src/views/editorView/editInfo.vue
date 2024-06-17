<template>
    <div class="com-edit-info">
        <div class="info">
            <span>创建时间：{{ props.createTime }} 上次更新时间：{{ props.updateTime }}</span>
        </div>
        <div class="opt">
            <slot/>
        </div>
    </div>
</template>

<script setup>

const props = defineProps(['createTime','updateTime'])

</script>

<style>
.com-edit-info{
    display: flex;
    justify-content: space-between;
    margin-top: -20px;
    margin-bottom: 20px;
}
</style>