<script setup lang="ts">

import {reactive,  watchEffect} from "vue";
import {useMainStore} from "@/stores/mainStore";
import {ElMessage} from "element-plus";
import type {UploadRequestOptions} from "element-plus/lib/components";

const store = useMainStore()

let change = reactive<UserInfoForm>({
    username:'',
    sex:-1,
    birthday:'',
    sign:'',
})

watchEffect(()=> {
    if (store.userStatus.userInfo) change.sex = store.userStatus.userInfo.sex
})
let updateUserInfo = ()=> {}

const beforeUpload = (rawFile) => {
    console.log(change)
    if (rawFile.type !== 'image/jpeg') {
        ElMessage.error('Avatar picture must be JPG format!')
        return false
    } else if (rawFile.size / 1024 / 1024 > 2) {
        ElMessage.error('Avatar picture size can not exceed 2MB!')
        return false
    }
    return true
}
let updateAvatar = async (file:UploadRequestOptions)=> {
    console.log(file)
    console.log((await store.updateImg(file)));
}
</script>

<template>
    <div>
        <h1>用户信息</h1>
        <el-form :model="change" label-width="auto" style="max-width: 400px;" v-if="store.userStatus.userInfo" v-model="change">
            <!--  头像上传 -->
            <el-form-item label="头像">
                <el-upload
                    :limit='1'
                    :http-request="(a)=>{console.log(a)}"
                    :before-upload="updateAvatar"
                    auto-upload :show-file-list="false"
                    action="/api/user/img"
                    method="put"
                >
                    <el-image style="width:100px;height: 100px" :src="store.userStatus.userInfo.img"/>
                    <div style="display: flex;justify-content: end;height: 100%"><el-button circle>+</el-button></div>
                </el-upload>
            </el-form-item>
            <!--用户名-->
            <el-form-item label="用户名">
                <el-input v-model="change.username" :placeholder="(store.userStatus.userInfo as UserInfo).username"/>
            </el-form-item>
            <!--性别-->
            <el-form-item label="性别">
                <el-radio-group v-model="change.sex">
                    <el-radio :value="1">男</el-radio>
                    <el-radio :value="0">女</el-radio>
                </el-radio-group>
            </el-form-item>
            <!--生日-->
            <el-form-item label="生日">
                <el-date-picker v-model="change.birthday" type="date" placeholder="选择日期" :disabled-date="(date) => (date > new Date())">
                </el-date-picker>
            </el-form-item>
            <!--签名-->
            <el-form-item label="个性签名">
                <el-input v-model="change.sign" type="textarea" :rows="4" resize="none" :placeholder="(store.userStatus.userInfo as UserInfo).sign"/>
            </el-form-item>
        </el-form>
        <div v-else>加载中</div>
    </div>
</template>

<style>

</style>