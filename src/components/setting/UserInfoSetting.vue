<script setup lang="ts">
import EmptyBox from "@/components/common/EmptyBox.vue";
import ImageUpload from "@/components/common/ImageUpload.vue";
import {computed, onMounted, ref} from "vue";
import {useMainStore} from "@/stores/mainStore";
import {ElMessage} from "element-plus";
import type {UploadRawFile} from "element-plus/lib/components";
import {formatDate} from "@/util/TimeUtil";

const store = useMainStore()
let newInfo = ref<UserInfoForm>()
let oldInfo = ref<UserInfoForm>()
let loading = ref<boolean>(false)
let imgUrl = ref<string>("")

onMounted(async ()=> {
    let {username,img,sex,birthday,sign} = await store.getSelfInfo()
    newInfo.value = {username,sex,sign,birthday:formatDate(birthday)}
    oldInfo.value = {username,sex,sign,birthday:formatDate(birthday)}
    imgUrl.value = img
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

// 更新头像
let updateAvatar = async (file:UploadRawFile)=> {
    let r = (await store.updateImg(file))
    // 更新头像
    if(r.b)
        imgUrl.value = r.data
    ElMessage(r.b ? '更新成功' : '更新失败')
}

// 更新用户信息
let update = async()=> {
    let form = {
        ...(newInfo.value as UserInfoForm),
        birthday:formatDate(newInfo.value?.birthday as string)
    }
    // 更新信息
    let  b = await store.updateUserInfo(form)
    b  && (oldInfo.value = form)
    ElMessage(b ? '更新成功' : '更新失败')
}
</script>

<template>
    <div v-if="newInfo">
        <h1>用户信息</h1>
        <el-form :model="newInfo" label-width="auto" style="max-width: 400px;">
            <!--  头像上传 -->
            <el-form-item label="头像">
                <ImageUpload @update="updateAvatar">
                    <el-image style="width:100px;height: 100px" :src="imgUrl" v-loading="loading"/>
                </ImageUpload>
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
    <EmptyBox v-else/>
</template>

<style>

</style>