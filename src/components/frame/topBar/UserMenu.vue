<template>
    <!--已登录状态-->
    <div class="com-user" v-if="store.userStatus.token && store.userStatus.token !== ''">
        <!--发布按钮-->
        <el-button type="danger" round class="commit-but"><router-link :to="'/blog/edit'">发布文章</router-link></el-button>
        <!--用户菜单-->
        <el-dropdown trigger="hover">
            <!--用户头像-->
            <el-avatar :size="50" :src="store.userStatus.userInfo?.img ||''" v-loading="!store.userStatus.userInfo"/>
            <!--菜单列表-->
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item v-for="p in store.menu.userOpe" :key="p.path" @click="router.push(p.path)">
                        {{ p.title }}
                    </el-dropdown-item>
                    <el-dropdown-item @click="store.logout()">退出</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
    <!--登录按钮-->
    <div v-else>
        <el-button type="success" round @click="store.userStatus.loginMode=true">登录</el-button>
    </div>
</template>

<script setup lang="ts">
import {useMainStore} from "@/stores/mainStore.ts";
import {ref,watchEffect} from "vue";
import router from "@/router";

const store = useMainStore()


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