<template>
    <div class="com-user" v-if="store.user.token && store.user.token !== ''">
        <!--发布按钮-->
        <el-button type="danger" round class="commit-but">
            <router-link :to="'/blog/edit'">发布文章</router-link>
        </el-button>
        <!--用户菜单-->
        <el-dropdown trigger="hover">
            <!--用户头像-->
            <el-avatar :size="50" :src="userInfo ? (userInfo as UserInfo).img : ''" v-loading="!userInfo"/>
            <!--菜单列表-->
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
    <!--登录按钮-->
    <div v-else>
        <el-button type="success" round @click="store.user.loginMode=true">登录</el-button>
    </div>
</template>

<script setup lang="ts">
import {useMainStore} from "@/stores/mainStore.ts";
import {ref,watchEffect} from "vue";

const store = useMainStore()
let userInfo = ref<UserInfo|null>(null)

// 监听token获取用户信息
watchEffect(async()=> userInfo.value = (store.user.token && store.user.token !== '') ? await store.getSelfInfo() : null)

// 退出登录
const logout = ()=>{
    store.logout()
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