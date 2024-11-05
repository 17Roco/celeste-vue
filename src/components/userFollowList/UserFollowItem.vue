<script setup lang="ts">

defineProps<{user:UserInfo}>()


</script>

<template>
    <div class="com-user-follow-item">
        <el-avatar size="default" :src="user.img"></el-avatar>
        <div class="item-name">
            {{user.username}}
        </div>
    </div>
</template>

<style>
.com-user-follow-item {
    display: flex;
    align-items: center;

    border: 1px solid violet;
    padding: 10px;
    border-radius: 5px;

    .item-name {
        margin-left: 10px;
        font-size: 20px;
    }
}
</style>