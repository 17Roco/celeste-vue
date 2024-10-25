<script setup lang="ts">

import {reactive, watch, watchEffect} from "vue";
import {useMainStore} from "@/stores/mainStore";

const store = useMainStore()
let change = reactive<UserInfo>({
    username:'',
    sex:-1,
    phone:'',
    email:''
})

watchEffect(()=> {
    if (store.userStatus.userInfo) change.sex = store.userStatus.userInfo.sex
})
let updateUserInfo = ()=> {}
</script>

<template>
    <div>
        <h1>用户信息</h1>
        <el-form :model="change" label-width="auto" style="max-width: 400px;" v-if="store.userStatus.userInfo">
            <el-form-item label="头像">
                <el-upload>
                    <el-image style="width:100px;height: 100px" :src="store.userStatus.userInfo.img"/>
                </el-upload>
                <el-upload>
                    <div style="display: flex;justify-content: end;height: 100%"><el-button circle>+</el-button></div>
                </el-upload>
            </el-form-item>
            <el-form-item label="用户名">
                <el-input v-model="change.username" :placeholder="(store.userStatus.userInfo as UserInfo).username"/>
            </el-form-item>
            <el-form-item label="性别">
                <el-radio-group v-model="change.sex">
                    <el-radio :value="1">男</el-radio>
                    <el-radio :value="0">女</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="手机号">
                <el-input v-model="change.phone" maxlength="11" :placeholder="(store.userStatus.userInfo as UserInfo).phone"/>
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input v-model="change.email" :placeholder="(store.userStatus.userInfo as UserInfo).email"/>
            </el-form-item>
        </el-form>
        <div v-else>加载中</div>
    </div>
</template>

<style>

</style>