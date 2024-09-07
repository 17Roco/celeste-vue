<template>
    <div class="com-user" v-if="store.user.isLogin">
        <el-button type="danger" round class="commit-but">
            <router-link :to="'/blog/edit'">发布文章</router-link>
        </el-button>
        <el-dropdown trigger="hover">
            <el-avatar :size="50" :src="(store.user.userInfo.img)||''" v-loading="!store.user.userInfo.img"/>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item v-for="p in store.menu.userOpe" :key="p.path">
                        <router-link :to="p.path">{{ p.title }}</router-link>
                    </el-dropdown-item>
                    <el-dropdown-item @click="logout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
    <div v-else>
        <el-button type="success" round @click="store.user.loginMode=true">请登录</el-button>
    </div>
</template>

<script setup>

import {useMainStore} from "@/stores/mainStore.ts";
import {ElMessage} from "element-plus";

const store = useMainStore()

const logout = ()=>{
    store.user.isLogin = false
    ElMessage({message:"退出登录"})
}
</script>

<style>
.com-user{
    display: flex;
    align-items: center;
    >.commit-but{
        margin-right: 20px;
    }
}
</style>