<script setup lang="ts">

import {useMainStore} from "@/stores/mainStore";

const store = useMainStore();
defineProps<{btnClass?:string,loginBtn?:boolean}>()
</script>

<template>
    <template v-if="store.self">
        <slot/>
    </template>
    <template v-else>
        <div :class="btnClass" v-if="loginBtn">
            <el-button type="primary" round @click="store.userStatus.loginMode = true">请先登录</el-button>
        </div>
    </template>
</template>

<style>
</style>