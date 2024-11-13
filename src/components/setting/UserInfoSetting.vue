<script setup lang="ts">

import {computed, onMounted, reactive, ref} from "vue";
import {useMainStore} from "@/stores/mainStore";
import {ElMessage, type UploadRequestOptions} from "element-plus";
import type {UploadRawFile} from "element-plus/lib/components";
import {Plus} from "@element-plus/icons-vue";
import {formatDate} from "@/util/TimeUtil";

const store = useMainStore()
let newInfo = ref<UserInfoForm|null>(null)
let oldInfo = ref<UserInfoForm|null>(null)
let loading = reactive<{
    img: boolean
    info: boolean
}>({img: false, info: false})

onMounted(async ()=> {
    let {username,img,sex,birthday,sign} = await store.getSelfInfo()
    newInfo.value = {username,img,sex,sign,birthday:formatDate(birthday)}
    oldInfo.value = {username,img,sex,sign,birthday:formatDate(birthday)}
})

let isChange = computed(()=>{
    if(!newInfo.value ||!oldInfo.value)
        return false
    if(newInfo.value.username!== oldInfo.value.username)
        return true
    else if(newInfo.value.sex!== oldInfo.value.sex)
        return true
    else if(newInfo.value.birthday!== oldInfo.value.birthday)
        return true
    else if(newInfo.value.sign!== oldInfo.value.sign)
        return true
    return false
})

// 验证文件格式和大小
const beforeUpload = (rawFile:UploadRawFile) => {
    if (rawFile.type !== 'image/jpeg' && rawFile.type !== 'image/png' && rawFile.type !== 'image/webp') {
        ElMessage.error('不支持该格式')
        return false
    } else if (rawFile.size / 1024 / 1024 > 2) {
        ElMessage.error('文件大小不能超过2M')
        return false
    }
    return true
}

// 更新头像
let updateAvatar = async (file:UploadRawFile)=> {
    // 验证文件格式和大小
    if (!beforeUpload(file))
        return
    // 上传头像
    loading.img = true
    let r = (await store.updateImg(file))
    loading.img = false
    // 更新头像
    if(r.b)
        newInfo.value.img = r.data
    ElMessage(r.b ? '更新成功' : '更新失败')
}

// 更新用户信息
let update = async()=> {
    let  b = await store.updateUserInfo({...(newInfo.value as UserInfoForm),birthday:formatDate(newInfo.value.birthday)})
    ElMessage(b ? '更新成功' : '更新失败')
}
</script>

<template>
    <div v-if="!newInfo">
        加载中...
    </div>
    <div v-else>
        <h1>用户信息</h1>
        <el-form :model="newInfo" label-width="auto" style="max-width: 400px;">
            <!--  头像上传 -->
            <el-form-item label="头像">
                <el-upload
                    :limit='1'
                    :before-upload="updateAvatar"
                    :http-request="()=>{}"
                    accept="image/jpeg,image/jpg,image/png,image/webp"
                    auto-upload :show-file-list="false"
                    :disabled="loading.img"
                >
                    <el-image style="width:100px;height: 100px" :src="newInfo.img" v-loading="loading.img"/>
                    <div style="display: flex;justify-content: end;height: 100%"><el-button circle><el-icon><Plus/></el-icon></el-button></div>
                </el-upload>
            </el-form-item>
            <!--用户名-->
            <el-form-item label="用户名">
                <el-input v-model="newInfo.username"/>
            </el-form-item>
            <!--性别-->
            <el-form-item label="性别">
                <el-radio-group v-model="newInfo.sex">
                    <el-radio :value="1">男</el-radio>
                    <el-radio :value="0">女</el-radio>
                </el-radio-group>
            </el-form-item>
            <!--生日-->
            <el-form-item label="生日">
                <el-date-picker v-model="newInfo.birthday" type="date" placeholder="选择日期" :disabled-date="(date: Date) => (date > new Date())">
                </el-date-picker>
            </el-form-item>
            <!--签名-->
            <el-form-item label="个性签名">
                <el-input v-model="newInfo.sign" type="textarea" :rows="4" resize="none"/>
            </el-form-item>
            <!--保存-->
            <el-form-item label="">
                <el-button type="primary" @click="update" :disabled="!isChange">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<style>

</style>