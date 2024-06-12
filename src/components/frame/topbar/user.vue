<template>
    <div class="com-user">
        <el-button type="danger" round class="commit-but">
            <router-link to="/article/editor/1">发表</router-link>
        </el-button>
        <el-dropdown trigger="hover">
            <el-avatar :size="50" :src="img"/>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>
                        <router-link to="/user/home/1">主页</router-link>
                    </el-dropdown-item>
                    <el-dropdown-item>我的博客</el-dropdown-item>
                    <el-dropdown-item>账号设置</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script setup>
import {ref} from "vue";

const dropdown = ref();
let img = ref("https://pinia.vuejs.org/logo.svg");


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