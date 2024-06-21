<template>
    <div class="com-user" v-if="userStore.token && userStore.token!==''">
        <el-button type="danger" round class="commit-but">
            <router-link to="/blog/editor">发布文章</router-link>
        </el-button>
        <el-dropdown trigger="hover">
            <el-avatar :size="50" :src="(userStore.user && userStore.user.img) ? userStore.user.img :''" v-loading="!userStore.user || !userStore.user.img"/>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item v-for="p in store.user.img" :key="p.path">
                        <router-link :to="p.path">{{ p.title }}</router-link>
                    </el-dropdown-item>
                    <el-dropdown-item @click="userStore.logout()">退出</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
    <div v-else>
        <el-button type="success" round @click="userStore.loginView = true">请登录</el-button>
    </div>
</template>

<script setup>
import {usePathStore} from "@/store/path";
import {useUserStore} from "@/store/user";

const store = usePathStore()
const userStore = useUserStore()

// console.log((store.user && store.user.img) ? store.user.img :'')

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