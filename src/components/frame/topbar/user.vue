<template>
    <div class="com-user" v-if="userStore.user.token">
        <el-button type="danger" round class="commit-but">
            <router-link :to="store.user.but.path">{{ store.user.but.title }}</router-link>
        </el-button>
        <el-dropdown trigger="hover">
            <el-avatar :size="50" :src="userStore.user.img"/>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item v-for="p in store.user.img" :key="p.path">
                        <router-link :to="p.path">{{ p.title }}</router-link>
                    </el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
    <div v-else>
        <el-button type="success" round @click="userStore.loginView = true">请登录</el-button>
    </div>
</template>

<script setup>
import {ref} from "vue";
import {usePathStore} from "@/store/path";
import {useUserStore} from "@/store/user";

const store = usePathStore()
const userStore = useUserStore()




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