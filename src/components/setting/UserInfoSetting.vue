<script setup lang="ts">

import {computed, onMounted, reactive, ref, watchEffect} from "vue";
import {useMainStore} from "@/stores/mainStore";
import {ElMessage} from "element-plus";
import type {UploadRequestOptions} from "element-plus/lib/components";
import {Plus} from "@element-plus/icons-vue";

const store = useMainStore()
let userInfo = ref<UserInfo|null>(null)
let oldUserInfo:userInfo|null = null

onMounted(async ()=> {
    oldUserInfo = await store.getSelfInfo()
    userInfo.value = oldUserInfo
})

let change = computed(()=>({

}))



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
    let b = (await store.updateImg(file))
    ElMessage(`${b}`)
}

let update = async()=> {

}
</script>

<template>
    <div v-if="!userInfo">
        加载中...
    </div>
    <div v-else>
        <h1>用户信息</h1>
        <el-form :model="userInfo" label-width="auto" style="max-width: 400px;">
            <!--  头像上传 -->
            <el-form-item label="头像">
                <el-upload
                    :limit='1'
                    :http-request="(a)=>{console.log(a)}"
                    :before-upload="updateAvatar"
                    auto-upload :show-file-list="false"
                >
                    <el-image style="width:100px;height: 100px" :src="userInfo.img"/>
                    <div style="display: flex;justify-content: end;height: 100%"><el-button circle><el-icon><Plus/></el-icon></el-button></div>
                </el-upload>
            </el-form-item>
            <!--用户名-->
            <el-form-item label="用户名">
                <el-input v-model="userInfo.username"/>
            </el-form-item>
            <!--性别-->
            <el-form-item label="性别">
                <el-radio-group v-model="userInfo.sex">
                    <el-radio :value="1">男</el-radio>
                    <el-radio :value="0">女</el-radio>
                </el-radio-group>
            </el-form-item>
            <!--生日-->
            <el-form-item label="生日">
                <el-date-picker v-model="userInfo.birthday" type="date" placeholder="选择日期" :disabled-date="(date) => (date > new Date())">
                </el-date-picker>
            </el-form-item>
            <!--签名-->
            <el-form-item label="个性签名">
                <el-input v-model="userInfo.sign" type="textarea" :rows="4" resize="none"/>
            </el-form-item>
            <!--保存-->
            <el-form-item label="">
                <el-button type="primary" @click="update">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<style>

</style>