<template>
    <div class="com-setting-group">
        <h2>用户信息</h2>
        <el-form label-width="120px">
            <el-form-item label="头像">
                <el-upload>
                    <el-avatar :src="store.user.img" size="large"/>
                </el-upload>
            </el-form-item>
            <el-form-item label="用户名">
                <el-input v-model="store.user.username"/>
            </el-form-item>
            <el-form-item label="性别">
                <el-radio-group v-model="store.user.sex">
                    <el-radio value='1' size="large">男</el-radio>
                    <el-radio value='0' size="large">女</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">修改</el-button>
                <el-button>重置</el-button>
            </el-form-item>

        </el-form>
    </div>
</template>

<script setup>

import {useUserStore} from "@/store/user";

const store = useUserStore();

</script>

<style>

</style>